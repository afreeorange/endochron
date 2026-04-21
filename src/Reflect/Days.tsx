import dayjs from "dayjs";
import Shell from "../Shell";
import { PiMicrophoneDuotone, PiQuotesDuotone } from "react-icons/pi";
import { PiPlusCircle } from "react-icons/pi";
import clsx from "clsx";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

import data from "../data/syntheticData";
import { emotionMap, Nav } from "./Common";

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

type Mood = keyof ReturnType<typeof emotionMap>;
const moodKeys: Mood[] = ["GOOD", "MANAGEABLE", "BAD"];

const fade = {
  initial: { opacity: 0, y: 4 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -4 },
  transition: { duration: 0.2, ease: "easeInOut" as const },
};

const sectionContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const sectionItem = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: "easeOut" as const },
  },
};

const badgeContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
};

const badgeItem = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.18, ease: "easeOut" as const },
  },
};

export const Daily = () => {
  const dateKeys = Object.keys(data.days).reverse();

  const [selectedDate, setSelectedDate] = useState(dateKeys[0]);
  const [editing, setEditing] = useState(false);
  const [drafts, setDrafts] = useState<{ [date: string]: string }>({});
  const [moods, setMoods] = useState<{ [date: string]: Mood }>({});
  const [pickingMood, setPickingMood] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const transcript =
    (drafts[selectedDate] ?? data.days[selectedDate]?.transcript) || null;
  const mood: Mood =
    (moods[selectedDate] ?? data.days[selectedDate]?.overall) || null;

  function startEdit() {
    setEditing(true);
    setTimeout(() => textareaRef.current?.focus(), 0);
  }

  function confirm() {
    const val = textareaRef.current?.value ?? transcript ?? "";
    setDrafts((d) => ({ ...d, [selectedDate]: val }));
    setEditing(false);
  }

  function cancel() {
    setEditing(false);
  }

  return (
    <Shell hideDock={editing}>
      <div className="flex flex-col h-full">
        <Nav />
        {/* Sticky Header */}
        <div className="z-20 bg-base-100 px-4 pb-2 shrink-0">
          {/* Dates Row */}
          <div className="flex gap-2 overflow-x-auto overflow-y-hidden">
            {Object.entries(
              dateKeys.reduce<Record<string, string[]>>((acc, d) => {
                const key = dayjs(d).format("MMMM YYYY");
                (acc[key] ??= []).push(d);
                return acc;
              }, {}),
            ).map(([month, dates]) => (
              <div key={month} className="flex flex-col shrink-0">
                <div className="mb-1 font-light text-pink-400 text-xs whitespace-nowrap">
                  {month}
                </div>
                <div className="flex gap-1">
                  {dates.map((_) => (
                    <motion.div
                      className={clsx(
                        "relative px-2 py-1 border border-pink-200 rounded-md w-16 text-xl cursor-pointer",
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
                      <div className="font-light text-xs">
                        {dayjs(_).format("ddd")}
                      </div>
                      <div className="relative flex">
                        <div className="font-semibold">
                          {dayjs(_).format("DD")}
                        </div>
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
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 px-4 pb-12 overflow-y-auto">
          {/* FULL BLOCK */}
          <div className="mt-0">
            <div className="flex justify-between items-center">
              <AnimatePresence mode="wait">
                <motion.h1 key={selectedDate} className="text-4xl" {...fade}>
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

            {!transcript && (
              <div className="flex flex-col my-4 h-full">
                <h2 className="grow">
                  Nothing here. Would you like to record something?
                </h2>
                <button
                  className={clsx(
                    "block bg-pink-100 mx-auto mt-24 p-6 border border-pink-400 border-dotted rounded-full cursor-pointer",
                  )}
                >
                  <PiMicrophoneDuotone className={clsx("text-6xl")} />
                </button>
              </div>
            )}

            {transcript && (
              <>
                {/* <h2 className="my-2 font-semibold text-sm uppercase">Journal</h2> */}
                <div className="flex items-start gap-2 mt-6 mb-6 journal">
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
                            <button
                              className="btn btn-sm join-item"
                              onClick={cancel}
                            >
                              Cancel
                            </button>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div key={`view-${selectedDate}`} {...fade}>
                          <div
                            className="text-sm cursor-pointer"
                            onClick={startEdit}
                          >
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

                <motion.div
                  key={selectedDate}
                  variants={sectionContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {/* PAIN */}
                  <motion.div
                    variants={sectionItem}
                    className="py-2 border-pink-200 border-b border-dotted"
                  >
                    <div className="flex">
                      <h3 className="mb-1 font-semibold text-xs grow">Pain</h3>
                      <PiPlusCircle className="opacity-50 text-lg" />
                    </div>
                    <motion.div
                      className="flex gap-x-1 overflow-x-auto overflow-y-hidden"
                      variants={badgeContainer}
                    >
                      {data.days[selectedDate]!.data.pain.map((_) => (
                        <motion.div
                          key={_[0]}
                          variants={badgeItem}
                          className="w-fit join"
                        >
                          <div className="badge badge-sm join-item">{_[0]}</div>
                          <div
                            className={`whitespace-nowrap join-item badge badge-sm rating-${_[1]}`}
                          >
                            {_[1]}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* MOOD */}
                  <motion.div
                    variants={sectionItem}
                    className="py-2 border-pink-200 border-b border-dotted"
                  >
                    <div className="flex">
                      <h3 className="mb-1 font-semibold text-xs grow">Mood</h3>
                      <PiPlusCircle className="opacity-50 text-lg" />
                    </div>
                    <motion.div
                      className="flex gap-x-1 overflow-x-auto"
                      variants={badgeContainer}
                    >
                      {data.days[selectedDate]!.data.mood.map((_) => (
                        <motion.div
                          key={_[0]}
                          variants={badgeItem}
                          className={clsx(
                            "whitespace-nowrap badge badge-sm",
                            _[1] === "POSITIVE" ? "bg-pink-100" : "",
                          )}
                        >
                          {_[0]}
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* PERIOD */}
                  <motion.div
                    variants={sectionItem}
                    className="py-2 border-pink-200 border-b border-dotted"
                  >
                    <div className="flex">
                      <h3 className="mb-1 font-semibold text-xs grow">
                        Period/Bleeding
                      </h3>
                      <PiPlusCircle className="opacity-50 text-lg" />
                    </div>
                    {data.days[selectedDate]!.data.period && (
                      <motion.div
                        className="flex flex-wrap gap-1"
                        variants={badgeContainer}
                      >
                        <motion.div variants={badgeItem} className="w-fit join">
                          <div
                            className={`badge badge-sm join-item rating-${data.days[selectedDate]!.data.period.flow}`}
                          >
                            {data.days[selectedDate]!.data.period.flow}
                          </div>
                          <div className="whitespace-nowrap join-item badge badge-sm">
                            Flow
                          </div>
                        </motion.div>
                        {data.days[selectedDate]!.data.period.other.map((_) => (
                          <motion.div
                            key={_}
                            variants={badgeItem}
                            className="badge badge-sm"
                          >
                            {_}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>

                  {/* GI/URINARY */}
                  <motion.div
                    variants={sectionItem}
                    className="py-2 border-pink-200 border-b border-dotted"
                  >
                    <div className="flex">
                      <h3 className="mb-1 font-semibold text-xs grow">
                        GI/Urinary
                      </h3>
                      <PiPlusCircle className="opacity-50 text-lg" />
                    </div>
                    <motion.div
                      className="flex flex-wrap gap-1"
                      variants={badgeContainer}
                    >
                      {data.days[selectedDate]!.data.gi.map(
                        ([name, severity]) => (
                          <motion.div
                            key={name}
                            variants={badgeItem}
                            className="w-fit join"
                          >
                            <div className="whitespace-nowrap join-item badge badge-sm">
                              {name}
                            </div>
                            <div
                              className={`join-item badge badge-sm rating-${severity}`}
                            >
                              {severity}
                            </div>
                          </motion.div>
                        ),
                      )}
                    </motion.div>
                  </motion.div>

                  {/* HARD TO DO */}
                  <motion.div
                    variants={sectionItem}
                    className="py-2 border-pink-200 border-b border-dotted"
                  >
                    <div className="flex">
                      <h3 className="mb-1 font-semibold text-xs grow">
                        Hard to Do
                      </h3>
                      <PiPlusCircle className="opacity-50 text-lg" />
                    </div>
                    <motion.div
                      className="flex flex-wrap gap-1"
                      variants={badgeContainer}
                    >
                      {data.days[selectedDate]!.data.hardToDo.map((item) => (
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

                  {/* OTHER */}
                  <motion.div variants={sectionItem} className="py-2">
                    <div className="flex">
                      <h3 className="mb-1 font-semibold text-xs grow">Other</h3>
                      <PiPlusCircle className="opacity-50 text-lg" />
                    </div>
                    <motion.div
                      className="flex flex-wrap gap-1"
                      variants={badgeContainer}
                    >
                      {data.days[selectedDate]!.data.other.map(
                        ([name, severity]) => (
                          <motion.div
                            key={name}
                            variants={badgeItem}
                            className="w-fit join"
                          >
                            <div className="whitespace-nowrap join-item badge badge-sm">
                              {name}
                            </div>
                            <div
                              className={`join-item badge badge-sm rating-${severity}`}
                            >
                              {severity}
                            </div>
                          </motion.div>
                        ),
                      )}
                      {data.days[selectedDate]!.data.medications.map((_) => (
                        <div className="badge badge-sm">{_}</div>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default Daily;
