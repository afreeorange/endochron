import { useMemo, useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "motion/react";
import Shell from "../Shell";
import data, { useDatasetVersion } from "../data/store";
import { TranscriptBlock } from "../Reflect/TranscriptBlock";
import { BodyMap } from "./BodyMap";
import { ZoneSummary } from "./ZoneSummary";
import {
  RANGES,
  ANTERIOR_MARKERS,
  POSTERIOR_MARKERS,
  severitiesByZone,
  type Zone,
} from "./zones";

export const Prepare = () => {
  const [rangeIdx, setRangeIdx] = useState(0);
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const range = RANGES[rangeIdx];
  const version = useDatasetVersion();
  const severities = useMemo(
    () => severitiesByZone(range.days),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [range.days, version],
  );

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
        <motion.div
          className="px-4 pb-2 shrink-0"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.15 }}
        >
          <TranscriptBlock
            transcript={data.prepare[range.prepareKey]}
            animKey={range.prepareKey}
            showQuote={false}
            collapseLines={3}
            textClassName="text-sm"
            onSave={() => {}}
          />
        </motion.div>
        <div className="flex flex-1 md:justify-center gap-4 px-4 py-4 min-h-0 overflow-auto">
          <BodyMap
            src={`${import.meta.env.BASE_URL}anterior.png`}
            alt="Front view"
            markers={ANTERIOR_MARKERS}
            severities={severities}
            onZoneClick={setSelectedZone}
            delay={0.25}
          />
          <BodyMap
            src={`${import.meta.env.BASE_URL}posterior.png`}
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
