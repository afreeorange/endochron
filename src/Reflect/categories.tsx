import clsx from "clsx";
import type { ReactNode } from "react";
import {
  PiSmileyDuotone,
  PiSmileyMehDuotone,
  PiSmileySadDuotone,
} from "react-icons/pi";

// ── Types ─────────────────────────────────────────────────────────────────────

export type YearlyCategory = "Overall" | "Pain" | "Mood" | "GI" | "Period";

export type LegendItem = { label: string; color: string; icon?: ReactNode };

export const C = {
  mild: "var(--color-pink-200)",
  moderate: "var(--color-pink-300)",
  severe: "var(--color-pink-700)",
};

export const CATEGORY_LEGEND: Record<YearlyCategory, LegendItem[]> = {
  Overall: [
    {
      label: "Bad",
      color: "var(--color-red-500)",
      icon: <PiSmileySadDuotone />,
    },
    {
      label: "Manageable",
      color: "var(--color-amber-400)",
      icon: <PiSmileyMehDuotone />,
    },
    {
      label: "Good",
      color: "var(--color-green-500)",
      icon: <PiSmileyDuotone />,
    },
  ],
  Pain: [
    { label: "Mild", color: C.mild },
    { label: "Moderate", color: C.moderate },
    { label: "Severe", color: C.severe },
  ],
  Mood: [
    { label: "Positive", color: C.mild },
    { label: "Negative", color: C.severe },
  ],
  GI: [
    { label: "Mild", color: C.mild },
    { label: "Moderate", color: C.moderate },
    { label: "Severe", color: C.severe },
  ],
  Period: [
    { label: "Light", color: C.mild },
    { label: "Medium", color: C.moderate },
    { label: "Heavy", color: C.severe },
  ],
};

// ── CategoryLegend ────────────────────────────────────────────────────────────

export const CategoryLegend = ({ category }: { category: YearlyCategory }) => (
  <div className="flex flex-row gap-3 shrink-0">
    {CATEGORY_LEGEND[category].map(({ label, color, icon }) => (
      <div key={label} className="flex items-center gap-1">
        {icon ? (
          <span className="text-base leading-none" style={{ color }}>
            {icon}
          </span>
        ) : (
          <span
            className="rounded-full w-2.5 h-2.5 shrink-0"
            style={{ backgroundColor: color }}
          />
        )}
        <span
          className="text-xs"
          style={{
            color,
          }}
        >
          {label}
        </span>
      </div>
    ))}
  </div>
);

// ── YearlySelector ────────────────────────────────────────────────────────────

export const YearlySelector = ({
  category,
  onChange,
  actions,
}: {
  category: YearlyCategory;
  onChange: (category: YearlyCategory) => void;
  actions?: ReactNode;
}) => (
  <div className="flex items-center gap-4 px-4 pb-3 w-full">
    <select
      className="flex-1 border-4 border-pink-400 border-double select-md md:select-lg select"
      value={category}
      onChange={(e) => onChange(e.target.value as YearlyCategory)}
    >
      <option value="Overall">Overall</option>
      <option value="Pain">Pain</option>
      <option value="Mood">Mood</option>
      <option value="GI">GI Problems</option>
      <option value="Period">Period</option>
    </select>
    {actions}
  </div>
);

// ── emotionMap ────────────────────────────────────────────────────────────────

export const emotionMap = (selected: boolean | null) => ({
  GOOD: (
    <PiSmileyDuotone
      className={clsx(
        selected === null || !selected
          ? "text-green-600"
          : "text-white opacity-100",
      )}
    />
  ),
  MANAGEABLE: (
    <PiSmileyMehDuotone
      className={clsx(
        selected === null || !selected
          ? "text-yellow-500"
          : "text-white opacity-100",
      )}
    />
  ),
  BAD: (
    <PiSmileySadDuotone
      className={clsx(
        selected === null || !selected
          ? "text-red-400"
          : "text-white opacity-100",
      )}
    />
  ),
});
