import dayjs from "dayjs";
import clsx from "clsx";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { DayPills } from "../Common";
import type { YearlyCategory } from "../Common";
import type { DayEntry } from "../../data/dataTypes";
import { dayColor, hasCategoryData, COLOR_EMPTY } from "./colors";
import type { WeekView } from "./WeekRow";
import { PiPlusCircleDuotone } from "react-icons/pi";

const itemVariant = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.18, ease: "easeOut" as const },
  },
};

function ColoredHr({
  day,
  category,
}: {
  day: DayEntry | null | undefined;
  category: YearlyCategory;
}) {
  const active = hasCategoryData(day, category);
  return (
    <hr
      className={clsx(!active && "opacity-20", "rounded-none")}
      style={active ? { backgroundColor: dayColor(day, category) } : undefined}
    />
  );
}

export const DayTile = ({
  dateKey,
  isFirst,
  isLast,
  day,
  category,
  view,
}: {
  dateKey: string;
  isFirst: boolean;
  isLast: boolean;
  day: DayEntry | null | undefined;
  category: YearlyCategory;
  view: WeekView;
}) => {
  const navigate = useNavigate();
  const active = hasCategoryData(day, category);
  const isVertical = view === "vertical";

  const dayLabel = (
    <div className={clsx(isVertical ? "text-right" : "text-center")}>
      <div className="font-semibold text-sm">
        {dayjs(dateKey).format("ddd")}
      </div>
      <div className="font-light text-pink-400 text-xs">
        {dayjs(dateKey).format("D")}
      </div>
    </div>
  );

  const dayData = (
    <div className={clsx("overflow-hidden", !isVertical && "w-full")}>
      {day ? (
        <DayPills day={day} category={category} margin="mx-0.5" />
      ) : (
        <div
          className={clsx(
            "bg-pink-100 rounded-full w-3 h-3",
            isVertical ? "" : "mx-auto",
          )}
        />
      )}
    </div>
  );

  const dot = (
    <PiPlusCircleDuotone
      className="-mx-0.5"
      style={{
        color: active ? dayColor(day, category) : COLOR_EMPTY,
      }}
    />
  );

  return (
    <motion.li
      className={clsx("flex-1", day && "cursor-pointer")}
      variants={itemVariant}
      onClick={() => day && navigate(`/reflect/days/${dateKey}`)}
    >
      {!isFirst && <ColoredHr day={day} category={category} />}

      <div className={clsx("timeline-start", isVertical && "text-xs")}>
        {isVertical ? dayLabel : dayData}
      </div>

      <div className="timeline-middle">{dot}</div>

      <div className="timeline-end">{isVertical ? dayData : dayLabel}</div>

      {!isLast && <ColoredHr day={day} category={category} />}
    </motion.li>
  );
};
