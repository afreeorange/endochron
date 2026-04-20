# The Prompt

I want to generate transcripts for endometriosis patients from May 11 2025 to August 19 2026. They should randomly refer to one or more of bodily pain, periods, GI/urinary problems and activities that were hard to do. They can be short or medium length. No paragraphs. Use this structure.

{
  days: [
    "2026-05-13": {
      overall: "BAD",
      transcript: "Woke up in pain. A five. I don't know. Um, heating pad, naproxen. Working from bed again. I feel like I say that a lot. Because I do, it's a lot of my days. My daughter came in before school to say bye, she was careful, she knows the rhythm. Yeah.",
      data: ...
    },
  ],
  months: [
    {
      "2026-05": {
        summary: "..."
      }
    }
  ]
}

About 30% of days will have missing transcripts. For these days, set the "date" key to null. E.g. {"2026-05-13": null} I need a complete list of dates in the JSON.

For each day that data is present for, use "GOOD", "BAD", "MANAGEABLE" based on the overall mood of the transcript.

For each month in the "months" key, summarize the speaker's based on all the months' days. Act as if you are helping the user understand dominant trends in their transcripts based on pain, mood, periods, GI problems, hard to do activities.

For each day that data is present for, use "GOOD", "BAD", "MANAGEABLE" based on the mood of the transcript. Then populate the "data" key appropriately this schema:

{
  data: {
    pain: [],
    mood: [],
    period: {...},
    gi: [],
    hardToDo: [],
    other: [],
    medications: []
  }
}

For pain, and depending on the transcript, pick from

"Pelvis"
"Ovary"
"Uterus"
"Vagina"
"Cervix"
"Rectum"
"Lower Back"
"Outer Hip"
"Abdomen"
"Inner Thighs"
"Shoulder"
"Ribs"
"Upper Chest"
"Diaphragm"
"Intestines"
"Leg"

and the severity from "Mild", "Moderate", "Severe". The result must look like ["Ribs", "Severe"] or ["Ovary", "Moderate"].

For the mood key, pick things from this structure based on the transcript:

POSITIVE: [
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

The result should have the mood and whether it was POSITIVE or NEGATIVE. E.g. ["Anxious", "NEGATIVE"] or ["Motivated", "POSITIVE"].

For period, and depending on if the transcript mentions a period, populate this key in "data" if there is no period:

period: null

If there's a period, use this structure.

period: {
  flow: ... ,
  other: [...]
},

For flow use "Heavy", "Medium", or "Light". For "other" populate with "Clots", "Spotting", "Breakthrough Bleeding" appropriately.

For the "gi" key in "data", pick from

Nausea
Endo Belly
Stomach Upset
Vomiting
Diarrhea
Constipation
Uncomfortably Full
Heartburn
Gas
Mouth Sores
Can’t Urinate
Painful Urination
Painful Bowel Movement
Frequent Urination
Blood in Stool

and annotate with severity: "Mild", "Moderate", "Severe". Eg. ["Gas", "Mild"].

For "hardToDo" and depending on the transcript, pick from

"Sleep",
"Get out of Bed",
"Use Toilet",
"Shower",
"Get Dressed",
"Prepare Food",
"Eat",
"Sit Down",
"Work",
"Stand",
"Stretch",
"Socialize",
"Shop",
"Have Sex",
"Lie Down",
"Run",
"Walk",
"Jump",
"Climb Stairs",
"Kneel",

Finally for the "other" key, and depending on the transcript, pick from:

"Fatigue",
"Numbness",
"Headache",
"Asthma",
"Chest Pressure",
"Swelling",
"Rash",
"Ringing in Ears",
"Eczema",
"Hives",
"Allergies",
"Itchy",
"Hot Flash",
"Sweaty",
"Touch Sensitivity",
"Noise Sensitivity",
"Mentally Foggy",
"Sinus Congestion",
"Fever",
"Dizziness",
"Blurry Vision",

and use the same severities  "Mild", "Moderate", "Severe". Eg. ["Fever", "Severe"].

For medications, populate the list with any medications mentioned in the transcript.

## About the Synthetic Data

- Period clusters drive multi-day bad stretches — day 1 and day 2 templates, with heavy flow, clots starting day 2–3, diarrhea appearing on heavier days.
- Post-period flares happen about 40% of the time after a cycle ends, matching the speaker's "why am I in pain again, my period just ended" refrain.
- Pre-period days skew bad with cramping and lower-back dominance.
- Weekends are weighted toward good but carry real risk of flares (matching her "Saturday and of course I'm in pain" complaints).
- Weekday flares happen ~30% of the time with no trigger, which is the core frustration of the condition.
