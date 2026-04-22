import dayjs from "dayjs";
import Shell from "../Shell";
import { useParams, useNavigate } from "react-router";
import { useState, useMemo, useRef, useEffect, Fragment } from "react";
import { motion } from "motion/react";
import clsx from "clsx";
import { PiPlusCircle } from "react-icons/pi";
import data from "../data/syntheticData";
import { Nav, YearlySelector, TranscriptBlock, emotionMap } from "./Common";
import type { YearlyCategory } from "./Common";
import type { DayEntry } from "../data/dataTypes";

const allDayKeys = Object.keys(data.days);
const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const SEV_RANK: Record<string, number> = {
  Mild: 1,
  Light: 1,
  Moderate: 2,
  Medium: 2,
  Severe: 3,
  Heavy: 3,
};

// ── DayPills ─────────────────────────────────────────────────────────────────
// Compact pills shown below the date number in each calendar cell

function DayPills({
  day,
  category,
}: {
  day: DayEntry;
  category: YearlyCategory;
}) {
  const pill = "text-[12px] px-0.5 leading-tight rounded-sm truncate block";

  switch (category) {
    case "Overall":
      return (
        <div className="flex justify-end mt-1.5 text-2xl">
          {emotionMap(false)[day.overall]}
        </div>
      );

    case "Pain":
      return day.data.pain.length > 0 ? (
        <div className="flex flex-col gap-0.5 mt-1.5">
          {day.data.pain.map(([loc, sev]) => (
            <span key={loc} className={clsx(pill, `rating-${sev}`)}>
              {loc}
            </span>
          ))}
        </div>
      ) : null;

    case "Mood":
      return day.data.mood.length > 0 ? (
        <div className="flex flex-col gap-0.5 mt-1.5">
          {day.data.mood.map(([name, pol]) => (
            <span
              key={name}
              className={clsx(
                pill,
                pol === "POSITIVE"
                  ? "bg-pink-100 text-pink-700"
                  : "bg-pink-800 text-white",
              )}
            >
              {name}
            </span>
          ))}
        </div>
      ) : null;

    case "Period":
      return day.data.period ? (
        <div className="flex flex-col gap-0.5 mt-1.5">
          <span className={clsx(pill, `rating-${day.data.period.flow}`)}>
            {day.data.period.flow}
          </span>
          {day.data.period.other.map((o) => (
            <span key={o} className={clsx(pill, "bg-pink-100 text-pink-700")}>
              {o}
            </span>
          ))}
        </div>
      ) : null;

    case "GI":
      return day.data.gi.length > 0 ? (
        <div className="flex flex-col gap-0.5 mt-1.5">
          {day.data.gi.map(([name, sev]) => (
            <span key={name} className={clsx(pill, `rating-${sev}`)}>
              {name}
            </span>
          ))}
        </div>
      ) : null;

    default:
      return null;
  }
}

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
      <PiPlusCircle className="opacity-50 text-lg" />
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
    <div className="mt-4">
      {/* Overall */}
      <div className={section}>
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
      </div>

      {/* Pain */}
      {Object.keys(painMap).length > 0 && (
        <div className={section}>
          <Heading label="Pain" />
          <div className="flex flex-wrap gap-1">
            {Object.entries(painMap)
              .sort(byFreq(painCount))
              .map(([loc, sev]) => (
                <CountPill
                  key={loc}
                  label={loc}
                  cls={`rating-${sev}`}
                  n={painCount[loc]}
                />
              ))}
          </div>
        </div>
      )}

      {/* Mood */}
      {Object.keys(moodMap).length > 0 && (
        <div className={section}>
          <Heading label="Mood" />
          <div className="flex flex-wrap gap-1">
            {Object.entries(moodMap)
              .sort(byFreq(moodCount))
              .map(([name, pol]) => (
                <CountPill
                  key={name}
                  label={name}
                  cls={
                    pol === "POSITIVE"
                      ? "bg-pink-100 text-pink-700"
                      : "bg-pink-800 text-white border-pink-900"
                  }
                  n={moodCount[name]}
                />
              ))}
          </div>
        </div>
      )}

      {/* Period/Bleeding */}
      {(periodFlowMap.flow || periodOther.size > 0) && (
        <div className={section}>
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
              .map((o) => (
                <CountPill
                  key={o}
                  label={o}
                  cls="bg-pink-100 text-pink-700"
                  n={periodOtherCount[o]}
                />
              ))}
          </div>
        </div>
      )}

      {/* GI/Urinary */}
      {Object.keys(giMap).length > 0 && (
        <div className={section}>
          <Heading label="GI/Urinary" />
          <div className="flex flex-wrap gap-1">
            {Object.entries(giMap)
              .sort(byFreq(giCount))
              .map(([name, sev]) => (
                <CountPill
                  key={name}
                  label={name}
                  cls={`rating-${sev}`}
                  n={giCount[name]}
                />
              ))}
          </div>
        </div>
      )}

      {/* Hard to Do */}
      {Object.keys(hardToDoCount).length > 0 && (
        <div className={section}>
          <Heading label="Hard to Do" />
          <div className="flex flex-wrap gap-1">
            {Object.entries(hardToDoCount)
              .sort(([, a], [, b]) => b - a)
              .map(([item, n]) => (
                <CountPill key={item} label={item} cls="" n={n} />
              ))}
          </div>
        </div>
      )}

      {/* Other */}
      {(Object.keys(otherMap).length > 0 ||
        Object.keys(medCount).length > 0) && (
        <div className="py-2">
          <Heading label="Other" />
          <div className="flex flex-wrap gap-1">
            {Object.entries(otherMap)
              .sort(byFreq(otherCount))
              .map(([name, sev]) => (
                <CountPill
                  key={name}
                  label={name}
                  cls={`rating-${sev}`}
                  n={otherCount[name]}
                />
              ))}
            {Object.entries(medCount)
              .sort(([, a], [, b]) => b - a)
              .map(([med, n]) => (
                <CountPill key={med} label={med} cls="" n={n} />
              ))}
          </div>
        </div>
      )}
    </div>
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
    ...Array<null>(start.day()).fill(null),
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
                  ? "border border-pink-200/60 hover:border-pink-300/80 cursor-pointer"
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
                          "relative px-2 py-1 border border-pink-200 rounded-md w-16 cursor-pointer",
                          !monthHasData(month) && "opacity-40",
                        )}
                        onClick={() => selectMonth(month)}
                        animate={{
                          backgroundColor:
                            month === selectedMonth
                              ? "oklch(60.4% 0.221 3.57)"
                              : "transparent",
                          color: month === selectedMonth ? "#fff" : "inherit",
                        }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
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

        {/* Scrollable content */}
        <div className="flex-1 px-4 pb-12 overflow-y-auto">
          <MonthGrid
            month={selectedMonth}
            category={category}
            onWeekClick={(w) => navigate(`/reflect/weeks/${w}`)}
          />

          {monthSummary && (
            <div className="mt-4">
              <h2 className="mb-2 font-light text-pink-500 text-4xl tracking-tight">
                {dayjs(selectedMonth).format("MMMM 'YY")} in review
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
        </div>
      </div>
    </Shell>
  );
};

export default Monthly;
