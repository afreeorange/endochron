import clsx from "clsx";
import { useState, useRef, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  PiSmileyDuotone,
  PiSmileyMehDuotone,
  PiSmileySadDuotone,
  PiQuotesDuotone,
  PiPlusCircle,
} from "react-icons/pi";
import { useNavigate, useLocation } from "react-router";
import type { DayEntry } from "../data/dataTypes";

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

// ── SEV_RANK ──────────────────────────────────────────────────────────────────

export const SEV_RANK: Record<string, number> = {
  Mild: 1,
  Light: 1,
  Moderate: 2,
  Medium: 2,
  Severe: 3,
  Heavy: 3,
};

// ── rankCls ───────────────────────────────────────────────────────────────────
// Maps sorted-by-frequency index to a rating class.
// Items with count=1 are always Mild regardless of rank.

export const rankCls = (i: number, total: number, n: number): string => {
  if (n === 1) return "rating-Mild";
  if (total <= 1) return "rating-Severe";
  const t = i / (total - 1);
  if (t < 0.34) return "rating-Severe";
  if (t < 0.67) return "rating-Moderate";
  return "rating-Mild";
};

// ── Animation variants ────────────────────────────────────────────────────────

export const fadeAnim = {
  initial: { opacity: 0, y: 4 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -4 },
  transition: { duration: 0.2, ease: "easeInOut" as const },
};

export const sectionContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export const sectionItem = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: "easeOut" as const },
  },
};

export const badgeContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
};

export const badgeItem = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.18, ease: "easeOut" as const },
  },
};

// ── SectionHeading ────────────────────────────────────────────────────────────

export const SectionHeading = ({ label }: { label: string }) => (
  <div className="flex items-center mb-1">
    <span className="font-semibold text-xs grow">{label}</span>
    <PiPlusCircle className="opacity-50 text-lg" />
  </div>
);

// ── CountPill ─────────────────────────────────────────────────────────────────

export const CountPill = ({
  label,
  cls,
  n,
}: {
  label: string;
  cls: string;
  n: number;
}) => (
  <div className="join">
    <span className={clsx("badge badge-sm join-item", cls)}>{label}</span>
    <span className="!bg-pink-200 !text-pink-800 badge badge-sm join-item">
      {n}
    </span>
  </div>
);

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
      className="flex-1 select-md md:select-lg select"
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
          ? "text-red-400"
          : "text-white opacity-100",
      )}
    />
  ),
  BAD: (
    <PiSmileySadDuotone
      className={clsx(
        selected === null || !selected
          ? "text-yellow-500"
          : "text-white opacity-100",
      )}
    />
  ),
});

// ── Nav ───────────────────────────────────────────────────────────────────────

export const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const btn = (path: string) =>
    clsx("btn-sm join-item btn", pathname.startsWith(path) && "btn-primary");

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

// ── TranscriptBlock ───────────────────────────────────────────────────────────

