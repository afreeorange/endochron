import dayjs from "dayjs";
import Shell from "../../Shell";
import { useParams, useNavigate, useSearchParams } from "react-router";
import { useState, useMemo, useRef, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PiAlignCenterVerticalDuotone } from "react-icons/pi";
import { Nav, YearlySelector, CategoryLegend } from "../Common";
import type { YearlyCategory } from "../Common";
import type { WeekView } from "./WeekRow";
import {
  getMonthsWithData,
  getWeeksForMonth,
  groupMonthsByYear,
} from "./utils";
import { WeekRow } from "./WeekRow";

export const Weekly = () => {
  const { yearMonth } = useParams<{ yearMonth: string }>();
  const navigate = useNavigate();

  const months = useMemo(getMonthsWithData, []);
  const defaultMonth = yearMonth ?? months[months.length - 1] ?? "";
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);
  const weeks = useMemo(() => getWeeksForMonth(selectedMonth), [selectedMonth]);
  const monthsByYear = useMemo(() => groupMonthsByYear(months), [months]);

  const [weekDrafts, setWeekDrafts] = useState<Record<string, string>>({});
  const [view, setView] = useState<WeekView>("horizontal");
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

  function selectMonth(month: string) {
    setSelectedMonth(month);
    navigate(`/reflect/weeks/${month}`, { replace: true });
  }

  return (
    <Shell>
      <div className="flex flex-col h-full">
        {/* Sticky header */}
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
                        className={`px-2 py-1 border border-pink-200 rounded-md w-16 cursor-pointer transition-colors duration-200${month === selectedMonth ? " bg-pink-500 text-white" : ""}`}
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

          <YearlySelector
            category={category}
            onChange={setCategory}
            actions={
              <button
                className="btn btn-square btn-md shrink-0"
                onClick={() =>
                  setView((v) =>
                    v === "horizontal" ? "vertical" : "horizontal",
                  )
                }
                aria-label="Toggle view"
              >
                <PiAlignCenterVerticalDuotone
                  className={`text-2xl transition-transform duration-300 ${view === "vertical" ? "rotate-90" : ""}`}
                />
              </button>
            }
          />
          <div className="px-4 pb-3">
            <CategoryLegend category={category} />
          </div>
        </div>

        {/* Week list */}
        <div
          className={
            view === "vertical"
              ? "flex-1 flex gap-4 px-4 pb-4 overflow-x-auto overflow-y-hidden"
              : "flex-1 px-4 pb-12 overflow-y-auto"
          }
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedMonth}-${view}`}
              className={view === "vertical" ? "mx-auto flex gap-4 overflow-y-scroll" : undefined}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {weeks.map((weekStart, weekIdx) => {
                const weekKey = `${selectedMonth}-week-${String(weekIdx + 1).padStart(2, "0")}`;
                const draftKey = `${weekKey}-${category}`;
                return (
                  <WeekRow
                    key={weekStart}
                    weekStart={weekStart}
                    weekIdx={weekIdx}
                    weekKey={weekKey}
                    category={category}
                    view={view}
                    draft={weekDrafts[draftKey]}
                    weekRef={(el) => {
                      weekRefs.current[weekStart] = el;
                    }}
                    onSaveDraft={(text) =>
                      setWeekDrafts((d) => ({ ...d, [draftKey]: text }))
                    }
                  />
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
