import { useMemo, useState } from "react";
import dayjs from "dayjs";
import clsx from "clsx";
import { motion, AnimatePresence } from "motion/react";
import Shell from "../Shell";
import data from "../data/syntheticData";
import type {
  PainLocation,
  OtherName,
  GIName,
  Severity,
} from "../data/dataTypes";

const REF_DATE = dayjs("2026-08-19");

type Zone =
  | "head"
  | "chest"
  | "gi"
  | "pelvis"
  | "fingertips"
  | "toes"
  | "lowerBack";

const RANGES = [
  { label: "Last week", days: 7 },
  { label: "Two weeks", days: 14 },
  { label: "Last month", days: 30 },
  { label: "6 months", days: 180 },
] as const;

const ZONE_PAIN: Record<Zone, PainLocation[]> = {
  head: [],
  chest: ["Upper Chest", "Ribs", "Shoulder"],
  gi: ["Abdomen", "Intestines", "Diaphragm"],
  pelvis: [
    "Pelvis",
    "Ovary",
    "Uterus",
    "Vagina",
    "Cervix",
    "Rectum",
    "Inner Thighs",
    "Outer Hip",
  ],
  fingertips: [],
  toes: ["Leg"],
  lowerBack: ["Lower Back"],
};

const ZONE_GI: Set<Zone> = new Set(["gi"]);

const ZONE_LABEL: Record<Zone, string> = {
  head: "Head",
  chest: "Chest",
  gi: "GI / Stomach",
  pelvis: "Pelvis",
  fingertips: "Fingertips",
  toes: "Toes / Feet",
  lowerBack: "Lower Back",
};

const ZONE_OTHER: Record<Zone, OtherName[]> = {
  head: [
    "Headache",
    "Mentally Foggy",
    "Dizziness",
    "Sinus Congestion",
    "Blurry Vision",
    "Ringing in Ears",
  ],
  chest: ["Chest Pressure", "Asthma"],
  gi: [],
  pelvis: [],
  fingertips: ["Numbness"],
  toes: ["Numbness"],
  lowerBack: [],
};

// Marker positions as % of the body image (x, y).
const ANTERIOR_MARKERS: { zone: Zone; x: number; y: number }[] = [
  { zone: "head", x: 50.5, y: 5 },
  { zone: "chest", x: 50, y: 25 },
  { zone: "gi", x: 50, y: 36 },
  { zone: "pelvis", x: 50, y: 48 },
  { zone: "fingertips", x: 22, y: 53 },
  { zone: "fingertips", x: 78, y: 53 },
  { zone: "toes", x: 41, y: 95 },
  { zone: "toes", x: 57, y: 95 },
];

const POSTERIOR_MARKERS: { zone: Zone; x: number; y: number }[] = [
  { zone: "lowerBack", x: 50, y: 38 },
];

const SEV_ORDER: Severity[] = ["Mild", "Moderate", "Severe"];

function maxSev(a: Severity | null, b: Severity): Severity {
  if (!a) return b;
  return SEV_ORDER.indexOf(b) > SEV_ORDER.indexOf(a) ? b : a;
}

function severitiesByZone(daysWindow: number): Record<Zone, Severity | null> {
  const start = REF_DATE.subtract(daysWindow, "day").format("YYYY-MM-DD");
  const result: Record<Zone, Severity | null> = {
    head: null,
    chest: null,
    gi: null,
    pelvis: null,
    fingertips: null,
    toes: null,
    lowerBack: null,
  };
  for (const dateKey of Object.keys(data.days)) {
    if (dateKey < start) continue;
    const day = data.days[dateKey];
    if (!day) continue;
    for (const [loc, sev] of day.data.pain) {
      for (const z of Object.keys(ZONE_PAIN) as Zone[]) {
        if (ZONE_PAIN[z].includes(loc)) result[z] = maxSev(result[z], sev);
      }
    }
    for (const [, sev] of day.data.gi) {
      for (const z of ZONE_GI) {
        result[z] = maxSev(result[z], sev);
      }
    }
    for (const [name, sev] of day.data.other) {
      for (const z of Object.keys(ZONE_OTHER) as Zone[]) {
        if (ZONE_OTHER[z].includes(name)) result[z] = maxSev(result[z], sev);
      }
    }
  }
  return result;
}

type ZoneEntry = { sev: Severity; days: Set<string> };

function entriesForZone(zone: Zone, daysWindow: number) {
  const start = REF_DATE.subtract(daysWindow, "day").format("YYYY-MM-DD");
  const pain = new Map<PainLocation, ZoneEntry>();
  const gi = new Map<GIName, ZoneEntry>();
  const other = new Map<OtherName, ZoneEntry>();
  const painLocs = new Set<PainLocation>(ZONE_PAIN[zone]);
  const otherNames = new Set<OtherName>(ZONE_OTHER[zone]);
  const includeGI = ZONE_GI.has(zone);
  const bump = <K,>(m: Map<K, ZoneEntry>, k: K, s: Severity, date: string) => {
    const cur = m.get(k);
    if (cur) {
      cur.sev = maxSev(cur.sev, s);
      cur.days.add(date);
    } else {
      m.set(k, { sev: s, days: new Set([date]) });
    }
  };

  for (const dateKey of Object.keys(data.days)) {
    if (dateKey < start) continue;
    const day = data.days[dateKey];
    if (!day) continue;
    for (const [loc, sev] of day.data.pain) {
      if (painLocs.has(loc)) bump(pain, loc, sev, dateKey);
    }
    if (includeGI) {
      for (const [name, sev] of day.data.gi) bump(gi, name, sev, dateKey);
    }
    for (const [name, sev] of day.data.other) {
      if (otherNames.has(name)) bump(other, name, sev, dateKey);
    }
  }
  return { pain, gi, other };
}

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
}: {
  name: string;
  days: number;
  sev: Severity;
}) => (
  <motion.div className="w-fit join" variants={pillVariants}>
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
  </motion.div>
);

