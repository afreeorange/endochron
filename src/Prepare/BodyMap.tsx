import clsx from "clsx";
import { motion } from "motion/react";
import type { Severity } from "../data/dataTypes";
import type { Zone, MarkerPos } from "./zones";

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

export const BodyMap = ({
  src,
  alt,
  markers,
  severities,
  onZoneClick,
  delay,
}: {
  src: string;
  alt: string;
  markers: MarkerPos[];
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
