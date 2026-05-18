import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";
import { PiArrowDownDuotone } from "react-icons/pi";
import { useDatasetVersion } from "../data/store";
import {
  FactorEditor,
  type EditScope,
  type FactorTarget,
} from "../Reflect/FactorEditor";
import type { Severity } from "../data/dataTypes";
import {
  entriesForZone,
  rangeDates,
  ZONE_LABEL,
  type Zone,
  type ZoneEntry,
} from "./zones";

const pillVariants = {
  hidden: { opacity: 0, y: 6, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: "easeOut" as const },
  },
};

const Pill = ({
  name,
  days,
  sev,
  onClick,
}: {
  name: string;
  days: number;
  sev: Severity;
  onClick: () => void;
}) => (
  <motion.button
    type="button"
    className="w-fit join cursor-pointer"
    variants={pillVariants}
    onClick={onClick}
  >
    <div className="badge badge-sm join-item">{name}</div>
    <div className="whitespace-nowrap badge badge-sm join-item">
      {days} {days === 1 ? "day" : "days"}
    </div>
    <div
      className={clsx(
        "whitespace-nowrap badge badge-sm join-item",
        `rating-${sev}`,
      )}
    >
      {sev}
    </div>
  </motion.button>
);

const PillGroup = ({
  label,
  entries,
  onEdit,
  onAdd,
}: {
  label: string;
  entries: [string, ZoneEntry][];
  onEdit: (name: string, sev: Severity) => void;
  onAdd: () => void;
}) => (
  <div className="mb-2 last:mb-0">
    <div className="mb-1 font-semibold text-pink-500 text-xs">{label}</div>
    <motion.div
      className="flex flex-wrap gap-1"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.04 } },
      }}
    >
      {entries.map(([n, e]) => (
        <Pill
          key={n}
          name={n}
          days={e.days.size}
          sev={e.sev}
          onClick={() => onEdit(n, e.sev)}
        />
      ))}
      <button
        type="button"
        className="badge badge-sm badge-outline cursor-pointer"
        onClick={onAdd}
      >
        + Add
      </button>
    </motion.div>
  </div>
);

export const ZoneSummary = ({
  zone,
  rangeLabel,
  daysWindow,
  onClose,
}: {
  zone: Zone;
  rangeLabel: string;
  daysWindow: number;
  onClose: () => void;
}) => {
  const version = useDatasetVersion();
  const { pain, gi, other } = useMemo(
    () => entriesForZone(zone, daysWindow),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [zone, daysWindow, version],
  );
  const dates = useMemo(() => rangeDates(daysWindow), [daysWindow]);
  const scope: EditScope = { kind: "range", dates, rangeLabel };
  const [target, setTarget] = useState<FactorTarget | null>(null);
  const empty = pain.size + gi.size + other.size === 0;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);
  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const update = () => {
      const overflow = el.scrollHeight > el.clientHeight + 1;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;
      setShowScrollHint(overflow && !atBottom);
    };
    update();
    el.addEventListener("scroll", update);
    return () => el.removeEventListener("scroll", update);
  }, [pain.size, gi.size, other.size]);

  const editFor =
    (cat: FactorTarget["cat"]) => (name: string, sev: Severity) =>
      setTarget({
        cat,
        factorKey: name,
        factorLabel: name,
        currentValue: sev,
      });

  return (
    <motion.div
      ref={scrollRef}
      className="bg-base-100 px-4 py-3 border-pink-200 border-t max-h-[20vh] overflow-y-auto shrink-0"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <div className="relative mb-2">
        <h2 className="pr-10 text-pink-500 text-sm">
          <span className="font-semibold">{ZONE_LABEL[zone]}</span> &ndash;{" "}
          <span className="opacity-60">{rangeLabel}</span>
        </h2>
        <div className="top-0 right-0 absolute flex flex-col items-center gap-1">
          <div className="flex gap-x-4">
            <button
              type="button"
              className="btn btn-xs btn-circle"
              onClick={onClose}
              aria-label="Close summary"
            >
              ✕
            </button>
          </div>
          <AnimatePresence>
            {showScrollHint && (
              <motion.div
                initial={{ opacity: 0, y: -2 }}
                animate={{ opacity: 0.6, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <PiArrowDownDuotone className="text-lg" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {empty && (
        <p className="opacity-60 mb-2 text-xs">
          No symptoms logged in this range. Add one below.
        </p>
      )}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.06, delayChildren: 0.1 },
          },
        }}
      >
        <PillGroup
          label="Pain"
          entries={[...pain]}
          onEdit={editFor("Pain")}
          onAdd={() => setTarget({ cat: "Pain" })}
        />
        <PillGroup
          label="GI"
          entries={[...gi]}
          onEdit={editFor("GI")}
          onAdd={() => setTarget({ cat: "GI" })}
        />
        <PillGroup
          label="Other"
          entries={[...other]}
          onEdit={editFor("Other")}
          onAdd={() => setTarget({ cat: "Other" })}
        />
      </motion.div>
      <AnimatePresence>
        {target && (
          <FactorEditor
            cat={target.cat}
            scope={scope}
            factorKey={target.factorKey}
            factorLabel={target.factorLabel}
            currentValue={target.currentValue}
            onClose={() => setTarget(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};