const PillGroup = ({
  label,
  entries,
}: {
  label: string;
  entries: [string, ZoneEntry][];
}) => {
  if (entries.length === 0) return null;
  return (
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
          <Pill key={n} name={n} days={e.days.size} sev={e.sev} />
        ))}
      </motion.div>
    </div>
  );
};

const ZoneSummary = ({
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
  const { pain, gi, other } = useMemo(
    () => entriesForZone(zone, daysWindow),
    [zone, daysWindow],
  );
  const empty = pain.size + gi.size + other.size === 0;
  return (
    <motion.div
      className="bg-base-100 px-4 py-3 border-pink-200 border-t max-h-[40vh] overflow-y-auto shrink-0"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-pink-500 text-sm">
          <span className="font-semibold">{ZONE_LABEL[zone]}</span> &ndash;{" "}
          <span className="opacity-60">{rangeLabel}</span>
        </h2>
        <button
          type="button"
          className="btn btn-xs btn-circle"
          onClick={onClose}
          aria-label="Close summary"
        >
          ✕
        </button>
      </div>
      {empty ? (
        <p className="opacity-60 text-xs">No symptoms logged in this range.</p>
      ) : (
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
          <PillGroup label="Pain" entries={[...pain]} />
          <PillGroup label="GI" entries={[...gi]} />
          <PillGroup label="Other" entries={[...other]} />
        </motion.div>
      )}
    </motion.div>
  );
};

const markerVariants = {
  hidden: { opacity: 0, scale: 0.2 },
  visible: {
    opacity: 0.4,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
};

const Marker = ({
  x,
  y,
  sev,
  onClick,
}: {
  x: number;
  y: number;
  sev: Severity | null;
  onClick: () => void;
}) => {
  if (!sev) return null;
  return (
    <div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.button
        type="button"
        variants={markerVariants}
        onClick={onClick}
        className={clsx(
          "opacity-40 hover:opacity-70 active:opacity-90 rounded-full w-10 h-10 transition-opacity cursor-pointer",
          `yearly-rating-${sev}`,
          sev === "Severe" && "marker-pulse",
        )}
        aria-label={`${sev} symptom`}
      />
    </div>
  );
};

const BodyMap = ({
  src,
  alt,
  markers,
  severities,
  onZoneClick,
  delay,
}: {
  src: string;
  alt: string;
  markers: { zone: Zone; x: number; y: number }[];
  severities: Record<Zone, Severity | null>;
  onZoneClick: (z: Zone) => void;
  delay: number;
}) => (
  <motion.div
    className="relative h-[80vh] aspect-627/1404 shrink-0"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0, y: 12 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.35,
          ease: "easeOut",
          delay,
          staggerChildren: 0.08,
          delayChildren: delay + 0.3,
        },
      },
    }}
  >
    <img
      src={src}
      alt={alt}
      className="block w-full h-full object-contain select-none"
      draggable={false}
    />
    {markers.map((m, i) => (
      <Marker
        key={i}
        x={m.x}
        y={m.y}
        sev={severities[m.zone]}
        onClick={() => onZoneClick(m.zone)}
      />
    ))}
  </motion.div>
);

export const Prepare = () => {
  const [rangeIdx, setRangeIdx] = useState(0);
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const range = RANGES[rangeIdx];
  const severities = useMemo(() => severitiesByZone(range.days), [range.days]);

  return (
    <Shell>
      <div className="flex flex-col h-full">
        <motion.div
          className="px-4 pt-4 pb-2 shrink-0"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="grid grid-cols-4 w-full join">
            {RANGES.map((r, i) => (
              <button
                key={r.label}
                type="button"
                onClick={() => setRangeIdx(i)}
                className={clsx(
                  "btn-sm join-item btn",
                  i === rangeIdx && "btn-primary",
                )}
              >
                {r.label}
              </button>
            ))}
          </div>
        </motion.div>
        <div className="flex flex-1 gap-4 px-4 py-4 min-h-0 overflow-auto">
          <BodyMap
            src="/anterior.png"
            alt="Front view"
            markers={ANTERIOR_MARKERS}
            severities={severities}
            onZoneClick={setSelectedZone}
            delay={0.25}
          />
          <BodyMap
            src="/posterior.png"
            alt="Back view"
            markers={POSTERIOR_MARKERS}
            severities={severities}
            onZoneClick={setSelectedZone}
            delay={0.5}
          />
        </div>
        <AnimatePresence>
          {selectedZone && (
            <ZoneSummary
              key={selectedZone}
              zone={selectedZone}
              rangeLabel={range.label}
              daysWindow={range.days}
              onClose={() => setSelectedZone(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </Shell>
  );
};

export default Prepare;
