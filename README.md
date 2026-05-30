# EndoChron

## Development

Deployed to [docker.nikhil.io](https://docker.nikhil.io). Bog-standard React + Tailwind app. Uses synthetic data (see `PROMPT.md` and `src/data/syntheticData.json`)

```bash
pnpm i
pnpm dev
```

## Screenshots

|                                                                                                                                                              |                                                                                                                                                              |                                                                                                                                                              |                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [![17_08](https://public.nikhil.io/grad.nikhil.io/Endochron-Screenshots/17_08.png)](https://public.nikhil.io/grad.nikhil.io/Endochron-Screenshots/17_08.png) | [![17_15](https://public.nikhil.io/grad.nikhil.io/Endochron-Screenshots/17_15.png)](https://public.nikhil.io/grad.nikhil.io/Endochron-Screenshots/17_15.png) | [![17_28](https://public.nikhil.io/grad.nikhil.io/Endochron-Screenshots/17_28.png)](https://public.nikhil.io/grad.nikhil.io/Endochron-Screenshots/17_28.png) | [![17_36](https://public.nikhil.io/grad.nikhil.io/Endochron-Screenshots/17_36.png)](https://public.nikhil.io/grad.nikhil.io/Endochron-Screenshots/17_36.png) |
| [![17_45](https://public.nikhil.io/grad.nikhil.io/Endochron-Screenshots/17_45.png)](https://public.nikhil.io/grad.nikhil.io/Endochron-Screenshots/17_45.png) | [![17_48](https://public.nikhil.io/grad.nikhil.io/Endochron-Screenshots/17_48.png)](https://public.nikhil.io/grad.nikhil.io/Endochron-Screenshots/17_48.png) | [![17_51](https://public.nikhil.io/grad.nikhil.io/Endochron-Screenshots/17_51.png)](https://public.nikhil.io/grad.nikhil.io/Endochron-Screenshots/17_51.png) | [![18_07](https://public.nikhil.io/grad.nikhil.io/Endochron-Screenshots/18_07.png)](https://public.nikhil.io/grad.nikhil.io/Endochron-Screenshots/18_07.png) |

## User Reviews

TODO: Add them here.

## Miscellaneous

- [Synthetic Data Generation Chat](https://claude.ai/share/ff426b10-270d-47d5-a83d-675aabccae50)
- [First Principles of Interaction Design](https://asktog.com/atc/principles-of-interaction-design/)
- Baseline chars: gender, age, sexual, education, income, work location, smoking, phendo user, active user, menstrual chars, periods in the last three months, pelvic pain during last period, hormones to lessen pain, type of home location, work don’t work, severity of pain during last period
- 5-class: Great > Good > Manageable > Bad > Unbearable
- Binary: Non flareup / Flareup
- [On Endometriosis](https://www.youtube.com/watch?v=4frPUbB_Xvo)
- [Nancy's Nook](https://www.facebook.com/groups/NancysNookEndoEd/) on Facebook -- endo community
- [Endometriosis: One Of The Most Painful Conditions](https://www.youtube.com/watch?v=CNjQFX-tUh0)

### Notes

- Adaptive Summaries: each edit to a summary means a _different prompt_!
- Not just an app: to VCs this is "_a novel representational infrastructure that enables collaborative clinical cognition._" (I am not serious here.)
- SUMMARIZATION IS HARD, HARD, HARD.
- "Why are you wasting everybody's time like this Nikki?" -- Dad
- Right-handed bias in UI
- Import data from period tracker?
- Search, open-ended: "What was the worst time of this year for me?" "When was I really struggling?" "What are my worst pains?"
- There are standard intake forms.
- If they speak freely, they can forget! Hard for clinician to hone in. Let them speak freely, use a validated questionnaire.
- Patients are experts in their own symptons.
- You are an assistant that classifies daily health status from a first-person transcript.
    - Context: the speaker has endometriosis.
    - Task type: label classification (not medical advice, not diagnosis).
- People with endometriosis often evaluate their health status as less severe than in reality.
- Do not exaggerate severity when the transcript is clearly mild or clearly severe.
- Absence of pain/symptoms being mentioned does not mean symptoms are absent.
- "Better" does not always mean "good", it may be relative to a very bad baseline.
- People with endometriosis may still function even with very severe symptoms (\eg go to work, go on walks, do social engagements), the worst status does not require being bedbound or needing the hospital/ER.
- For many people with endometriosis, "zero symptoms" is not realistic, so even a positive day may include some symptom impact.
- Prioritize health status and functioning, with less influence from unrelated details (still OK to use contextual details when they clearly inform health status).
- Indicators of "bad/worse" are individualized, use the person's own cues, thresholds, and comparisons.
- It is OK to assign a different health status than the person explicitly states if their described symptoms/functioning support a different label.

## License

WTFPL
