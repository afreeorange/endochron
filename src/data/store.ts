// ============================================================================
// Patch-on-load dataset store
// ----------------------------------------------------------------------------
// The synthetic dataset is immutable. User factor edits are kept as a
// per-day `DayData` override patch persisted to localStorage and merged over
// the base dataset at module load. Mutators edit the in-memory merged dataset
// in place (factor edits never add/remove day keys, so module-scope
// `Object.keys(data.days)` reads in consumers stay valid) and bump a version
// that `useDatasetVersion()` subscribes to so mounted pill views re-render.
// ============================================================================

import { useSyncExternalStore } from "react";
import base from "./syntheticData";
import { moodPolarity } from "./lexicon";
import type {
  Dataset,
  DayData,
  PainEntry,
  PainLocation,
  MoodEntry,
  MoodName,
  GIEntry,
  GIName,
  OtherEntry,
  OtherName,
  HardToDo,
  Flow,
  PeriodOther,
  Severity,
} from "./dataTypes";

const PATCH_KEY = "endo_factor_patch_v1";

export type EditCategory =
  | "Pain"
  | "Mood"
  | "Period"
  | "GI"
  | "HardToDo"
  | "Other"
  | "Medications";

// Sentinel key for the period flow pill (vs. a PeriodOther factor).
export const PERIOD_FLOW = "__flow__";

type Patch = Record<string, DayData>;

function loadPatch(): Patch {
  try {
    const raw = localStorage.getItem(PATCH_KEY);
    return raw ? (JSON.parse(raw) as Patch) : {};
  } catch {
    return {};
  }
}

let patch: Patch = loadPatch();

function persist() {
  try {
    localStorage.setItem(PATCH_KEY, JSON.stringify(patch));
  } catch {
    // localStorage unavailable — edits stay in memory for this session.
  }
}

function cloneDayData(d: DayData): DayData {
  return {
    pain: d.pain.map(([l, s]): PainEntry => [l, s]),
    mood: d.mood.map(([n, p]): MoodEntry => [n, p]),
    period: d.period
      ? { flow: d.period.flow, other: [...d.period.other] }
      : null,
    gi: d.gi.map(([n, s]): GIEntry => [n, s]),
    hardToDo: [...d.hardToDo],
    other: d.other.map(([n, s]): OtherEntry => [n, s]),
    medications: [...d.medications],
  };
}

// Build the merged dataset. Days are cloned so mutators never touch the base
// synthetic import; a saved patch replaces a day's `data` wholesale.
const dataset: Dataset = {
  days: {},
  months: base.months,
  weeks: base.weeks,
  prepare: base.prepare,
};
for (const [date, day] of Object.entries(base.days)) {
  if (day == null) {
    dataset.days[date] = null;
    continue;
  }
  const patched = patch[date];
  dataset.days[date] = { ...day, data: patched ?? cloneDayData(day.data) };
}

// ── version / subscription ───────────────────────────────────────────────────

let version = 0;
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}
const getVersion = () => version;

/** Subscribe a component to factor edits so it re-renders on mutation. */
export function useDatasetVersion(): number {
  return useSyncExternalStore(subscribe, getVersion, getVersion);
}

// ── mutation core ────────────────────────────────────────────────────────────

/** Mutate one day's DayData in place (no persist / notify). */
function applyToDate(date: string, fn: (d: DayData) => void): boolean {
  const day = dataset.days[date];
  if (!day) return false;
  fn(day.data);
  patch[date] = day.data;
  return true;
}

function commit(changed: boolean) {
  if (!changed) return;
  persist();
  version++;
  listeners.forEach((l) => l());
}

function removeFromDay(d: DayData, cat: EditCategory, key: string) {
  switch (cat) {
    case "Pain":
      d.pain = d.pain.filter(([l]) => l !== key);
      break;
    case "Mood":
      d.mood = d.mood.filter(([n]) => n !== key);
      break;
    case "GI":
      d.gi = d.gi.filter(([n]) => n !== key);
      break;
    case "Other":
      d.other = d.other.filter(([n]) => n !== key);
      break;
    case "HardToDo":
      d.hardToDo = d.hardToDo.filter((h) => h !== key);
      break;
    case "Medications":
      d.medications = d.medications.filter((m) => m !== key);
      break;
    case "Period":
      if (!d.period) break;
      if (key === PERIOD_FLOW) d.period = null;
      else d.period.other = d.period.other.filter((o) => o !== key);
      break;
  }
}

