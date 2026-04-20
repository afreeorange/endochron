import dayjs from "dayjs";
import Shell from "../Shell";
import days from "../data/days";
import {
  RiEmotionHappyFill,
  RiEmotionNormalLine,
  RiEmotionUnhappyLine,
} from "react-icons/ri";
import clsx from "clsx";
import { useState } from "react";
import { useNavigate } from "react-router";

const REF_DATE = dayjs("2026-05-15");

type Mood = "GOOD" | "MANAGEABLE" | "BAD";

// ── Mood icon (always unstyled — colour comes from the node circle) ──────────
const moodIcon: Record<Mood, React.ReactNode> = {
  GOOD: <RiEmotionHappyFill className="text-white" />,
  MANAGEABLE: <RiEmotionUnhappyLine className="text-white" />,
  BAD: <RiEmotionNormalLine className="text-white" />,
};

const moodNodeBg: Record<Mood, string> = {
  GOOD: "bg-pink-500",
  MANAGEABLE: "bg-amber-400",
  BAD: "bg-gray-400",
};

const moodHrBg: Record<Mood, string> = {
  GOOD: "bg-pink-400",
  MANAGEABLE: "bg-amber-300",
  BAD: "bg-gray-300",
};

const severityLabel: Record<Mood, string> = {
  GOOD: "Mild",
  MANAGEABLE: "Moderate",
  BAD: "Severe",
};

// ── Symptom inference from transcript ───────────────────────────────────────
const NUMBER_WORDS: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
};

function painLevel(transcript: string): number {
  const t = transcript.toLowerCase();
  for (const [word, num] of Object.entries(NUMBER_WORDS)) {
    if (t.includes(`a ${word}`) || t.includes(`like a ${word}`)) return num;
  }
  return 0;
}

function painLocations(transcript: string): string[] {
  const t = transcript.toLowerCase();
  const locs: string[] = [];
  if (t.includes("pelvis") || t.includes("pelvic")) locs.push("Pelvis");
  if (t.includes("lower back")) locs.push("Lower Back");
  else if (t.match(/\bback\b/)) locs.push("Lower Back");
  if (t.includes("belly") || t.includes("abdomen")) locs.push("Abdomen");
  if (t.includes("cramp")) locs.push("Uterus");
  if (t.includes("ovary") || t.includes("ovaries")) locs.push("Ovary");
  return [...new Set(locs)];
}

function painDescriptors(transcript: string): string[] {
  const t = transcript.toLowerCase();
  const found: string[] = [];
  const checks: [string, string][] = [
    ["cramp", "Cramping"],
    ["throb", "Throbbing"],
    ["sharp", "Sharp"],
    ["ach", "Aching"],
    ["radiat", "Radiating"],
    ["wrap", "Radiating"],
    ["pressur", "Pressure"],
    ["dull", "Dull"],
  ];
  for (const [kw, label] of checks) {
    if (t.includes(kw)) found.push(label);
  }
  return [...new Set(found)].slice(0, 2);
}

function giSymptoms(transcript: string): string[] {
  const t = transcript.toLowerCase();
  const gi: string[] = [];
  if (t.includes("nausea")) gi.push("Nausea");
  if (t.includes("bloat") || t.includes("endo belly")) gi.push("Endo Belly");
  if (t.includes("vomit")) gi.push("Vomiting");
  if (t.includes("diarrhea")) gi.push("Diarrhea");
  return gi;
}

function hardActivities(transcript: string, mood: Mood): string[] {
  const t = transcript.toLowerCase();
  const a: string[] = [];
  if (t.includes("cancel")) a.push("Socialize");
  if (t.includes("camera was off") || (t.includes("work") && mood === "BAD"))
    a.push("Work");
  if (t.includes("get up") || t.includes("get out of bed"))
    a.push("Get out of Bed");
  if (mood === "BAD" && t.includes("shower")) a.push("Shower");
  if (
    t.includes("couldn't walk") ||
    t.includes("didn't walk") ||
    (t.includes("walk") && mood === "BAD")
  )
    a.push("Walk");
  return [...new Set(a)].slice(0, 3);
}

// ── Week helpers ─────────────────────────────────────────────────────────────
function getWeekStart(ref: dayjs.Dayjs): dayjs.Dayjs {
  const d = ref.day(); // 0 Sun … 6 Sat
  return ref.subtract((d + 6) % 7, "day");
}

function getWeekDates(start: dayjs.Dayjs): string[] {
  return Array.from({ length: 7 }, (_, i) =>
    start.add(i, "day").format("YYYY-MM-DD"),
  );
}

