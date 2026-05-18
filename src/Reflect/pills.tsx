import clsx from "clsx";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import { PiPencilDuotone } from "react-icons/pi";
import type { DayEntry } from "../data/dataTypes";
import { useDatasetVersion } from "../data/store";
import { badgeItem } from "./animations";
import { emotionMap, type YearlyCategory } from "./categories";

// ── SectionHeading ────────────────────────────────────────────────────────────
// Section title with an optional add (pencil) action.

export const SectionHeading = ({
  label,
  onEdit,
}: {
  label: string;
  onEdit?: () => void;
}) => (
  <div className="flex items-center mb-1">
    <span className="font-semibold text-sm grow">{label}</span>
    <button
      type="button"
      aria-label={`Add to ${label}`}
      className="btn btn-sm btn-circle"
      onClick={onEdit}
    >
      <PiPencilDuotone className="text-xl" />
    </button>
  </div>
);

// ── FactorPill ────────────────────────────────────────────────────────────────
// Tappable joined-badge group (e.g. name + severity). Reusable across the
// per-day sections.

export const FactorPill = ({
  onClick,
  children,
  className,
}: {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) => (
  <motion.button
    type="button"
    variants={badgeItem}
    onClick={onClick}
    className={clsx("w-fit join cursor-pointer", className)}
  >
    {children}
  </motion.button>
);

// ── DayPills ──────────────────────────────────────────────────────────────────
// Compact stacked pills for a single day, filtered by category.

export const DayPills = ({
  day,
  category,
  margin = "mx-0",
  isVertical = false,
}: {
  day: DayEntry;
  category: YearlyCategory;
  margin?: string;
  isVertical?: boolean;
}) => {
  useDatasetVersion();
  const mt = isVertical ? "" : "mt-1.5";
  const pill = `text-xs px-0.5 leading-tight rounded-sm truncate block ${margin}`;

  switch (category) {
    case "Overall":
      return (
        <div className={`flex justify-end ${mt} text-2xl`}>
          {emotionMap(false)[day.overall]}
        </div>
      );
    case "Pain":
      return day.data.pain.length > 0 ? (
        <div className={`flex flex-col gap-0.5 ${mt}`}>
          {day.data.pain.map(([loc, sev]) => (
            <span key={loc} className={clsx(pill, `rating-${sev}`)}>
              {loc}
            </span>
          ))}
        </div>
      ) : null;
    case "Mood":
      return day.data.mood.length > 0 ? (
        <div className={`flex flex-col gap-0.5 ${mt}`}>
          {day.data.mood.map(([name, pol]) => (
            <span
              key={name}
              className={clsx(
                pill,
                pol === "POSITIVE"
                  ? "bg-pink-100 text-pink-700"
                  : "bg-pink-800 text-white",
              )}
            >
              {name}
            </span>
          ))}
        </div>
      ) : null;
    case "Period":
      return day.data.period ? (
        <div className={`flex flex-col gap-0.5 ${mt}`}>
          <span className={clsx(pill, `rating-${day.data.period.flow}`)}>
            {day.data.period.flow}
          </span>
          {day.data.period.other.map((o) => (
            <span key={o} className={clsx(pill, "bg-pink-100 text-pink-700")}>
              {o}
            </span>
          ))}
        </div>
      ) : null;
    case "GI":
      return day.data.gi.length > 0 ? (
        <div className={`flex flex-col gap-0.5 ${mt}`}>
          {day.data.gi.map(([name, sev]) => (
            <span key={name} className={clsx(pill, `rating-${sev}`)}>
              {name}
            </span>
          ))}
        </div>
      ) : null;
    default:
      return null;
  }
};
