import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import dayjs from "dayjs";
import {
  removeFactor,
  removeFactorRange,
  setSeverity,
  setSeverityRange,
  addFactor,
  addFactorToLatest,
  PERIOD_FLOW,
  type EditCategory,
} from "../data/store";
import dataset from "../data/store";
import {
  SEVERITIES,
  FLOWS,
  PERIOD_OTHERS,
  PAIN_LOCATIONS,
  MOOD_NAMES,
  GI_NAMES,
  OTHER_NAMES,
  HARD_TO_DO,
} from "../data/lexicon";

// ── scope ─────────────────────────────────────────────────────────────────────

export type EditScope =
  | { kind: "day"; date: string }
  | { kind: "range"; dates: string[]; rangeLabel: string };

/**
 * What a pill tap opens in the editor. Shared by every editable pill surface
 * (day sections, month aggregate, prepare zones). Absent `factorKey` = add mode.
 */
export type FactorTarget = {
  cat: EditCategory;
  factorKey?: string;
  factorLabel?: string;
  currentValue?: string;
};

export interface FactorEditorProps {
  cat: EditCategory;
  scope: EditScope;
  /** Present → edit/remove this factor. Absent → add mode. */
  factorKey?: string;
  factorLabel?: string;
  /** Current severity / flow / polarity for the edited factor. */
  currentValue?: string;
  onClose: () => void;
}

// ── helpers ───────────────────────────────────────────────────────────────────

function valueOptions(
  cat: EditCategory,
  key?: string,
): { label: string; values: readonly string[]; render: (v: string) => string } | null {
  if (cat === "Pain" || cat === "GI" || cat === "Other")
    return { label: "Severity", values: SEVERITIES, render: (v) => v };
  if (cat === "Mood")
    return {
      label: "Tone",
      values: ["POSITIVE", "NEGATIVE"],
      render: (v) => (v === "POSITIVE" ? "Positive" : "Negative"),
    };
  if (cat === "Period" && key === PERIOD_FLOW)
    return { label: "Flow", values: FLOWS, render: (v) => v };
  return null;
}

function addLexicon(cat: EditCategory): readonly string[] {
  switch (cat) {
    case "Pain":
      return PAIN_LOCATIONS;
    case "Mood":
      return MOOD_NAMES;
    case "GI":
      return GI_NAMES;
    case "Other":
      return OTHER_NAMES;
    case "HardToDo":
      return HARD_TO_DO;
    case "Period":
      return [...FLOWS, ...PERIOD_OTHERS];
    case "Medications":
      return [];
  }
}

function presentKeys(cat: EditCategory, date: string): Set<string> {
  const d = dataset.days[date]?.data;
  if (!d) return new Set();
  switch (cat) {
    case "Pain":
      return new Set(d.pain.map(([l]) => l));
    case "Mood":
      return new Set(d.mood.map(([n]) => n));
    case "GI":
      return new Set(d.gi.map(([n]) => n));
    case "Other":
      return new Set(d.other.map(([n]) => n));
    case "HardToDo":
      return new Set(d.hardToDo);
    case "Medications":
      return new Set(d.medications);
    case "Period": {
      const s = new Set<string>(d.period?.other ?? []);
      if (d.period) s.add(d.period.flow);
      return s;
    }
  }
}

const CAT_LABEL: Record<EditCategory, string> = {
  Pain: "Pain",
  Mood: "Mood",
  Period: "Period / Bleeding",
  GI: "GI / Urinary",
  HardToDo: "Hard to Do",
  Other: "Other",
  Medications: "Medications",
};

// ── component ─────────────────────────────────────────────────────────────────

