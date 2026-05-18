// Runtime enumerations of the fixed Phendo taxonomy. The `satisfies` clauses
// keep these in lockstep with the union types in dataTypes.ts at compile time
// (a typo or a missing/renamed member fails the build).

import type {
  PainLocation,
  PositiveMood,
  NegativeMood,
  MoodName,
  MoodPolarity,
  Flow,
  PeriodOther,
  GIName,
  HardToDo,
  OtherName,
  Severity,
} from "./dataTypes";

export const SEVERITIES = [
  "Mild",
  "Moderate",
  "Severe",
] as const satisfies readonly Severity[];

export const PAIN_LOCATIONS = [
  "Pelvis",
  "Ovary",
  "Uterus",
  "Vagina",
  "Cervix",
  "Rectum",
  "Lower Back",
  "Outer Hip",
  "Abdomen",
  "Inner Thighs",
  "Shoulder",
  "Ribs",
  "Upper Chest",
  "Diaphragm",
  "Intestines",
  "Leg",
] as const satisfies readonly PainLocation[];

export const POSITIVE_MOODS = [
  "Affectionate",
  "Calm",
  "Excited",
  "Enthusiastic",
  "Happy",
  "Motivated",
  "Optimistic",
  "Productive",
  "Relaxed",
  "Social",
] as const satisfies readonly PositiveMood[];

export const NEGATIVE_MOODS = [
  "Angry",
  "Antisocial",
  "Anxious",
  "Belligerent",
  "Contemptuous",
  "Erratic",
  "Defensive",
  "Disgusted",
  "Frustrated",
  "Guilty",
  "Indifferent",
  "Irritable",
  "Isolated",
  "Lonely",
  "Mentally Foggy",
  "Overwhelmed",
  "Sad",
  "Scared",
  "Whiny",
  "Worried",
] as const satisfies readonly NegativeMood[];

export const MOOD_NAMES = [
  ...POSITIVE_MOODS,
  ...NEGATIVE_MOODS,
] as const satisfies readonly MoodName[];

const POSITIVE_SET = new Set<string>(POSITIVE_MOODS);

export function moodPolarity(name: MoodName): MoodPolarity {
  return POSITIVE_SET.has(name) ? "POSITIVE" : "NEGATIVE";
}

export const FLOWS = [
  "Light",
  "Medium",
  "Heavy",
] as const satisfies readonly Flow[];

export const PERIOD_OTHERS = [
  "Clots",
  "Spotting",
  "Breakthrough Bleeding",
] as const satisfies readonly PeriodOther[];

export const GI_NAMES = [
  "Nausea",
  "Endo Belly",
  "Stomach Upset",
  "Vomiting",
  "Diarrhea",
  "Constipation",
  "Uncomfortably Full",
  "Heartburn",
  "Gas",
  "Mouth Sores",
  "Can't Urinate",
  "Painful Urination",
  "Painful Bowel Movement",
  "Frequent Urination",
  "Blood in Stool",
] as const satisfies readonly GIName[];

export const HARD_TO_DO = [
  "Sleep",
  "Get out of Bed",
  "Use Toilet",
  "Shower",
  "Get Dressed",
  "Prepare Food",
  "Eat",
  "Sit Down",
  "Work",
  "Stand",
  "Stretch",
  "Socialize",
  "Shop",
  "Have Sex",
  "Lie Down",
  "Run",
  "Walk",
  "Jump",
  "Climb Stairs",
  "Kneel",
] as const satisfies readonly HardToDo[];

export const OTHER_NAMES = [
  "Fatigue",
  "Numbness",
  "Headache",
  "Asthma",
  "Chest Pressure",
  "Swelling",
  "Rash",
  "Ringing in Ears",
  "Eczema",
  "Hives",
  "Allergies",
  "Itchy",
  "Hot Flash",
  "Sweaty",
  "Touch Sensitivity",
  "Noise Sensitivity",
  "Mentally Foggy",
  "Sinus Congestion",
  "Fever",
  "Dizziness",
  "Blurry Vision",
] as const satisfies readonly OtherName[];
