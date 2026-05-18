// Body-zone model + aggregation for the visit-preparation view.
//
// NOTE: this intentionally uses its own Mild/Moderate/Severe-only severity
// scale (SEV_ORDER) rather than Reflect's SEV_RANK (which also ranks period
// flow words). The two are kept separate on purpose — unifying them would
// change the body-map colouring. Keep behaviour, not code, identical.

import data from "../data/store";
import { REF_DATE } from "../data/refDate";
import type {
  PainLocation,
  OtherName,
  GIName,
  PrepareSummaries,
  Severity,
} from "../data/dataTypes";

export type Zone =
  | "head"
  | "chest"
  | "gi"
  | "pelvis"
  | "fingertips"
  | "toes"
  | "lowerBack";

export type MarkerPos = { zone: Zone; x: number; y: number };

export const RANGES: {
  label: string;
  days: number;
  prepareKey: keyof PrepareSummaries;
}[] = [
  { label: "Last week", days: 7, prepareKey: "lastWeek" },
  { label: "Two weeks", days: 14, prepareKey: "twoWeeks" },
  { label: "Last month", days: 30, prepareKey: "lastMonth" },
  { label: "6 months", days: 180, prepareKey: "sixMonths" },
];

export const ZONE_PAIN: Record<Zone, PainLocation[]> = {
  head: [],
  chest: ["Upper Chest", "Ribs", "Shoulder"],
  gi: ["Abdomen", "Intestines", "Diaphragm"],
  pelvis: [
    "Pelvis",
    "Ovary",
    "Uterus",
    "Vagina",
    "Cervix",
    "Rectum",
    "Inner Thighs",
    "Outer Hip",
  ],
  fingertips: [],
  toes: ["Leg"],
  lowerBack: ["Lower Back"],
};

export const ZONE_GI: Set<Zone> = new Set(["gi"]);

export const ZONE_LABEL: Record<Zone, string> = {
  head: "Head",
  chest: "Chest",
  gi: "GI / Stomach",
  pelvis: "Pelvis",
  fingertips: "Fingertips",
  toes: "Toes / Feet",
  lowerBack: "Lower Back",
};

export const ZONE_OTHER: Record<Zone, OtherName[]> = {
  head: [
    "Headache",
    "Mentally Foggy",
    "Dizziness",
    "Sinus Congestion",
    "Blurry Vision",
    "Ringing in Ears",
  ],
  chest: ["Chest Pressure", "Asthma"],
  gi: [],
  pelvis: [],
  fingertips: ["Numbness"],
  toes: ["Numbness"],
  lowerBack: [],
};

// Marker positions as % of the body image (x, y).
export const ANTERIOR_MARKERS: MarkerPos[] = [
  { zone: "head", x: 50.5, y: 5 },
  { zone: "chest", x: 50, y: 25 },
  { zone: "gi", x: 50, y: 36 },
  { zone: "pelvis", x: 50, y: 48 },
  { zone: "fingertips", x: 10, y: 53 },
  { zone: "fingertips", x: 90, y: 53 },
  { zone: "toes", x: 41, y: 95 },
  { zone: "toes", x: 57, y: 95 },
];

export const POSTERIOR_MARKERS: MarkerPos[] = [
  { zone: "lowerBack", x: 50, y: 38 },
];

const SEV_ORDER: Severity[] = ["Mild", "Moderate", "Severe"];

function maxSev(a: Severity | null, b: Severity): Severity {
  if (!a) return b;
  return SEV_ORDER.indexOf(b) > SEV_ORDER.indexOf(a) ? b : a;
}

export function severitiesByZone(
  daysWindow: number,
): Record<Zone, Severity | null> {
  const start = REF_DATE.subtract(daysWindow, "day").format("YYYY-MM-DD");
  const result: Record<Zone, Severity | null> = {
    head: null,
    chest: null,
    gi: null,
    pelvis: null,
    fingertips: null,
    toes: null,
    lowerBack: null,
  };
  for (const dateKey of Object.keys(data.days)) {
    if (dateKey < start) continue;
    const day = data.days[dateKey];
    if (!day) continue;
    for (const [loc, sev] of day.data.pain) {
      for (const z of Object.keys(ZONE_PAIN) as Zone[]) {
        if (ZONE_PAIN[z].includes(loc)) result[z] = maxSev(result[z], sev);
      }
    }
    for (const [, sev] of day.data.gi) {
      for (const z of ZONE_GI) {
        result[z] = maxSev(result[z], sev);
      }
    }
    for (const [name, sev] of day.data.other) {
      for (const z of Object.keys(ZONE_OTHER) as Zone[]) {
        if (ZONE_OTHER[z].includes(name)) result[z] = maxSev(result[z], sev);
      }
    }
  }
  return result;
}

export type ZoneEntry = { sev: Severity; days: Set<string> };

export function entriesForZone(zone: Zone, daysWindow: number) {
  const start = REF_DATE.subtract(daysWindow, "day").format("YYYY-MM-DD");
  const pain = new Map<PainLocation, ZoneEntry>();
  const gi = new Map<GIName, ZoneEntry>();
  const other = new Map<OtherName, ZoneEntry>();
  const painLocs = new Set<PainLocation>(ZONE_PAIN[zone]);
  const otherNames = new Set<OtherName>(ZONE_OTHER[zone]);
  const includeGI = ZONE_GI.has(zone);
  const bump = <K,>(m: Map<K, ZoneEntry>, k: K, s: Severity, date: string) => {
    const cur = m.get(k);
    if (cur) {
      cur.sev = maxSev(cur.sev, s);
      cur.days.add(date);
    } else {
      m.set(k, { sev: s, days: new Set([date]) });
    }
  };

  for (const dateKey of Object.keys(data.days)) {
    if (dateKey < start) continue;
    const day = data.days[dateKey];
    if (!day) continue;
    for (const [loc, sev] of day.data.pain) {
      if (painLocs.has(loc)) bump(pain, loc, sev, dateKey);
    }
    if (includeGI) {
      for (const [name, sev] of day.data.gi) bump(gi, name, sev, dateKey);
    }
    for (const [name, sev] of day.data.other) {
      if (otherNames.has(name)) bump(other, name, sev, dateKey);
    }
  }
  return { pain, gi, other };
}

// Logged (non-null) date keys within `daysWindow` of the reference date.
export function rangeDates(daysWindow: number): string[] {
  const start = REF_DATE.subtract(daysWindow, "day").format("YYYY-MM-DD");
  return Object.keys(data.days).filter((k) => k >= start && data.days[k]);
}