export const FactorEditor = ({
  cat,
  scope,
  factorKey,
  factorLabel,
  currentValue,
  onClose,
}: FactorEditorProps) => {
  const isAdd = factorKey === undefined;
  const [medText, setMedText] = useState("");
  const [landed, setLanded] = useState<string | null>(null);

  const loggedCount =
    scope.kind === "range"
      ? scope.dates.filter((d) => dataset.days[d]).length
      : 1;

  const scopeNote =
    scope.kind === "range"
      ? `${loggedCount} logged ${loggedCount === 1 ? "day" : "days"} · ${scope.rangeLabel}`
      : dayjs(scope.date).format("ddd, MMM D ’YY");

  const opts = valueOptions(cat, factorKey);

  const doRemove = () => {
    if (scope.kind === "day") removeFactor(scope.date, cat, factorKey!);
    else removeFactorRange(scope.dates, cat, factorKey!);
    onClose();
  };

  const doSetValue = (v: string) => {
    if (scope.kind === "day") setSeverity(scope.date, cat, factorKey!, v);
    else setSeverityRange(scope.dates, cat, factorKey!, v);
    onClose();
  };

  const doAdd = (value: string, sev?: "Mild" | "Moderate" | "Severe") => {
    if (scope.kind === "day") {
      addFactor(scope.date, cat, value, sev);
      onClose();
      return;
    }
    const target = addFactorToLatest(scope.dates, cat, value, sev);
    if (target) setLanded(target);
    else onClose();
  };

  // Add-mode severity for Pain / GI / Other (Period uses the flow value itself).
  const [addSev, setAddSev] = useState<"Mild" | "Moderate" | "Severe">("Mild");
  const sevForAdd =
    cat === "Pain" || cat === "GI" || cat === "Other" ? addSev : undefined;

  const addList = isAdd
    ? addLexicon(cat).filter(
        (v) =>
          scope.kind !== "day" || !presentKeys(cat, scope.date).has(v),
      )
    : [];

  return (
    <div className="z-80 fixed inset-0 flex items-end sm:items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`Edit ${CAT_LABEL[cat]}`}
        className="relative bg-base-100 shadow-xl p-5 border border-pink-300 rounded-t-2xl sm:rounded-2xl w-full sm:max-w-md max-h-[80vh] overflow-y-auto"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <div className="mb-3">
          <div className="font-semibold text-pink-600 text-lg">
            {isAdd ? `Add ${CAT_LABEL[cat]}` : factorLabel}
          </div>
          <div className="text-pink-400 text-xs">
            {!isAdd && `${CAT_LABEL[cat]} · `}
            {scopeNote}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {landed ? (
            <motion.div
              key="landed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-2"
            >
              <p className="mb-4 text-sm">
                Added to your latest logged day in range —{" "}
                <span className="font-medium">
                  {dayjs(landed).format("ddd, MMM D ’YY")}
                </span>
                .
              </p>
              <button
                type="button"
                className="btn btn-primary btn-block btn-sm"
                onClick={onClose}
              >
                Done
              </button>
            </motion.div>
          ) : isAdd ? (
            <motion.div key="add" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {cat === "Medications" ? (
                <form
                  className="join w-full"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (medText.trim()) doAdd(medText.trim());
                  }}
                >
                  <input
                    autoFocus
                    value={medText}
                    onChange={(e) => setMedText(e.target.value)}
                    placeholder="Medication name"
                    className="input input-bordered join-item w-full"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary join-item"
                    disabled={!medText.trim()}
                  >
                    Add
                  </button>
                </form>
              ) : (
                <>
                  {sevForAdd && (
                    <div className="mb-3">
                      <div className="mb-1 text-pink-400 text-xs">Severity</div>
                      <div className="w-full join">
                        {SEVERITIES.map((s) => (
                          <button
                            key={s}
                            type="button"
                            className={clsx(
                              "flex-1 btn btn-sm join-item",
                              addSev === s && "btn-primary",
                            )}
                            onClick={() => setAddSev(s)}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {addList.length === 0 && (
                      <p className="opacity-60 text-sm">
                        Everything in this category is already logged here.
                      </p>
                    )}
                    {addList.map((v) => (
                      <button
                        key={v}
                        type="button"
                        className="badge badge-lg hover:badge-primary"
                        onClick={() => doAdd(v, sevForAdd)}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="edit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {opts && (
                <div className="mb-4">
                  <div className="mb-1 text-pink-400 text-xs">{opts.label}</div>
                  <div className="w-full join">
                    {opts.values.map((v) => (
                      <button
                        key={v}
                        type="button"
                        className={clsx(
                          "flex-1 btn btn-sm join-item",
                          currentValue === v && "btn-primary",
                        )}
                        onClick={() => doSetValue(v)}
                      >
                        {opts.render(v)}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <button
                type="button"
                className="btn btn-outline btn-error btn-block btn-sm"
                onClick={doRemove}
              >
                Remove {scope.kind === "range" ? "from all logged days" : ""}
              </button>
              <button
                type="button"
                className="mt-2 btn btn-ghost btn-block btn-sm"
                onClick={onClose}
              >
                Cancel
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FactorEditor;
