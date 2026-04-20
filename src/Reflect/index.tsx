import dayjs from "dayjs";
import Shell from "../Shell";
import days from "../data/days";
import {
  RiEmotionHappyFill,
  RiEmotionNormalLine,
  RiEmotionUnhappyLine,
} from "react-icons/ri";
import { PiQuotesDuotone } from "react-icons/pi";
import clsx from "clsx";
import { useState, useRef } from "react";

const REF_DATE = dayjs("2026-05-15");

function relativeDay(date: string) {
  const d = dayjs(date);
  const today = REF_DATE.startOf("day");
  const diff = today.diff(d.startOf("day"), "day");
  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  if (diff < 7) return `On ${d.format("dddd")}`;
  return d.format("MMM D");
}

export const emotionMap = (selected: boolean | null) => ({
  GOOD: (
    <RiEmotionHappyFill
      className={
        selected === null
          ? undefined
          : clsx(selected ? "text-white opacity-100" : "text-green-600")
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
  NEUTRAL: (
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

const moodKeys: Mood[] = ["GOOD", "NEUTRAL", "BAD"];

export const Daily = () => {
  const dateKeys = Object.keys(days).reverse();
  const [selectedDate, setSelectedDate] = useState(dateKeys[0]);
  const [editing, setEditing] = useState(false);
  const [drafts, setDrafts] = useState<Transcripts>({});
  const [moods, setMoods] = useState<Moods>({});
  const [pickingMood, setPickingMood] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const transcript = drafts[selectedDate] ?? days[selectedDate].transcript;
  const mood: Mood = moods[selectedDate] ?? days[selectedDate].mood;

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
      <div className="p-2 pb-12">
        <div className="grid grid-cols-5 join">
          <button className="btn-primary btn-xs join-item btn">Days</button>
          <button className="btn-xs join-item btn">Weeks</button>
          <button className="btn-xs join-item btn">Months</button>
          <button className="btn-xs join-item btn">Years</button>
          <button className="btn-xs join-item btn">Any</button>
        </div>

        <div className="gap-x-1 grid grid-flow-col my-4 overflow-scroll">
          {dateKeys.map((_) => (
            <div
              className={clsx(
                "relative px-2 py-1 border border-pink-200 rounded-md w-18 text-xl cursor-pointer",
                {
                  "bg-pink-500 text-white": _ === selectedDate,
                },
              )}
              key={_}
              onClick={() => setSelectedDate(_)}
            >
              <div className="font-light">{dayjs(_).format("MMM")}</div>
              <div className="relative flex">
                <div className="font-semibold">{dayjs(_).format("DD")}</div>
                <div className="-right-1 bottom-1 absolute">
                  {emotionMap(selectedDate == _)[moods[_] ?? days[_]["mood"]]}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-0">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl">{relativeDay(selectedDate)}</h1>
            <div className="flex items-center gap-2">
              {!pickingMood && !moods[selectedDate] && (
                <span className="opacity-25 text-xs">Tap to edit</span>
              )}
              {pickingMood ? (
                moodKeys.map((m) => (
                  <button
                    key={m}
                    className={clsx(
                      "text-2xl btn btn-sm btn-circle",
                      m === mood && "btn-primary",
                    )}
                    onClick={() => {
                      setMoods((d) => ({ ...d, [selectedDate]: m }));
                      setPickingMood(false);
                    }}
                  >
                    {emotionMap(m === mood)[m]}
                  </button>
                ))
              ) : (
                <button
                  className="text-2xl btn btn-sm btn-circle"
                  onClick={() => setPickingMood(true)}
                >
                  {emotionMap(null)[mood]}
                </button>
              )}
            </div>
          </div>
          <h2 className="font-semibold text-xs uppercase">Journal</h2>
          <div className="flex items-start gap-2 journal">
            <PiQuotesDuotone className="text-lg rotate-180 shrink-0" />
            <div className="flex-1">
              {editing ? (
                <>
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
                </>
              ) : (
                <>
                  <div className="text-sm cursor-pointer" onClick={startEdit}>
                    {transcript}
                  </div>
                  <p className="opacity-25 mt-1 text-xs">
                    AI transcription. Tap to edit any time.
                  </p>
                </>
              )}
            </div>
          </div>

          <h2 className="font-semibold text-xs uppercase">
            Signs &amp; Symptoms
          </h2>
          <h3 className="text-xs">Period & Bleeding</h3>
          <h3 className="text-xs">Pain</h3>
          <h3 className="text-xs">Gi/Urinary</h3>
          <h3 className="text-xs">Something Else</h3>
          <h3 className="text-xs">Mood</h3>
          <h3 className="text-xs">Sex</h3>
          <h3 className="text-xs">Activities Hard To Do</h3>

          <h2 className="font-semibold text-xs uppercase">Self-Care</h2>
          <h3 className="text-xs">Hormones</h3>
          <h3 className="text-xs">Medications</h3>
          <h3 className="text-xs">Supplements</h3>
          <h3 className="text-xs">Foods</h3>
          <h3 className="text-xs">Exercise</h3>
        </div>
      </div>
    </Shell>
  );
};

export default Daily;
