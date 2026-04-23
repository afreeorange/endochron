import type { DayEntry } from "../../data/dataTypes";
import { C, CATEGORY_LEGEND } from "../Common";
import type { YearlyCategory } from "../Common";

export const COLOR_EMPTY = C.mild;

const overallColor = Object.fromEntries(
  CATEGORY_LEGEND.Overall.map(({ label, color }) => [
    label.toUpperCase(),
    color,
  ]),
) as Record<string, string>;

export function dayColor(
  day: DayEntry | null | undefined,
  category: YearlyCategory,
): string {
  if (!day) return "";
  switch (category) {
    case "Overall":
      return overallColor[day.overall] ?? "";
    case "Pain": {
      const sevs = day.data.pain.map(([, s]) => s);
      return sevs.includes("Severe")
        ? C.severe
        : sevs.includes("Moderate")
          ? C.moderate
          : sevs.length > 0
            ? C.mild
            : "";
    }
    case "GI": {
      const sevs = day.data.gi.map(([, s]) => s);
      return sevs.includes("Severe")
        ? C.severe
        : sevs.includes("Moderate")
          ? C.moderate
          : sevs.length > 0
            ? C.mild
            : "";
    }
    case "Period":
      return !day.data.period
        ? ""
        : day.data.period.flow === "Heavy"
          ? C.severe
          : day.data.period.flow === "Medium"
            ? C.moderate
            : C.mild;
    case "Mood":
      return day.data.mood.some(([, p]) => p === "NEGATIVE")
        ? C.severe
        : day.data.mood.some(([, p]) => p === "POSITIVE")
          ? C.mild
          : "";
    default:
      return "";
  }
}

export function hasCategoryData(
  day: DayEntry | null | undefined,
  category: YearlyCategory,
): boolean {
  if (!day) return false;
  switch (category) {
    case "Overall":
      return true;
    case "Pain":
      return day.data.pain.length > 0;
    case "Mood":
      return day.data.mood.length > 0;
    case "GI":
      return day.data.gi.length > 0;
    case "Period":
      return !!day.data.period;
  }
}