function setSeverityOnDay(
  d: DayData,
  cat: EditCategory,
  key: string,
  value: string,
) {
  switch (cat) {
    case "Pain":
      d.pain = d.pain.map(([l, s]): PainEntry =>
        l === key ? [l, value as Severity] : [l, s],
      );
      break;
    case "GI":
      d.gi = d.gi.map(([n, s]): GIEntry =>
        n === key ? [n, value as Severity] : [n, s],
      );
      break;
    case "Other":
      d.other = d.other.map(([n, s]): OtherEntry =>
        n === key ? [n, value as Severity] : [n, s],
      );
      break;
    case "Mood":
      d.mood = d.mood.map(([n, p]): MoodEntry =>
        n === key ? [n, value as MoodEntry[1]] : [n, p],
      );
      break;
    case "Period":
      if (d.period && key === PERIOD_FLOW) d.period.flow = value as Flow;
      break;
    case "HardToDo":
    case "Medications":
      break;
  }
}

function addToDay(
  d: DayData,
  cat: EditCategory,
  value: string,
  sev: Severity = "Mild",
) {
  switch (cat) {
    case "Pain":
      if (!d.pain.some(([l]) => l === value))
        d.pain.push([value as PainLocation, sev]);
      break;
    case "Mood":
      if (!d.mood.some(([n]) => n === value))
        d.mood.push([value as MoodName, moodPolarity(value as MoodName)]);
      break;
    case "GI":
      if (!d.gi.some(([n]) => n === value))
        d.gi.push([value as GIName, sev]);
      break;
    case "Other":
      if (!d.other.some(([n]) => n === value))
        d.other.push([value as OtherName, sev]);
      break;
    case "HardToDo":
      if (!d.hardToDo.includes(value as HardToDo))
        d.hardToDo.push(value as HardToDo);
      break;
    case "Medications": {
      const v = value.trim();
      if (v && !d.medications.includes(v)) d.medications.push(v);
      break;
    }
    case "Period": {
      if (!d.period) d.period = { flow: "Light", other: [] };
      if (value === PERIOD_FLOW || (["Light", "Medium", "Heavy"] as string[]).includes(value)) {
        if (value !== PERIOD_FLOW) d.period.flow = value as Flow;
      } else if (!d.period.other.includes(value as PeriodOther)) {
        d.period.other.push(value as PeriodOther);
      }
      break;
    }
  }
}

// ── public single-day mutators ───────────────────────────────────────────────

export function removeFactor(date: string, cat: EditCategory, key: string) {
  commit(applyToDate(date, (d) => removeFromDay(d, cat, key)));
}

export function setSeverity(
  date: string,
  cat: EditCategory,
  key: string,
  value: string,
) {
  commit(applyToDate(date, (d) => setSeverityOnDay(d, cat, key, value)));
}

export function addFactor(
  date: string,
  cat: EditCategory,
  value: string,
  sev?: Severity,
) {
  commit(applyToDate(date, (d) => addToDay(d, cat, value, sev)));
}

// ── range mutators (aggregate pills) ─────────────────────────────────────────

/** Logged (non-null) dates in `dates`, ascending. */
function loggedDates(dates: string[]): string[] {
  return dates.filter((dt) => dataset.days[dt]).sort();
}

export function removeFactorRange(
  dates: string[],
  cat: EditCategory,
  key: string,
) {
  let changed = false;
  for (const dt of dates)
    changed = applyToDate(dt, (d) => removeFromDay(d, cat, key)) || changed;
  commit(changed);
}

export function setSeverityRange(
  dates: string[],
  cat: EditCategory,
  key: string,
  value: string,
) {
  let changed = false;
  for (const dt of dates)
    changed =
      applyToDate(dt, (d) => setSeverityOnDay(d, cat, key, value)) || changed;
  commit(changed);
}

/**
 * Add a factor to the most recent logged day in range. Returns that date (so
 * the UI can tell the user where it landed), or null if no logged day exists.
 */
export function addFactorToLatest(
  dates: string[],
  cat: EditCategory,
  value: string,
  sev?: Severity,
): string | null {
  const logged = loggedDates(dates);
  const target = logged[logged.length - 1] ?? null;
  if (!target) return null;
  commit(applyToDate(target, (d) => addToDay(d, cat, value, sev)));
  return target;
}

export default dataset;