// ── Component ────────────────────────────────────────────────────────────────
export const Weekly = () => {
  const navigate = useNavigate();
  const [weekOffset, setWeekOffset] = useState(0);

  const start = getWeekStart(REF_DATE).add(weekOffset * 7, "day");
  const end = start.add(6, "day");
  const dates = getWeekDates(start);

  // Connector color between date[i] and date[i+1]:
  // same mood → that mood's color, else neutral
  const connectors = dates.slice(0, -1).map((d, i) => {
    const ma = days[d]?.mood as Mood | undefined;
    const mb = days[dates[i + 1]]?.mood as Mood | undefined;
    return ma && mb && ma === mb ? moodHrBg[ma] : "bg-base-300";
  });

  return (
    <Shell>
      <div className="p-4 pb-12">
        {/* Tab bar */}
        <div className="grid grid-cols-5 mb-4 w-full join">
          <button
            className="btn-xs join-item btn"
            onClick={() => navigate("/reflect")}
          >
            Days
          </button>
          <button className="btn-primary btn-xs join-item btn">Weeks</button>
          <button className="btn-xs join-item btn">Months</button>
          <button className="btn-xs join-item btn">Years</button>
          <button className="btn-xs join-item btn">Any</button>
        </div>

        {/* Week navigator */}
        <div className="flex justify-between items-center mb-4">
          <button
            className="btn btn-sm btn-ghost"
            onClick={() => setWeekOffset((w) => w - 1)}
          >
            ←
          </button>
          <span className="font-medium text-sm">
            {start.format("MMM D")} – {end.format("MMM D, YYYY")}
          </span>
          <button
            className={clsx(
              "btn btn-sm btn-ghost",
              weekOffset >= 0 && "invisible",
            )}
            onClick={() => setWeekOffset((w) => w + 1)}
          >
            →
          </button>
        </div>

        {/* Timeline */}
        <div className="-mx-4 px-4 overflow-x-auto">
          <ul className="timeline" style={{ minWidth: "640px" }}>
            {dates.map((date, i) => {
              const day = days[date] as
                | { mood: Mood; transcript: string }
                | undefined;
              const mood = day?.mood;
              const level = day ? painLevel(day.transcript) : 0;
              const locs = day ? painLocations(day.transcript) : [];
              const descs = day ? painDescriptors(day.transcript) : [];
              const gi = day ? giSymptoms(day.transcript) : [];
              const hard = day ? hardActivities(day.transcript, mood!) : [];

              const prevConnector = i > 0 ? connectors[i - 1] : null;
              const nextConnector =
                i < connectors.length ? connectors[i] : null;

              return (
                <li key={date}>
                  {prevConnector !== null && <hr className={prevConnector} />}

                  {/* Above: date + pain */}
                  <div className="px-1 text-center timeline-start">
                    <div className="font-semibold text-xs">
                      {dayjs(date).format("ddd")}
                    </div>
                    <div className="opacity-40 mb-2 text-xs">
                      {dayjs(date).format("D")}
                    </div>

                    {day && level > 0 && (
                      <>
                        <h3 className="my-2 mt-4 font-semibold text-sm leading-tight">
                          {locs.length > 0 ? locs.join(" · ") : "Pain"}
                        </h3>
                        {descs.length > 0 && (
                          <h3 className="opacity-60 my-2 mt-4 font-semibold text-sm leading-tight">
                            {descs.join(", ")}
                          </h3>
                        )}
                        <h3 className="opacity-40 my-2 mt-4 font-semibold text-sm leading-tight">
                          {severityLabel[mood!]} · {level}/10
                        </h3>
                      </>
                    )}

                    {day && level <= 1 && mood === "GOOD" && (
                      <h3 className="my-2 mt-4 font-semibold text-pink-400 text-sm leading-tight">
                        No pain
                      </h3>
                    )}

                    {!day && (
                      <h3 className="opacity-20 my-2 mt-4 font-semibold text-sm leading-tight">
                        —
                      </h3>
                    )}
                  </div>

                  {/* Node: mood icon */}
                  <div className="timeline-middle">
                    {mood ? (
                      <div
                        className={clsx(
                          "flex justify-center items-center shadow rounded-full w-9 h-9 text-lg",
                          moodNodeBg[mood],
                        )}
                      >
                        {moodIcon[mood]}
                      </div>
                    ) : (
                      <div className="flex justify-center items-center bg-base-200 opacity-30 rounded-full w-9 h-9 text-xs">
                        ·
                      </div>
                    )}
                  </div>

                  {/* Below: symptoms + hard activities */}
                  <div className="px-1 text-center timeline-end">
                    {gi.length > 0 && (
                      <>
                        <h3 className="my-2 mt-4 font-semibold text-sm leading-tight">
                          {gi.join(" · ")}
                        </h3>
                        <h3 className="opacity-40 my-2 mt-4 font-semibold text-sm leading-tight">
                          GI / Urinary
                        </h3>
                      </>
                    )}

                    {hard.length > 0 && (
                      <>
                        <h3 className="my-2 mt-4 font-semibold text-sm leading-tight">
                          {hard.join(" · ")}
                        </h3>
                        <h3 className="opacity-40 my-2 mt-4 font-semibold text-sm leading-tight">
                          Hard to do
                        </h3>
                      </>
                    )}

                    {day && !gi.length && !hard.length && mood === "GOOD" && (
                      <h3 className="opacity-60 my-2 mt-4 font-semibold text-pink-400 text-sm leading-tight">
                        Good day
                      </h3>
                    )}

                    {!day && (
                      <h3 className="opacity-20 my-2 mt-4 font-semibold text-sm leading-tight">
                        —
                      </h3>
                    )}
                  </div>

                  {nextConnector !== null && <hr className={nextConnector} />}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Shell>
  );
};

export default Weekly;
