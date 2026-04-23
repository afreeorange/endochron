import dayjs from "dayjs";
import Shell from "../Shell";
import { PiMicrophoneDuotone } from "react-icons/pi";
import clsx from "clsx";
import { useState, Fragment } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useParams, useNavigate } from "react-router";

import data from "../data/syntheticData";
import {
  emotionMap,
  fadeAnim,
  Nav,
  TranscriptBlock,
  DaySections,
} from "./Common";

const REF_DATE = dayjs("2026-08-19");

function relativeDay(date: string) {
  const d = dayjs(date);
  const today = REF_DATE.startOf("day");
  const diff = today.diff(d.startOf("day"), "day");
  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  if (diff < 7) return `On ${d.format("dddd")}`;
  return d.format("MMM DD 'YY");
}

type Mood = keyof ReturnType<typeof emotionMap>;
const moodKeys: Mood[] = ["GOOD", "MANAGEABLE", "BAD"];

export const Daily = () => {
  const { date: dateParam } = useParams<{ date: string }>();
  const navigate = useNavigate();
  const dateKeys = Object.keys(data.days).reverse();

  const [selectedDate, setSelectedDate] = useState(
    dateParam && data.days[dateParam] ? dateParam : dateKeys[0],
  );
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [moods, setMoods] = useState<Record<string, Mood>>({});
  const [pickingMood, setPickingMood] = useState(false);

  const transcript =
    (drafts[selectedDate] ?? data.days[selectedDate]?.transcript) || null;
  const mood: Mood =
    (moods[selectedDate] ?? data.days[selectedDate]?.overall) || "GOOD";

  return (
    <Shell hideDock={false}>
      <div className="flex flex-col h-full">
        <Nav />
        {/* Sticky header: dates */}
        <div className="z-20 bg-base-100 px-4 pb-2 shrink-0">
          <div className="flex gap-2 overflow-x-auto overflow-y-hidden">
            {Object.entries(
              dateKeys.reduce<Record<string, string[]>>((acc, d) => {
                const key = dayjs(d).format("MMMM YYYY");
                (acc[key] ??= []).push(d);
                return acc;
              }, {}),
            ).map(([month, dates], i) => (
              <Fragment key={month}>
                {i > 0 && (
                  <div className="self-stretch border-pink-200/60 border-l border-dotted" />
                )}
                <div className="flex flex-col shrink-0">
                  <div className="sticky mb-1 font-light text-pink-400 text-xs whitespace-nowrap">
                    {month}
                  </div>
                  <div className="flex gap-1">
                    {dates.map((d) => (
                      <motion.div
                        key={d}
                        className={clsx(
                          "relative px-2 py-1 border border-pink-200 rounded-md w-16 text-xl cursor-pointer",
                          { "opacity-40": !data.days[d] },
                        )}
                        onClick={() => {
                          setSelectedDate(d);
                          navigate(`/reflect/days/${d}`, { replace: true });
                        }}
                        animate={{
                          backgroundColor:
                            d === selectedDate
                              ? "oklch(60.4% 0.221 3.57)"
                              : "transparent",
                          color: d === selectedDate ? "#fff" : "inherit",
                        }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="font-light text-xs">
                          {dayjs(d).format("ddd")}
                        </div>
                        <div className="relative flex">
                          <div className="font-semibold">
                            {dayjs(d).format("DD")}
                          </div>
                          <div className="-right-1 bottom-1 absolute">
                            {
                              emotionMap(selectedDate === d)[
                                moods[d] ?? data.days[d]?.overall
                              ]
                            }
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 mt-2 px-4 pb-12 overflow-y-auto">
          <div className="flex justify-between items-center">
            <AnimatePresence mode="wait">
              <motion.h1 key={selectedDate} className="text-4xl" {...fadeAnim}>
                {relativeDay(selectedDate)}
              </motion.h1>
            </AnimatePresence>

            {transcript && (
              <div className="flex items-center gap-2">
                <AnimatePresence>
                  {!pickingMood && !moods[selectedDate] && (
                    <motion.span
                      className="opacity-25 text-xs"
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 0.25, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      Tap to edit
                    </motion.span>
                  )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  {pickingMood ? (
                    <motion.div
                      key="picker"
                      className="flex gap-1"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                    >
                      {moodKeys.map((m) => (
                        <button
                          key={m}
                          className={clsx(
                            "text-3xl btn btn-lg btn-circle",
                            m === mood && "btn-primary",
                          )}
                          onClick={() => {
                            setMoods((d) => ({ ...d, [selectedDate]: m }));
                            setPickingMood(false);
                          }}
                        >
                          {emotionMap(m === mood)[m]}
                        </button>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.button
                      key="trigger"
                      className="text-3xl btn btn-lg btn-circle"
                      onClick={() => setPickingMood(true)}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                    >
                      {emotionMap(null)[mood]}
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {!transcript ? (
            <div className="flex flex-col h-full">
              <h2 className="mt-4 grow">
                Nothing here. Would you like to record something?
              </h2>
              <button className="block bg-pink-100 mx-auto p-6 border border-pink-400 border-dotted rounded-full cursor-pointer">
                <PiMicrophoneDuotone className="text-6xl" />
              </button>
            </div>
          ) : (
            <div className="mt-2">
              <TranscriptBlock
                transcript={transcript}
                animKey={selectedDate}
                onSave={(text) =>
                  setDrafts((d) => ({ ...d, [selectedDate]: text }))
                }
              />
              <DaySections key={selectedDate} day={data.days[selectedDate]!} />
            </div>
          )}
        </div>
      </div>
    </Shell>
  );
};

export default Daily;
