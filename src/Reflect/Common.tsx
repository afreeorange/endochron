import clsx from "clsx";
import {
  PiSmileyDuotone,
  PiSmileyMehDuotone,
  PiSmileySadDuotone,
} from "react-icons/pi";
import { useNavigate, useLocation } from "react-router";
import data from "../data/syntheticData";

export type YearlyCategory =
  | "Overall"
  | "PainLocation"
  | "Mood"
  | "GI"
  | "HardToDo"
  | "Period"
  | "PeriodType";

const CATEGORY_LABELS: Record<YearlyCategory, string> = {
  Overall: "Overall",
  PainLocation: "Pain Location",
  Mood: "Mood",
  GI: "GI Problem",
  HardToDo: "Hard to Do",
  Period: "Period",
  // PeriodType: "Period Type",
};

const ALL_SUB_OPTIONS: Record<YearlyCategory, string[]> = {
  Overall: [],
  PainLocation: [
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
  ],
  Mood: [],
  GI: [
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
  ],
  HardToDo: [
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
  ],
  Period: [],
  PeriodType: ["Clots", "Spotting", "Breakthrough Bleeding"],
};

const SUB_LABELS: Record<YearlyCategory, string> = {
  Overall: "",
  PainLocation: "Location",
  Mood: "",
  GI: "Problem",
  HardToDo: "Activity",
  Period: "",
  PeriodType: "Type",
};

function computeAvailableSubs(): Record<YearlyCategory, string[]> {
  const pain = new Set<string>();
  const gi = new Set<string>();
  const hard = new Set<string>();
  const ptype = new Set<string>();
  for (const day of Object.values(data.days)) {
    if (!day) continue;
    day.data.pain.forEach(([loc]) => pain.add(loc));
    day.data.gi.forEach(([name]) => gi.add(name));
    day.data.hardToDo.forEach((h) => hard.add(h));
    day.data.period?.other.forEach((t) => ptype.add(t));
  }
  return {
    Overall: [],
    PainLocation: ALL_SUB_OPTIONS.PainLocation.filter((o) => pain.has(o)),
    Mood: [],
    GI: ALL_SUB_OPTIONS.GI.filter((o) => gi.has(o)),
    HardToDo: ALL_SUB_OPTIONS.HardToDo.filter((o) => hard.has(o)),
    Period: [],
    PeriodType: ALL_SUB_OPTIONS.PeriodType.filter((o) => ptype.has(o)),
  };
}

export const SUB_OPTIONS = computeAvailableSubs();

interface YearlySelectorProps {
  category: YearlyCategory;
  subCategory: string | null;
  onChange: (category: YearlyCategory, subCategory: string | null) => void;
}

export const YearlySelector = ({
  category,
  subCategory,
  onChange,
}: YearlySelectorProps) => {
  const subs = SUB_OPTIONS[category];
  return (
    <div className="items-center gap-2 px-4 pb-3 w-full">
      <select
        className="select-sm select"
        value={category}
        onChange={(e) => {
          const cat = e.target.value as YearlyCategory;
          const opts = SUB_OPTIONS[cat];
          onChange(cat, opts.length > 0 ? opts[0] : null);
        }}
      >
        {(Object.keys(CATEGORY_LABELS) as YearlyCategory[]).map((cat) => (
          <option key={cat} value={cat}>
            {CATEGORY_LABELS[cat]}
          </option>
        ))}
      </select>
      {subs.length > 0 && (
        <>
          <span className="text-pink-400 text-xs shrink-0">
            {SUB_LABELS[category]}
          </span>
          <select
            className="flex-1 min-w-0 select-bordered select-sm select"
            value={subCategory ?? subs[0] ?? ""}
            onChange={(e) => onChange(category, e.target.value)}
          >
            {subs.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export const emotionMap = (selected: boolean | null) => ({
  GOOD: (
    <PiSmileyDuotone
      className={
        selected === null
          ? undefined
          : clsx(selected ? "text-white opacity-100" : "text-green-600")
      }
    />
  ),
  MANAGEABLE: (
    <PiSmileyMehDuotone
      className={
        selected === null
          ? undefined
          : clsx(selected ? "text-white opacity-100" : "text-red-400")
      }
    />
  ),
  BAD: (
    <PiSmileySadDuotone
      className={
        selected === null
          ? undefined
          : clsx(selected ? "text-white opacity-100" : "text-yellow-500")
      }
    />
  ),
});

export const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const btn = (path: string) =>
    clsx("btn-xs join-item btn", pathname === path && "btn-primary");

  return (
    <div className="grid grid-cols-5 px-4 py-2 w-full join">
      <button
        className={btn("/reflect/days")}
        onClick={() => navigate("/reflect/days")}
      >
        Days
      </button>
      <button
        className={btn("/reflect/weeks")}
        onClick={() => navigate("/reflect/weeks")}
      >
        Weeks
      </button>
      <button
        className={btn("/reflect/months")}
        onClick={() => navigate("/reflect/months")}
      >
        Months
      </button>
      <button
        className={btn("/reflect/years")}
        onClick={() => navigate("/reflect/years")}
      >
        Years
      </button>
      <button
        className={btn("/reflect/any")}
        onClick={() => navigate("/reflect/any")}
      >
        Any
      </button>
    </div>
  );
};

// export const InnerShell = ({ children }: ShellProps) => {
//         <div className="flex flex-col h-full">

//         <div className="z-20 bg-base-100 px-4 pt-4 pb-2 shrink-0">
//           <Nav />

// }
