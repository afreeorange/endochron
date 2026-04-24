// ============================================================================
// Phendo-style transcript dataset — TypeScript types
// ============================================================================

export type Overall = "GOOD" | "BAD" | "MANAGEABLE";

export type Severity = "Mild" | "Moderate" | "Severe";

// ----- Pain -----

export type PainLocation =
  | "Pelvis"
  | "Ovary"
  | "Uterus"
  | "Vagina"
  | "Cervix"
  | "Rectum"
  | "Lower Back"
  | "Outer Hip"
  | "Abdomen"
  | "Inner Thighs"
  | "Shoulder"
  | "Ribs"
  | "Upper Chest"
  | "Diaphragm"
  | "Intestines"
  | "Leg";

export type PainEntry = [PainLocation, Severity];

// ----- Mood -----

export type MoodPolarity = "POSITIVE" | "NEGATIVE";

export type PositiveMood =
  | "Affectionate"
  | "Calm"
  | "Excited"
  | "Enthusiastic"
  | "Happy"
  | "Motivated"
  | "Optimistic"
  | "Productive"
  | "Relaxed"
  | "Social";

export type NegativeMood =
  | "Angry"
  | "Antisocial"
  | "Anxious"
  | "Belligerent"
  | "Contemptuous"
  | "Erratic"
  | "Defensive"
  | "Disgusted"
  | "Frustrated"
  | "Guilty"
  | "Indifferent"
  | "Irritable"
  | "Isolated"
  | "Lonely"
  | "Mentally Foggy"
  | "Overwhelmed"
  | "Sad"
  | "Scared"
  | "Whiny"
  | "Worried";

export type MoodName = PositiveMood | NegativeMood;

export type MoodEntry = [MoodName, MoodPolarity];

// ----- Period -----

export type Flow = "Heavy" | "Medium" | "Light";

export type PeriodOther = "Clots" | "Spotting" | "Breakthrough Bleeding";

export interface Period {
  flow: Flow;
  other: PeriodOther[];
}

// ----- GI / Urinary -----

export type GIName =
  | "Nausea"
  | "Endo Belly"
  | "Stomach Upset"
  | "Vomiting"
  | "Diarrhea"
  | "Constipation"
  | "Uncomfortably Full"
  | "Heartburn"
  | "Gas"
  | "Mouth Sores"
  | "Can't Urinate"
  | "Painful Urination"
  | "Painful Bowel Movement"
  | "Frequent Urination"
  | "Blood in Stool";

export type GIEntry = [GIName, Severity];

// ----- Hard To Do -----

export type HardToDo =
  | "Sleep"
  | "Get out of Bed"
  | "Use Toilet"
  | "Shower"
  | "Get Dressed"
  | "Prepare Food"
  | "Eat"
  | "Sit Down"
  | "Work"
  | "Stand"
  | "Stretch"
  | "Socialize"
  | "Shop"
  | "Have Sex"
  | "Lie Down"
  | "Run"
  | "Walk"
  | "Jump"
  | "Climb Stairs"
  | "Kneel";

// ----- Other Symptoms -----

export type OtherName =
  | "Fatigue"
  | "Numbness"
  | "Headache"
  | "Asthma"
  | "Chest Pressure"
  | "Swelling"
  | "Rash"
  | "Ringing in Ears"
  | "Eczema"
  | "Hives"
  | "Allergies"
  | "Itchy"
  | "Hot Flash"
  | "Sweaty"
  | "Touch Sensitivity"
  | "Noise Sensitivity"
  | "Mentally Foggy"
  | "Sinus Congestion"
  | "Fever"
  | "Dizziness"
  | "Blurry Vision";

export type OtherEntry = [OtherName, Severity];

// ----- Day data -----

export interface DayData {
  pain: PainEntry[];
  mood: MoodEntry[];
  period: Period | null;
  gi: GIEntry[];
  hardToDo: HardToDo[];
  other: OtherEntry[];
  medications: string[];
}

export interface DayEntry {
  overall: Overall;
  transcript: string;
  data: DayData;
}

// A day is either a logged entry or null (skipped).
export type Day = DayEntry | null;

// ----- Month -----

export interface MonthEntry {
  summary: string;
}

// ----- Week -----

export interface WeekEntry {
  summary: string;
  pain: string;
  mood: string;
  period: string;
  gi: string;
  hardToDo: string;
  other: string;
  medications: string;
}

export interface PrepareSummaries {
  lastWeek: string;
  twoWeeks: string;
  lastMonth: string;
  sixMonths: string;
}

export interface Dataset {
  days: Record<string, Day>;
  months: Record<string, MonthEntry>;
  weeks: Record<string, WeekEntry>;
  prepare: PrepareSummaries;
}
