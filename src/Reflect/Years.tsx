import "cally";
import dayjs from "dayjs";
import Shell from "../Shell";
import { useState } from "react";
import { motion } from "motion/react";
import clsx from "clsx";
import data from "../data/syntheticData";
import { Nav } from "./Common";

const SEVERITY_ORDER = ["Severe", "Moderate", "Mild"] as const;

function getDayParts(date: Date): string {
  const key = dayjs(date).format("YYYY-MM-DD");
  const day = data.days[key];
  if (!day?.data.pain?.length) return "";
  const severities = day.data.pain.map(([, sev]) => sev as string);
  const worst = SEVERITY_ORDER.find((s) => severities.includes(s));
  return worst ? `yearly-rating-${worst}` : "";
}

export const Yearly = () => {
  const dateKeys = Object.keys(data.days);
  const years = [...new Set(dateKeys.map((d) => dayjs(d).format("YYYY")))].sort(
    (a, b) => b.localeCompare(a),
  );
  const [selectedYear, setSelectedYear] = useState(years[0]);

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
                  "px-4 py-2 border border-pink-200 rounded-md font-semibold text-xl cursor-pointer shrink-0",
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
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 px-4 pb-12 overflow-y-auto">
          {/* @ts-expect-error custom element */}
          <calendar-date
            value={`${selectedYear}-01-01`}
            getDayParts={getDayParts}
            className="mx-auto w-full max-w-xl"
          >
            <div className="gap-8 gap-y-4 grid grid-cols-3">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i}>
                  <div className="mb-1 font-semibold text-pink-300 text-xs">
                    {dayjs(
                      `${selectedYear}-${String(i + 1).padStart(2, "0")}-01`,
                    ).format("MMM")}
                  </div>
                  {/* @ts-expect-error custom element */}
                  <calendar-month className="w-full" offset={i} />
                </div>
              ))}
            </div>
            {/* @ts-expect-error custom element */}
          </calendar-date>
        </div>
      </div>
    </Shell>
  );
};

export default Yearly;
