import type { Dataset } from "./dataTypes";

export default {
  days: {
    "2025-05-11": null,
    "2025-05-12": null,
    "2025-05-13": {
      transcript:
        "Bad day. Pain like a five in my pelvis, wrapping to my back. No warning, no trigger. Took naproxen, put the heating pad on. Canceled my lunch thing. Worked from the couch. Um, I'm just frustrated, I don't know what else to say. I thought I was past this part of the month.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Moderate"],
        ],
        mood: [["Frustrated", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Work", "Socialize"],
        other: [],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-05-14": {
      transcript:
        "Sharp pain in my pelvis all day, like a five, six at its worst. I don't know. Um, I took two naproxen today. Worked from the couch. My husband made dinner. I ate a little. Just one of those days where I feel like my body is a puzzle I can't solve.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Sit Down"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-05-15": {
      transcript:
        "Period started. Heavy right out of the gate. Pain like a six. Um, I'm in for a long three days I think. Naproxen, heating pad, you know the drill. On the couch. My husband is doing everything. I feel bad but I can't move.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Guilty", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Stand", "Prepare Food"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-05-16": null,
    "2025-05-17": {
      transcript:
        "Day two of my period is always the worst. I don't know why, every month, day two takes me out. Took naproxen at six AM. Another at noon. Heating pad hasn't left my lap. I ate crackers and ginger tea, that's it. My husband took my daughter out so I could just rest. Just tired.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Nausea", "Mild"]],
        hardToDo: ["Work", "Eat", "Get out of Bed", "Prepare Food"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-05-18": {
      transcript:
        "Better today. I don't know how that works. Yesterday was awful and today I'm like, a two maybe. Got a lot done at work, caught up. Had a decent lunch. My husband and I walked after dinner, twenty minutes around the neighborhood. Taking the win.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-05-19": {
      transcript:
        "Period ended two days ago and I'm still in pain. Like a four, five in my pelvis and a little in my rectum, which, you know, always feels worse than it sounds. I'm just so tired of this. Took naproxen. Worked from home.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Rectum", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Sad", "NEGATIVE"],
        ],
        period: null,
        gi: [["Painful Bowel Movement", "Moderate"]],
        hardToDo: ["Work", "Use Toilet"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-05-20": null,
    "2025-05-21": {
      transcript:
        "Went to dinner with my husband tonight. Real dinner, dressed up, wine, the whole thing. Haven't done that in forever. Um, pain like a one all evening. It felt like such a treat. I needed it.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Affectionate", "POSITIVE"],
          ["Relaxed", "POSITIVE"],
          ["Happy", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-05-22": {
      transcript:
        "Period ended two days ago and I'm still in pain. Like a four, five in my pelvis and a little in my rectum, which, you know, always feels worse than it sounds. I'm just so tired of this. Took naproxen. Worked from home.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Rectum", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Sad", "NEGATIVE"],
        ],
        period: null,
        gi: [["Painful Bowel Movement", "Moderate"]],
        hardToDo: ["Work", "Use Toilet"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-05-23": {
      transcript:
        "Fine. Pain like a three. I forgot to record yesterday I think. Or maybe I did, I don't remember. Anyway. Ate normally, worked normally. Nothing happened today. Boring is a gift with this disease, I'll take it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Calm", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-05-24": {
      transcript:
        "I did fifteen minutes of yoga this morning. First time in forever. Body felt tight but okay, I went slow. Um, hoping I don't pay tomorrow, that's always the gamble. Worked a full day. Made dinner. Good day.",
      data: {
        pain: [],
        mood: [
          ["Motivated", "POSITIVE"],
          ["Productive", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-05-25": {
      transcript:
        "Productive day. Pain like a one. Got through my inbox, had a good call with my team, we're starting a new project I'm actually excited about. Ate lunch away from my desk. Picked up my daughter, she was in a great mood. Yeah.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Productive", "POSITIVE"],
          ["Motivated", "POSITIVE"],
          ["Enthusiastic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-05-26": {
      transcript:
        "Sunday. Good day. Lazy morning, pajamas until eleven. Made pancakes with my daughter, she's getting good in the kitchen. Walked around the neighborhood in the afternoon, the three of us. Um, I'm trying to enjoy these days when they come.",
      data: {
        pain: [],
        mood: [
          ["Affectionate", "POSITIVE"],
          ["Relaxed", "POSITIVE"],
          ["Happy", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-05-27": null,
    "2025-05-28": {
      transcript:
        "New gyno consult today. She actually listened. Ordered some imaging. Pain like a three, which for a doctor visit I'm surprised I was able to handle. Um, hopeful. Cautiously.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-05-29": {
      transcript:
        "Fine. Pain like a three. I forgot to record yesterday I think. Or maybe I did, I don't remember. Anyway. Ate normally, worked normally. Nothing happened today. Boring is a gift with this disease, I'll take it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Calm", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-05-30": {
      transcript:
        "And just like that, back to bad. Pain like a five. I hate the whiplash. Took a naproxen, laid down. Skipped my walk, obviously. My husband asked if he should pick up dinner, I said yes. I feel like a burden some days. I know I'm not. But I feel like it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Guilty", "NEGATIVE"],
          ["Frustrated", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Walk", "Prepare Food"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-05-31": {
      transcript:
        "Saturday and of course I'm in pain. Supposed to be my time. On the couch. Cramping, like a six. My husband took my daughter to her game without me. Um, I just laid there and felt sorry for myself. Took naproxen, heating pad, ginger tea, still bad. Lost Saturday.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Lonely", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Walk", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-06-01": {
      transcript:
        "Good day. Pain like a one, almost nothing. Got through my emails. Had a productive call. Um, I ate a real lunch. Walked to the mailbox, which sounds small but it's something. Yeah. Small wins.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Productive", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-06-02": {
      transcript:
        "Bad day. Pain like a five in my pelvis, wrapping to my back. No warning, no trigger. Took naproxen, put the heating pad on. Canceled my lunch thing. Worked from the couch. Um, I'm just frustrated, I don't know what else to say. I thought I was past this part of the month.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Moderate"],
        ],
        mood: [["Frustrated", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Work", "Socialize"],
        other: [],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-06-03": null,
    "2025-06-04": null,
    "2025-06-05": {
      transcript:
        "Bad day. Pain like a five in my pelvis, wrapping to my back. No warning, no trigger. Took naproxen, put the heating pad on. Canceled my lunch thing. Worked from the couch. Um, I'm just frustrated, I don't know what else to say. I thought I was past this part of the month.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Moderate"],
        ],
        mood: [["Frustrated", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Work", "Socialize"],
        other: [],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-06-06": {
      transcript:
        "Another good one. Pain like a one. I went for a walk at lunch, twenty minutes. First time in weeks. Legs felt weak, I've gotten out of shape, but no pain. I'll take weak over pain.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Motivated", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-06-07": {
      transcript:
        "Better today. I don't know how that works. Yesterday was awful and today I'm like, a two maybe. Got a lot done at work, caught up. Had a decent lunch. My husband and I walked after dinner, twenty minutes around the neighborhood. Taking the win.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-06-08": null,
    "2025-06-09": null,
    "2025-06-10": {
      transcript:
        "I did fifteen minutes of yoga this morning. First time in forever. Body felt tight but okay, I went slow. Um, hoping I don't pay tomorrow, that's always the gamble. Worked a full day. Made dinner. Good day.",
      data: {
        pain: [],
        mood: [
          ["Motivated", "POSITIVE"],
          ["Productive", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-06-11": {
      transcript:
        "Bloated today, endo belly bad. Pain like a three otherwise but I look six months pregnant. Avoided dairy, avoided sugar, didn't help. Um, got through work. Comfy pants all day.",
      data: {
        pain: [["Abdomen", "Moderate"]],
        mood: [
          ["Disgusted", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [
          ["Endo Belly", "Moderate"],
          ["Gas", "Mild"],
        ],
        hardToDo: ["Get Dressed"],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-06-12": null,
    "2025-06-13": null,
    "2025-06-14": {
      transcript:
        "Period started this morning. Heavy. Pain like a six, cramping down low and my lower back too. Had to cancel my afternoon meetings. Took naproxen at six and again at noon. The nausea is bad today too, I couldn't eat lunch. Just on the couch with the heating pad.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [["Nausea", "Moderate"]],
        hardToDo: ["Work", "Eat"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-06-15": null,
    "2025-06-16": null,
    "2025-06-17": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Medium",
          other: ["Spotting"],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-06-18": {
      transcript:
        "Why am I in pain again. My period just ended. Pain like a five in my pelvis. This is the part that makes me crazy. There's no pattern. Took a naproxen, lying down. I don't know what else to do. Trying not to spiral about it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-06-19": {
      transcript:
        "Today was fine. Pain like a three. Got work done. Ordered dinner because I didn't have it in me to cook. Not bad, not great. Just a day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [["Fatigue", "Mild"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-06-20": null,
    "2025-06-21": {
      transcript:
        "Today was fine. Pain like a three. Got work done. Ordered dinner because I didn't have it in me to cook. Not bad, not great. Just a day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [["Fatigue", "Mild"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-06-22": {
      transcript:
        "Good day. We went to the farmer's market this morning. Walked around for an hour, which is a lot for me. No pain. We had people over later, just a few friends. Didn't have to cancel anything. Yeah. Good day.",
      data: {
        pain: [],
        mood: [
          ["Social", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Affectionate", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-06-23": {
      transcript:
        "And just like that, back to bad. Pain like a five. I hate the whiplash. Took a naproxen, laid down. Skipped my walk, obviously. My husband asked if he should pick up dinner, I said yes. I feel like a burden some days. I know I'm not. But I feel like it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Guilty", "NEGATIVE"],
          ["Frustrated", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Walk", "Prepare Food"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-06-24": {
      transcript:
        "Good day. We went to the farmer's market this morning. Walked around for an hour, which is a lot for me. No pain. We had people over later, just a few friends. Didn't have to cancel anything. Yeah. Good day.",
      data: {
        pain: [],
        mood: [
          ["Social", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Affectionate", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-06-25": {
      transcript:
        "I paid for yesterday. I knew I would. Pain in my pelvis, like a five. Should not have done that walk. Or maybe it's unrelated, who knows. Took a naproxen at like ten. Lying down most of the afternoon. Um, frustrated, because I was finally trying to do something for my body.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Walk"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-06-26": null,
    "2025-06-27": {
      transcript:
        "Um, today was fine. Pain like a three. I worked, I made dinner, I went to bed early. That's the whole day. Just a quiet day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Calm", "POSITIVE"]],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-06-28": {
      transcript:
        "Tired today. Pain like a two or three. Coasted through work. Made simple pasta. Fell asleep watching TV. Um, nothing to say really.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: [],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-06-29": {
      transcript:
        "Middle of the road day. Pain like a three. Got some work done, not as much as I wanted. My husband made dinner. Didn't walk, didn't stretch. Just a fine day. That's the update.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-06-30": {
      transcript:
        "New gyno consult today. She actually listened. Ordered some imaging. Pain like a three, which for a doctor visit I'm surprised I was able to handle. Um, hopeful. Cautiously.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-07-01": null,
    "2025-07-02": {
      transcript:
        "Paying for last night. We had sex for the first time in like two months and now I'm in pain. Deep pain, like a five. Um, I keep doing this math, is it worth the day after. Sometimes it is. Today I'm not sure. Naproxen, heating pad.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Vagina", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Sad", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Have Sex", "Work"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-07-03": {
      transcript:
        "Another good one. Pain like a one. I went for a walk at lunch, twenty minutes. First time in weeks. Legs felt weak, I've gotten out of shape, but no pain. I'll take weak over pain.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Motivated", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-07-04": null,
    "2025-07-05": {
      transcript:
        "Walked to pick up my kid from school instead of driving. Haven't done that in months. My pelvis felt fine the whole way, no catching, no pulling. That's huge. About a mile round trip. Legs will feel it tomorrow, but today yes.",
      data: {
        pain: [],
        mood: [
          ["Motivated", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-07-06": null,
    "2025-07-07": null,
    "2025-07-08": null,
    "2025-07-09": {
      transcript:
        "Lower back pain dominating today, like a six. It's specifically the back, not the usual wrap-around. Weird for me. Took a naproxen, heating pad on my lower back. Couldn't sit at my desk, worked from the couch. My husband made dinner. Just uncomfortable all day.",
      data: {
        pain: [["Lower Back", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Sit Down", "Work"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-07-10": {
      transcript:
        "Woke up with a knife in my ovary. I mean, not literally, but that's what it feels like on the right side. Like a seven. Took naproxen right away, it didn't touch it. I had to reschedule my morning. Um, I'm worried, this feels different than my usual flare.",
      data: {
        pain: [["Ovary", "Severe"]],
        mood: [
          ["Worried", "NEGATIVE"],
          ["Scared", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Stand"],
        other: [],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-07-11": {
      transcript:
        "Bad day. Pain like a five in my pelvis, wrapping to my back. No warning, no trigger. Took naproxen, put the heating pad on. Canceled my lunch thing. Worked from the couch. Um, I'm just frustrated, I don't know what else to say. I thought I was past this part of the month.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Moderate"],
        ],
        mood: [["Frustrated", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Work", "Socialize"],
        other: [],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-07-12": {
      transcript:
        "Period started this morning. Heavy. Pain like a six, cramping down low and my lower back too. Had to cancel my afternoon meetings. Took naproxen at six and again at noon. The nausea is bad today too, I couldn't eat lunch. Just on the couch with the heating pad.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [["Nausea", "Moderate"]],
        hardToDo: ["Work", "Eat"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-07-13": {
      transcript:
        "Day two of my period is always the worst. I don't know why, every month, day two takes me out. Took naproxen at six AM. Another at noon. Heating pad hasn't left my lap. I ate crackers and ginger tea, that's it. My husband took my daughter out so I could just rest. Just tired.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Nausea", "Mild"]],
        hardToDo: ["Work", "Eat", "Get out of Bed", "Prepare Food"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-07-14": {
      transcript:
        "Day two of my period is always the worst. I don't know why, every month, day two takes me out. Took naproxen at six AM. Another at noon. Heating pad hasn't left my lap. I ate crackers and ginger tea, that's it. My husband took my daughter out so I could just rest. Just tired.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Nausea", "Mild"]],
        hardToDo: ["Work", "Eat", "Get out of Bed", "Prepare Food"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-07-15": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Light",
          other: ["Spotting"],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-07-16": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Medium",
          other: ["Spotting"],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-07-17": {
      transcript:
        "Fine. Pain like a three. I forgot to record yesterday I think. Or maybe I did, I don't remember. Anyway. Ate normally, worked normally. Nothing happened today. Boring is a gift with this disease, I'll take it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Calm", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-07-18": {
      transcript:
        "Period ended two days ago and I'm still in pain. Like a four, five in my pelvis and a little in my rectum, which, you know, always feels worse than it sounds. I'm just so tired of this. Took naproxen. Worked from home.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Rectum", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Sad", "NEGATIVE"],
        ],
        period: null,
        gi: [["Painful Bowel Movement", "Moderate"]],
        hardToDo: ["Work", "Use Toilet"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-07-19": {
      transcript:
        "Saturday and of course I'm in pain. Supposed to be my time. On the couch. Cramping, like a six. My husband took my daughter to her game without me. Um, I just laid there and felt sorry for myself. Took naproxen, heating pad, ginger tea, still bad. Lost Saturday.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Lonely", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Walk", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-07-20": null,
    "2025-07-21": null,
    "2025-07-22": {
      transcript:
        "New gyno consult today. She actually listened. Ordered some imaging. Pain like a three, which for a doctor visit I'm surprised I was able to handle. Um, hopeful. Cautiously.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-07-23": null,
    "2025-07-24": {
      transcript:
        "And just like that, back to bad. Pain like a five. I hate the whiplash. Took a naproxen, laid down. Skipped my walk, obviously. My husband asked if he should pick up dinner, I said yes. I feel like a burden some days. I know I'm not. But I feel like it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Guilty", "NEGATIVE"],
          ["Frustrated", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Walk", "Prepare Food"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-07-25": {
      transcript:
        "Why am I in pain again. My period just ended. Pain like a five in my pelvis. This is the part that makes me crazy. There's no pattern. Took a naproxen, lying down. I don't know what else to do. Trying not to spiral about it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-07-26": {
      transcript:
        "New gyno consult today. She actually listened. Ordered some imaging. Pain like a three, which for a doctor visit I'm surprised I was able to handle. Um, hopeful. Cautiously.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-07-27": {
      transcript:
        "Saturday and of course I'm in pain. Supposed to be my time. On the couch. Cramping, like a six. My husband took my daughter to her game without me. Um, I just laid there and felt sorry for myself. Took naproxen, heating pad, ginger tea, still bad. Lost Saturday.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Lonely", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Walk", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-07-28": null,
    "2025-07-29": {
      transcript:
        "Another good one. Pain like a one. I went for a walk at lunch, twenty minutes. First time in weeks. Legs felt weak, I've gotten out of shape, but no pain. I'll take weak over pain.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Motivated", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-07-30": null,
    "2025-07-31": null,
    "2025-08-01": null,
    "2025-08-02": null,
    "2025-08-03": {
      transcript:
        "Walked to pick up my kid from school instead of driving. Haven't done that in months. My pelvis felt fine the whole way, no catching, no pulling. That's huge. About a mile round trip. Legs will feel it tomorrow, but today yes.",
      data: {
        pain: [],
        mood: [
          ["Motivated", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-08-04": {
      transcript:
        "Bloated today, endo belly bad. Pain like a three otherwise but I look six months pregnant. Avoided dairy, avoided sugar, didn't help. Um, got through work. Comfy pants all day.",
      data: {
        pain: [["Abdomen", "Moderate"]],
        mood: [
          ["Disgusted", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [
          ["Endo Belly", "Moderate"],
          ["Gas", "Mild"],
        ],
        hardToDo: ["Get Dressed"],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-08-05": {
      transcript:
        "Period ended two days ago and I'm still in pain. Like a four, five in my pelvis and a little in my rectum, which, you know, always feels worse than it sounds. I'm just so tired of this. Took naproxen. Worked from home.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Rectum", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Sad", "NEGATIVE"],
        ],
        period: null,
        gi: [["Painful Bowel Movement", "Moderate"]],
        hardToDo: ["Work", "Use Toilet"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-08-06": null,
    "2025-08-07": {
      transcript:
        "Ugh. Woke up in pain. Like a six, maybe a seven. I don't know what set it off, yesterday was fine. I was fine. Took a naproxen at like five AM. Heating pad. Worked from bed, barely. My daughter came in to check on me before school, she was careful. Um, I just want this to end.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-08-08": {
      transcript:
        "Sharp pain in my pelvis all day, like a five, six at its worst. I don't know. Um, I took two naproxen today. Worked from the couch. My husband made dinner. I ate a little. Just one of those days where I feel like my body is a puzzle I can't solve.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Sit Down"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-08-09": {
      transcript:
        "Period started. Heavy right out of the gate. Pain like a six. Um, I'm in for a long three days I think. Naproxen, heating pad, you know the drill. On the couch. My husband is doing everything. I feel bad but I can't move.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Guilty", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Stand", "Prepare Food"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-08-10": null,
    "2025-08-11": {
      transcript:
        "Day three of the period. Still heavy, some clots today. Pain came down a little, like a four. Um, the diarrhea started, which always happens around this time, it's like clockwork. I stayed in bed most of the day. My husband brought me soup. Didn't shower. Just a write-off day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Diarrhea", "Moderate"]],
        hardToDo: ["Shower", "Get out of Bed", "Work"],
        other: [["Fatigue", "Severe"]],
        medications: [],
      },
      overall: "BAD",
    },
    "2025-08-12": {
      transcript:
        "Um, today was fine. Pain like a three. I worked, I made dinner, I went to bed early. That's the whole day. Just a quiet day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Calm", "POSITIVE"]],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-08-13": {
      transcript:
        "Came down a lot today. Pain like a two. Bleeding is slowing. Showered for the first time properly in three days, washed my hair. Felt human. Got caught up on work. My husband made pasta. Yeah.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: {
          flow: "Light",
          other: [],
        },
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-08-14": {
      transcript:
        "Woke up at four in pain. Six, maybe a seven. I have a big meeting at ten that I cannot miss. I'm going to put my face on and fake it. Took a naproxen at four, another at eight. Did the meeting with the heating pad under my shirt. Immediately went back to the couch after.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Sit Down", "Get out of Bed"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-08-15": {
      transcript:
        "Stuck in bed again on a Saturday. Pain like a five. I'm mad about it. I had plans with a friend, we were going to get coffee, and I canceled. Again. I'm running out of friends I haven't canceled on. Slept a lot. Woke up in the evening just to eat.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Angry", "NEGATIVE"],
          ["Isolated", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Get out of Bed"],
        other: [["Fatigue", "Severe"]],
        medications: [],
      },
      overall: "BAD",
    },
    "2025-08-16": {
      transcript:
        "Middle of the road day. Pain like a three. Got some work done, not as much as I wanted. My husband made dinner. Didn't walk, didn't stretch. Just a fine day. That's the update.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-08-17": {
      transcript:
        "Saturday and of course I'm in pain. Supposed to be my time. On the couch. Cramping, like a six. My husband took my daughter to her game without me. Um, I just laid there and felt sorry for myself. Took naproxen, heating pad, ginger tea, still bad. Lost Saturday.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Lonely", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Walk", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-08-18": {
      transcript:
        "I paid for yesterday. I knew I would. Pain in my pelvis, like a five. Should not have done that walk. Or maybe it's unrelated, who knows. Took a naproxen at like ten. Lying down most of the afternoon. Um, frustrated, because I was finally trying to do something for my body.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Walk"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-08-19": {
      transcript:
        "Um, today was fine. Pain like a three. I worked, I made dinner, I went to bed early. That's the whole day. Just a quiet day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Calm", "POSITIVE"]],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-08-20": null,
    "2025-08-21": {
      transcript:
        "Another good one. Pain like a one. I went for a walk at lunch, twenty minutes. First time in weeks. Legs felt weak, I've gotten out of shape, but no pain. I'll take weak over pain.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Motivated", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-08-22": {
      transcript:
        "Sunday. Good day. Lazy morning, pajamas until eleven. Made pancakes with my daughter, she's getting good in the kitchen. Walked around the neighborhood in the afternoon, the three of us. Um, I'm trying to enjoy these days when they come.",
      data: {
        pain: [],
        mood: [
          ["Affectionate", "POSITIVE"],
          ["Relaxed", "POSITIVE"],
          ["Happy", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-08-23": {
      transcript:
        "Had my doctor appointment today. She refilled my Orilissa. Didn't talk about much else honestly, it was quick. I asked about the pain getting worse and she said give it another cycle and reassess. Same thing she always says. Pain like a three today.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: ["Orilissa"],
      },
      overall: "MANAGEABLE",
    },
    "2025-08-24": {
      transcript:
        "Came down a lot today. Pain like a two. Bleeding is slowing. Showered for the first time properly in three days, washed my hair. Felt human. Got caught up on work. My husband made pasta. Yeah.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: {
          flow: "Light",
          other: [],
        },
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-08-25": {
      transcript:
        "Good day. Pain like a one, almost nothing. Got through my emails. Had a productive call. Um, I ate a real lunch. Walked to the mailbox, which sounds small but it's something. Yeah. Small wins.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Productive", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-08-26": null,
    "2025-08-27": null,
    "2025-08-28": {
      transcript:
        "Came down a lot today. Pain like a two. Bleeding is slowing. Showered for the first time properly in three days, washed my hair. Felt human. Got caught up on work. My husband made pasta. Yeah.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: {
          flow: "Light",
          other: [],
        },
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-08-29": {
      transcript:
        "Good day. We went to the farmer's market this morning. Walked around for an hour, which is a lot for me. No pain. We had people over later, just a few friends. Didn't have to cancel anything. Yeah. Good day.",
      data: {
        pain: [],
        mood: [
          ["Social", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Affectionate", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-08-30": {
      transcript:
        "Met a friend for coffee. I haven't done that in months. It was so nice to just sit and talk. She has her own chronic stuff so she gets it. We compared meds, compared bad days, but also talked about regular life. I felt like a full person today.",
      data: {
        pain: [],
        mood: [
          ["Social", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Relaxed", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-08-31": null,
    "2025-09-01": {
      transcript:
        "Woke up with a knife in my ovary. I mean, not literally, but that's what it feels like on the right side. Like a seven. Took naproxen right away, it didn't touch it. I had to reschedule my morning. Um, I'm worried, this feels different than my usual flare.",
      data: {
        pain: [["Ovary", "Severe"]],
        mood: [
          ["Worried", "NEGATIVE"],
          ["Scared", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Stand"],
        other: [],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-09-02": {
      transcript:
        "Today was a write-off. Pain like a six in my lower belly and hips. Couldn't focus on anything. Um, I had a headache too, maybe from the pain, maybe from clenching. Took Tylenol and naproxen, only the naproxen helped. Laid down most of the afternoon.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Outer Hip", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Mentally Foggy", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Stand"],
        other: [
          ["Headache", "Moderate"],
          ["Fatigue", "Moderate"],
        ],
        medications: ["Tylenol", "naproxen"],
      },
      overall: "BAD",
    },
    "2025-09-03": {
      transcript:
        "Sharp pain in my pelvis all day, like a five, six at its worst. I don't know. Um, I took two naproxen today. Worked from the couch. My husband made dinner. I ate a little. Just one of those days where I feel like my body is a puzzle I can't solve.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Sit Down"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-09-04": null,
    "2025-09-05": null,
    "2025-09-06": {
      transcript:
        "Day two of my period is always the worst. I don't know why, every month, day two takes me out. Took naproxen at six AM. Another at noon. Heating pad hasn't left my lap. I ate crackers and ginger tea, that's it. My husband took my daughter out so I could just rest. Just tired.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Nausea", "Mild"]],
        hardToDo: ["Work", "Eat", "Get out of Bed", "Prepare Food"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-09-07": null,
    "2025-09-08": {
      transcript:
        "Why am I in pain again. My period just ended. Pain like a five in my pelvis. This is the part that makes me crazy. There's no pattern. Took a naproxen, lying down. I don't know what else to do. Trying not to spiral about it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-09-09": {
      transcript:
        "Came down a lot today. Pain like a two. Bleeding is slowing. Showered for the first time properly in three days, washed my hair. Felt human. Got caught up on work. My husband made pasta. Yeah.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: {
          flow: "Light",
          other: [],
        },
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-09-10": null,
    "2025-09-11": {
      transcript:
        "Tired today. Pain like a two or three. Coasted through work. Made simple pasta. Fell asleep watching TV. Um, nothing to say really.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: [],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-09-12": {
      transcript:
        "No pain today. None. I forgot what that feels like honestly. Got a lot done, ate well, felt like myself. Um, I took my meds on time. Yeah. Good day.",
      data: {
        pain: [],
        mood: [
          ["Happy", "POSITIVE"],
          ["Productive", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-09-13": null,
    "2025-09-14": null,
    "2025-09-15": {
      transcript:
        "Bad GI day. Endo belly like whoa, I look six months pregnant. Pain like a five with all this bloating. Um, constipated for three days now. Took a stool softener. Laid on the couch. I hate the bloating honestly, more than the pain sometimes.",
      data: {
        pain: [
          ["Abdomen", "Moderate"],
          ["Intestines", "Moderate"],
        ],
        mood: [
          ["Disgusted", "NEGATIVE"],
          ["Frustrated", "NEGATIVE"],
        ],
        period: null,
        gi: [
          ["Endo Belly", "Severe"],
          ["Constipation", "Moderate"],
          ["Uncomfortably Full", "Moderate"],
        ],
        hardToDo: ["Eat", "Get Dressed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["stool softener"],
      },
      overall: "BAD",
    },
    "2025-09-16": null,
    "2025-09-17": {
      transcript:
        "No pain today. None. I forgot what that feels like honestly. Got a lot done, ate well, felt like myself. Um, I took my meds on time. Yeah. Good day.",
      data: {
        pain: [],
        mood: [
          ["Happy", "POSITIVE"],
          ["Productive", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-09-18": {
      transcript:
        "Sharp pain in my pelvis all day, like a five, six at its worst. I don't know. Um, I took two naproxen today. Worked from the couch. My husband made dinner. I ate a little. Just one of those days where I feel like my body is a puzzle I can't solve.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Sit Down"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-09-19": {
      transcript:
        "Better today. I don't know how that works. Yesterday was awful and today I'm like, a two maybe. Got a lot done at work, caught up. Had a decent lunch. My husband and I walked after dinner, twenty minutes around the neighborhood. Taking the win.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-09-20": {
      transcript:
        "Stuck in bed again on a Saturday. Pain like a five. I'm mad about it. I had plans with a friend, we were going to get coffee, and I canceled. Again. I'm running out of friends I haven't canceled on. Slept a lot. Woke up in the evening just to eat.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Angry", "NEGATIVE"],
          ["Isolated", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Get out of Bed"],
        other: [["Fatigue", "Severe"]],
        medications: [],
      },
      overall: "BAD",
    },
    "2025-09-21": {
      transcript:
        "Full work day, no pain. Finished a big deliverable. Um, I felt sharp, present, like my brain was firing. I miss those days. More of these please.",
      data: {
        pain: [],
        mood: [
          ["Productive", "POSITIVE"],
          ["Motivated", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-09-22": null,
    "2025-09-23": null,
    "2025-09-24": null,
    "2025-09-25": null,
    "2025-09-26": null,
    "2025-09-27": {
      transcript:
        "Good day. We went to the farmer's market this morning. Walked around for an hour, which is a lot for me. No pain. We had people over later, just a few friends. Didn't have to cancel anything. Yeah. Good day.",
      data: {
        pain: [],
        mood: [
          ["Social", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Affectionate", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-09-28": {
      transcript:
        "Saturday and of course I'm in pain. Supposed to be my time. On the couch. Cramping, like a six. My husband took my daughter to her game without me. Um, I just laid there and felt sorry for myself. Took naproxen, heating pad, ginger tea, still bad. Lost Saturday.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Lonely", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Walk", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-09-29": {
      transcript:
        "Dragging today. Pain like a three but the fatigue is what's getting me. I can't tell if it's endo tired or regular tired. Probably both. Going to bed early.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Mentally Foggy", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-09-30": null,
    "2025-10-01": {
      transcript:
        "Um, today was fine. Pain like a three. I worked, I made dinner, I went to bed early. That's the whole day. Just a quiet day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Calm", "POSITIVE"]],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-10-02": {
      transcript:
        "Today was fine. Pain like a three. Got work done. Ordered dinner because I didn't have it in me to cook. Not bad, not great. Just a day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [["Fatigue", "Mild"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-10-03": {
      transcript:
        "Today was fine. Pain like a three. Got work done. Ordered dinner because I didn't have it in me to cook. Not bad, not great. Just a day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [["Fatigue", "Mild"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-10-04": {
      transcript:
        "I did fifteen minutes of yoga this morning. First time in forever. Body felt tight but okay, I went slow. Um, hoping I don't pay tomorrow, that's always the gamble. Worked a full day. Made dinner. Good day.",
      data: {
        pain: [],
        mood: [
          ["Motivated", "POSITIVE"],
          ["Productive", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-10-05": {
      transcript:
        "Good day. We went to the farmer's market this morning. Walked around for an hour, which is a lot for me. No pain. We had people over later, just a few friends. Didn't have to cancel anything. Yeah. Good day.",
      data: {
        pain: [],
        mood: [
          ["Social", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Affectionate", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-10-06": null,
    "2025-10-07": {
      transcript:
        "Flare out of nowhere. I was fine this morning. By afternoon, pain like a six. I cannot predict this thing. I just can't. Um, I had to excuse myself from a work thing and go lie down. Took a naproxen. Came back, finished the day, barely. My daughter wanted me to play with her and I just couldn't.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Stand"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-10-08": null,
    "2025-10-09": {
      transcript:
        "Period started this morning. Heavy. Pain like a six, cramping down low and my lower back too. Had to cancel my afternoon meetings. Took naproxen at six and again at noon. The nausea is bad today too, I couldn't eat lunch. Just on the couch with the heating pad.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [["Nausea", "Moderate"]],
        hardToDo: ["Work", "Eat"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-10-10": null,
    "2025-10-11": {
      transcript:
        "Day two of my period is always the worst. I don't know why, every month, day two takes me out. Took naproxen at six AM. Another at noon. Heating pad hasn't left my lap. I ate crackers and ginger tea, that's it. My husband took my daughter out so I could just rest. Just tired.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Nausea", "Mild"]],
        hardToDo: ["Work", "Eat", "Get out of Bed", "Prepare Food"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-10-12": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Light",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-10-13": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Light",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-10-14": {
      transcript:
        "Today was fine. Pain like a three. Got work done. Ordered dinner because I didn't have it in me to cook. Not bad, not great. Just a day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [["Fatigue", "Mild"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-10-15": null,
    "2025-10-16": {
      transcript:
        "Walked to pick up my kid from school instead of driving. Haven't done that in months. My pelvis felt fine the whole way, no catching, no pulling. That's huge. About a mile round trip. Legs will feel it tomorrow, but today yes.",
      data: {
        pain: [],
        mood: [
          ["Motivated", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-10-17": {
      transcript:
        "Woke up with a knife in my ovary. I mean, not literally, but that's what it feels like on the right side. Like a seven. Took naproxen right away, it didn't touch it. I had to reschedule my morning. Um, I'm worried, this feels different than my usual flare.",
      data: {
        pain: [["Ovary", "Severe"]],
        mood: [
          ["Worried", "NEGATIVE"],
          ["Scared", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Stand"],
        other: [],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-10-18": {
      transcript:
        "Today was fine. Pain like a three. Got work done. Ordered dinner because I didn't have it in me to cook. Not bad, not great. Just a day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [["Fatigue", "Mild"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-10-19": null,
    "2025-10-20": {
      transcript:
        "Walked to pick up my kid from school instead of driving. Haven't done that in months. My pelvis felt fine the whole way, no catching, no pulling. That's huge. About a mile round trip. Legs will feel it tomorrow, but today yes.",
      data: {
        pain: [],
        mood: [
          ["Motivated", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-10-21": {
      transcript:
        "Nausea all day, pain like a five, and I couldn't keep food down in the morning. I don't know if it's a flare or a bug or what. Um, mostly ginger tea today. Worked from bed. Weak.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Upper Chest", "Mild"],
        ],
        mood: [
          ["Worried", "NEGATIVE"],
          ["Mentally Foggy", "NEGATIVE"],
        ],
        period: null,
        gi: [
          ["Nausea", "Severe"],
          ["Vomiting", "Moderate"],
        ],
        hardToDo: ["Eat", "Work", "Prepare Food"],
        other: [
          ["Fatigue", "Severe"],
          ["Dizziness", "Moderate"],
        ],
        medications: [],
      },
      overall: "BAD",
    },
    "2025-10-22": {
      transcript:
        "Fine. Pain like a three. I forgot to record yesterday I think. Or maybe I did, I don't remember. Anyway. Ate normally, worked normally. Nothing happened today. Boring is a gift with this disease, I'll take it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Calm", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-10-23": null,
    "2025-10-24": null,
    "2025-10-25": {
      transcript:
        "Saturday and of course I'm in pain. Supposed to be my time. On the couch. Cramping, like a six. My husband took my daughter to her game without me. Um, I just laid there and felt sorry for myself. Took naproxen, heating pad, ginger tea, still bad. Lost Saturday.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Lonely", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Walk", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-10-26": {
      transcript:
        "Tired today. Pain like a two or three. Coasted through work. Made simple pasta. Fell asleep watching TV. Um, nothing to say really.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: [],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-10-27": {
      transcript:
        "Better today. I don't know how that works. Yesterday was awful and today I'm like, a two maybe. Got a lot done at work, caught up. Had a decent lunch. My husband and I walked after dinner, twenty minutes around the neighborhood. Taking the win.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-10-28": {
      transcript:
        "New gyno consult today. She actually listened. Ordered some imaging. Pain like a three, which for a doctor visit I'm surprised I was able to handle. Um, hopeful. Cautiously.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-10-29": {
      transcript:
        "New gyno consult today. She actually listened. Ordered some imaging. Pain like a three, which for a doctor visit I'm surprised I was able to handle. Um, hopeful. Cautiously.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-10-30": {
      transcript:
        "Today was fine. Pain like a three. Got work done. Ordered dinner because I didn't have it in me to cook. Not bad, not great. Just a day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [["Fatigue", "Mild"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-10-31": {
      transcript:
        "Saturday and of course I'm in pain. Supposed to be my time. On the couch. Cramping, like a six. My husband took my daughter to her game without me. Um, I just laid there and felt sorry for myself. Took naproxen, heating pad, ginger tea, still bad. Lost Saturday.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Lonely", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Walk", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-11-01": null,
    "2025-11-02": {
      transcript:
        "Stuck in bed again on a Saturday. Pain like a five. I'm mad about it. I had plans with a friend, we were going to get coffee, and I canceled. Again. I'm running out of friends I haven't canceled on. Slept a lot. Woke up in the evening just to eat.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Angry", "NEGATIVE"],
          ["Isolated", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Get out of Bed"],
        other: [["Fatigue", "Severe"]],
        medications: [],
      },
      overall: "BAD",
    },
    "2025-11-03": {
      transcript:
        "Period ended two days ago and I'm still in pain. Like a four, five in my pelvis and a little in my rectum, which, you know, always feels worse than it sounds. I'm just so tired of this. Took naproxen. Worked from home.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Rectum", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Sad", "NEGATIVE"],
        ],
        period: null,
        gi: [["Painful Bowel Movement", "Moderate"]],
        hardToDo: ["Work", "Use Toilet"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-11-04": {
      transcript:
        "Dragging today. Pain like a three but the fatigue is what's getting me. I can't tell if it's endo tired or regular tired. Probably both. Going to bed early.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Mentally Foggy", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-11-05": {
      transcript:
        "New gyno consult today. She actually listened. Ordered some imaging. Pain like a three, which for a doctor visit I'm surprised I was able to handle. Um, hopeful. Cautiously.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-11-06": {
      transcript:
        "Ugh. Woke up in pain. Like a six, maybe a seven. I don't know what set it off, yesterday was fine. I was fine. Took a naproxen at like five AM. Heating pad. Worked from bed, barely. My daughter came in to check on me before school, she was careful. Um, I just want this to end.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-11-07": {
      transcript:
        "Woke up with a knife in my ovary. I mean, not literally, but that's what it feels like on the right side. Like a seven. Took naproxen right away, it didn't touch it. I had to reschedule my morning. Um, I'm worried, this feels different than my usual flare.",
      data: {
        pain: [["Ovary", "Severe"]],
        mood: [
          ["Worried", "NEGATIVE"],
          ["Scared", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Stand"],
        other: [],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-11-08": null,
    "2025-11-09": {
      transcript:
        "Day two of my period is always the worst. I don't know why, every month, day two takes me out. Took naproxen at six AM. Another at noon. Heating pad hasn't left my lap. I ate crackers and ginger tea, that's it. My husband took my daughter out so I could just rest. Just tired.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Nausea", "Mild"]],
        hardToDo: ["Work", "Eat", "Get out of Bed", "Prepare Food"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-11-10": {
      transcript:
        "Day three of the period. Still heavy, some clots today. Pain came down a little, like a four. Um, the diarrhea started, which always happens around this time, it's like clockwork. I stayed in bed most of the day. My husband brought me soup. Didn't shower. Just a write-off day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Diarrhea", "Moderate"]],
        hardToDo: ["Shower", "Get out of Bed", "Work"],
        other: [["Fatigue", "Severe"]],
        medications: [],
      },
      overall: "BAD",
    },
    "2025-11-11": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Medium",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-11-12": null,
    "2025-11-13": null,
    "2025-11-14": {
      transcript:
        "Um, today was fine. Pain like a three. I worked, I made dinner, I went to bed early. That's the whole day. Just a quiet day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Calm", "POSITIVE"]],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-11-15": {
      transcript:
        "Middle of the road day. Pain like a three. Got some work done, not as much as I wanted. My husband made dinner. Didn't walk, didn't stretch. Just a fine day. That's the update.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-11-16": null,
    "2025-11-17": {
      transcript:
        "Saturday. Slept in. Pain like a one. Did laundry, cleaned the kitchen, nothing crazy. My husband took my daughter to the movies. I read a book on the couch for two hours. Felt like actual rest, the kind I needed.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Calm", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-11-18": null,
    "2025-11-19": {
      transcript:
        "Good day. We went to the farmer's market this morning. Walked around for an hour, which is a lot for me. No pain. We had people over later, just a few friends. Didn't have to cancel anything. Yeah. Good day.",
      data: {
        pain: [],
        mood: [
          ["Social", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Affectionate", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-11-20": {
      transcript:
        "Came down a lot today. Pain like a two. Bleeding is slowing. Showered for the first time properly in three days, washed my hair. Felt human. Got caught up on work. My husband made pasta. Yeah.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: {
          flow: "Light",
          other: [],
        },
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-11-21": null,
    "2025-11-22": null,
    "2025-11-23": {
      transcript:
        "Full work day, no pain. Finished a big deliverable. Um, I felt sharp, present, like my brain was firing. I miss those days. More of these please.",
      data: {
        pain: [],
        mood: [
          ["Productive", "POSITIVE"],
          ["Motivated", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-11-24": null,
    "2025-11-25": {
      transcript:
        "Tired today. Pain like a two or three. Coasted through work. Made simple pasta. Fell asleep watching TV. Um, nothing to say really.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: [],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-11-26": {
      transcript:
        "Fine. Pain like a three. I forgot to record yesterday I think. Or maybe I did, I don't remember. Anyway. Ate normally, worked normally. Nothing happened today. Boring is a gift with this disease, I'll take it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Calm", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-11-27": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-11-28": {
      transcript:
        "Went to dinner with my husband tonight. Real dinner, dressed up, wine, the whole thing. Haven't done that in forever. Um, pain like a one all evening. It felt like such a treat. I needed it.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Affectionate", "POSITIVE"],
          ["Relaxed", "POSITIVE"],
          ["Happy", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-11-29": null,
    "2025-11-30": {
      transcript:
        "Came down a lot today. Pain like a two. Bleeding is slowing. Showered for the first time properly in three days, washed my hair. Felt human. Got caught up on work. My husband made pasta. Yeah.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: {
          flow: "Light",
          other: [],
        },
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-12-01": null,
    "2025-12-02": null,
    "2025-12-03": {
      transcript:
        "Today was fine. Pain like a three. Got work done. Ordered dinner because I didn't have it in me to cook. Not bad, not great. Just a day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [["Fatigue", "Mild"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-12-04": {
      transcript:
        "Fine. Pain like a three. I forgot to record yesterday I think. Or maybe I did, I don't remember. Anyway. Ate normally, worked normally. Nothing happened today. Boring is a gift with this disease, I'll take it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Calm", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-12-05": {
      transcript:
        "Bloated today, endo belly bad. Pain like a three otherwise but I look six months pregnant. Avoided dairy, avoided sugar, didn't help. Um, got through work. Comfy pants all day.",
      data: {
        pain: [["Abdomen", "Moderate"]],
        mood: [
          ["Disgusted", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [
          ["Endo Belly", "Moderate"],
          ["Gas", "Mild"],
        ],
        hardToDo: ["Get Dressed"],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-12-06": {
      transcript:
        "Saturday. Slept in. Pain like a one. Did laundry, cleaned the kitchen, nothing crazy. My husband took my daughter to the movies. I read a book on the couch for two hours. Felt like actual rest, the kind I needed.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Calm", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-12-07": {
      transcript:
        "Had my doctor appointment today. She refilled my Orilissa. Didn't talk about much else honestly, it was quick. I asked about the pain getting worse and she said give it another cycle and reassess. Same thing she always says. Pain like a three today.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: ["Orilissa"],
      },
      overall: "MANAGEABLE",
    },
    "2025-12-08": {
      transcript:
        "Today was a write-off. Pain like a six in my lower belly and hips. Couldn't focus on anything. Um, I had a headache too, maybe from the pain, maybe from clenching. Took Tylenol and naproxen, only the naproxen helped. Laid down most of the afternoon.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Outer Hip", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Mentally Foggy", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Stand"],
        other: [
          ["Headache", "Moderate"],
          ["Fatigue", "Moderate"],
        ],
        medications: ["Tylenol", "naproxen"],
      },
      overall: "BAD",
    },
    "2025-12-09": {
      transcript:
        "Bad day. Pain like a five in my pelvis, wrapping to my back. No warning, no trigger. Took naproxen, put the heating pad on. Canceled my lunch thing. Worked from the couch. Um, I'm just frustrated, I don't know what else to say. I thought I was past this part of the month.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Moderate"],
        ],
        mood: [["Frustrated", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Work", "Socialize"],
        other: [],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-12-10": {
      transcript:
        "Period started this morning. Heavy. Pain like a six, cramping down low and my lower back too. Had to cancel my afternoon meetings. Took naproxen at six and again at noon. The nausea is bad today too, I couldn't eat lunch. Just on the couch with the heating pad.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [["Nausea", "Moderate"]],
        hardToDo: ["Work", "Eat"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-12-11": {
      transcript:
        "Day two of my period is always the worst. I don't know why, every month, day two takes me out. Took naproxen at six AM. Another at noon. Heating pad hasn't left my lap. I ate crackers and ginger tea, that's it. My husband took my daughter out so I could just rest. Just tired.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Nausea", "Mild"]],
        hardToDo: ["Work", "Eat", "Get out of Bed", "Prepare Food"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-12-12": {
      transcript:
        "Day two of my period is always the worst. I don't know why, every month, day two takes me out. Took naproxen at six AM. Another at noon. Heating pad hasn't left my lap. I ate crackers and ginger tea, that's it. My husband took my daughter out so I could just rest. Just tired.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Nausea", "Mild"]],
        hardToDo: ["Work", "Eat", "Get out of Bed", "Prepare Food"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-12-13": null,
    "2025-12-14": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Medium",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-12-15": {
      transcript:
        "Came down a lot today. Pain like a two. Bleeding is slowing. Showered for the first time properly in three days, washed my hair. Felt human. Got caught up on work. My husband made pasta. Yeah.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: {
          flow: "Light",
          other: [],
        },
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-12-16": null,
    "2025-12-17": {
      transcript:
        "I paid for yesterday. I knew I would. Pain in my pelvis, like a five. Should not have done that walk. Or maybe it's unrelated, who knows. Took a naproxen at like ten. Lying down most of the afternoon. Um, frustrated, because I was finally trying to do something for my body.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Walk"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-12-18": {
      transcript:
        "Bad day. Pain like a five in my pelvis, wrapping to my back. No warning, no trigger. Took naproxen, put the heating pad on. Canceled my lunch thing. Worked from the couch. Um, I'm just frustrated, I don't know what else to say. I thought I was past this part of the month.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Moderate"],
        ],
        mood: [["Frustrated", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Work", "Socialize"],
        other: [],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-12-19": null,
    "2025-12-20": {
      transcript:
        "Stuck in bed again on a Saturday. Pain like a five. I'm mad about it. I had plans with a friend, we were going to get coffee, and I canceled. Again. I'm running out of friends I haven't canceled on. Slept a lot. Woke up in the evening just to eat.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Angry", "NEGATIVE"],
          ["Isolated", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Get out of Bed"],
        other: [["Fatigue", "Severe"]],
        medications: [],
      },
      overall: "BAD",
    },
    "2025-12-21": {
      transcript:
        "Another good one. Pain like a one. I went for a walk at lunch, twenty minutes. First time in weeks. Legs felt weak, I've gotten out of shape, but no pain. I'll take weak over pain.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Motivated", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-12-22": {
      transcript:
        "Bloated today, endo belly bad. Pain like a three otherwise but I look six months pregnant. Avoided dairy, avoided sugar, didn't help. Um, got through work. Comfy pants all day.",
      data: {
        pain: [["Abdomen", "Moderate"]],
        mood: [
          ["Disgusted", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [
          ["Endo Belly", "Moderate"],
          ["Gas", "Mild"],
        ],
        hardToDo: ["Get Dressed"],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-12-23": {
      transcript:
        "Woke up at four in pain. Six, maybe a seven. I have a big meeting at ten that I cannot miss. I'm going to put my face on and fake it. Took a naproxen at four, another at eight. Did the meeting with the heating pad under my shirt. Immediately went back to the couch after.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Sit Down", "Get out of Bed"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-12-24": {
      transcript:
        "Fine. Pain like a three. I forgot to record yesterday I think. Or maybe I did, I don't remember. Anyway. Ate normally, worked normally. Nothing happened today. Boring is a gift with this disease, I'll take it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Calm", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2025-12-25": {
      transcript:
        "Ugh. Woke up in pain. Like a six, maybe a seven. I don't know what set it off, yesterday was fine. I was fine. Took a naproxen at like five AM. Heating pad. Worked from bed, barely. My daughter came in to check on me before school, she was careful. Um, I just want this to end.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-12-26": {
      transcript:
        "Good day. We went to the farmer's market this morning. Walked around for an hour, which is a lot for me. No pain. We had people over later, just a few friends. Didn't have to cancel anything. Yeah. Good day.",
      data: {
        pain: [],
        mood: [
          ["Social", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Affectionate", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-12-27": {
      transcript:
        "Walked to pick up my kid from school instead of driving. Haven't done that in months. My pelvis felt fine the whole way, no catching, no pulling. That's huge. About a mile round trip. Legs will feel it tomorrow, but today yes.",
      data: {
        pain: [],
        mood: [
          ["Motivated", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2025-12-28": {
      transcript:
        "Stuck in bed again on a Saturday. Pain like a five. I'm mad about it. I had plans with a friend, we were going to get coffee, and I canceled. Again. I'm running out of friends I haven't canceled on. Slept a lot. Woke up in the evening just to eat.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Angry", "NEGATIVE"],
          ["Isolated", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Get out of Bed"],
        other: [["Fatigue", "Severe"]],
        medications: [],
      },
      overall: "BAD",
    },
    "2025-12-29": null,
    "2025-12-30": {
      transcript:
        "Paying the price today. Did too much gardening yesterday. Pain like a five in my lower back. I'm on the couch. Took a naproxen. Um, I keep wondering if I just have to accept a smaller life, like do less so I don't crash.",
      data: {
        pain: [["Lower Back", "Moderate"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Frustrated", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Stand", "Kneel"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2025-12-31": null,
    "2026-01-01": {
      transcript:
        "Good day. We went to the farmer's market this morning. Walked around for an hour, which is a lot for me. No pain. We had people over later, just a few friends. Didn't have to cancel anything. Yeah. Good day.",
      data: {
        pain: [],
        mood: [
          ["Social", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Affectionate", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-01-02": null,
    "2026-01-03": {
      transcript:
        "Had my doctor appointment today. She refilled my Orilissa. Didn't talk about much else honestly, it was quick. I asked about the pain getting worse and she said give it another cycle and reassess. Same thing she always says. Pain like a three today.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: ["Orilissa"],
      },
      overall: "MANAGEABLE",
    },
    "2026-01-04": {
      transcript:
        "Sunday. Good day. Lazy morning, pajamas until eleven. Made pancakes with my daughter, she's getting good in the kitchen. Walked around the neighborhood in the afternoon, the three of us. Um, I'm trying to enjoy these days when they come.",
      data: {
        pain: [],
        mood: [
          ["Affectionate", "POSITIVE"],
          ["Relaxed", "POSITIVE"],
          ["Happy", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-01-05": null,
    "2026-01-06": {
      transcript:
        "Had my doctor appointment today. She refilled my Orilissa. Didn't talk about much else honestly, it was quick. I asked about the pain getting worse and she said give it another cycle and reassess. Same thing she always says. Pain like a three today.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: ["Orilissa"],
      },
      overall: "MANAGEABLE",
    },
    "2026-01-07": {
      transcript:
        "Sharp pain in my pelvis all day, like a five, six at its worst. I don't know. Um, I took two naproxen today. Worked from the couch. My husband made dinner. I ate a little. Just one of those days where I feel like my body is a puzzle I can't solve.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Sit Down"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-01-08": {
      transcript:
        "Lower back pain dominating today, like a six. It's specifically the back, not the usual wrap-around. Weird for me. Took a naproxen, heating pad on my lower back. Couldn't sit at my desk, worked from the couch. My husband made dinner. Just uncomfortable all day.",
      data: {
        pain: [["Lower Back", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Sit Down", "Work"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-01-09": {
      transcript:
        "Period started this morning. Heavy. Pain like a six, cramping down low and my lower back too. Had to cancel my afternoon meetings. Took naproxen at six and again at noon. The nausea is bad today too, I couldn't eat lunch. Just on the couch with the heating pad.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [["Nausea", "Moderate"]],
        hardToDo: ["Work", "Eat"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-01-10": {
      transcript:
        "Day three of the period. Still heavy, some clots today. Pain came down a little, like a four. Um, the diarrhea started, which always happens around this time, it's like clockwork. I stayed in bed most of the day. My husband brought me soup. Didn't shower. Just a write-off day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Diarrhea", "Moderate"]],
        hardToDo: ["Shower", "Get out of Bed", "Work"],
        other: [["Fatigue", "Severe"]],
        medications: [],
      },
      overall: "BAD",
    },
    "2026-01-11": {
      transcript:
        "Day two of my period is always the worst. I don't know why, every month, day two takes me out. Took naproxen at six AM. Another at noon. Heating pad hasn't left my lap. I ate crackers and ginger tea, that's it. My husband took my daughter out so I could just rest. Just tired.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Nausea", "Mild"]],
        hardToDo: ["Work", "Eat", "Get out of Bed", "Prepare Food"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-01-12": {
      transcript:
        "Middle of the road day. Pain like a three. Got some work done, not as much as I wanted. My husband made dinner. Didn't walk, didn't stretch. Just a fine day. That's the update.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-01-13": {
      transcript:
        "Why am I in pain again. My period just ended. Pain like a five in my pelvis. This is the part that makes me crazy. There's no pattern. Took a naproxen, lying down. I don't know what else to do. Trying not to spiral about it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-01-14": {
      transcript:
        "Better today. I don't know how that works. Yesterday was awful and today I'm like, a two maybe. Got a lot done at work, caught up. Had a decent lunch. My husband and I walked after dinner, twenty minutes around the neighborhood. Taking the win.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-01-15": {
      transcript:
        "Another good day. I'm trying not to jinx it. Four in a row now. Um, this has been a good stretch. Worked a full day. Ate well. Yeah. I'll take it, even though I'm a little anxious about when it ends.",
      data: {
        pain: [],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-01-16": null,
    "2026-01-17": {
      transcript:
        "Better today. I don't know how that works. Yesterday was awful and today I'm like, a two maybe. Got a lot done at work, caught up. Had a decent lunch. My husband and I walked after dinner, twenty minutes around the neighborhood. Taking the win.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-01-18": null,
    "2026-01-19": {
      transcript:
        "Tired today. Pain like a two or three. Coasted through work. Made simple pasta. Fell asleep watching TV. Um, nothing to say really.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: [],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-01-20": {
      transcript:
        "And just like that, back to bad. Pain like a five. I hate the whiplash. Took a naproxen, laid down. Skipped my walk, obviously. My husband asked if he should pick up dinner, I said yes. I feel like a burden some days. I know I'm not. But I feel like it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Guilty", "NEGATIVE"],
          ["Frustrated", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Walk", "Prepare Food"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-01-21": null,
    "2026-01-22": null,
    "2026-01-23": {
      transcript:
        "New gyno consult today. She actually listened. Ordered some imaging. Pain like a three, which for a doctor visit I'm surprised I was able to handle. Um, hopeful. Cautiously.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-01-24": {
      transcript:
        "Saturday and of course I'm in pain. Supposed to be my time. On the couch. Cramping, like a six. My husband took my daughter to her game without me. Um, I just laid there and felt sorry for myself. Took naproxen, heating pad, ginger tea, still bad. Lost Saturday.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Lonely", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Walk", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-01-25": null,
    "2026-01-26": null,
    "2026-01-27": {
      transcript:
        "Sharp pain in my pelvis all day, like a five, six at its worst. I don't know. Um, I took two naproxen today. Worked from the couch. My husband made dinner. I ate a little. Just one of those days where I feel like my body is a puzzle I can't solve.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Sit Down"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-01-28": {
      transcript:
        "Another good one. Pain like a one. I went for a walk at lunch, twenty minutes. First time in weeks. Legs felt weak, I've gotten out of shape, but no pain. I'll take weak over pain.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Motivated", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-01-29": {
      transcript:
        "Dragging today. Pain like a three but the fatigue is what's getting me. I can't tell if it's endo tired or regular tired. Probably both. Going to bed early.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Mentally Foggy", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-01-30": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-01-31": {
      transcript:
        "Stuck in bed again on a Saturday. Pain like a five. I'm mad about it. I had plans with a friend, we were going to get coffee, and I canceled. Again. I'm running out of friends I haven't canceled on. Slept a lot. Woke up in the evening just to eat.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Angry", "NEGATIVE"],
          ["Isolated", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Get out of Bed"],
        other: [["Fatigue", "Severe"]],
        medications: [],
      },
      overall: "BAD",
    },
    "2026-02-01": {
      transcript:
        "Bloated today, endo belly bad. Pain like a three otherwise but I look six months pregnant. Avoided dairy, avoided sugar, didn't help. Um, got through work. Comfy pants all day.",
      data: {
        pain: [["Abdomen", "Moderate"]],
        mood: [
          ["Disgusted", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [
          ["Endo Belly", "Moderate"],
          ["Gas", "Mild"],
        ],
        hardToDo: ["Get Dressed"],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-02-02": {
      transcript:
        "Good day. Pain like a one, almost nothing. Got through my emails. Had a productive call. Um, I ate a real lunch. Walked to the mailbox, which sounds small but it's something. Yeah. Small wins.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Productive", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-02-03": {
      transcript:
        "Productive day. Pain like a one. Got through my inbox, had a good call with my team, we're starting a new project I'm actually excited about. Ate lunch away from my desk. Picked up my daughter, she was in a great mood. Yeah.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Productive", "POSITIVE"],
          ["Motivated", "POSITIVE"],
          ["Enthusiastic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-02-04": {
      transcript:
        "Dragging today. Pain like a three but the fatigue is what's getting me. I can't tell if it's endo tired or regular tired. Probably both. Going to bed early.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Mentally Foggy", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-02-05": null,
    "2026-02-06": null,
    "2026-02-07": {
      transcript:
        "Period started this morning. Heavy. Pain like a six, cramping down low and my lower back too. Had to cancel my afternoon meetings. Took naproxen at six and again at noon. The nausea is bad today too, I couldn't eat lunch. Just on the couch with the heating pad.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [["Nausea", "Moderate"]],
        hardToDo: ["Work", "Eat"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-02-08": null,
    "2026-02-09": null,
    "2026-02-10": null,
    "2026-02-11": null,
    "2026-02-12": {
      transcript:
        "Middle of the road day. Pain like a three. Got some work done, not as much as I wanted. My husband made dinner. Didn't walk, didn't stretch. Just a fine day. That's the update.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-02-13": {
      transcript:
        "Tired today. Pain like a two or three. Coasted through work. Made simple pasta. Fell asleep watching TV. Um, nothing to say really.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: [],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-02-14": {
      transcript:
        "Today was fine. Pain like a three. Got work done. Ordered dinner because I didn't have it in me to cook. Not bad, not great. Just a day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [["Fatigue", "Mild"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-02-15": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-02-16": {
      transcript:
        "Good day. Pain like a one. Um, I'm kind of waiting for the other shoe to drop, I hate that I think that way but I do. Every time I have more than a few good days I start bracing. Work was normal. Made dinner.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-02-17": {
      transcript:
        "Good day. Pain like a one, almost nothing. Got through my emails. Had a productive call. Um, I ate a real lunch. Walked to the mailbox, which sounds small but it's something. Yeah. Small wins.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Productive", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-02-18": null,
    "2026-02-19": {
      transcript:
        "Good day. Pain like a one, almost nothing. Got through my emails. Had a productive call. Um, I ate a real lunch. Walked to the mailbox, which sounds small but it's something. Yeah. Small wins.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Productive", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-02-20": null,
    "2026-02-21": {
      transcript:
        "Stuck in bed again on a Saturday. Pain like a five. I'm mad about it. I had plans with a friend, we were going to get coffee, and I canceled. Again. I'm running out of friends I haven't canceled on. Slept a lot. Woke up in the evening just to eat.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Angry", "NEGATIVE"],
          ["Isolated", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Get out of Bed"],
        other: [["Fatigue", "Severe"]],
        medications: [],
      },
      overall: "BAD",
    },
    "2026-02-22": null,
    "2026-02-23": {
      transcript:
        "Nausea all day, pain like a five, and I couldn't keep food down in the morning. I don't know if it's a flare or a bug or what. Um, mostly ginger tea today. Worked from bed. Weak.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Upper Chest", "Mild"],
        ],
        mood: [
          ["Worried", "NEGATIVE"],
          ["Mentally Foggy", "NEGATIVE"],
        ],
        period: null,
        gi: [
          ["Nausea", "Severe"],
          ["Vomiting", "Moderate"],
        ],
        hardToDo: ["Eat", "Work", "Prepare Food"],
        other: [
          ["Fatigue", "Severe"],
          ["Dizziness", "Moderate"],
        ],
        medications: [],
      },
      overall: "BAD",
    },
    "2026-02-24": {
      transcript:
        "Saturday and of course I'm in pain. Supposed to be my time. On the couch. Cramping, like a six. My husband took my daughter to her game without me. Um, I just laid there and felt sorry for myself. Took naproxen, heating pad, ginger tea, still bad. Lost Saturday.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Lonely", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Walk", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-02-25": null,
    "2026-02-26": {
      transcript:
        "Fine. Pain like a three. I forgot to record yesterday I think. Or maybe I did, I don't remember. Anyway. Ate normally, worked normally. Nothing happened today. Boring is a gift with this disease, I'll take it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Calm", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-02-27": {
      transcript:
        "Dragging today. Pain like a three but the fatigue is what's getting me. I can't tell if it's endo tired or regular tired. Probably both. Going to bed early.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Mentally Foggy", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-02-28": {
      transcript:
        "Productive day. Pain like a one. Got through my inbox, had a good call with my team, we're starting a new project I'm actually excited about. Ate lunch away from my desk. Picked up my daughter, she was in a great mood. Yeah.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Productive", "POSITIVE"],
          ["Motivated", "POSITIVE"],
          ["Enthusiastic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-03-01": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-03-02": {
      transcript:
        "Flare out of nowhere. I was fine this morning. By afternoon, pain like a six. I cannot predict this thing. I just can't. Um, I had to excuse myself from a work thing and go lie down. Took a naproxen. Came back, finished the day, barely. My daughter wanted me to play with her and I just couldn't.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Stand"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-03-03": {
      transcript:
        "New gyno consult today. She actually listened. Ordered some imaging. Pain like a three, which for a doctor visit I'm surprised I was able to handle. Um, hopeful. Cautiously.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-03-04": {
      transcript:
        "I had like four good days in a row and today it all fell apart. Pain like a six. I was starting to think maybe this month would be different. Nope. Took two naproxen. On the couch. Frustrated.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Sad", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-03-05": null,
    "2026-03-06": null,
    "2026-03-07": {
      transcript:
        "Bad day. Pain like a five in my pelvis, wrapping to my back. No warning, no trigger. Took naproxen, put the heating pad on. Canceled my lunch thing. Worked from the couch. Um, I'm just frustrated, I don't know what else to say. I thought I was past this part of the month.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Moderate"],
        ],
        mood: [["Frustrated", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Work", "Socialize"],
        other: [],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-03-08": {
      transcript:
        "Today was a write-off. Pain like a six in my lower belly and hips. Couldn't focus on anything. Um, I had a headache too, maybe from the pain, maybe from clenching. Took Tylenol and naproxen, only the naproxen helped. Laid down most of the afternoon.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Outer Hip", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Mentally Foggy", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Stand"],
        other: [
          ["Headache", "Moderate"],
          ["Fatigue", "Moderate"],
        ],
        medications: ["Tylenol", "naproxen"],
      },
      overall: "BAD",
    },
    "2026-03-09": {
      transcript:
        "Period started. Heavy right out of the gate. Pain like a six. Um, I'm in for a long three days I think. Naproxen, heating pad, you know the drill. On the couch. My husband is doing everything. I feel bad but I can't move.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Guilty", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Stand", "Prepare Food"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-03-10": {
      transcript:
        "Day two of my period is always the worst. I don't know why, every month, day two takes me out. Took naproxen at six AM. Another at noon. Heating pad hasn't left my lap. I ate crackers and ginger tea, that's it. My husband took my daughter out so I could just rest. Just tired.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Nausea", "Mild"]],
        hardToDo: ["Work", "Eat", "Get out of Bed", "Prepare Food"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-03-11": {
      transcript:
        "Day two of my period is always the worst. I don't know why, every month, day two takes me out. Took naproxen at six AM. Another at noon. Heating pad hasn't left my lap. I ate crackers and ginger tea, that's it. My husband took my daughter out so I could just rest. Just tired.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Nausea", "Mild"]],
        hardToDo: ["Work", "Eat", "Get out of Bed", "Prepare Food"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-03-12": null,
    "2026-03-13": null,
    "2026-03-14": {
      transcript:
        "Came down a lot today. Pain like a two. Bleeding is slowing. Showered for the first time properly in three days, washed my hair. Felt human. Got caught up on work. My husband made pasta. Yeah.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: {
          flow: "Light",
          other: [],
        },
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-03-15": {
      transcript:
        "Walked to pick up my kid from school instead of driving. Haven't done that in months. My pelvis felt fine the whole way, no catching, no pulling. That's huge. About a mile round trip. Legs will feel it tomorrow, but today yes.",
      data: {
        pain: [],
        mood: [
          ["Motivated", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-03-16": {
      transcript:
        "Woke up with a knife in my ovary. I mean, not literally, but that's what it feels like on the right side. Like a seven. Took naproxen right away, it didn't touch it. I had to reschedule my morning. Um, I'm worried, this feels different than my usual flare.",
      data: {
        pain: [["Ovary", "Severe"]],
        mood: [
          ["Worried", "NEGATIVE"],
          ["Scared", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Stand"],
        other: [],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-03-17": {
      transcript:
        "Fine. Pain like a three. I forgot to record yesterday I think. Or maybe I did, I don't remember. Anyway. Ate normally, worked normally. Nothing happened today. Boring is a gift with this disease, I'll take it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Calm", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-03-18": null,
    "2026-03-19": {
      transcript:
        "Tired today. Pain like a two or three. Coasted through work. Made simple pasta. Fell asleep watching TV. Um, nothing to say really.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: [],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-03-20": {
      transcript:
        "Went to dinner with my husband tonight. Real dinner, dressed up, wine, the whole thing. Haven't done that in forever. Um, pain like a one all evening. It felt like such a treat. I needed it.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Affectionate", "POSITIVE"],
          ["Relaxed", "POSITIVE"],
          ["Happy", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-03-21": {
      transcript:
        "Good day. We went to the farmer's market this morning. Walked around for an hour, which is a lot for me. No pain. We had people over later, just a few friends. Didn't have to cancel anything. Yeah. Good day.",
      data: {
        pain: [],
        mood: [
          ["Social", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Affectionate", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-03-22": {
      transcript:
        "Went to dinner with my husband tonight. Real dinner, dressed up, wine, the whole thing. Haven't done that in forever. Um, pain like a one all evening. It felt like such a treat. I needed it.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Affectionate", "POSITIVE"],
          ["Relaxed", "POSITIVE"],
          ["Happy", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-03-23": {
      transcript:
        "Good day. We went to the farmer's market this morning. Walked around for an hour, which is a lot for me. No pain. We had people over later, just a few friends. Didn't have to cancel anything. Yeah. Good day.",
      data: {
        pain: [],
        mood: [
          ["Social", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Affectionate", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-03-24": {
      transcript:
        "Tired today. Pain like a two or three. Coasted through work. Made simple pasta. Fell asleep watching TV. Um, nothing to say really.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: [],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-03-25": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-03-26": {
      transcript:
        "Fine. Pain like a three. I forgot to record yesterday I think. Or maybe I did, I don't remember. Anyway. Ate normally, worked normally. Nothing happened today. Boring is a gift with this disease, I'll take it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Calm", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-03-27": null,
    "2026-03-28": null,
    "2026-03-29": {
      transcript:
        "Saturday and of course I'm in pain. Supposed to be my time. On the couch. Cramping, like a six. My husband took my daughter to her game without me. Um, I just laid there and felt sorry for myself. Took naproxen, heating pad, ginger tea, still bad. Lost Saturday.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Lonely", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Walk", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-03-30": {
      transcript:
        "Stuck in bed again on a Saturday. Pain like a five. I'm mad about it. I had plans with a friend, we were going to get coffee, and I canceled. Again. I'm running out of friends I haven't canceled on. Slept a lot. Woke up in the evening just to eat.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Angry", "NEGATIVE"],
          ["Isolated", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Get out of Bed"],
        other: [["Fatigue", "Severe"]],
        medications: [],
      },
      overall: "BAD",
    },
    "2026-03-31": {
      transcript:
        "Good day. We went to the farmer's market this morning. Walked around for an hour, which is a lot for me. No pain. We had people over later, just a few friends. Didn't have to cancel anything. Yeah. Good day.",
      data: {
        pain: [],
        mood: [
          ["Social", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Affectionate", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-04-01": null,
    "2026-04-02": {
      transcript:
        "No pain today. None. I forgot what that feels like honestly. Got a lot done, ate well, felt like myself. Um, I took my meds on time. Yeah. Good day.",
      data: {
        pain: [],
        mood: [
          ["Happy", "POSITIVE"],
          ["Productive", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-04-03": null,
    "2026-04-04": null,
    "2026-04-05": null,
    "2026-04-06": {
      transcript:
        "Period started this morning. Heavy. Pain like a six, cramping down low and my lower back too. Had to cancel my afternoon meetings. Took naproxen at six and again at noon. The nausea is bad today too, I couldn't eat lunch. Just on the couch with the heating pad.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [["Nausea", "Moderate"]],
        hardToDo: ["Work", "Eat"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-04-07": null,
    "2026-04-08": {
      transcript:
        "Day three of the period. Still heavy, some clots today. Pain came down a little, like a four. Um, the diarrhea started, which always happens around this time, it's like clockwork. I stayed in bed most of the day. My husband brought me soup. Didn't shower. Just a write-off day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Diarrhea", "Moderate"]],
        hardToDo: ["Shower", "Get out of Bed", "Work"],
        other: [["Fatigue", "Severe"]],
        medications: [],
      },
      overall: "BAD",
    },
    "2026-04-09": {
      transcript:
        "Better today. I don't know how that works. Yesterday was awful and today I'm like, a two maybe. Got a lot done at work, caught up. Had a decent lunch. My husband and I walked after dinner, twenty minutes around the neighborhood. Taking the win.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-04-10": {
      transcript:
        "Period ended two days ago and I'm still in pain. Like a four, five in my pelvis and a little in my rectum, which, you know, always feels worse than it sounds. I'm just so tired of this. Took naproxen. Worked from home.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Rectum", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Sad", "NEGATIVE"],
        ],
        period: null,
        gi: [["Painful Bowel Movement", "Moderate"]],
        hardToDo: ["Work", "Use Toilet"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-04-11": null,
    "2026-04-12": {
      transcript:
        "Good day. We went to the farmer's market this morning. Walked around for an hour, which is a lot for me. No pain. We had people over later, just a few friends. Didn't have to cancel anything. Yeah. Good day.",
      data: {
        pain: [],
        mood: [
          ["Social", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Affectionate", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-04-13": {
      transcript:
        "Dragging today. Pain like a three but the fatigue is what's getting me. I can't tell if it's endo tired or regular tired. Probably both. Going to bed early.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Mentally Foggy", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-04-14": null,
    "2026-04-15": {
      transcript:
        "Good day. Pain like a one. Um, I'm kind of waiting for the other shoe to drop, I hate that I think that way but I do. Every time I have more than a few good days I start bracing. Work was normal. Made dinner.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-04-16": {
      transcript:
        "Full work day, no pain. Finished a big deliverable. Um, I felt sharp, present, like my brain was firing. I miss those days. More of these please.",
      data: {
        pain: [],
        mood: [
          ["Productive", "POSITIVE"],
          ["Motivated", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-04-17": {
      transcript:
        "I had thoughts today like, is this how it's going to be every month. Is it getting worse. I don't want to think that way but I do. Pain like a five, six, sitting there all day. Frustrated. Just, yeah. Hard mental day on top of the physical.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Scared", "NEGATIVE"],
          ["Sad", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work"],
        other: [["Fatigue", "Severe"]],
        medications: [],
      },
      overall: "BAD",
    },
    "2026-04-18": {
      transcript:
        "Better today. I don't know how that works. Yesterday was awful and today I'm like, a two maybe. Got a lot done at work, caught up. Had a decent lunch. My husband and I walked after dinner, twenty minutes around the neighborhood. Taking the win.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-04-19": null,
    "2026-04-20": {
      transcript:
        "Another good day. I'm trying not to jinx it. Four in a row now. Um, this has been a good stretch. Worked a full day. Ate well. Yeah. I'll take it, even though I'm a little anxious about when it ends.",
      data: {
        pain: [],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-04-21": {
      transcript:
        "Bloated today, endo belly bad. Pain like a three otherwise but I look six months pregnant. Avoided dairy, avoided sugar, didn't help. Um, got through work. Comfy pants all day.",
      data: {
        pain: [["Abdomen", "Moderate"]],
        mood: [
          ["Disgusted", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [
          ["Endo Belly", "Moderate"],
          ["Gas", "Mild"],
        ],
        hardToDo: ["Get Dressed"],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-04-22": {
      transcript:
        "Paying the price today. Did too much gardening yesterday. Pain like a five in my lower back. I'm on the couch. Took a naproxen. Um, I keep wondering if I just have to accept a smaller life, like do less so I don't crash.",
      data: {
        pain: [["Lower Back", "Moderate"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Frustrated", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Stand", "Kneel"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-04-23": {
      transcript:
        "Another good one. Pain like a one. I went for a walk at lunch, twenty minutes. First time in weeks. Legs felt weak, I've gotten out of shape, but no pain. I'll take weak over pain.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Motivated", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-04-24": null,
    "2026-04-25": null,
    "2026-04-26": null,
    "2026-04-27": {
      transcript:
        "Nausea all day, pain like a five, and I couldn't keep food down in the morning. I don't know if it's a flare or a bug or what. Um, mostly ginger tea today. Worked from bed. Weak.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Upper Chest", "Mild"],
        ],
        mood: [
          ["Worried", "NEGATIVE"],
          ["Mentally Foggy", "NEGATIVE"],
        ],
        period: null,
        gi: [
          ["Nausea", "Severe"],
          ["Vomiting", "Moderate"],
        ],
        hardToDo: ["Eat", "Work", "Prepare Food"],
        other: [
          ["Fatigue", "Severe"],
          ["Dizziness", "Moderate"],
        ],
        medications: [],
      },
      overall: "BAD",
    },
    "2026-04-28": null,
    "2026-04-29": {
      transcript:
        "Nausea all day, pain like a five, and I couldn't keep food down in the morning. I don't know if it's a flare or a bug or what. Um, mostly ginger tea today. Worked from bed. Weak.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Upper Chest", "Mild"],
        ],
        mood: [
          ["Worried", "NEGATIVE"],
          ["Mentally Foggy", "NEGATIVE"],
        ],
        period: null,
        gi: [
          ["Nausea", "Severe"],
          ["Vomiting", "Moderate"],
        ],
        hardToDo: ["Eat", "Work", "Prepare Food"],
        other: [
          ["Fatigue", "Severe"],
          ["Dizziness", "Moderate"],
        ],
        medications: [],
      },
      overall: "BAD",
    },
    "2026-04-30": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-05-01": {
      transcript:
        "Had my doctor appointment today. She refilled my Orilissa. Didn't talk about much else honestly, it was quick. I asked about the pain getting worse and she said give it another cycle and reassess. Same thing she always says. Pain like a three today.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: ["Orilissa"],
      },
      overall: "MANAGEABLE",
    },
    "2026-05-02": {
      transcript:
        "Went to dinner with my husband tonight. Real dinner, dressed up, wine, the whole thing. Haven't done that in forever. Um, pain like a one all evening. It felt like such a treat. I needed it.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Affectionate", "POSITIVE"],
          ["Relaxed", "POSITIVE"],
          ["Happy", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-05-03": {
      transcript:
        "Dragging today. Pain like a three but the fatigue is what's getting me. I can't tell if it's endo tired or regular tired. Probably both. Going to bed early.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Mentally Foggy", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-05-04": null,
    "2026-05-05": null,
    "2026-05-06": null,
    "2026-05-07": {
      transcript:
        "Period started this morning. Heavy. Pain like a six, cramping down low and my lower back too. Had to cancel my afternoon meetings. Took naproxen at six and again at noon. The nausea is bad today too, I couldn't eat lunch. Just on the couch with the heating pad.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [["Nausea", "Moderate"]],
        hardToDo: ["Work", "Eat"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-05-08": {
      transcript:
        "Day three of the period. Still heavy, some clots today. Pain came down a little, like a four. Um, the diarrhea started, which always happens around this time, it's like clockwork. I stayed in bed most of the day. My husband brought me soup. Didn't shower. Just a write-off day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Diarrhea", "Moderate"]],
        hardToDo: ["Shower", "Get out of Bed", "Work"],
        other: [["Fatigue", "Severe"]],
        medications: [],
      },
      overall: "BAD",
    },
    "2026-05-09": null,
    "2026-05-10": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Medium",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-05-11": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Light",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-05-12": {
      transcript:
        "Middle of the road day. Pain like a three. Got some work done, not as much as I wanted. My husband made dinner. Didn't walk, didn't stretch. Just a fine day. That's the update.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-05-13": null,
    "2026-05-14": {
      transcript:
        "Another good day. I'm trying not to jinx it. Four in a row now. Um, this has been a good stretch. Worked a full day. Ate well. Yeah. I'll take it, even though I'm a little anxious about when it ends.",
      data: {
        pain: [],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-05-15": {
      transcript:
        "Today was fine. Pain like a three. Got work done. Ordered dinner because I didn't have it in me to cook. Not bad, not great. Just a day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [["Fatigue", "Mild"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-05-16": {
      transcript:
        "Saturday and of course I'm in pain. Supposed to be my time. On the couch. Cramping, like a six. My husband took my daughter to her game without me. Um, I just laid there and felt sorry for myself. Took naproxen, heating pad, ginger tea, still bad. Lost Saturday.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Lonely", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Walk", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-05-17": {
      transcript:
        "Fine. Pain like a three. I forgot to record yesterday I think. Or maybe I did, I don't remember. Anyway. Ate normally, worked normally. Nothing happened today. Boring is a gift with this disease, I'll take it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Calm", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-05-18": {
      transcript:
        "Bloated today, endo belly bad. Pain like a three otherwise but I look six months pregnant. Avoided dairy, avoided sugar, didn't help. Um, got through work. Comfy pants all day.",
      data: {
        pain: [["Abdomen", "Moderate"]],
        mood: [
          ["Disgusted", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [
          ["Endo Belly", "Moderate"],
          ["Gas", "Mild"],
        ],
        hardToDo: ["Get Dressed"],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-05-19": null,
    "2026-05-20": {
      transcript:
        "New gyno consult today. She actually listened. Ordered some imaging. Pain like a three, which for a doctor visit I'm surprised I was able to handle. Um, hopeful. Cautiously.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-05-21": null,
    "2026-05-22": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-05-23": null,
    "2026-05-24": {
      transcript:
        "Sunday. Good day. Lazy morning, pajamas until eleven. Made pancakes with my daughter, she's getting good in the kitchen. Walked around the neighborhood in the afternoon, the three of us. Um, I'm trying to enjoy these days when they come.",
      data: {
        pain: [],
        mood: [
          ["Affectionate", "POSITIVE"],
          ["Relaxed", "POSITIVE"],
          ["Happy", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-05-25": {
      transcript:
        "Had my doctor appointment today. She refilled my Orilissa. Didn't talk about much else honestly, it was quick. I asked about the pain getting worse and she said give it another cycle and reassess. Same thing she always says. Pain like a three today.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: ["Orilissa"],
      },
      overall: "MANAGEABLE",
    },
    "2026-05-26": null,
    "2026-05-27": null,
    "2026-05-28": null,
    "2026-05-29": {
      transcript:
        "Saturday and of course I'm in pain. Supposed to be my time. On the couch. Cramping, like a six. My husband took my daughter to her game without me. Um, I just laid there and felt sorry for myself. Took naproxen, heating pad, ginger tea, still bad. Lost Saturday.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Lonely", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Walk", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-05-30": {
      transcript:
        "Saturday and of course I'm in pain. Supposed to be my time. On the couch. Cramping, like a six. My husband took my daughter to her game without me. Um, I just laid there and felt sorry for myself. Took naproxen, heating pad, ginger tea, still bad. Lost Saturday.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Lonely", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Walk", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-05-31": {
      transcript:
        "New gyno consult today. She actually listened. Ordered some imaging. Pain like a three, which for a doctor visit I'm surprised I was able to handle. Um, hopeful. Cautiously.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-06-01": {
      transcript:
        "Went to dinner with my husband tonight. Real dinner, dressed up, wine, the whole thing. Haven't done that in forever. Um, pain like a one all evening. It felt like such a treat. I needed it.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Affectionate", "POSITIVE"],
          ["Relaxed", "POSITIVE"],
          ["Happy", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-06-02": {
      transcript:
        "Lower back pain dominating today, like a six. It's specifically the back, not the usual wrap-around. Weird for me. Took a naproxen, heating pad on my lower back. Couldn't sit at my desk, worked from the couch. My husband made dinner. Just uncomfortable all day.",
      data: {
        pain: [["Lower Back", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Sit Down", "Work"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-06-03": null,
    "2026-06-04": {
      transcript:
        "Flare out of nowhere. I was fine this morning. By afternoon, pain like a six. I cannot predict this thing. I just can't. Um, I had to excuse myself from a work thing and go lie down. Took a naproxen. Came back, finished the day, barely. My daughter wanted me to play with her and I just couldn't.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Stand"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-06-05": {
      transcript:
        "Today was a write-off. Pain like a six in my lower belly and hips. Couldn't focus on anything. Um, I had a headache too, maybe from the pain, maybe from clenching. Took Tylenol and naproxen, only the naproxen helped. Laid down most of the afternoon.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Outer Hip", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Mentally Foggy", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Stand"],
        other: [
          ["Headache", "Moderate"],
          ["Fatigue", "Moderate"],
        ],
        medications: ["Tylenol", "naproxen"],
      },
      overall: "BAD",
    },
    "2026-06-06": {
      transcript:
        "Period started this morning. Heavy. Pain like a six, cramping down low and my lower back too. Had to cancel my afternoon meetings. Took naproxen at six and again at noon. The nausea is bad today too, I couldn't eat lunch. Just on the couch with the heating pad.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [["Nausea", "Moderate"]],
        hardToDo: ["Work", "Eat"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-06-07": {
      transcript:
        "Day two of my period is always the worst. I don't know why, every month, day two takes me out. Took naproxen at six AM. Another at noon. Heating pad hasn't left my lap. I ate crackers and ginger tea, that's it. My husband took my daughter out so I could just rest. Just tired.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Nausea", "Mild"]],
        hardToDo: ["Work", "Eat", "Get out of Bed", "Prepare Food"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-06-08": null,
    "2026-06-09": null,
    "2026-06-10": null,
    "2026-06-11": {
      transcript:
        "Today was fine. Pain like a three. Got work done. Ordered dinner because I didn't have it in me to cook. Not bad, not great. Just a day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [["Fatigue", "Mild"]],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-06-12": null,
    "2026-06-13": {
      transcript:
        "Tired today. Pain like a two or three. Coasted through work. Made simple pasta. Fell asleep watching TV. Um, nothing to say really.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: [],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-06-14": {
      transcript:
        "Saturday and of course I'm in pain. Supposed to be my time. On the couch. Cramping, like a six. My husband took my daughter to her game without me. Um, I just laid there and felt sorry for myself. Took naproxen, heating pad, ginger tea, still bad. Lost Saturday.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Lonely", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Walk", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-06-15": {
      transcript:
        "Bad day. Pain like a five in my pelvis, wrapping to my back. No warning, no trigger. Took naproxen, put the heating pad on. Canceled my lunch thing. Worked from the couch. Um, I'm just frustrated, I don't know what else to say. I thought I was past this part of the month.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Moderate"],
        ],
        mood: [["Frustrated", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Work", "Socialize"],
        other: [],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-06-16": {
      transcript:
        "Um, today was fine. Pain like a three. I worked, I made dinner, I went to bed early. That's the whole day. Just a quiet day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Calm", "POSITIVE"]],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-06-17": {
      transcript:
        "Another good day. I'm trying not to jinx it. Four in a row now. Um, this has been a good stretch. Worked a full day. Ate well. Yeah. I'll take it, even though I'm a little anxious about when it ends.",
      data: {
        pain: [],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-06-18": {
      transcript:
        "Ugh. Woke up in pain. Like a six, maybe a seven. I don't know what set it off, yesterday was fine. I was fine. Took a naproxen at like five AM. Heating pad. Worked from bed, barely. My daughter came in to check on me before school, she was careful. Um, I just want this to end.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-06-19": {
      transcript:
        "Had my doctor appointment today. She refilled my Orilissa. Didn't talk about much else honestly, it was quick. I asked about the pain getting worse and she said give it another cycle and reassess. Same thing she always says. Pain like a three today.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: ["Orilissa"],
      },
      overall: "MANAGEABLE",
    },
    "2026-06-20": {
      transcript:
        "Dragging today. Pain like a three but the fatigue is what's getting me. I can't tell if it's endo tired or regular tired. Probably both. Going to bed early.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Mentally Foggy", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-06-21": {
      transcript:
        "Saturday and of course I'm in pain. Supposed to be my time. On the couch. Cramping, like a six. My husband took my daughter to her game without me. Um, I just laid there and felt sorry for myself. Took naproxen, heating pad, ginger tea, still bad. Lost Saturday.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Lonely", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Walk", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-06-22": {
      transcript:
        "Lower back pain dominating today, like a six. It's specifically the back, not the usual wrap-around. Weird for me. Took a naproxen, heating pad on my lower back. Couldn't sit at my desk, worked from the couch. My husband made dinner. Just uncomfortable all day.",
      data: {
        pain: [["Lower Back", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Sit Down", "Work"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-06-23": {
      transcript:
        "Flare out of nowhere. I was fine this morning. By afternoon, pain like a six. I cannot predict this thing. I just can't. Um, I had to excuse myself from a work thing and go lie down. Took a naproxen. Came back, finished the day, barely. My daughter wanted me to play with her and I just couldn't.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Stand"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-06-24": {
      transcript:
        "Middle of the road day. Pain like a three. Got some work done, not as much as I wanted. My husband made dinner. Didn't walk, didn't stretch. Just a fine day. That's the update.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-06-25": {
      transcript:
        "Today was fine. Pain like a three. Got work done. Ordered dinner because I didn't have it in me to cook. Not bad, not great. Just a day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [["Fatigue", "Mild"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-06-26": null,
    "2026-06-27": null,
    "2026-06-28": {
      transcript:
        "Stuck in bed again on a Saturday. Pain like a five. I'm mad about it. I had plans with a friend, we were going to get coffee, and I canceled. Again. I'm running out of friends I haven't canceled on. Slept a lot. Woke up in the evening just to eat.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Angry", "NEGATIVE"],
          ["Isolated", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Get out of Bed"],
        other: [["Fatigue", "Severe"]],
        medications: [],
      },
      overall: "BAD",
    },
    "2026-06-29": {
      transcript:
        "Paying the price today. Did too much gardening yesterday. Pain like a five in my lower back. I'm on the couch. Took a naproxen. Um, I keep wondering if I just have to accept a smaller life, like do less so I don't crash.",
      data: {
        pain: [["Lower Back", "Moderate"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Frustrated", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Stand", "Kneel"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-06-30": null,
    "2026-07-01": {
      transcript:
        "Bad GI day. Endo belly like whoa, I look six months pregnant. Pain like a five with all this bloating. Um, constipated for three days now. Took a stool softener. Laid on the couch. I hate the bloating honestly, more than the pain sometimes.",
      data: {
        pain: [
          ["Abdomen", "Moderate"],
          ["Intestines", "Moderate"],
        ],
        mood: [
          ["Disgusted", "NEGATIVE"],
          ["Frustrated", "NEGATIVE"],
        ],
        period: null,
        gi: [
          ["Endo Belly", "Severe"],
          ["Constipation", "Moderate"],
          ["Uncomfortably Full", "Moderate"],
        ],
        hardToDo: ["Eat", "Get Dressed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["stool softener"],
      },
      overall: "BAD",
    },
    "2026-07-02": {
      transcript:
        "Walked to pick up my kid from school instead of driving. Haven't done that in months. My pelvis felt fine the whole way, no catching, no pulling. That's huge. About a mile round trip. Legs will feel it tomorrow, but today yes.",
      data: {
        pain: [],
        mood: [
          ["Motivated", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-07-03": {
      transcript:
        "Productive day. Pain like a one. Got through my inbox, had a good call with my team, we're starting a new project I'm actually excited about. Ate lunch away from my desk. Picked up my daughter, she was in a great mood. Yeah.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Productive", "POSITIVE"],
          ["Motivated", "POSITIVE"],
          ["Enthusiastic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-07-04": {
      transcript:
        "Had my doctor appointment today. She refilled my Orilissa. Didn't talk about much else honestly, it was quick. I asked about the pain getting worse and she said give it another cycle and reassess. Same thing she always says. Pain like a three today.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: ["Orilissa"],
      },
      overall: "MANAGEABLE",
    },
    "2026-07-05": {
      transcript:
        "Bloated today, endo belly bad. Pain like a three otherwise but I look six months pregnant. Avoided dairy, avoided sugar, didn't help. Um, got through work. Comfy pants all day.",
      data: {
        pain: [["Abdomen", "Moderate"]],
        mood: [
          ["Disgusted", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [
          ["Endo Belly", "Moderate"],
          ["Gas", "Mild"],
        ],
        hardToDo: ["Get Dressed"],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-07-06": {
      transcript:
        "Came down a lot today. Pain like a two. Bleeding is slowing. Showered for the first time properly in three days, washed my hair. Felt human. Got caught up on work. My husband made pasta. Yeah.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: {
          flow: "Light",
          other: [],
        },
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-07-07": {
      transcript:
        "Today was fine. Pain like a three. Got work done. Ordered dinner because I didn't have it in me to cook. Not bad, not great. Just a day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [["Fatigue", "Mild"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-07-08": {
      transcript:
        "Good day. We went to the farmer's market this morning. Walked around for an hour, which is a lot for me. No pain. We had people over later, just a few friends. Didn't have to cancel anything. Yeah. Good day.",
      data: {
        pain: [],
        mood: [
          ["Social", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Affectionate", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-07-09": null,
    "2026-07-10": {
      transcript:
        "Lower back pain dominating today, like a six. It's specifically the back, not the usual wrap-around. Weird for me. Took a naproxen, heating pad on my lower back. Couldn't sit at my desk, worked from the couch. My husband made dinner. Just uncomfortable all day.",
      data: {
        pain: [["Lower Back", "Severe"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Sit Down", "Work"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-07-11": {
      transcript:
        "Period started. Heavy right out of the gate. Pain like a six. Um, I'm in for a long three days I think. Naproxen, heating pad, you know the drill. On the couch. My husband is doing everything. I feel bad but I can't move.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Guilty", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Stand", "Prepare Food"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-07-12": null,
    "2026-07-13": {
      transcript:
        "Day two of my period is always the worst. I don't know why, every month, day two takes me out. Took naproxen at six AM. Another at noon. Heating pad hasn't left my lap. I ate crackers and ginger tea, that's it. My husband took my daughter out so I could just rest. Just tired.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Nausea", "Mild"]],
        hardToDo: ["Work", "Eat", "Get out of Bed", "Prepare Food"],
        other: [["Fatigue", "Severe"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-07-14": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Light",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-07-15": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Light",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-07-16": {
      transcript:
        "Period ended two days ago and I'm still in pain. Like a four, five in my pelvis and a little in my rectum, which, you know, always feels worse than it sounds. I'm just so tired of this. Took naproxen. Worked from home.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Rectum", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Sad", "NEGATIVE"],
        ],
        period: null,
        gi: [["Painful Bowel Movement", "Moderate"]],
        hardToDo: ["Work", "Use Toilet"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-07-17": {
      transcript:
        "Um, today was fine. Pain like a three. I worked, I made dinner, I went to bed early. That's the whole day. Just a quiet day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Calm", "POSITIVE"]],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-07-18": {
      transcript:
        "Fine. Pain like a three. I forgot to record yesterday I think. Or maybe I did, I don't remember. Anyway. Ate normally, worked normally. Nothing happened today. Boring is a gift with this disease, I'll take it.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Indifferent", "NEGATIVE"],
          ["Calm", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-07-19": {
      transcript:
        "Tired today. Pain like a two or three. Coasted through work. Made simple pasta. Fell asleep watching TV. Um, nothing to say really.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: [],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-07-20": {
      transcript:
        "Good day. Pain like a one. Um, I'm kind of waiting for the other shoe to drop, I hate that I think that way but I do. Every time I have more than a few good days I start bracing. Work was normal. Made dinner.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-07-21": {
      transcript:
        "Paying the price today. Did too much gardening yesterday. Pain like a five in my lower back. I'm on the couch. Took a naproxen. Um, I keep wondering if I just have to accept a smaller life, like do less so I don't crash.",
      data: {
        pain: [["Lower Back", "Moderate"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Frustrated", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Stand", "Kneel"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-07-22": null,
    "2026-07-23": {
      transcript:
        "I did fifteen minutes of yoga this morning. First time in forever. Body felt tight but okay, I went slow. Um, hoping I don't pay tomorrow, that's always the gamble. Worked a full day. Made dinner. Good day.",
      data: {
        pain: [],
        mood: [
          ["Motivated", "POSITIVE"],
          ["Productive", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-07-24": {
      transcript:
        "New gyno consult today. She actually listened. Ordered some imaging. Pain like a three, which for a doctor visit I'm surprised I was able to handle. Um, hopeful. Cautiously.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Optimistic", "POSITIVE"],
          ["Anxious", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-07-25": null,
    "2026-07-26": {
      transcript:
        "Saturday and of course I'm in pain. Supposed to be my time. On the couch. Cramping, like a six. My husband took my daughter to her game without me. Um, I just laid there and felt sorry for myself. Took naproxen, heating pad, ginger tea, still bad. Lost Saturday.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Lonely", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Walk", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-07-27": null,
    "2026-07-28": null,
    "2026-07-29": {
      transcript:
        "Met a friend for coffee. I haven't done that in months. It was so nice to just sit and talk. She has her own chronic stuff so she gets it. We compared meds, compared bad days, but also talked about regular life. I felt like a full person today.",
      data: {
        pain: [],
        mood: [
          ["Social", "POSITIVE"],
          ["Happy", "POSITIVE"],
          ["Relaxed", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-07-30": {
      transcript:
        "Today was a write-off. Pain like a six in my lower belly and hips. Couldn't focus on anything. Um, I had a headache too, maybe from the pain, maybe from clenching. Took Tylenol and naproxen, only the naproxen helped. Laid down most of the afternoon.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Outer Hip", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Mentally Foggy", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Work", "Stand"],
        other: [
          ["Headache", "Moderate"],
          ["Fatigue", "Moderate"],
        ],
        medications: ["Tylenol", "naproxen"],
      },
      overall: "BAD",
    },
    "2026-07-31": {
      transcript:
        "Came down a lot today. Pain like a two. Bleeding is slowing. Showered for the first time properly in three days, washed my hair. Felt human. Got caught up on work. My husband made pasta. Yeah.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: {
          flow: "Light",
          other: [],
        },
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-08-01": null,
    "2026-08-02": {
      transcript:
        "Had my doctor appointment today. She refilled my Orilissa. Didn't talk about much else honestly, it was quick. I asked about the pain getting worse and she said give it another cycle and reassess. Same thing she always says. Pain like a three today.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [
          ["Constipation", "Mild"],
          ["Gas", "Moderate"],
        ],
        hardToDo: [],
        other: [],
        medications: ["Orilissa"],
      },
      overall: "MANAGEABLE",
    },
    "2026-08-03": null,
    "2026-08-04": null,
    "2026-08-05": null,
    "2026-08-06": {
      transcript:
        "Today was a write-off. Pain like a six in my lower belly and hips. Couldn't focus on anything. Um, I had a headache too, maybe from the pain, maybe from clenching. Took Tylenol and naproxen, only the naproxen helped. Laid down most of the afternoon.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Outer Hip", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Mentally Foggy", "NEGATIVE"],
        ],
        period: null,
        gi: [["Gas", "Mild"]],
        hardToDo: ["Work", "Stand"],
        other: [
          ["Headache", "Moderate"],
          ["Fatigue", "Moderate"],
        ],
        medications: ["Tylenol", "naproxen"],
      },
      overall: "BAD",
    },
    "2026-08-07": null,
    "2026-08-08": {
      transcript:
        "Period started this morning. Heavy. Pain like a six, cramping down low and my lower back too. Had to cancel my afternoon meetings. Took naproxen at six and again at noon. The nausea is bad today too, I couldn't eat lunch. Just on the couch with the heating pad.",
      data: {
        pain: [
          ["Pelvis", "Severe"],
          ["Lower Back", "Moderate"],
        ],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Overwhelmed", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: [],
        },
        gi: [["Nausea", "Moderate"]],
        hardToDo: ["Work", "Eat"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-08-09": {
      transcript:
        "Day three of the period. Still heavy, some clots today. Pain came down a little, like a four. Um, the diarrhea started, which always happens around this time, it's like clockwork. I stayed in bed most of the day. My husband brought me soup. Didn't shower. Just a write-off day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Diarrhea", "Moderate"]],
        hardToDo: ["Shower", "Get out of Bed", "Work"],
        other: [["Fatigue", "Severe"]],
        medications: [],
      },
      overall: "BAD",
    },
    "2026-08-10": {
      transcript:
        "Day three of the period. Still heavy, some clots today. Pain came down a little, like a four. Um, the diarrhea started, which always happens around this time, it's like clockwork. I stayed in bed most of the day. My husband brought me soup. Didn't shower. Just a write-off day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots"],
        },
        gi: [["Diarrhea", "Moderate"]],
        hardToDo: ["Shower", "Get out of Bed", "Work"],
        other: [["Fatigue", "Severe"]],
        medications: [],
      },
      overall: "BAD",
    },
    "2026-08-11": null,
    "2026-08-12": {
      transcript:
        "A little better. Pain like a four. Still bleeding heavy. Worked from bed, got the most urgent stuff done. Took a shower, which felt like an accomplishment. Ate soup my husband made. That's all I got today.",
      data: {
        pain: [
          ["Pelvis", "Moderate"],
          ["Lower Back", "Mild"],
        ],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: {
          flow: "Medium",
          other: [],
        },
        gi: [],
        hardToDo: ["Work", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-08-13": {
      transcript:
        "Middle of the road day. Pain like a three. Got some work done, not as much as I wanted. My husband made dinner. Didn't walk, didn't stretch. Just a fine day. That's the update.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Indifferent", "NEGATIVE"]],
        period: null,
        gi: [],
        hardToDo: ["Prepare Food"],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-08-14": {
      transcript:
        "Better today. I don't know how that works. Yesterday was awful and today I'm like, a two maybe. Got a lot done at work, caught up. Had a decent lunch. My husband and I walked after dinner, twenty minutes around the neighborhood. Taking the win.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-08-15": {
      transcript:
        "Saturday and of course I'm in pain. Supposed to be my time. On the couch. Cramping, like a six. My husband took my daughter to her game without me. Um, I just laid there and felt sorry for myself. Took naproxen, heating pad, ginger tea, still bad. Lost Saturday.",
      data: {
        pain: [["Pelvis", "Severe"]],
        mood: [
          ["Sad", "NEGATIVE"],
          ["Lonely", "NEGATIVE"],
          ["Guilty", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: ["Socialize", "Walk", "Get out of Bed"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "BAD",
    },
    "2026-08-16": {
      transcript:
        "Better today. I don't know how that works. Yesterday was awful and today I'm like, a two maybe. Got a lot done at work, caught up. Had a decent lunch. My husband and I walked after dinner, twenty minutes around the neighborhood. Taking the win.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Relaxed", "POSITIVE"],
          ["Optimistic", "POSITIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "GOOD",
    },
    "2026-08-17": {
      transcript:
        "Um, today was fine. Pain like a three. I worked, I made dinner, I went to bed early. That's the whole day. Just a quiet day.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [["Calm", "POSITIVE"]],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: [],
      },
      overall: "MANAGEABLE",
    },
    "2026-08-18": {
      transcript:
        "Had my doctor appointment today. She refilled my Orilissa. Didn't talk about much else honestly, it was quick. I asked about the pain getting worse and she said give it another cycle and reassess. Same thing she always says. Pain like a three today.",
      data: {
        pain: [["Pelvis", "Moderate"]],
        mood: [
          ["Frustrated", "NEGATIVE"],
          ["Indifferent", "NEGATIVE"],
        ],
        period: null,
        gi: [],
        hardToDo: [],
        other: [],
        medications: ["Orilissa"],
      },
      overall: "MANAGEABLE",
    },
    "2026-08-19": {
      transcript:
        "Went to dinner with my husband tonight. Real dinner, dressed up, wine, the whole thing. Haven't done that in forever. Um, pain like a one all evening. It felt like such a treat. I needed it.",
      data: {
        pain: [["Pelvis", "Mild"]],
        mood: [
          ["Affectionate", "POSITIVE"],
          ["Relaxed", "POSITIVE"],
          ["Happy", "POSITIVE"],
        ],
        period: {
          flow: "Heavy",
          other: ["Clots", "Spotting"],
        },
        gi: [["Painful Bowel Movement", "Moderate"]],
        hardToDo: ["Work", "Use Toilet"],
        other: [["Fatigue", "Moderate"]],
        medications: ["naproxen"],
      },
      overall: "GOOD",
    },
  },
  weeks: {
    "2025-05-week-02": {
      summary:
        "Leaned harder this week, with more bad days than good and pain showing up in your pelvis.",
    },
    "2025-05-week-03": {
      summary:
        "Your period hit hard this week with nausea, dominating most of the days with heavy bleeding and severe pelvic pain.",
    },
    "2025-05-week-04": {
      summary:
        "GI symptoms like painful bowel movement shaped this week, making even basic things harder and pulling your overall mood down.",
    },
    "2025-05-week-05": {
      summary:
        "Leaned harder this week, with more bad days than good and pain showing up in your pelvis.",
    },
    "2025-06-week-01": {
      summary:
        "A whiplash week — 3 good days flipped to 2 bad ones with no clear reason, the kind of unpredictability you've named as the hardest part.",
    },
    "2025-06-week-02": {
      summary:
        "Bloating and endo belly ran the week, with pain in your abdomen and everything feeling uncomfortable even on calmer days.",
    },
    "2025-06-week-03": {
      summary:
        "You came out the back end of your period this week — bleeding tapered off and pain dropped to something manageable, though fatigue lingered.",
    },
    "2025-06-week-04": {
      summary:
        "A whiplash week — 2 good days flipped to 2 bad ones with no clear reason, the kind of unpredictability you've named as the hardest part.",
    },
    "2025-06-week-05": {
      summary:
        "A quiet, unremarkable week — pain stayed manageable and nothing dramatic happened either direction.",
    },
    "2025-07-week-01": {
      summary:
        "A reasonably good week overall — more good days than bad, though some fatigue and background pain throughout.",
    },
    "2025-07-week-02": {
      summary:
        "Your period hit hard this week with nausea, dominating most of the days with heavy bleeding and severe pelvic pain.",
    },
    "2025-07-week-03": {
      summary:
        "GI symptoms like painful bowel movement shaped this week, making even basic things harder and pulling your overall mood down.",
    },
    "2025-07-week-04": {
      summary:
        "A hard stretch with 3 bad days, your pelvis taking the brunt of it and little room to do much beyond get through the day.",
    },
    "2025-07-week-05": {
      summary:
        "A reasonably good week overall — more good days than bad, though some fatigue and background pain throughout.",
    },
    "2025-08-week-01": {
      summary:
        "Bloating and endo belly ran the week, with pain in your abdomen and everything feeling uncomfortable even on calmer days.",
    },
    "2025-08-week-02": {
      summary:
        "Your period hit hard this week with diarrhea, dominating most of the days with heavy bleeding and severe pelvic pain.",
    },
    "2025-08-week-03": {
      summary:
        "A hard stretch with 3 bad days, your pelvis taking the brunt of it and little room to do much beyond get through the day.",
    },
    "2025-08-week-04": {
      summary:
        "A strong week — 4 good days in a row, you felt productive and present, even managing some walks or social time.",
    },
    "2025-08-week-05": {
      summary:
        "A reasonably good week overall — more good days than bad, though some fatigue and background pain throughout.",
    },
    "2025-09-week-01": {
      summary:
        "Your period hit hard this week with nausea, dominating most of the days with heavy bleeding and severe pelvic pain.",
    },
    "2025-09-week-02": {
      summary:
        "You came out the back end of your period this week — bleeding tapered off and pain dropped to something manageable, though fatigue lingered.",
    },
    "2025-09-week-03": {
      summary:
        "Bloating and endo belly ran the week, with pain in your abdomen and everything feeling uncomfortable even on calmer days.",
    },
    "2025-09-week-04": {
      summary:
        "A quiet, unremarkable week — pain stayed manageable and nothing dramatic happened either direction.",
    },
    "2025-09-week-05": {
      summary:
        "A quiet, unremarkable week — pain stayed manageable and nothing dramatic happened either direction.",
    },
    "2025-10-week-01": {
      summary:
        "Mostly a middle-ground week: pain sat around a three, you worked through the days, and nothing notable stood out one way or the other.",
    },
    "2025-10-week-02": {
      summary:
        "Your period hit hard this week with nausea, dominating most of the days with heavy bleeding and severe pelvic pain.",
    },
    "2025-10-week-03": {
      summary:
        "A whiplash week — 2 good days flipped to 2 bad ones with no clear reason, the kind of unpredictability you've named as the hardest part.",
    },
    "2025-10-week-04": {
      summary:
        "Mostly a middle-ground week: pain sat around a three, you worked through the days, and nothing notable stood out one way or the other.",
    },
    "2025-10-week-05": {
      summary:
        "Leaned harder this week, with more bad days than good and pain showing up in your pelvis.",
    },
    "2025-11-week-01": {
      summary:
        "A rough week — you logged 4 bad days, with pain concentrated in your pelvis and rectum and most activities feeling out of reach.",
    },
    "2025-11-week-02": {
      summary:
        "Your period hit hard this week with nausea, dominating most of the days with heavy bleeding and severe pelvic pain.",
    },
    "2025-11-week-03": {
      summary:
        "A solid, mostly pain-free week with 3 good days and the rest manageable; the kind of stretch you said you try not to jinx.",
    },
    "2025-11-week-04": {
      summary:
        "You came out the back end of your period this week — bleeding tapered off and pain dropped to something manageable, though fatigue lingered.",
    },
    "2025-11-week-05": {
      summary:
        "A reasonably good week overall — more good days than bad, though some fatigue and background pain throughout.",
    },
    "2025-12-week-01": {
      summary:
        "Bloating and endo belly ran the week, with pain in your abdomen and everything feeling uncomfortable even on calmer days.",
    },
    "2025-12-week-02": {
      summary:
        "Your period hit hard this week with nausea, dominating most of the days with heavy bleeding and severe pelvic pain.",
    },
    "2025-12-week-03": {
      summary:
        "A hard stretch with 3 bad days, your pelvis taking the brunt of it and little room to do much beyond get through the day.",
    },
    "2025-12-week-04": {
      summary:
        "Bloating and endo belly ran the week, with pain in your abdomen and everything feeling uncomfortable even on calmer days.",
    },
    "2025-12-week-05": {
      summary:
        "Leaned harder this week, with more bad days than good and pain showing up in your lower back.",
    },
    "2026-01-week-01": {
      summary:
        "A mixed week with 2 good, 1 bad, and 2 in-between days, pain mostly in your pelvis.",
    },
    "2026-01-week-02": {
      summary:
        "Your period hit hard this week with nausea, dominating most of the days with heavy bleeding and severe pelvic pain.",
    },
    "2026-01-week-03": {
      summary:
        "A mixed week with 2 good, 1 bad, and 1 in-between days, pain mostly in your pelvis.",
    },
    "2026-01-week-04": {
      summary:
        "A mixed week with 1 good, 2 bad, and 1 in-between days, pain mostly in your pelvis.",
    },
    "2026-01-week-05": {
      summary:
        "You came out the back end of your period this week — bleeding tapered off and pain dropped to something manageable, though fatigue lingered.",
    },
    "2026-02-week-01": {
      summary:
        "You came out the back end of your period this week — bleeding tapered off and pain dropped to something manageable, though fatigue lingered.",
    },
    "2026-02-week-02": {
      summary:
        "A reasonably good week overall — more good days than bad, though some fatigue and background pain throughout.",
    },
    "2026-02-week-03": {
      summary:
        "A mixed week with 3 good, 1 bad, and 1 in-between days, pain mostly in your pelvis.",
    },
    "2026-02-week-04": {
      summary:
        "A mixed week with 1 good, 2 bad, and 2 in-between days, pain mostly in your pelvis.",
    },
    "2026-03-week-01": {
      summary:
        "Your period hit hard this week, dominating most of the days with heavy bleeding and severe pelvic pain.",
    },
    "2026-03-week-02": {
      summary:
        "Your period hit hard this week with nausea, dominating most of the days with heavy bleeding and severe pelvic pain.",
    },
    "2026-03-week-03": {
      summary:
        "A mixed week with 3 good, 1 bad, and 2 in-between days, pain mostly in your pelvis.",
    },
    "2026-03-week-04": {
      summary:
        "You came out the back end of your period this week — bleeding tapered off and pain dropped to something manageable, though fatigue lingered.",
    },
    "2026-03-week-05": {
      summary:
        "Leaned harder this week, with more bad days than good and pain showing up in your pelvis.",
    },
    "2026-04-week-01": {
      summary:
        "A quiet, unremarkable week — pain stayed manageable and nothing dramatic happened either direction.",
    },
    "2026-04-week-02": {
      summary:
        "Your period hit hard this week with diarrhea, dominating most of the days with heavy bleeding and severe pelvic pain.",
    },
    "2026-04-week-03": {
      summary:
        "A strong week — 4 good days in a row, you felt productive and present, even managing some walks or social time.",
    },
    "2026-04-week-04": {
      summary:
        "Leaned harder this week, with more bad days than good and pain showing up in your pelvis.",
    },
    "2026-04-week-05": {
      summary:
        "Leaned harder this week, with more bad days than good and pain showing up in your pelvis.",
    },
    "2026-05-week-01": {
      summary:
        "You came out the back end of your period this week — bleeding tapered off and pain dropped to something manageable, though fatigue lingered.",
    },
    "2026-05-week-02": {
      summary:
        "You came out the back end of your period this week — bleeding tapered off and pain dropped to something manageable, though fatigue lingered.",
    },
    "2026-05-week-03": {
      summary:
        "Bloating and endo belly ran the week, with pain in your abdomen and everything feeling uncomfortable even on calmer days.",
    },
    "2026-05-week-04": {
      summary:
        "You came out the back end of your period this week — bleeding tapered off and pain dropped to something manageable, though fatigue lingered.",
    },
    "2026-05-week-05": {
      summary:
        "Leaned harder this week, with more bad days than good and pain showing up in your pelvis.",
    },
    "2026-06-week-01": {
      summary:
        "Your period hit hard this week with nausea, dominating most of the days with heavy bleeding and severe pelvic pain.",
    },
    "2026-06-week-02": {
      summary:
        "A mixed week with 1 good, 1 bad, and 1 in-between days, pain mostly in your pelvis.",
    },
    "2026-06-week-03": {
      summary:
        "A hard stretch with 3 bad days, your pelvis taking the brunt of it and little room to do much beyond get through the day.",
    },
    "2026-06-week-04": {
      summary:
        "A hard stretch with 3 bad days, your pelvis taking the brunt of it and little room to do much beyond get through the day.",
    },
    "2026-06-week-05": {
      summary:
        "Leaned harder this week, with more bad days than good and pain showing up in your lower back.",
    },
    "2026-07-week-01": {
      summary:
        "You came out the back end of your period this week — bleeding tapered off and pain dropped to something manageable, though fatigue lingered.",
    },
    "2026-07-week-02": {
      summary:
        "Your period hit hard this week with nausea, dominating most of the days with heavy bleeding and severe pelvic pain.",
    },
    "2026-07-week-03": {
      summary:
        "GI symptoms like painful bowel movement shaped this week, making even basic things harder and pulling your overall mood down.",
    },
    "2026-07-week-04": {
      summary:
        "A mixed week with 1 good, 1 bad, and 1 in-between days, pain mostly in your pelvis.",
    },
    "2026-07-week-05": {
      summary:
        "A reasonably good week overall — more good days than bad, though some fatigue and background pain throughout.",
    },
    "2026-08-week-01": {
      summary:
        "Leaned harder this week, with more bad days than good and pain showing up in your pelvis.",
    },
    "2026-08-week-02": {
      summary:
        "Your period hit hard this week with diarrhea, dominating most of the days with heavy bleeding and severe pelvic pain.",
    },
    "2026-08-week-03": {
      summary:
        "You came out the back end of your period this week — bleeding tapered off and pain dropped to something manageable, though fatigue lingered.",
    },
  },
  months: {
    "2025-05": {
      summary:
        "This was a harder month \u2014 8 of your 16 logged days were bad, compared to 5 good ones. Pain centered mostly in your pelvis and lower back, and leaned severe more often than mild. Emotionally, you were frustrated and indifferent on your hard days and relaxed and optimistic when things eased up. Your period ran heavy for several days, and lined up with your hardest pain. GI-wise, painful bowel movement and nausea showed up repeatedly, mostly around your period. The activities that gave you the most trouble were work, prepare food, socialize. You skipped logging on 5 days.",
    },
    "2025-06": {
      summary:
        "This month was mixed \u2014 6 good days, 6 bad, and 8 in between. Pain showed up mostly in your pelvis and lower back, though most days it stayed manageable. Emotionally, you were frustrated and indifferent on your hard days and optimistic and productive when things eased up. GI-wise, endo belly and gas showed up repeatedly, mostly around your period. The activities that gave you the most trouble were work, prepare food, socialize. You skipped logging on 10 days.",
    },
    "2025-07": {
      summary:
        "This was a harder month \u2014 12 of your 20 logged days were bad, compared to 3 good ones. Pain centered mostly in your pelvis and lower back, and leaned severe more often than mild. Emotionally, you were frustrated and sad on your hard days and optimistic and motivated when things eased up. Your period ran heavy for several days, and lined up with your hardest pain. GI-wise, nausea and painful bowel movement showed up repeatedly, mostly around your period. The activities that gave you the most trouble were work, get out of bed, socialize. You skipped logging on 11 days.",
    },
    "2025-08": {
      summary:
        "This was a harder month \u2014 9 of your 23 logged days were bad, compared to 8 good ones. Pain showed up mostly in your pelvis and abdomen, though most days it stayed manageable. Emotionally, you were frustrated and guilty on your hard days and optimistic and relaxed when things eased up. Your period ran heavy for several days, and lined up with your hardest pain. GI-wise, endo belly and gas showed up repeatedly, mostly around your period. The activities that gave you the most trouble were work, get out of bed, sit down. You skipped logging on 8 days.",
    },
    "2025-09": {
      summary:
        "This was a harder month \u2014 9 of your 17 logged days were bad, compared to 5 good ones. Pain centered mostly in your pelvis and ovary, and leaned severe more often than mild. Emotionally, you were frustrated and indifferent on your hard days and optimistic and happy when things eased up. GI-wise, nausea and endo belly showed up repeatedly, mostly around your period. The activities that gave you the most trouble were work, get out of bed, stand. You skipped logging on 13 days.",
    },
    "2025-10": {
      summary:
        "This was a harder month \u2014 7 of your 24 logged days were bad, compared to 5 good ones. Pain centered mostly in your pelvis and lower back, and leaned severe more often than mild. Emotionally, you were indifferent and guilty on your hard days and optimistic and motivated when things eased up. Your period ran heavy for several days, and lined up with your hardest pain. GI-wise, nausea and vomiting showed up repeatedly, mostly around your period. The activities that gave you the most trouble were prepare food, work, get out of bed. You skipped logging on 7 days.",
    },
    "2025-11": {
      summary:
        "This month was mixed \u2014 7 good days, 6 bad, and 7 in between. Pain showed up mostly in your pelvis and lower back, though most days it stayed manageable. Emotionally, you were indifferent and sad on your hard days and relaxed and optimistic when things eased up. Your period ran heavy for several days, and lined up with your hardest pain. GI-wise, painful bowel movement and nausea showed up repeatedly, mostly around your period. The activities that gave you the most trouble were work, get out of bed, prepare food. You skipped logging on 10 days.",
    },
    "2025-12": {
      summary:
        "This was a harder month \u2014 12 of your 24 logged days were bad, compared to 4 good ones. Pain centered mostly in your pelvis and lower back, and leaned severe more often than mild. Emotionally, you were indifferent and frustrated on your hard days and calm and relaxed when things eased up. Your period ran heavy for several days, and lined up with your hardest pain. GI-wise, nausea and endo belly showed up repeatedly, mostly around your period. The activities that gave you the most trouble were work, get out of bed, socialize. You skipped logging on 7 days.",
    },
    "2026-01": {
      summary:
        "This was a harder month \u2014 10 of your 23 logged days were bad, compared to 6 good ones. Pain centered mostly in your pelvis and lower back, and leaned severe more often than mild. Emotionally, you were indifferent and frustrated on your hard days and optimistic and relaxed when things eased up. Your period ran heavy for several days, and lined up with your hardest pain. GI-wise, nausea and diarrhea showed up repeatedly, mostly around your period. The activities that gave you the most trouble were work, get out of bed, sit down. You skipped logging on 8 days.",
    },
    "2026-02": {
      summary:
        "This month was mixed \u2014 7 good days, 4 bad, and 7 in between. Pain showed up mostly in your pelvis and lower back, though most days it stayed manageable. Emotionally, you were indifferent and mentally foggy on your hard days and productive and optimistic when things eased up. Your period ran heavy for several days, and lined up with your hardest pain. GI-wise, nausea and endo belly showed up repeatedly, mostly around your period. The activities that gave you the most trouble were work, prepare food, get out of bed. You skipped logging on 10 days.",
    },
    "2026-03": {
      summary:
        "This was a harder month \u2014 10 of your 24 logged days were bad, compared to 7 good ones. Pain centered mostly in your pelvis and lower back, and leaned severe more often than mild. Emotionally, you were indifferent and frustrated on your hard days and happy and relaxed when things eased up. Your period ran heavy for several days, and lined up with your hardest pain. GI-wise, nausea showed up repeatedly, mostly around your period. The activities that gave you the most trouble were work, get out of bed, stand. You skipped logging on 7 days.",
    },
    "2026-04": {
      summary:
        "This month was mixed \u2014 7 good days, 7 bad, and 4 in between. Pain showed up mostly in your pelvis and lower back, though most days it stayed manageable. Emotionally, you were sad and frustrated on your hard days and optimistic and relaxed when things eased up. Your period ran heavy for several days, and lined up with your hardest pain. GI-wise, nausea and vomiting showed up repeatedly, mostly around your period. The activities that gave you the most trouble were work, eat, get out of bed. You skipped logging on 12 days.",
    },
    "2026-05": {
      summary:
        "This was a harder month \u2014 5 of your 20 logged days were bad, compared to 4 good ones. Pain showed up mostly in your pelvis and lower back, though most days it stayed manageable. Emotionally, you were indifferent and sad on your hard days and relaxed and optimistic when things eased up. Your period ran heavy for several days, and lined up with your hardest pain. GI-wise, nausea and diarrhea showed up repeatedly, mostly around your period. The activities that gave you the most trouble were get out of bed, work, socialize. You skipped logging on 11 days.",
    },
    "2026-06": {
      summary:
        "This was a harder month \u2014 13 of your 22 logged days were bad, compared to 3 good ones. Pain centered mostly in your pelvis and lower back, and leaned severe more often than mild. Emotionally, you were frustrated and indifferent on your hard days and affectionate and relaxed when things eased up. Your period ran heavy for several days, and lined up with your hardest pain. GI-wise, nausea showed up repeatedly, mostly around your period. The activities that gave you the most trouble were work, get out of bed, stand. You skipped logging on 8 days.",
    },
    "2026-07": {
      summary:
        "This month was mixed \u2014 8 good days, 8 bad, and 9 in between. Pain showed up mostly in your pelvis and lower back, though most days it stayed manageable. Emotionally, you were indifferent and frustrated on your hard days and relaxed and optimistic when things eased up. Your period ran heavy for several days, and lined up with your hardest pain. GI-wise, endo belly and constipation showed up repeatedly, mostly around your period. The activities that gave you the most trouble were work, get out of bed, prepare food. You skipped logging on 6 days.",
    },
    "2026-08": {
      summary:
        "This was a harder month \u2014 5 of your 13 logged days were bad, compared to 3 good ones. Pain showed up mostly in your pelvis and lower back, though most days it stayed manageable. Emotionally, you were frustrated and indifferent on your hard days and relaxed and optimistic when things eased up. Your period ran heavy for several days, and lined up with your hardest pain. GI-wise, diarrhea and nausea showed up repeatedly, mostly around your period. The activities that gave you the most trouble were work, get out of bed, shower. You skipped logging on 6 days.",
    },
  },
} as Dataset;
