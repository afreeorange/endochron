import dayjs from "dayjs";
import Shell from "../Shell";
import { useParams, useNavigate } from "react-router";
import { useState, useMemo, useRef, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";
import { PiPencilDuotone } from "react-icons/pi";
import data from "../data/syntheticData";
import {
  Nav,
  YearlySelector,
  TranscriptBlock,
  sectionContainer,
  sectionItem,
  DayPills,
  CategoryLegend,
} from "./Common";
import type { YearlyCategory } from "./Common";

const allDayKeys = Object.keys(data.days);
const DOW = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

const SEV_RANK: Record<string, number> = {
  Mild: 1,
  Light: 1,
  Moderate: 2,
  Medium: 2,
  Severe: 3,
  Heavy: 3,
};

// ── DayPills ─────────────────────────────────────────────────────────────────

// ── MonthAggregatePills ───────────────────────────────────────────────────────

function MonthAggregatePills({ month }: { month: string }) {
  const days = allDayKeys
    .filter((k) => k.startsWith(month) && data.days[k])
    .map((k) => data.days[k]!);

  if (days.length === 0) return null;

  const painMap: Record<string, string> = {};
  const painCount: Record<string, number> = {};
  const moodMap: Record<string, string> = {};
  const moodCount: Record<string, number> = {};
  const giMap: Record<string, string> = {};
  const giCount: Record<string, number> = {};
  const otherMap: Record<string, string> = {};
  const otherCount: Record<string, number> = {};
  const hardToDoCount: Record<string, number> = {};
  const medCount: Record<string, number> = {};
  const periodFlowMap: Record<string, string> = {};
  let periodFlowCount = 0;
  const periodOther = new Set<string>();
  const periodOtherCount: Record<string, number> = {};
  const overallCounts: Record<string, number> = {};

  const tally = (map: Record<string, number>, key: string) =>
    (map[key] = (map[key] ?? 0) + 1);
  const byFreq =
    (counts: Record<string, number>) =>
    <T extends [string, ...unknown[]]>(a: T, b: T) =>
      (counts[b[0]] ?? 0) - (counts[a[0]] ?? 0);
  const rankCls = (i: number, total: number, n: number) => {
    if (n === 1) return "rating-Mild";
    if (total <= 1) return "rating-Severe";
    const t = i / (total - 1);
    if (t < 0.34) return "rating-Severe";
    if (t < 0.67) return "rating-Moderate";
    return "rating-Mild";
  };
  const worstSev = (map: Record<string, string>, key: string, sev: string) => {
    if (!map[key] || (SEV_RANK[sev] ?? 0) > (SEV_RANK[map[key]] ?? 0))
      map[key] = sev;
  };

  for (const d of days) {
    tally(overallCounts, d.overall);
    d.data.pain.forEach(([loc, sev]) => {
      worstSev(painMap, loc, sev);
      tally(painCount, loc);
    });
    d.data.mood.forEach(([name, pol]) => {
      if (!moodMap[name] || pol === "NEGATIVE") moodMap[name] = pol;
      tally(moodCount, name);
    });
    d.data.gi.forEach(([name, sev]) => {
      worstSev(giMap, name, sev);
      tally(giCount, name);
    });
    d.data.other.forEach(([name, sev]) => {
      worstSev(otherMap, name, sev);
      tally(otherCount, name);
    });
    d.data.hardToDo.forEach((item) => tally(hardToDoCount, item));
    d.data.medications.forEach((med) => tally(medCount, med));
    if (d.data.period) {
      worstSev(periodFlowMap, "flow", d.data.period.flow);
      periodFlowCount++;
      d.data.period.other.forEach((o) => {
        periodOther.add(o);
        tally(periodOtherCount, o);
      });
    }
  }

  const p = "badge badge-sm join-item";
  const cnt = "badge badge-sm join-item opacity-50";
  const overallCls: Record<string, string> = {
    BAD: "bg-yellow-100 text-yellow-700 border-yellow-200",
    MANAGEABLE: "bg-red-100 text-red-500 border-red-200",
    GOOD: "bg-green-100 text-green-700 border-green-200",
  };

  const section = "py-2 border-pink-200 border-b border-dotted";
  const Heading = ({ label }: { label: string }) => (
    <div className="flex items-center mb-1">
      <span className="font-semibold text-pink-500 text-xs grow">{label}</span>
      <PiPencilDuotone className="opacity-50 text-xl" />
    </div>
  );

  const CountPill = ({
    label,
    cls,
    n,
  }: {
    label: string;
    cls: string;
    n: number;
  }) => (
    <div className="join">
      <span className={clsx(p, cls)}>{label}</span>
      <span className={clsx(cnt, cls)}>{n}</span>
    </div>
  );

  return (
    <motion.div
      className="mt-4"
      variants={sectionContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Overall */}
      <motion.div variants={sectionItem} className={section}>
        <Heading label="Overall" />
        <div className="flex flex-wrap gap-1">
          {(["BAD", "MANAGEABLE", "GOOD"] as const)
            .filter((o) => overallCounts[o])
            .map((o) => (
              <CountPill
                key={o}
                label={o.charAt(0) + o.slice(1).toLowerCase()}
                cls={overallCls[o] ?? ""}
                n={overallCounts[o]}
              />
            ))}
        </div>
      </motion.div>

      {/* Pain */}
      {Object.keys(painMap).length > 0 && (
        <motion.div variants={sectionItem} className={section}>
          <Heading label="Pain" />
          <div className="flex flex-wrap gap-1">
            {Object.entries(painMap)
              .sort(byFreq(painCount))
              .map(([loc], i, arr) => (
                <CountPill
                  key={loc}
                  label={loc}
                  cls={rankCls(i, arr.length, painCount[loc])}
                  n={painCount[loc]}
                />
              ))}
          </div>
        </motion.div>
      )}

      {/* Mood */}
      {Object.keys(moodMap).length > 0 && (
        <motion.div variants={sectionItem} className={section}>
          <Heading label="Mood" />
          <div className="flex flex-wrap gap-1">
            {Object.entries(moodMap)
              .sort(byFreq(moodCount))
              .map(([name], i, arr) => (
                <CountPill
                  key={name}
                  label={name}
                  cls={rankCls(i, arr.length, moodCount[name])}
                  n={moodCount[name]}
                />
              ))}
          </div>
        </motion.div>
      )}

      {/* Period/Bleeding */}
      {(periodFlowMap.flow || periodOther.size > 0) && (
        <motion.div variants={sectionItem} className={section}>
          <Heading label="Period/Bleeding" />
          <div className="flex flex-wrap gap-1">
            {periodFlowMap.flow && (
              <CountPill
                label={`${periodFlowMap.flow} flow`}
                cls={`rating-${periodFlowMap.flow}`}
                n={periodFlowCount}
              />
            )}
            {[...periodOther]
              .sort(
                (a, b) =>
                  (periodOtherCount[b] ?? 0) - (periodOtherCount[a] ?? 0),
              )
              .map((o, i, arr) => (
                <CountPill
                  key={o}
                  label={o}
                  cls={rankCls(i, arr.length, periodOtherCount[o])}
                  n={periodOtherCount[o]}
                />
              ))}
          </div>
        </motion.div>
      )}

      {/* GI/Urinary */}
      {Object.keys(giMap).length > 0 && (
        <motion.div variants={sectionItem} className={section}>
          <Heading label="GI/Urinary" />
          <div className="flex flex-wrap gap-1">
            {Object.entries(giMap)
              .sort(byFreq(giCount))
              .map(([name], i, arr) => (
                <CountPill
                  key={name}
                  label={name}
                  cls={rankCls(i, arr.length, giCount[name])}
                  n={giCount[name]}
                />
              ))}
          </div>
        </motion.div>
      )}

      {/* Hard to Do */}
      {Object.keys(hardToDoCount).length > 0 && (
        <motion.div variants={sectionItem} className={section}>
          <Heading label="Hard to Do" />
          <div className="flex flex-wrap gap-1">
            {Object.entries(hardToDoCount)
              .sort(([, a], [, b]) => b - a)
              .map(([item, n], i, arr) => (
                <CountPill
                  key={item}
                  label={item}
                  cls={rankCls(i, arr.length, n)}
                  n={n}
                />
              ))}
          </div>
        </motion.div>
      )}

      {/* Other */}
      {(Object.keys(otherMap).length > 0 ||
        Object.keys(medCount).length > 0) && (
        <motion.div variants={sectionItem} className="py-2">
          <Heading label="Other" />
          <div className="flex flex-wrap gap-1">
            {(() => {
              const otherEntries = Object.entries(otherMap).sort(
                byFreq(otherCount),
              );
              const medEntries = Object.entries(medCount).sort(
                ([, a], [, b]) => b - a,
              );
              const combined = [
                ...otherEntries.map(([n]) => n),
                ...medEntries.map(([n]) => n),
              ];
              return (
                <>
                  {otherEntries.map(([name]) => (
                    <CountPill
                      key={name}
                      label={name}
                      cls={rankCls(
                        combined.indexOf(name),
                        combined.length,
                        otherCount[name],
                      )}
                      n={otherCount[name]}
                    />
                  ))}
                  {medEntries.map(([med, n]) => (
                    <CountPill
                      key={med}
                      label={med}
                      cls={rankCls(combined.indexOf(med), combined.length, n)}
                      n={n}
                    />
                  ))}
                </>
              );
            })()}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

// ── MonthGrid ─────────────────────────────────────────────────────────────────

function MonthGrid({
  month,
  category,
  onWeekClick,
}: {
  month: string;
  category: YearlyCategory;
  onWeekClick: (weekStart: string) => void;
}) {
  const start = dayjs(`${month}-01`);
  const cells: (string | null)[] = [
    ...Array<null>((start.day() + 1) % 7).fill(null),
    ...Array.from({ length: start.daysInMonth() }, (_, i) =>
      start.add(i, "day").format("YYYY-MM-DD"),
    ),
  ];

  // Pad to multiple of 7
  while (cells.length % 7 !== 0) cells.push(null);

  const weeks: (string | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  return (
    <div>
      <div className="grid grid-cols-7 mr-2 mb-1">
        {DOW.map((d) => (
          <div
            key={d}
            className="py-1 font-light text-pink-300 text-xs text-right"
          >
            {d}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-0.5">
        {weeks.map((week, wi) => {
          const weekStart = week.find((d) => d !== null) ?? "";
          const weekHasData = week.some((d) => d && data.days[d]);
          return (
            <div
              key={`week-${wi}`}
              className={clsx(
                "gap-0.5 grid grid-cols-7 p-0.5 rounded-md transition-colors",
                weekHasData
                  ? "border border-pink-200/60 hover:border-pink-300/80 hover:bg-pink-100 cursor-pointer"
                  : "border border-transparent",
              )}
              onClick={() => weekHasData && weekStart && onWeekClick(weekStart)}
            >
              {week.map((dateKey, di) => {
                if (!dateKey) return <div key={`pad-${wi}-${di}`} />;

                const day = data.days[dateKey];
                const hasData = !!day;

                return (
                  <div
                    key={dateKey}
                    className={clsx(
                      "p-1 border rounded-md cursor-pointer",
                      hasData
                        ? "border-pink-100/0"
                        : "border-pink-100/20 opacity-40",
                    )}
                  >
                    <div className="mb-0.5 font-semibold text-pink-600/70 text-sm text-right leading-none">
                      {dayjs(dateKey).format("D")}
                    </div>
                    {day && <DayPills day={day} category={category} />}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Monthly ───────────────────────────────────────────────────────────────────

export const Monthly = () => {
  const { yearMonth } = useParams<{ yearMonth: string }>();
  const navigate = useNavigate();
  const [category, setCategory] = useState<YearlyCategory>(
    () =>
      (localStorage.getItem("reflect_category") as YearlyCategory) ?? "Overall",
  );
  useEffect(() => {
    localStorage.setItem("reflect_category", category);
  }, [category]);

  const defaultMonth =
    yearMonth ??
    allDayKeys
      .filter((k) => data.days[k])
      .sort()
      .reverse()[0]
      ?.slice(0, 7) ??
    "";

  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);
  const selectedTileRef = useRef<HTMLDivElement>(null);
  const monthScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tile = selectedTileRef.current;
    const container = monthScrollRef.current;
    if (!tile || !container) return;
    const target =
      tile.offsetLeft - container.offsetWidth / 2 + tile.offsetWidth / 2;
    container.scrollTo({ left: target, behavior: "smooth" });
  }, [selectedMonth]);

  const monthsByYear = useMemo(() => {
    const years = [...new Set(allDayKeys.map((k) => k.slice(0, 4)))]
      .sort()
      .reverse();
    const latestDataMonth =
      allDayKeys
        .filter((k) => data.days[k])
        .sort()
        .reverse()[0]
        ?.slice(0, 7) ?? "";
    const latestYear = latestDataMonth.slice(0, 4);
    return years.map((year) => {
      const all12 = Array.from(
        { length: 12 },
        (_, i) => `${year}-${String(i + 1).padStart(2, "0")}`,
      ).reverse();
      const months =
        year === latestYear ? all12.filter((m) => m <= latestDataMonth) : all12;
      return [year, months] as [string, string[]];
    });
  }, []);

  const [summaryDrafts, setSummaryDrafts] = useState<Record<string, string>>(
    {},
  );

  const monthHasData = (month: string) =>
    allDayKeys.some((k) => k.startsWith(month) && data.days[k]);

  function selectMonth(month: string) {
    setSelectedMonth(month);
    navigate(`/reflect/months/${month}`, { replace: true });
  }

  const monthSummary =
    summaryDrafts[selectedMonth] ?? data.months[selectedMonth]?.summary ?? null;

  const summaryHeading = useMemo(() => {
    const m = dayjs(selectedMonth).format("MMMM 'YY");
    const variants = [
      `${m} in review`,
      `Looking back on ${m}`,
      `${m}, revisited`,
      `${m} at a glance`,
      `Reflecting on ${m}`,
      `${m}, a retrospective`,
      `${m} in summary`,
      `The story of ${m}`,
    ];
    return variants[Math.floor(Math.random() * variants.length)];
  }, [selectedMonth]);

  return (
    <Shell>
      <div className="flex flex-col h-full">
        {/* Sticky header */}
        <div className="z-20 bg-base-100 pb-2 shrink-0">
          <Nav />

          {/* Months grouped by year — same structure as Days.tsx date/month groups */}
          <div
            ref={monthScrollRef}
            className="flex gap-0 px-4 overflow-x-auto overflow-y-hidden"
          >
            {monthsByYear.map(([year, months], i) => (
              <Fragment key={year}>
                {i > 0 && (
                  <div className="self-stretch mx-1 border-pink-200/60 border-l border-dotted" />
                )}
                <div className="flex flex-col shrink-0">
                  <div className="mb-1 font-light text-pink-400 text-xs whitespace-nowrap">
                    {year}
                  </div>
                  <div className="flex gap-1">
                    {months.map((month) => (
                      <motion.div
                        key={month}
                        ref={
                          month === selectedMonth ? selectedTileRef : undefined
                        }
                        className={clsx(
                          "relative px-2 py-1 border border-pink-200 rounded-md w-16 cursor-pointer transition-colors duration-200",
                          !monthHasData(month) && "opacity-40",
                          month === selectedMonth && "bg-pink-500 text-white",
                        )}
                        onClick={() => selectMonth(month)}
                      >
                        <div className="font-semibold text-xl">
                          {dayjs(`${month}-01`).format("MMM")}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        <YearlySelector category={category} onChange={setCategory} />
        <div className="px-4 pb-3">
          <CategoryLegend category={category} />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 px-4 pb-12 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMonth}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <MonthGrid
                month={selectedMonth}
                category={category}
                onWeekClick={(w) =>
                  navigate(`/reflect/weeks/${selectedMonth}?week=${w}`)
                }
              />

              {monthSummary && (
                <div className="mt-4">
                  <h2 className="mb-2 font-light text-pink-300 text-2xl tracking-tight">
                    {summaryHeading}
                  </h2>
                  <TranscriptBlock
                    key={selectedMonth}
                    transcript={monthSummary}
                    animKey={selectedMonth}
                    label="AI summary. Tap to edit."
                    showQuote={false}
                    onSave={(text) =>
                      setSummaryDrafts((d) => ({ ...d, [selectedMonth]: text }))
                    }
                  />
                </div>
              )}

              <MonthAggregatePills month={selectedMonth} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Shell>
  );
};

export default Monthly;
