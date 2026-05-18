import dayjs from "dayjs";
import clsx from "clsx";
import data from "../../data/store";
import { DayPills } from "../pills";
import type { YearlyCategory } from "../categories";

const DOW = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export function MonthGrid({
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
    ...Array<null>((start.day() + 1) % 7).fill(null),
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
      <div className="grid grid-cols-7 mr-2 mb-1">
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
                  ? "border border-pink-200/60 hover:border-pink-300/80 hover:bg-pink-100 cursor-pointer"
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
