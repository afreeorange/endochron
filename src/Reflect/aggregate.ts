// Day-set aggregation for the Month rollup view: per-factor frequency counts
// plus worst observed severity. Extracted verbatim from the former inline
// MonthAggregatePills logic so output is unchanged.

import type { DayEntry } from "../data/dataTypes";
import { SEV_RANK } from "./ranking";

export const tally = (map: Record<string, number>, key: string) =>
  (map[key] = (map[key] ?? 0) + 1);

export const byFreq =
  (counts: Record<string, number>) =>
  <T extends [string, ...unknown[]]>(a: T, b: T) =>
    (counts[b[0]] ?? 0) - (counts[a[0]] ?? 0);

export const worstSev = (
  map: Record<string, string>,
  key: string,
  sev: string,
) => {
  if (!map[key] || (SEV_RANK[sev] ?? 0) > (SEV_RANK[map[key]] ?? 0))
    map[key] = sev;
};

export interface DayAggregate {
  painMap: Record<string, string>;
  painCount: Record<string, number>;
  moodMap: Record<string, string>;
  moodCount: Record<string, number>;
  giMap: Record<string, string>;
  giCount: Record<string, number>;
  otherMap: Record<string, string>;
  otherCount: Record<string, number>;
  hardToDoCount: Record<string, number>;
  medCount: Record<string, number>;
  periodFlowMap: Record<string, string>;
  periodFlowCount: number;
  periodOther: Set<string>;
  periodOtherCount: Record<string, number>;
  overallCounts: Record<string, number>;
}

export function aggregateDays(days: DayEntry[]): DayAggregate {
  const a: DayAggregate = {
    painMap: {},
    painCount: {},
    moodMap: {},
    moodCount: {},
    giMap: {},
    giCount: {},
    otherMap: {},
    otherCount: {},
    hardToDoCount: {},
    medCount: {},
    periodFlowMap: {},
    periodFlowCount: 0,
    periodOther: new Set<string>(),
    periodOtherCount: {},
    overallCounts: {},
  };

  for (const d of days) {
    tally(a.overallCounts, d.overall);
    d.data.pain.forEach(([loc, sev]) => {
      worstSev(a.painMap, loc, sev);
      tally(a.painCount, loc);
    });
    d.data.mood.forEach(([name, pol]) => {
      if (!a.moodMap[name] || pol === "NEGATIVE") a.moodMap[name] = pol;
      tally(a.moodCount, name);
    });
    d.data.gi.forEach(([name, sev]) => {
      worstSev(a.giMap, name, sev);
      tally(a.giCount, name);
    });
    d.data.other.forEach(([name, sev]) => {
      worstSev(a.otherMap, name, sev);
      tally(a.otherCount, name);
    });
    d.data.hardToDo.forEach((item) => tally(a.hardToDoCount, item));
    d.data.medications.forEach((med) => tally(a.medCount, med));
    if (d.data.period) {
      worstSev(a.periodFlowMap, "flow", d.data.period.flow);
      a.periodFlowCount++;
      d.data.period.other.forEach((o) => {
        a.periodOther.add(o);
        tally(a.periodOtherCount, o);
      });
    }
  }

  return a;
}
