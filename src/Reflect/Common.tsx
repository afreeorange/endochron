import clsx from "clsx";
import type { ReactNode } from "react";
import {
  PiSmileyDuotone,
  PiSmileyMehDuotone,
  PiSmileySadDuotone,
} from "react-icons/pi";
import { useNavigate, useLocation } from "react-router";

export type YearlyCategory = "Overall" | "Pain" | "Mood" | "GI" | "Period";

const C = {
  mild: "oklch(90% 0.06 340)",
  moderate: "oklch(75% 0.14 340)",
  severe: "oklch(45% 0.18 340)",
};

export type LegendItem = { label: string; color: string; icon?: ReactNode };

export const CATEGORY_LEGEND: Record<YearlyCategory, LegendItem[]> = {
  Overall: [
    { label: "Bad",        color: "#eab308", icon: <PiSmileySadDuotone /> },
    { label: "Manageable", color: "#f87171", icon: <PiSmileyMehDuotone /> },
    { label: "Good",       color: "#16a34a", icon: <PiSmileyDuotone /> },
  ],
  Pain:   [{ label: "Mild", color: C.mild }, { label: "Moderate", color: C.moderate }, { label: "Severe", color: C.severe }],
  Mood:   [{ label: "Positive", color: C.mild }, { label: "Negative", color: C.severe }],
  GI:     [{ label: "Mild", color: C.mild }, { label: "Moderate", color: C.moderate }, { label: "Severe", color: C.severe }],
  Period: [{ label: "Light", color: C.mild }, { label: "Medium", color: C.moderate }, { label: "Heavy", color: C.severe }],
};

interface YearlySelectorProps {
  category: YearlyCategory;
  onChange: (category: YearlyCategory) => void;
}

export const YearlySelector = ({ category, onChange }: YearlySelectorProps) => (
  <div className="px-4 pb-3 w-full">
    <select
      className="select select-sm w-full"
      value={category}
      onChange={(e) => onChange(e.target.value as YearlyCategory)}
    >
      <option value="Overall">Overall</option>
      <option value="Pain">Pain</option>
      <option value="Mood">Mood</option>
      <option value="GI">GI Problems</option>
      <option value="Period">Period</option>
    </select>
  </div>
);

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
