import clsx from "clsx";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { DayEntry } from "../data/dataTypes";
import { useDatasetVersion, PERIOD_FLOW } from "../data/store";
import {
  badgeContainer,
  badgeItem,
  sectionContainer,
  sectionItem,
} from "./animations";
import { SectionHeading, FactorPill } from "./pills";
import {
  FactorEditor,
  type EditScope,
  type FactorTarget,
} from "./FactorEditor";

export const DaySections = ({
  day,
  date,
}: {
  day: DayEntry;
  date: string;
}) => {
  useDatasetVersion();
  const [target, setTarget] = useState<FactorTarget | null>(null);
  const scope: EditScope = { kind: "day", date };

  return (
    <motion.div variants={sectionContainer} initial="hidden" animate="visible">
      <motion.div
        variants={sectionItem}
        className="py-2 border-pink-200 border-b border-dotted"
      >
        <SectionHeading
          label="Pain"
          onEdit={() => setTarget({ cat: "Pain" })}
        />
        <motion.div
          className="flex gap-x-1 overflow-x-auto overflow-y-hidden"
          variants={badgeContainer}
        >
          {day.data.pain.map(([loc, sev]) => (
            <FactorPill
              key={loc}
              onClick={() =>
                setTarget({
                  cat: "Pain",
                  factorKey: loc,
                  factorLabel: loc,
                  currentValue: sev,
                })
              }
            >
              <div className="badge badge-sm join-item">{loc}</div>
              <div
                className={`whitespace-nowrap join-item badge badge-sm rating-${sev}`}
              >
                {sev}
              </div>
            </FactorPill>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={sectionItem}
        className="py-2 border-pink-200 border-b border-dotted"
      >
        <SectionHeading
          label="Mood"
          onEdit={() => setTarget({ cat: "Mood" })}
        />
        <motion.div
          className="flex gap-x-1 overflow-x-auto"
          variants={badgeContainer}
        >
          {day.data.mood.map(([name, pol]) => (
            <motion.button
              key={name}
              type="button"
              variants={badgeItem}
              onClick={() =>
                setTarget({
                  cat: "Mood",
                  factorKey: name,
                  factorLabel: name,
                  currentValue: pol,
                })
              }
              className={clsx(
                "whitespace-nowrap badge badge-sm cursor-pointer",
                pol === "POSITIVE" && "bg-pink-100",
              )}
            >
              {name}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={sectionItem}
        className="py-2 border-pink-200 border-b border-dotted"
      >
        <SectionHeading
          label="Period/Bleeding"
          onEdit={() => setTarget({ cat: "Period" })}
        />
        {day.data.period && (
          <motion.div className="flex flex-wrap gap-1" variants={badgeContainer}>
            <FactorPill
              onClick={() =>
                setTarget({
                  cat: "Period",
                  factorKey: PERIOD_FLOW,
                  factorLabel: "Flow",
                  currentValue: day.data.period!.flow,
                })
              }
            >
              <div className="whitespace-nowrap join-item badge badge-sm">
                Flow
              </div>
              <div
                className={`badge badge-sm join-item rating-${day.data.period.flow}`}
              >
                {day.data.period.flow}
              </div>
            </FactorPill>
            {day.data.period.other.map((o) => (
              <motion.button
                key={o}
                type="button"
                variants={badgeItem}
                onClick={() =>
                  setTarget({
                    cat: "Period",
                    factorKey: o,
                    factorLabel: o,
                  })
                }
                className="badge badge-sm cursor-pointer"
              >
                {o}
              </motion.button>
            ))}
          </motion.div>
        )}
      </motion.div>

      <motion.div
        variants={sectionItem}
        className="py-2 border-pink-200 border-b border-dotted"
      >
        <SectionHeading
          label="GI/Urinary"
          onEdit={() => setTarget({ cat: "GI" })}
        />
        <motion.div className="flex flex-wrap gap-1" variants={badgeContainer}>
          {day.data.gi.map(([name, sev]) => (
            <FactorPill
              key={name}
              onClick={() =>
                setTarget({
                  cat: "GI",
                  factorKey: name,
                  factorLabel: name,
                  currentValue: sev,
                })
              }
            >
              <div className="whitespace-nowrap join-item badge badge-sm">
                {name}
              </div>
              <div className={`join-item badge badge-sm rating-${sev}`}>
                {sev}
              </div>
            </FactorPill>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={sectionItem}
        className="py-2 border-pink-200 border-b border-dotted"
      >
        <SectionHeading
          label="Hard to Do"
          onEdit={() => setTarget({ cat: "HardToDo" })}
        />
        <motion.div className="flex flex-wrap gap-1" variants={badgeContainer}>
          {day.data.hardToDo.map((item) => (
            <motion.button
              key={item}
              type="button"
              variants={badgeItem}
              onClick={() =>
                setTarget({
                  cat: "HardToDo",
                  factorKey: item,
                  factorLabel: item,
                })
              }
              className="whitespace-nowrap badge badge-sm cursor-pointer"
            >
              {item}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      <motion.div variants={sectionItem} className="py-2">
        <SectionHeading
          label="Other"
          onEdit={() => setTarget({ cat: "Other" })}
        />
        <motion.div className="flex flex-wrap gap-1" variants={badgeContainer}>
          {day.data.other.map(([name, sev]) => (
            <FactorPill
              key={name}
              onClick={() =>
                setTarget({
                  cat: "Other",
                  factorKey: name,
                  factorLabel: name,
                  currentValue: sev,
                })
              }
            >
              <div className="whitespace-nowrap join-item badge badge-sm">
                {name}
              </div>
              <div className={`join-item badge badge-sm rating-${sev}`}>
                {sev}
              </div>
            </FactorPill>
          ))}
          {day.data.medications.map((med) => (
            <motion.button
              key={med}
              type="button"
              variants={badgeItem}
              onClick={() =>
                setTarget({
                  cat: "Medications",
                  factorKey: med,
                  factorLabel: med,
                })
              }
              className="badge badge-sm cursor-pointer"
            >
              {med}
            </motion.button>
          ))}
          <motion.button
            type="button"
            variants={badgeItem}
            onClick={() => setTarget({ cat: "Medications" })}
            className="badge badge-sm badge-outline cursor-pointer"
          >
            + Med
          </motion.button>
        </motion.div>
      </motion.div>

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
};

export default DaySections;
