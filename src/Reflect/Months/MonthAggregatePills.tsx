import type { ReactNode } from "react";
import dayjs from "dayjs";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import data, {
  useDatasetVersion,
  PERIOD_FLOW,
  type EditCategory,
} from "../../data/store";
import { sectionContainer, sectionItem } from "../animations";
import { rankCls } from "../ranking";
import { aggregateDays, byFreq } from "../aggregate";
import {
  FactorEditor,
  type EditScope,
  type FactorTarget,
} from "../FactorEditor";
import { Heading, CountPill } from "./AggregatePill";
import { loggedDatesInMonth } from "./monthData";

const SECTION = "py-2 border-pink-200 border-b border-dotted";

const OVERALL_CLS: Record<string, string> = {
  BAD: "bg-yellow-100 text-yellow-700 border-yellow-200",
  MANAGEABLE: "bg-red-100 text-red-500 border-red-200",
  GOOD: "bg-green-100 text-green-700 border-green-200",
};

const Section = ({
  label,
  onAdd,
  bordered = true,
  children,
}: {
  label: string;
  onAdd?: () => void;
  bordered?: boolean;
  children: ReactNode;
}) => (
  <motion.div variants={sectionItem} className={bordered ? SECTION : "py-2"}>
    <Heading label={label} onAdd={onAdd} />
    <div className="flex flex-wrap gap-1">{children}</div>
  </motion.div>
);

/** Sorted keys → ranked, editable CountPills. */
function rankedPills(
  keys: string[],
  countOf: (k: string) => number,
  cat: EditCategory,
  setTarget: (t: FactorTarget) => void,
  sevOf?: (k: string) => string | undefined,
) {
  return keys.map((k, i) => (
    <CountPill
      key={k}
      label={k}
      cls={rankCls(i, keys.length, countOf(k))}
      n={countOf(k)}
      onClick={() =>
        setTarget({
          cat,
          factorKey: k,
          factorLabel: k,
          currentValue: sevOf?.(k),
        })
      }
    />
  ));
}

export function MonthAggregatePills({ month }: { month: string }) {
  useDatasetVersion();
  const [target, setTarget] = useState<FactorTarget | null>(null);
  const dateKeys = loggedDatesInMonth(month);
  const days = dateKeys.map((k) => data.days[k]!);
  const scope: EditScope = {
    kind: "range",
    dates: dateKeys,
    rangeLabel: dayjs(`${month}-01`).format("MMMM ’YY"),
  };

  if (days.length === 0) return null;

  const a = aggregateDays(days);

  const sortedKeys = (
    map: Record<string, string>,
    count: Record<string, number>,
  ) =>
    Object.entries(map)
      .sort(byFreq(count))
      .map(([k]) => k);
  const byCountDesc = (count: Record<string, number>) =>
    Object.entries(count)
      .sort(([, x], [, y]) => y - x)
      .map(([k]) => k);

  // Other + medications share one combined frequency ranking.
  const otherKeys = sortedKeys(a.otherMap, a.otherCount);
  const medKeys = byCountDesc(a.medCount);
  const combined = [...otherKeys, ...medKeys];

  return (
    <motion.div
      className="mt-4"
      variants={sectionContainer}
      initial="hidden"
      animate="visible"
    >
      <Section label="Overall">
        {(["BAD", "MANAGEABLE", "GOOD"] as const)
          .filter((o) => a.overallCounts[o])
          .map((o) => (
            <CountPill
              key={o}
              label={o.charAt(0) + o.slice(1).toLowerCase()}
              cls={OVERALL_CLS[o] ?? ""}
              n={a.overallCounts[o]}
            />
          ))}
      </Section>

      {Object.keys(a.painMap).length > 0 && (
        <Section label="Pain" onAdd={() => setTarget({ cat: "Pain" })}>
          {rankedPills(
            sortedKeys(a.painMap, a.painCount),
            (k) => a.painCount[k],
            "Pain",
            setTarget,
            (k) => a.painMap[k],
          )}
        </Section>
      )}

      {Object.keys(a.moodMap).length > 0 && (
        <Section label="Mood" onAdd={() => setTarget({ cat: "Mood" })}>
          {rankedPills(
            sortedKeys(a.moodMap, a.moodCount),
            (k) => a.moodCount[k],
            "Mood",
            setTarget,
            (k) => a.moodMap[k],
          )}
        </Section>
      )}

      {(a.periodFlowMap.flow || a.periodOther.size > 0) && (
        <Section
          label="Period/Bleeding"
          onAdd={() => setTarget({ cat: "Period" })}
        >
          {a.periodFlowMap.flow && (
            <CountPill
              label={`${a.periodFlowMap.flow} flow`}
              cls={`rating-${a.periodFlowMap.flow}`}
              n={a.periodFlowCount}
              onClick={() =>
                setTarget({
                  cat: "Period",
                  factorKey: PERIOD_FLOW,
                  factorLabel: "Flow",
                  currentValue: a.periodFlowMap.flow,
                })
              }
            />
          )}
          {rankedPills(
            byCountDesc(a.periodOtherCount),
            (k) => a.periodOtherCount[k],
            "Period",
            setTarget,
          )}
        </Section>
      )}

      {Object.keys(a.giMap).length > 0 && (
        <Section label="GI/Urinary" onAdd={() => setTarget({ cat: "GI" })}>
          {rankedPills(
            sortedKeys(a.giMap, a.giCount),
            (k) => a.giCount[k],
            "GI",
            setTarget,
            (k) => a.giMap[k],
          )}
        </Section>
      )}

      {Object.keys(a.hardToDoCount).length > 0 && (
        <Section
          label="Hard to Do"
          onAdd={() => setTarget({ cat: "HardToDo" })}
        >
          {rankedPills(
            byCountDesc(a.hardToDoCount),
            (k) => a.hardToDoCount[k],
            "HardToDo",
            setTarget,
          )}
        </Section>
      )}

      {(Object.keys(a.otherMap).length > 0 ||
        Object.keys(a.medCount).length > 0) && (
        <Section
          label="Other"
          onAdd={() => setTarget({ cat: "Other" })}
          bordered={false}
        >
          {otherKeys.map((name) => (
            <CountPill
              key={name}
              label={name}
              cls={rankCls(
                combined.indexOf(name),
                combined.length,
                a.otherCount[name],
              )}
              n={a.otherCount[name]}
              onClick={() =>
                setTarget({
                  cat: "Other",
                  factorKey: name,
                  factorLabel: name,
                  currentValue: a.otherMap[name],
                })
              }
            />
          ))}
          {medKeys.map((med) => (
            <CountPill
              key={med}
              label={med}
              cls={rankCls(
                combined.indexOf(med),
                combined.length,
                a.medCount[med],
              )}
              n={a.medCount[med]}
              onClick={() =>
                setTarget({
                  cat: "Medications",
                  factorKey: med,
                  factorLabel: med,
                })
              }
            />
          ))}
          <button
            type="button"
            className="badge badge-sm badge-outline cursor-pointer"
            onClick={() => setTarget({ cat: "Medications" })}
          >
            + Med
          </button>
        </Section>
      )}

      <AnimatePresence>
        {target && (
          <FactorEditor
            cat={target.cat}
            scope={scope}
            factorKey={target.factorKey}
            factorLabel={target.factorLabel}
            currentValue={target.currentValue}
            onClose={() => setTarget(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
