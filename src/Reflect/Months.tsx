import dayjs from "dayjs";
import Shell from "../Shell";
import { useParams, useNavigate } from "react-router";
import { useState, useMemo, Fragment } from "react";
import { motion } from "motion/react";
import clsx from "clsx";
import data from "../data/syntheticData";
import { Nav, YearlySelector, TranscriptBlock, emotionMap } from "./Common";
import type { YearlyCategory } from "./Common";
import type { DayEntry } from "../data/dataTypes";

const allDayKeys = Object.keys(data.days);
const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// ── DayPills ─────────────────────────────────────────────────────────────────
// Compact pills shown below the date number in each calendar cell

function DayPills({
  day,
  category,
}: {
  day: DayEntry;
  category: YearlyCategory;
}) {
  const pill = "text-[10px] px-0.5 leading-tight rounded-sm truncate block";

  switch (category) {
    case "Overall":
      return (
        <div className="flex justify-left mt-0.5 text-2xl">
          {emotionMap(false)[day.overall]}
        </div>
      );

    case "Pain":
      return day.data.pain.length > 0 ? (
        <div className="flex flex-col gap-0.5 mt-0.5">
          {day.data.pain.map(([loc, sev]) => (
            <span key={loc} className={clsx(pill, `rating-${sev}`)}>
              {loc}
            </span>
          ))}
        </div>
      ) : null;

    case "Mood":
      return day.data.mood.length > 0 ? (
        <div className="flex flex-col gap-0.5 mt-0.5">
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
        <div className="flex flex-col gap-0.5 mt-0.5">
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
        <div className="flex flex-col gap-0.5 mt-0.5">
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
      <div className="grid grid-cols-7 mb-1">
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

  const defaultMonth =
    yearMonth ??
    allDayKeys
      .filter((k) => data.days[k])
      .sort()
      .reverse()[0]
      ?.slice(0, 7) ??
    "";

  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);

  // All months grouped by year, ascending — mirrors Days.tsx grouping by month
  const monthsByYear = useMemo(() => {
    const months = [...new Set(allDayKeys.map((k) => k.slice(0, 7)))].sort();
    const groups: Record<string, string[]> = {};
    months.forEach((m) => {
      (groups[m.slice(0, 4)] ??= []).push(m);
    });
    return Object.entries(groups)
      .sort(([a], [b]) => b.localeCompare(a))
      .map(([year, ms]) => [year, [...ms].reverse()] as [string, string[]]);
  }, []);

  const [category, setCategory] = useState<YearlyCategory>("Overall");
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
          <div className="flex gap-2 px-4 overflow-x-auto overflow-y-hidden no-scrollbar">
            {monthsByYear.map(([year, months], i) => (
              <Fragment key={year}>
                {i > 0 && (
                  <div className="self-stretch border-pink-200/60 border-l border-dotted" />
                )}
                <div className="flex flex-col shrink-0">
                  <div className="mb-1 font-light text-pink-400 text-xs whitespace-nowrap">
                    {year}
                  </div>
                  <div className="flex gap-1">
                    {months.map((month) => (
                      <motion.div
                        key={month}
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
              {/* <h2 className="mb-0 font-black text-pink-500 text-sm tracking-tight">
                {dayjs(`${selectedMonth}-01`).format("MMMM YYYY")}
              </h2> */}
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
        </div>
      </div>
    </Shell>
  );
};

export default Monthly;
