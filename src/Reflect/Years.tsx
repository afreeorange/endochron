import "cally";
import dayjs from "dayjs";
import Shell from "../Shell";
import { useMemo, useRef, useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router";
import { motion } from "motion/react";
import clsx from "clsx";
import data from "../data/syntheticData";
import { Nav, YearlySelector } from "./Common";
import type { YearlyCategory } from "./Common";


export const Yearly = () => {
  const dateKeys = Object.keys(data.days);
  const years = [...new Set(dateKeys.map((d) => dayjs(d).format("YYYY")))].sort(
    (a, b) => a.localeCompare(b),
  );

  const currentYear = dayjs().format("YYYY");
  const { year: paramYear } = useParams();
  const defaultYear = years.includes(currentYear) ? currentYear : years[years.length - 1];
  const [activeYear, setActiveYear] = useState(paramYear ?? defaultYear);
  const [category, setCategory] = useState<YearlyCategory>("Overall");
  const [subCategory, setSubCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeYearRef = useRef(activeYear);
  const isScrollingToRef = useRef(false);
  const visibleYears = useRef<Set<string>>(new Set());

  useEffect(() => {
    activeYearRef.current = activeYear;
  }, [activeYear]);

  // Scroll to the initial year from URL on mount
  useEffect(() => {
    const year = paramYear ?? defaultYear;
    if (year && year !== years[0]) {
      const el = sectionRefs.current[year];
      if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update active year + URL as sections scroll into view
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingToRef.current) return;

        // Maintain the full set of currently-visible years
        entries.forEach((e) => {
          const y = e.target.getAttribute("data-year");
          if (!y) return;
          if (e.isIntersecting) visibleYears.current.add(y);
          else visibleYears.current.delete(y);
        });

        if (visibleYears.current.size === 0) return;

        // Pick the topmost visible year by DOM position
        const topmost = [...visibleYears.current].reduce((best, y) => {
          const a = sectionRefs.current[y]?.getBoundingClientRect().top ?? Infinity;
          const b = sectionRefs.current[best]?.getBoundingClientRect().top ?? Infinity;
          return a < b ? y : best;
        });

        if (topmost !== activeYearRef.current) {
          activeYearRef.current = topmost;
          setActiveYear(topmost);
          navigate(`/reflect/years/${topmost}`, { replace: true });
        }
      },
      { root: container, threshold: 0, rootMargin: "0px 0px -70% 0px" },
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      visibleYears.current.clear();
    };
  }, [navigate]);

  const scrollToYear = useCallback(
    (year: string) => {
      const el = sectionRefs.current[year];
      if (!el) return;
      isScrollingToRef.current = true;
      setActiveYear(year);
      activeYearRef.current = year;
      navigate(`/reflect/years/${year}`, { replace: true });
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        isScrollingToRef.current = false;
      }, 700);
    },
    [navigate],
  );

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
            {[...years].reverse().map((year) => (
              <button
                key={year}
                className={clsx(
                  "px-2 py-1 border border-pink-200 rounded-md font-semibold text-xl cursor-pointer shrink-0",
                  year === activeYear && "bg-[oklch(60.4%_0.221_3.57)] text-white",
                )}
                onClick={() => scrollToYear(year)}
              >
                {year}
              </button>
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

        {/* Scrollable list of all years */}
        <div
          className="flex-1 px-4 pb-12 overflow-y-auto"
          ref={scrollContainerRef}
        >
          {years.map((year, yi) => (
            <div
              key={year}
              data-year={year}
              ref={(el) => {
                sectionRefs.current[year] = el;
              }}
              className="mb-12"
            >
              <motion.h2
                className="mb-2 font-black text-pink-500 text-sm tracking-tight"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: yi * 0.08 }}
              >
                {year}
              </motion.h2>

              {/* @ts-expect-error custom element */}
              <calendar-date
                value={`${year}-01-01`}
                getDayParts={getDayParts}
                className="mx-auto w-full max-w-xl"
              >
                <div className="gap-x-5 gap-y-5 grid grid-cols-3">
                  {Array.from({ length: 12 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="cursor-pointer"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                        delay: yi * 0.08 + 0.05 + i * 0.025,
                      }}
                      onClick={() =>
                        navigate(
                          `/reflect/months/${year}-${String(i + 1).padStart(2, "0")}`,
                        )
                      }
                    >
                      <div className="mb-1 font-semibold text-pink-300 text-xs">
                        {dayjs(
                          `${year}-${String(i + 1).padStart(2, "0")}-01`,
                        ).format("MMM")}
                      </div>
                      {/* @ts-expect-error custom element */}
                      <calendar-month className="w-full" offset={i} />
                    </motion.div>
                  ))}
                </div>
                {/* @ts-expect-error custom element */}
              </calendar-date>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
};

export default Yearly;