export const TranscriptBlock = ({
  transcript,
  onSave,
  animKey,
  label = "AI transcription. Tap to edit.",
  showQuote = true,
  className,
}: {
  transcript: string | null;
  onSave: (text: string) => void;
  animKey?: string;
  label?: string;
  showQuote?: boolean;
  className?: string;
}) => {
  const [editing, setEditing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  if (!transcript) return null;

  function startEdit() {
    setEditing(true);
    setTimeout(() => textareaRef.current?.focus(), 0);
  }

  function confirm() {
    const val = textareaRef.current?.value ?? transcript ?? "";
    onSave(val);
    setEditing(false);
  }

  return (
    <div className={clsx("flex items-start gap-2 mb-6", className)}>
      {showQuote && <PiQuotesDuotone className="text-lg rotate-180 shrink-0" />}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          {editing ? (
            <motion.div key="edit" {...fadeAnim}>
              <textarea
                ref={textareaRef}
                defaultValue={transcript}
                className="rounded-md w-full text-sm textarea textarea-bordered"
                rows={5}
              />
              <div className="grid grid-cols-2 mt-2 join">
                <button
                  className="btn btn-sm btn-primary join-item"
                  onClick={confirm}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm join-item"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={animKey ? `view-${animKey}` : "view"}
              {...fadeAnim}
            >
              <div className="text-xs cursor-pointer" onClick={startEdit}>
                {transcript}
              </div>
              <p className="opacity-25 mt-1 text-xs">{label}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// ── DayPills ──────────────────────────────────────────────────────────────────
// Compact stacked pills for a single day, filtered by category.

export const DayPills = ({
  day,
  category,
  margin = "mx-0",
}: {
  day: DayEntry;
  category: YearlyCategory;
  margin?: string;
}) => {
  const pill = `text-xs px-0.5 leading-tight rounded-sm truncate block ${margin}`;

  switch (category) {
    case "Overall":
      return (
        <div className="flex justify-center mt-1.5 text-2xl">
          {emotionMap(false)[day.overall]}
        </div>
      );
    case "Pain":
      return day.data.pain.length > 0 ? (
        <div className="flex flex-col gap-0.5 mt-1.5">
          {day.data.pain.map(([loc, sev]) => (
            <span key={loc} className={clsx(pill, `rating-${sev}`)}>
              {loc}
            </span>
          ))}
        </div>
      ) : null;
    case "Mood":
      return day.data.mood.length > 0 ? (
        <div className="flex flex-col gap-0.5 mt-1.5">
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
        <div className="flex flex-col gap-0.5 mt-1.5">
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
        <div className="flex flex-col gap-0.5 mt-1.5">
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

// ── DaySections ───────────────────────────────────────────────────────────────

export const DaySections = ({ day }: { day: DayEntry }) => (
  <motion.div variants={sectionContainer} initial="hidden" animate="visible">
    <motion.div
      variants={sectionItem}
      className="py-2 border-pink-200 border-b border-dotted"
    >
      <SectionHeading label="Pain" />
      <motion.div
        className="flex gap-x-1 overflow-x-auto overflow-y-hidden"
        variants={badgeContainer}
      >
        {day.data.pain.map(([loc, sev]) => (
          <motion.div key={loc} variants={badgeItem} className="w-fit join">
            <div className="badge badge-sm join-item">{loc}</div>
            <div
              className={`whitespace-nowrap join-item badge badge-sm rating-${sev}`}
            >
              {sev}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>

    <motion.div
      variants={sectionItem}
      className="py-2 border-pink-200 border-b border-dotted"
    >
      <SectionHeading label="Mood" />
      <motion.div
        className="flex gap-x-1 overflow-x-auto"
        variants={badgeContainer}
      >
        {day.data.mood.map(([name, pol]) => (
          <motion.div
            key={name}
            variants={badgeItem}
            className={clsx(
              "whitespace-nowrap badge badge-sm",
              pol === "POSITIVE" && "bg-pink-100",
            )}
          >
            {name}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>

    <motion.div
      variants={sectionItem}
      className="py-2 border-pink-200 border-b border-dotted"
    >
      <SectionHeading label="Period/Bleeding" />
      {day.data.period && (
        <motion.div className="flex flex-wrap gap-1" variants={badgeContainer}>
          <motion.div variants={badgeItem} className="w-fit join">
            <div
              className={`badge badge-sm join-item rating-${day.data.period.flow}`}
            >
              {day.data.period.flow}
            </div>
            <div className="whitespace-nowrap join-item badge badge-sm">
              Flow
            </div>
          </motion.div>
          {day.data.period.other.map((o) => (
            <motion.div key={o} variants={badgeItem} className="badge badge-sm">
              {o}
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>

    <motion.div
      variants={sectionItem}
      className="py-2 border-pink-200 border-b border-dotted"
    >
      <SectionHeading label="GI/Urinary" />
      <motion.div className="flex flex-wrap gap-1" variants={badgeContainer}>
        {day.data.gi.map(([name, sev]) => (
          <motion.div key={name} variants={badgeItem} className="w-fit join">
            <div className="whitespace-nowrap join-item badge badge-sm">
              {name}
            </div>
            <div className={`join-item badge badge-sm rating-${sev}`}>
              {sev}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>

    <motion.div
      variants={sectionItem}
      className="py-2 border-pink-200 border-b border-dotted"
    >
      <SectionHeading label="Hard to Do" />
      <motion.div className="flex flex-wrap gap-1" variants={badgeContainer}>
        {day.data.hardToDo.map((item) => (
          <motion.div
            key={item}
            variants={badgeItem}
            className="whitespace-nowrap badge badge-sm"
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>

    <motion.div variants={sectionItem} className="py-2">
      <SectionHeading label="Other" />
      <motion.div className="flex flex-wrap gap-1" variants={badgeContainer}>
        {day.data.other.map(([name, sev]) => (
          <motion.div key={name} variants={badgeItem} className="w-fit join">
            <div className="whitespace-nowrap join-item badge badge-sm">
              {name}
            </div>
            <div className={`join-item badge badge-sm rating-${sev}`}>
              {sev}
            </div>
          </motion.div>
        ))}
        {day.data.medications.map((med) => (
          <motion.div key={med} variants={badgeItem} className="badge badge-sm">
            {med}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </motion.div>
);
