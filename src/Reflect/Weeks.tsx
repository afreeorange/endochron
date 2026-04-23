import dayjs from "dayjs";
import Shell from "../Shell";
import { useParams, useNavigate, useSearchParams } from "react-router";
import { useState, useMemo, useRef, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";
import data from "../data/syntheticData";
import {
  Nav,
  TranscriptBlock,
  YearlySelector,
  CategoryLegend,
  DayPills,
} from "./Common";
import type { YearlyCategory } from "./Common";
import type { DayEntry } from "../data/dataTypes";
import { PiPlusCircle } from "react-icons/pi";

const dayItem = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.18, ease: "easeOut" as const },
  },
};

const C_MILD = "oklch(90% 0.06 340)";
const C_MOD = "oklch(75% 0.14 340)";
const C_SEV = "oklch(45% 0.18 340)";

function dayHrColor(
  day: DayEntry | null | undefined,
  category: YearlyCategory,
): string {
  if (!day) return "";
  switch (category) {
    case "Overall":
      return day.overall === "GOOD"
        ? "#16a34a"
        : day.overall === "BAD"
          ? "#eab308"
          : "#f87171";
    case "Pain": {
      const sevs = day.data.pain.map(([, s]) => s);
      return sevs.includes("Severe")
        ? C_SEV
        : sevs.includes("Moderate")
          ? C_MOD
          : sevs.length > 0
            ? C_MILD
            : "";
    }
    case "GI": {
      const sevs = day.data.gi.map(([, s]) => s);
      return sevs.includes("Severe")
        ? C_SEV
        : sevs.includes("Moderate")
          ? C_MOD
          : sevs.length > 0
            ? C_MILD
            : "";
    }
    case "Period":
      return !day.data.period
        ? ""
        : day.data.period.flow === "Heavy"
          ? C_SEV
          : day.data.period.flow === "Medium"
            ? C_MOD
            : C_MILD;
    case "Mood":
      return day.data.mood.some(([, pol]) => pol === "NEGATIVE")
        ? C_SEV
        : day.data.mood.some(([, pol]) => pol === "POSITIVE")
          ? C_MILD
          : "";
    default:
      return "";
  }
}

function hasData(
  day: DayEntry | null | undefined,
  category: YearlyCategory,
): boolean {
  if (!day) return false;
  switch (category) {
    case "Overall":
      return true;
    case "Pain":
      return day.data.pain.length > 0;
    case "Mood":
      return day.data.mood.length > 0;
    case "GI":
      return day.data.gi.length > 0;
    case "Period":
      return !!day.data.period;
  }
}

const allDayKeys = Object.keys(data.days);

function getMonthsWithData(): string[] {
  return [
    ...new Set(
      allDayKeys.filter((k) => data.days[k]).map((k) => k.slice(0, 7)),
    ),
  ].sort();
}

function getWeeksForMonth(yearMonth: string): string[] {
  const monthStart = dayjs(`${yearMonth}-01`);
  const monthEnd = monthStart.endOf("month");
  const firstSat = monthStart.subtract((monthStart.day() + 1) % 7, "day");
  const weeks: string[] = [];
  let w = firstSat;
  while (!w.isAfter(monthEnd)) {
    weeks.push(w.format("YYYY-MM-DD"));
    w = w.add(7, "day");
  }
  return weeks;
}

function weekDateRange(weekStart: string): string {
  const start = dayjs(weekStart);
  const end = start.add(6, "day");
  return start.month() === end.month()
    ? `${start.format("MMM DD")}–${end.format("DD")}`
    : `${start.format("MMM DD")}–${end.format("MMM DD")}`;
}

function getDaysForWeek(weekStart: string): string[] {
  return Array.from({ length: 7 }, (_, i) =>
    dayjs(weekStart).add(i, "day").format("YYYY-MM-DD"),
  );
}

