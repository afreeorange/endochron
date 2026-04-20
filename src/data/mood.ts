const mood = {
  POSITIVE: [
    "ALL",
    "Affectionate",
    "Calm",
    "Excited",
    "Enthusiastic",
    "Happy",
    "Motivated",
    "Optimistic",
    "Productive",
    "Relaxed",
    "Social",
  ],
  NEGATIVE: [
    "ALL",
    "Angry",
    "Antisocial",
    "Anxious",
    "Belligerent",
    "Contemptuous",
    "Erratic",
    "Defensive",
    "Disgusted",
    "Frustrated",
    "Guilty",
    "Indifferent",
    "Irritable",
    "Isolated",
    "Lonely",
    "Mentally Foggy",
    "Overwhelmed",
    "Sad",
    "Scared",
    "Whiny",
    "Worried",
  ],
};

function sample<T>(arr: T[], n: number): T[] {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, n);
}

export type EmotionEntry = ["POSITIVE" | "NEGATIVE", string];

export function sampleEmotions(): EmotionEntry[] {
  const pos = mood.POSITIVE.filter((e) => e !== "ALL");
  const neg = mood.NEGATIVE.filter((e) => e !== "ALL");
  const total = 2 + Math.floor(Math.random() * 5);
  const nPos = Math.floor(Math.random() * (total + 1));
  return [
    ...sample(pos, nPos).map((e): EmotionEntry => ["POSITIVE", e]),
    ...sample(neg, total - nPos).map((e): EmotionEntry => ["NEGATIVE", e]),
  ];
}

export default mood;
