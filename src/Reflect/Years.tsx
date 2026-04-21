import "cally";
import dayjs from "dayjs";
import Shell from "../Shell";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { AnimatePresence, motion } from "motion/react";

const grid = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
  exit: { opacity: 0, transition: { duration: 0.12 } },
};

const monthItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" as const },
  },
};
import clsx from "clsx";
import data from "../data/syntheticData";
import { Nav, YearlySelector } from "./Common";
import type { YearlyCategory } from "./Common";

export const Yearly = () => {
  const dateKeys = Object.keys(data.days);
  const years = [...new Set(dateKeys.map((d) => dayjs(d).format("YYYY")))].sort(
    (a, b) => b.localeCompare(a),
  );
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [category, setCategory] = useState<YearlyCategory>("Overall");
  const [subCategory, setSubCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const getDayParts = useMemo(() => {
    return function (date: Date): string {
      const d = dayjs(date);
      const key = d.format("YYYY-MM-DD");
      const day = data.days[key];
      if (!day) return "";

      if (category === "Overall") {
        const map: Record<string, string> = {
          GOOD: "yearly-rating-Mild",
          MANAGEABLE: "yearly-rating-Moderate",
          BAD: "yearly-rating-Severe",
        };
        return map[day.overall] ?? "";
      }
      if (category === "PainLocation") {
        const entry = day.data.pain.find(([loc]) => loc === subCategory);
        return entry ? `yearly-rating-${entry[1]}` : "";
      }
      if (category === "Mood") {
        const hasPositive = day.data.mood.some(([, pol]) => pol === "POSITIVE");
        const hasNegative = day.data.mood.some(([, pol]) => pol === "NEGATIVE");
        if (hasPositive) return "yearly-rating-Severe";
        if (hasNegative) return "yearly-rating-Mild";
        return "";
      }
      if (category === "GI") {
        const entry = day.data.gi.find(([name]) => name === subCategory);
        return entry ? `yearly-rating-${entry[1]}` : "";
      }
      if (category === "HardToDo") {
        return day.data.hardToDo.includes(subCategory as never)
          ? "yearly-rating-Moderate"
          : "";
      }
      if (category === "Period") {
        if (!day.data.period) return "";
        const map: Record<string, string> = {
          Light: "yearly-rating-Mild",
          Medium: "yearly-rating-Moderate",
          Heavy: "yearly-rating-Severe",
        };
        return map[day.data.period.flow] ?? "";
      }
      if (category === "PeriodType") {
        return day.data.period?.other.includes(subCategory as never)
          ? "yearly-rating-Moderate"
          : "";
      }
      return "";
    };
  }, [category, subCategory]);

  return (
    <Shell>
      <div className="flex flex-col h-full">
        {/* Sticky Header */}
        <div className="z-20 bg-base-100 shrink-0">
          <Nav />
          <div className="flex gap-2 px-4 pb-3 overflow-x-auto overflow-y-hidden">
            {years.map((year) => (
              <motion.button
                key={year}
                className={clsx(
                  "px-2 py-1 border border-pink-200 rounded-md font-semibold text-xl cursor-pointer shrink-0",
                )}
                onClick={() => setSelectedYear(year)}
                animate={{
                  backgroundColor:
                    year === selectedYear
                      ? "oklch(60.4% 0.221 3.57)"
                      : "transparent",
                  color: year === selectedYear ? "#fff" : "inherit",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {year}
              </motion.button>
            ))}
          </div>
          <YearlySelector
            category={category}
            subCategory={subCategory}
            onChange={(cat, sub) => {
              setCategory(cat);
              setSubCategory(sub);
            }}
          />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 px-4 pb-12 overflow-y-auto">
          {/* @ts-expect-error custom element */}
          <calendar-date
            value={`${selectedYear}-01-01`}
            getDayParts={getDayParts}
            className="mx-auto w-full max-w-xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedYear}
                className="gap-8 gap-y-4 grid grid-cols-3"
                variants={grid}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <motion.div
                    key={i}
                    variants={monthItem}
                    className="cursor-pointer"
                    onClick={() =>
                      navigate(
                        `/reflect/months/${selectedYear}-${String(i + 1).padStart(2, "0")}`,
                      )
                    }
                  >
                    <div className="mb-1 font-semibold text-pink-300 text-xs">
                      {dayjs(
                        `${selectedYear}-${String(i + 1).padStart(2, "0")}-01`,
                      ).format("MMM")}
                    </div>
                    {/* @ts-expect-error custom element */}
                    <calendar-month className="w-full" offset={i} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            {/* @ts-expect-error custom element */}
          </calendar-date>
        </div>
      </div>
    </Shell>
  );
};

export default Yearly;
