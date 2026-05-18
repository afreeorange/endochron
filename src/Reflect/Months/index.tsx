import dayjs from "dayjs";
import { useParams, useNavigate } from "react-router";
import { useState, useMemo, useRef, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";
import Shell from "../../Shell";
import data from "../../data/store";
import { Nav } from "../Nav";
import { TranscriptBlock } from "../TranscriptBlock";
import {
  YearlySelector,
  CategoryLegend,
  type YearlyCategory,
} from "../categories";
import { MonthGrid } from "./MonthGrid";
import { MonthAggregatePills } from "./MonthAggregatePills";
import {
  monthsByYear as computeMonthsByYear,
  monthHasData,
  latestLoggedMonth,
} from "./monthData";

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

  const defaultMonth = yearMonth ?? latestLoggedMonth();

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

  const monthsByYear = useMemo(computeMonthsByYear, []);

  const [summaryDrafts, setSummaryDrafts] = useState<Record<string, string>>(
    {},
  );

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
