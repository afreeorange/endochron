export type Severity = "Mild" | "Moderate" | "Severe";
export type Side = "Left" | "Right" | "Both sides" | null;

interface Area {
  name: string;
  sides?: true;
}

const SEVERITIES: Severity[] = ["Mild", "Moderate", "Severe"];
const SIDES: Side[] = ["Left", "Right", "Both sides", null];

const AREAS: Area[] = [
  { name: "Pelvis", sides: true },
  { name: "Ovary", sides: true },
  { name: "Uterus" },
  { name: "Vagina" },
  { name: "Cervix" },
  { name: "Rectum" },
  { name: "Lower Back", sides: true },
  { name: "Outer Hip", sides: true },
  { name: "Abdomen", sides: true },
  { name: "Inner Thighs" },
  { name: "Shoulder", sides: true },
  { name: "Ribs", sides: true },
  { name: "Upper Chest" },
  { name: "Diaphragm" },
  { name: "Intestines" },
  { name: "Leg", sides: true },
];

const DESCRIPTORS = [
  "Aching",
  "Burning",
  "Cramping",
  "Deep",
  "Dull",
  "Pressure",
  "Pulling",
  "Radiating",
  "Sharp",
  "Shooting",
  "Stabbing",
  "Throbbing",
  "Twisting",
];

function rand<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function sidePhrase(area: Area): string {
  if (!area.sides) return area.name;
  const side = rand<Side>(SIDES);
  return side ? `${area.name} (${side})` : area.name;
}

export interface PainEntry {
  severity: Severity;
  location: string;
  descriptor: string;
}

export function samplePain(): PainEntry {
  const severity = rand(SEVERITIES);
  const area = rand(AREAS);
  const descriptor = rand(DESCRIPTORS);
  const location = sidePhrase(area);

  return {
    severity,
    location,
    descriptor,
  };
}

export function samplePainEntries(n = 2): PainEntry[] {
  return Array.from({ length: n }, samplePain);
}

export { AREAS, SEVERITIES, DESCRIPTORS };
