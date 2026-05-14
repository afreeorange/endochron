The verbs "MUST," "MUST NOT," "SHOULD," "SHOULD NOT," and "MAY" in this document are to be
interpreted per RFC 2119.

## Identity Management and Privacy

1. The system MUST present the option to sign in with Phendo credentials. It MUST also present the
   option to create a profile for patients who do not use Phendo. (The prototype renders both entry
   points; backend authentication is deferred.)
2. The system MUST inform the patient that all data is stored on-device via a dedicated privacy page.
3. The system MUST NOT transmit, collect, or share any health data. No server-side storage, analytics,
   crash reports, or device identifiers SHALL be present.
4. The system MUST allow the patient to delete all data by clearing local storage or uninstalling the app.

## Capture

1. The system MUST allow the patient to record their experience through open-ended speech via a
   dedicated recording interface with a visual waveform. It MUST NOT impose structured input.
2. The system MUST state that all audio is deleted after transcription.
3. The system SHOULD use an on-device LLM for speech transcription. (The prototype demonstrates the
   transcription flow with synthetic data; live on-device transcription is deferred.)
4. The system MUST extract clinically relevant factors from conversational input using a downstream
   LLM which MAY be off-device. Extracted factors MUST include:
   - Pain (16 locations, 3 severity levels)
   - Mood (10 positive, 20 negative sentiments)
   - Period (flow intensity, clots, spotting, breakthrough bleeding)
   - GI/Urinary symptoms (15 symptoms, 3 severity levels)
   - Functional impact ("Hard to Do": 20 activities)
   - Other symptoms (21 items, 3 severity levels)
   - Medications (free-text list)
   - Overall day rating (Good / Manageable / Bad)
5. Extraction categories MUST align with the Phendo citizen-science taxonomy.
6. The system MUST surface all extractions transparently as visual badges/pills organized by category
   so the patient can see what was inferred.
7. The system MUST allow the patient to override the overall day rating and edit the transcript text.
   It SHOULD allow the patient to correct or reject individual extracted factors.
8. The system MUST NOT gamify tracking or create pressure to log consistently.

## Reflective Sensemaking

1. The system MUST generate per-week and per-month narrative summaries covering pain, mood,
   period, GI, functional impact, medications, and overall status.
2. All AI-generated summaries MUST be presented as reflective anchors — observational and
   patient-centered in tone (e.g., "Here's what I see in your data").
3. The system MUST NOT generate language that implies clinical certainty or medical advice.
4. Weekly summaries MUST be viewable by month, with collapsible long/short display modes.
5. Monthly summaries MUST aggregate symptom frequencies and top factors.
6. The patient SHOULD be able to edit summaries inline.

## Timeline

1. The system MUST support viewing the illness trajectory at four temporal resolutions:
   day, week, month, and year.
2. Day view MUST display a horizontally scrollable date strip organized by month, with each day
   showing the overall rating and full detail on selection.
3. Year view MUST render a calendar heatmap colored by category severity.
4. Year view MUST allow the patient to switch the displayed category among Overall, Pain, Mood,
   GI, and Period. The selected category SHOULD persist across sessions.
5. The system SHOULD support arbitrary, user-defined timespans.
6. The system SHOULD allow the patient to annotate any point on the timeline with free text and
   tags.

## Visit Preparation

1. The system MUST provide a clinical visit preparation view with interactive anterior and posterior
   body map visualizations.
2. Body map zones MUST be clickable and MUST display a summary of mapped symptoms, pain
   locations, and their frequencies for the selected time range.
3. Zones MUST be color-coded by maximum severity within the selected time range.
4. The system MUST support at least four preparation time ranges: last week, two weeks, last month,
   and six months.
5. Each time range MUST present a narrative summary covering logging frequency, pain days/locations,
   period data, GI patterns, functional impact, medications, and mood themes.
6. The system SHOULD allow the patient to control which data is disclosed to a clinician.
