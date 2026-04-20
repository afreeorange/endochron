import dayjs from "dayjs";
import Shell from "../Shell";
import {
  RiEmotionHappyFill,
  RiEmotionNormalLine,
  RiEmotionUnhappyLine,
} from "react-icons/ri";
import { PiQuotesDuotone } from "react-icons/pi";
import { PiPlusCircle } from "react-icons/pi";
import clsx from "clsx";
import { useState, useRef, useMemo } from "react";
import { useNavigate } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { random } from "lodash-es";
import { sampleEmotions } from "../data/mood";
import { samplePainEntries } from "../data/pain";

import data from "../data/syntheticData";

const REF_DATE = dayjs("2026-08-19");

function relativeDay(date: string) {
  const d = dayjs(date);
  const today = REF_DATE.startOf("day");
  const diff = today.diff(d.startOf("day"), "day");
  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  if (diff < 7) return `On ${d.format("dddd")}`;
  return d.format("MMM DD ‘YY");
}

export const emotionMap = (selected: boolean | null) => ({
  GOOD: (
    <RiEmotionHappyFill
      className={
        selected === null
          ? undefined
          : clsx(selected ? "text-white opacity-100" : "text-pink-600")
      }
    />
  ),
  BAD: (
    <RiEmotionNormalLine
      className={
        selected === null
          ? undefined
          : clsx(selected ? "text-white opacity-100" : "opacity-25")
      }
    />
  ),
  MANAGEABLE: (
    <RiEmotionUnhappyLine
      className={
        selected === null
          ? undefined
          : clsx(selected ? "text-white opacity-100" : undefined)
      }
    />
  ),
});

type Transcripts = { [date: string]: string };
type Mood = keyof ReturnType<typeof emotionMap>;
type Moods = { [date: string]: Mood };

const moodKeys: Mood[] = ["GOOD", "MANAGEABLE", "BAD"];

const fade = {
  initial: { opacity: 0, y: 4 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -4 },
  transition: { duration: 0.2, ease: "easeInOut" as const },
};

