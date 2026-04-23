import "cally";
import dayjs from "dayjs";
import Shell from "../Shell";
import { useMemo, useRef, useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router";
import { motion } from "motion/react";
import clsx from "clsx";
import data from "../data/syntheticData";
import { Nav, YearlySelector, CategoryLegend, SEV_RANK } from "./Common";
import type { YearlyCategory } from "./Common";

export const Yearly = () => {
  const dateKeys = Object.keys(data.days);
  const years = [...new Set(dateKeys.map((d) => dayjs(d).format("YYYY")))].sort(
    (a, b) => a.localeCompare(b),
  );

  const currentYear = dayjs().format("YYYY");
  const { year: paramYear } = useParams();
  const defaultYear = years.includes(currentYear)
    ? currentYear
    : years[years.length - 1];
  const [activeYear, setActiveYear] = useState(paramYear ?? defaultYear);
  const navigate = useNavigate();
  const [category, setCategory] = useState<YearlyCategory>(
    () =>
      (localStorage.getItem("reflect_category") as YearlyCategory) ?? "Overall",
  );
  useEffect(() => {
    localStorage.setItem("reflect_category", category);
  }, [category]);

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
          const a =
            sectionRefs.current[y]?.getBoundingClientRect().top ?? Infinity;
          const b =
            sectionRefs.current[best]?.getBoundingClientRect().top ?? Infinity;
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
    const maxSev = (sevs: string[]): string | null =>
      sevs.length === 0
        ? null
        : sevs.reduce((a, b) =>
            (SEV_RANK[b] ?? 0) > (SEV_RANK[a] ?? 0) ? b : a,
          );

    function baseRating(day: (typeof data.days)[string]): string {
      if (!day) return "";
      if (category === "Overall")
        return (
          (
            { GOOD: "Good", MANAGEABLE: "Manageable", BAD: "Bad" } as Record<
              string,
              string
            >
          )[day.overall] ?? ""
        );
      if (category === "Pain")
        return maxSev(day.data.pain.map(([, s]) => s)) ?? "";
      if (category === "Mood") {
        if (day.data.mood.some(([, pol]) => pol === "NEGATIVE"))
          return "Severe";
        if (day.data.mood.some(([, pol]) => pol === "POSITIVE")) return "Mild";
        return "";
      }
      if (category === "GI") return maxSev(day.data.gi.map(([, s]) => s)) ?? "";
      if (category === "Period") return day.data.period?.flow ?? "";
      return "";
    }

    return function (date: Date): string {
      const d = dayjs(date);
      const key = d.format("YYYY-MM-DD");
      const day = data.days[key];
      if (!day) return "";
      const rating = baseRating(day);
      if (!rating) return "";
      const full = `yearly-rating-${rating}`;

      // Don't connect across week-row boundaries (Sun=0, Sat=6)
      const dow = d.day();
      const prevDay =
        dow !== 0
          ? data.days[d.subtract(1, "day").format("YYYY-MM-DD")]
          : undefined;
      const nextDay =
        dow !== 6 ? data.days[d.add(1, "day").format("YYYY-MM-DD")] : undefined;
      const hasPrev =
        !!prevDay && `yearly-rating-${baseRating(prevDay)}` === full;
      const hasNext =
        !!nextDay && `yearly-rating-${baseRating(nextDay)}` === full;

      if (hasPrev && hasNext) return `${full} ${full}-middle`;
      if (hasPrev) return `${full} ${full}-end`;
      if (hasNext) return `${full} ${full}-start`;
      return full;
    };
  }, [category]);

  return (
    <Shell>
      <div className="flex flex-col h-full">
        {/* Sticky Header */}
        <div className="z-20 bg-base-100 shrink-0">
          <Nav />
          <div className="flex items-center gap-3 px-4 pb-3">
            <div className="flex flex-1 gap-2 overflow-x-auto overflow-y-hidden">
              {[...years].reverse().map((year) => (
                <button
                  key={year}
                  className={clsx(
                    "px-2 py-1 border border-pink-200 rounded-md font-semibold text-xl cursor-pointer shrink-0",
                    year === activeYear &&
                      "bg-pink-500 text-white",
                  )}
                  onClick={() => scrollToYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
          <YearlySelector
            category={category}
            onChange={(cat) => setCategory(cat)}
          />
          <div className="px-4 pb-3">
            <CategoryLegend category={category} />
          </div>
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
              className="mb-6"
            >
              <motion.h2
                className="mx-auto mb-2 max-w-xl font-black text-pink-500 text-sm"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: yi * 0.08,
                }}
              >
                {year}
              </motion.h2>

              {/* @ts-expect-error custom element */}
              <calendar-date
                value={`${year}-01-01`}
                getDayParts={getDayParts}
                className="mx-auto w-full max-w-xl"
              >
                <div className="gap-x-5 gap-y-6 grid grid-cols-3">
                  {Array.from({ length: 12 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="hover:bg-pink-100 cursor-pointer"
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