export const Weekly = () => {
  const { yearMonth } = useParams<{ yearMonth: string }>();
  const navigate = useNavigate();

  const months = useMemo(getMonthsWithData, []);
  const defaultMonth = yearMonth ?? months[months.length - 1] ?? "";
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);
  const weeks = useMemo(() => getWeeksForMonth(selectedMonth), [selectedMonth]);

  const [weekDrafts, setWeekDrafts] = useState<Record<string, string>>({});
  const [category, setCategory] = useState<YearlyCategory>(
    () =>
      (localStorage.getItem("reflect_category") as YearlyCategory) ?? "Overall",
  );
  useEffect(() => {
    localStorage.setItem("reflect_category", category);
  }, [category]);

  const [searchParams] = useSearchParams();
  const targetWeek = searchParams.get("week");
  const weekRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!targetWeek) return;
    const el = weekRefs.current[targetWeek];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [targetWeek]);

  const monthScrollRef = useRef<HTMLDivElement>(null);
  const selectedMonthTileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tile = selectedMonthTileRef.current;
    const container = monthScrollRef.current;
    if (!tile || !container) return;
    const target =
      tile.offsetLeft - container.offsetWidth / 2 + tile.offsetWidth / 2;
    container.scrollTo({ left: target, behavior: "smooth" });
  }, [selectedMonth]);

  const monthsByYear = useMemo(() => {
    const byYear: Record<string, string[]> = {};
    for (const m of months) {
      (byYear[m.slice(0, 4)] ??= []).push(m);
    }
    return (Object.entries(byYear) as [string, string[]][]).reverse();
  }, [months]);

  function selectMonth(month: string) {
    setSelectedMonth(month);
    navigate(`/reflect/weeks/${month}`, { replace: true });
  }

  return (
    <Shell>
      <div className="flex flex-col h-full">
        <div className="z-20 bg-base-100 shrink-0">
          <Nav />

          {/* Month scroller */}
          <div
            ref={monthScrollRef}
            className="flex gap-0 px-4 pb-3 overflow-x-auto overflow-y-hidden"
          >
            {monthsByYear.map(([year, yearMonths], i) => (
              <Fragment key={year}>
                {i > 0 && (
                  <div className="self-stretch mx-1 border-pink-200/60 border-l border-dotted" />
                )}
                <div className="flex flex-col shrink-0">
                  <div className="mb-1 font-light text-pink-400 text-xs whitespace-nowrap">
                    {year}
                  </div>
                  <div className="flex gap-1">
                    {[...yearMonths].reverse().map((month) => (
                      <motion.div
                        key={month}
                        ref={
                          month === selectedMonth
                            ? selectedMonthTileRef
                            : undefined
                        }
                        className="px-2 py-1 border border-pink-200 rounded-md w-16 cursor-pointer"
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
          <YearlySelector category={category} onChange={setCategory} />
          <div className="px-4 pb-3">
            <CategoryLegend category={category} />
          </div>
        </div>

        {/* All weeks */}
        <div className="flex-1 px-4 pb-12 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMonth}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {weeks.map((weekStart, weekIdx) => {
                const days = getDaysForWeek(weekStart);
                const weekKey = `${selectedMonth}-week-${String(weekIdx + 1).padStart(2, "0")}`;
                const summary =
                  weekDrafts[weekKey] ?? data.weeks[weekKey]?.summary ?? null;
                return (
                  <motion.div
                    key={weekStart}
                    className="mb-6 pt-2 border-pink-200/60 border-t first:border-t-0 border-dotted"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.22,
                      ease: "easeOut",
                      delay: weekIdx * 0.06,
                    }}
                  >
                    <div
                      ref={(el) => {
                        weekRefs.current[weekStart] = el;
                      }}
                      className="flex mb-1 font-semibold text-pink-500 text-xs"
                    >
                      <div className="grow">
                        Week {weekIdx + 1}
                        <span className="opacity-50 ml-1 font-light">
                          &ndash; {weekDateRange(weekStart)}
                        </span>
                      </div>
                      <PiPlusCircle className="opacity-50 text-lg" />
                    </div>
                    <motion.ul
                      className="w-full timeline timeline-horizontal weekly-timeline"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.04,
                            delayChildren: weekIdx * 0.06,
                          },
                        },
                      }}
                    >
                      {days.map((dateKey, i) => {
                        const day = data.days[dateKey];
                        const isLast = i === days.length - 1;

                        return (
                          <motion.li
                            key={dateKey}
                            className={clsx("flex-1", day && "cursor-pointer")}
                            variants={dayItem}
                            onClick={() =>
                              day && navigate(`/reflect/days/${dateKey}`)
                            }
                          >
                            {i > 0 && (
                              <hr
                                className={clsx(
                                  !hasData(day, category) && "opacity-20",
                                )}
                                style={
                                  hasData(day, category)
                                    ? {
                                        backgroundColor: dayHrColor(
                                          day,
                                          category,
                                        ),
                                      }
                                    : undefined
                                }
                              />
                            )}
                            <div className="w-full overflow-hidden timeline-start">
                              {day ? (
                                <DayPills
                                  day={day}
                                  category={category}
                                  margin="mx-0.5"
                                />
                              ) : (
                                <div className="bg-pink-100 mx-auto rounded-full w-3 h-3" />
                              )}
                            </div>
                            <div className="timeline-middle">
                              <div
                                className={clsx(
                                  "rounded-full w-2.5 h-2.5",
                                  !hasData(day, category) && "opacity-20",
                                )}
                                style={{
                                  backgroundColor: hasData(day, category)
                                    ? dayHrColor(day, category)
                                    : "oklch(90% 0.06 340)",
                                }}
                              />
                            </div>
                            <div className="text-center timeline-end">
                              <div className="font-semibold text-sm">
                                {dayjs(dateKey).format("ddd")}
                              </div>
                              <div className="font-light text-pink-400 text-xs">
                                {dayjs(dateKey).format("D")}
                              </div>
                            </div>
                            {!isLast && (
                              <hr
                                className={clsx(
                                  !hasData(day, category) && "opacity-20",
                                )}
                                style={
                                  hasData(day, category)
                                    ? {
                                        backgroundColor: dayHrColor(
                                          day,
                                          category,
                                        ),
                                      }
                                    : undefined
                                }
                              />
                            )}
                          </motion.li>
                        );
                      })}
                    </motion.ul>
                    {summary && (
                      <TranscriptBlock
                        transcript={summary}
                        animKey={weekKey}
                        className="mt-2"
                        label="AI weekly summary. Tap to edit."
                        showQuote={false}
                        onSave={(text) =>
                          setWeekDrafts((d) => ({ ...d, [weekKey]: text }))
                        }
                      />
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Shell>
  );
};

export default Weekly;
