import dayjs from "dayjs";
import data from "../../data/syntheticData";
import type { YearlyCategory } from "../Common";

const allDayKeys = Object.keys(data.days);

export function getMonthsWithData(): string[] {
  return [
    ...new Set(
      allDayKeys.filter((k) => data.days[k]).map((k) => k.slice(0, 7)),
    ),
  ].sort();
}

export function getWeeksForMonth(yearMonth: string): string[] {
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

export function getDaysForWeek(weekStart: string): string[] {
  return Array.from({ length: 7 }, (_, i) =>
    dayjs(weekStart).add(i, "day").format("YYYY-MM-DD"),
  );
}

export function weekDateRange(weekStart: string): string {
  const start = dayjs(weekStart);
  const end = start.add(6, "day");
  return start.month() === end.month()
    ? `${start.format("MMM DD")}–${end.format("DD")}`
    : `${start.format("MMM DD")}–${end.format("MMM DD")}`;
}

export function weekSummaryKey(category: YearlyCategory) {
  switch (category) {
    case "Pain":   return "pain" as const;
    case "Mood":   return "mood" as const;
    case "Period": return "period" as const;
    case "GI":     return "gi" as const;
    default:       return "summary" as const;
  }
}

export function groupMonthsByYear(months: string[]): [string, string[]][] {
  const byYear: Record<string, string[]> = {};
  for (const m of months) (byYear[m.slice(0, 4)] ??= []).push(m);
  return (Object.entries(byYear) as [string, string[]][]).reverse();
}
