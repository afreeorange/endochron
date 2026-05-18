// Month-index helpers derived from the dataset's day keys.

import data from "../../data/store";

const allDayKeys = Object.keys(data.days);

/** "YYYY-MM" of the most recent logged day, or "" if none. */
export function latestLoggedMonth(): string {
  return (
    allDayKeys
      .filter((k) => data.days[k])
      .sort()
      .reverse()[0]
      ?.slice(0, 7) ?? ""
  );
}

export function monthHasData(month: string): boolean {
  return allDayKeys.some((k) => k.startsWith(month) && data.days[k]);
}

/** Logged (non-null) date keys in a "YYYY-MM" month. */
export function loggedDatesInMonth(month: string): string[] {
  return allDayKeys.filter((k) => k.startsWith(month) && data.days[k]);
}

/**
 * Years (desc) → that year's months (desc). The latest data year is trimmed
 * to months up to and including the most recent logged month; earlier years
 * show all 12.
 */
export function monthsByYear(): [string, string[]][] {
  const years = [...new Set(allDayKeys.map((k) => k.slice(0, 4)))]
    .sort()
    .reverse();
  const latest = latestLoggedMonth();
  const latestYear = latest.slice(0, 4);
  return years.map((year) => {
    const all12 = Array.from(
      { length: 12 },
      (_, i) => `${year}-${String(i + 1).padStart(2, "0")}`,
    ).reverse();
    const months =
      year === latestYear ? all12.filter((m) => m <= latest) : all12;
    return [year, months] as [string, string[]];
  });
}