export const Daily = () => {
  const dateKeys = Object.keys(data.days).reverse();

  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(dateKeys[0]);
  const [editing, setEditing] = useState(false);
  const [drafts, setDrafts] = useState<Transcripts>({});
  const [moods, setMoods] = useState<Moods>({});
  const [pickingMood, setPickingMood] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const emotions = useMemo(() => sampleEmotions(), [selectedDate]);
  const pains = useMemo(() => samplePainEntries(random(1, 4)), [selectedDate]);

  const transcript = drafts[selectedDate] ?? data.days[selectedDate].transcript;
  const mood: Mood = moods[selectedDate] ?? data.days[selectedDate].mood;

  function startEdit() {
    setEditing(true);
    setTimeout(() => textareaRef.current?.focus(), 0);
  }

  function confirm() {
    const val = textareaRef.current?.value ?? transcript;
    setDrafts((d) => ({ ...d, [selectedDate]: val }));
    setEditing(false);
  }

  function cancel() {
    setEditing(false);
  }

  return (
    <Shell hideDock={editing}>
      <div className="p-4 pb-64">
        {/* Top Nav */}
        <div className="grid grid-cols-5 w-full join">
          <button className="btn-primary btn-xs join-item btn">Days</button>
          <button
            className="btn-xs join-item btn"
            onClick={() => navigate("/reflect/weeks")}
          >
            Weeks
          </button>
          <button className="btn-xs join-item btn">Months</button>
          <button className="btn-xs join-item btn">Years</button>
          <button className="btn-xs join-item btn">Any</button>
        </div>

        {/* Dates Row */}
        <div className="gap-x-1 grid grid-flow-col my-4 overflow-x-auto overflow-y-hidden">
          {dateKeys.map((_) => (
            <motion.div
              className={clsx(
                "relative px-2 py-1 border border-pink-200 rounded-md w-18 text-xl cursor-pointer",
                {
                  "bg-pink-500 text-white": _ === selectedDate,
                  "opacity-40": !data.days[_],
                },
              )}
              key={_}
              onClick={() => setSelectedDate(_)}
              animate={{
                backgroundColor:
                  _ === selectedDate
                    ? "oklch(60.4% 0.221 3.57)"
                    : "transparent",
                color: _ === selectedDate ? "#fff" : "inherit",
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div className="font-light text-xs">{dayjs(_).format("ddd")}</div>
              <div className="font-normal">{dayjs(_).format("MMM")}</div>
              <div className="relative flex">
                <div className="font-semibold">{dayjs(_).format("DD")}</div>
                <div className="-right-1 bottom-1 absolute">
                  {
                    emotionMap(selectedDate == _)[
                      moods[_] ?? data.days[_]?.overall
                    ]
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-0">
          <div className="flex justify-between items-center">
            <AnimatePresence mode="wait">
              <motion.h1 key={selectedDate} className="text-4xl" {...fade}>
                {relativeDay(selectedDate)}
              </motion.h1>
            </AnimatePresence>

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
          </div>

          {/* <h2 className="my-2 font-semibold text-sm uppercase">Journal</h2> */}
          <div className="flex items-start gap-2 mt-2 journal">
            <PiQuotesDuotone className="text-lg rotate-180 shrink-0" />
            <div className="flex-1">
              <AnimatePresence mode="wait">
                {editing ? (
                  <motion.div key="edit" {...fade}>
                    <textarea
                      ref={textareaRef}
                      defaultValue={transcript}
                      className="rounded-md w-full text-base textarea textarea-bordered"
                      rows={5}
                    />
                    <div className="grid grid-cols-2 mt-2 join">
                      <button
                        className="btn btn-sm btn-primary join-item"
                        onClick={confirm}
                      >
                        Edit
                      </button>
                      <button className="btn btn-sm join-item" onClick={cancel}>
                        Cancel
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key={`view-${selectedDate}`} {...fade}>
                    <div className="text-sm cursor-pointer" onClick={startEdit}>
                      {transcript}
                    </div>
                    <p className="opacity-25 mt-1 text-xs">
                      AI transcription. Tap to edit.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="mb-2 py-2 border-pink-300 border-b border-dotted">
            <div className="flex">
              <h3 className="mb-1 font-semibold text-xs grow">Pain</h3>
              <PiPlusCircle className="opacity-50 text-lg" />
            </div>
            <div className="flex gap-x-1 overflow-x-auto overflow-y-hidden">
              {pains.map((_) => (
                <div className="w-fit join">
                  <div
                    className={`badge badge-sm join-item rating-${_.severity}`}
                  >
                    {_.severity}
                  </div>
                  <div className="whitespace-nowrap join-item badge badge-sm">
                    {_.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-2 py-2 border-pink-300 border-b border-dotted">
            <div className="flex">
              <h3 className="mb-1 font-semibold text-xs grow">Mood</h3>
              <PiPlusCircle className="opacity-50 text-lg" />
            </div>
            <div className="flex gap-x-1 overflow-x-auto">
              {emotions.map((_) => (
                <div
                  className={clsx(
                    "whitespace-nowrap badge badge-sm",
                    _[0] === "POSITIVE" ? "bg-pink-100" : "",
                  )}
                >
                  {_[1]}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-2 py-2 border-pink-300 border-b border-dotted">
            <div className="flex">
              <h3 className="mb-1 font-semibold text-xs grow">
                Period/Bleeding
              </h3>
              <PiPlusCircle className="opacity-50 text-lg" />
            </div>
          </div>
          <div className="mb-2 py-2 border-pink-300 border-b border-dotted">
            <div className="flex">
              <h3 className="mb-1 font-semibold text-xs grow">GI/Urinary</h3>
              <PiPlusCircle className="opacity-50 text-lg" />
            </div>
          </div>
          <div className="mb-2 py-2 border-pink-300 border-b border-dotted">
            <div className="flex">
              <h3 className="mb-1 font-semibold text-xs grow">Hard to Do</h3>
              <PiPlusCircle className="opacity-50 text-lg" />
            </div>
          </div>
          <div>
            <h3 className="my-2 mt-4 font-semibold text-sm">Other</h3>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default Daily;
