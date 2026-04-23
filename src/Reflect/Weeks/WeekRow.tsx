import clsx from "clsx";
import { motion } from "motion/react";
import { PiPlusCircle } from "react-icons/pi";
import data from "../../data/syntheticData";
import { TranscriptBlock } from "../Common";
import type { YearlyCategory } from "../Common";
import { getDaysForWeek, weekDateRange, weekSummaryKey } from "./utils";
import { DayTile } from "./DayTile";

export type WeekView = "horizontal" | "vertical";

export const WeekRow = ({
  weekStart,
  weekIdx,
  weekKey,
  category,
  view,
  draft,
  weekRef,
  onSaveDraft,
}: {
  weekStart: string;
  weekIdx: number;
  weekKey: string;
  category: YearlyCategory;
  view: WeekView;
  draft: string | undefined;
  weekRef: (el: HTMLDivElement | null) => void;
  onSaveDraft: (text: string) => void;
}) => {
  const days = getDaysForWeek(weekStart);
  const draftKey = `${weekKey}-${category}`;
  const summary =
    draft ?? data.weeks[weekKey]?.[weekSummaryKey(category)] ?? null;
  const isVertical = view === "vertical";

  return (
    <motion.div
      className={clsx(
        isVertical
          ? "shrink-0 w-48 flex flex-col"
          : "mb-6 pt-2 border-pink-200/60 border-t first:border-t-0 border-dotted",
      )}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: "easeOut", delay: weekIdx * 0.06 }}
    >
      <div
        ref={weekRef}
        className={clsx(
          "flex font-semibold text-pink-500 text-xs",
          isVertical ? "mb-2" : "mb-1",
        )}
      >
        <div className={clsx(isVertical ? "w-full text-center" : "grow")}>
          Week {weekIdx + 1}
          {isVertical && <br />}
          <span className="opacity-50 ml-1 font-light">
            {!isVertical && <span>&ndash;</span>} {weekDateRange(weekStart)}
          </span>
        </div>
        {!isVertical && <PiPlusCircle className="text-lg" />}
      </div>

      <motion.ul
        className={clsx(
          "timeline",
          isVertical
            ? "timeline-vertical h-full"
            : "w-full timeline-horizontal weekly-timeline",
        )}
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
        {days.map((dateKey, i) => (
          <DayTile
            key={dateKey}
            dateKey={dateKey}
            isFirst={i === 0}
            isLast={i === days.length - 1}
            day={data.days[dateKey]}
            category={category}
            view={view}
          />
        ))}
      </motion.ul>

      {summary && (
        <TranscriptBlock
          transcript={summary}
          animKey={draftKey}
          className="mt-2"
          label="AI weekly summary. Tap to edit."
          showQuote={false}
          onSave={onSaveDraft}
        />
      )}
    </motion.div>
  );
};
