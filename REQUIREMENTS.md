# Requirements

The key words MUST, MUST NOT, REQUIRED, SHALL, SHALL NOT, SHOULD, SHOULD NOT, RECOMMENDED, MAY, and OPTIONAL in this document are to be interpreted as described in RFC 2119.

**Identity Management and Privacy**

1. The system SHOULD allow the patient to sign in with their Phendo credentials.
2. It MUST allow the patient to sign up in case they do not use Phendo.
3. It MUST inform the patient that all data is stored on-device.
4. It MUST NOT transmit or share any data collected or stored as part of its functionality, except as REQUIRED for off-device factor extraction (see Capture §3).

**Capture**

1. The system MUST allow the patient to record their experience through open-ended speech. It MUST NOT impose any structured input.
2. It MUST use an on-device LLM for speech transcription. It MUST discard all audio after a successful transcription.
3. It MUST extract clinically relevant factors (severity, medication use, sleep quality, life events, menstrual cycle data) from conversational input using a separate LLM, which MAY be off-device. It MUST use existing Phendo categories for this extraction.
4. It MUST surface these extractions transparently so the patient can see what was inferred.
5. It MUST allow the patient to correct, override, or reject any LLM-generated factor or assessment at any time.
6. It MUST NOT gamify tracking or create pressure to log consistently.

**Reflective Sensemaking**

1. The system SHOULD support the patient in identifying patterns, trends, and connections across an arbitrary timespan.
2. AI-generated assessments and summaries MUST be presented as a reflective anchor (a "sounding board").
3. The system MUST NOT generate language that implies clinical certainty or medical advice.

**Timeline**

1. The system MUST support viewing the illness trajectory at multiple temporal resolutions: day, week, month, and year.
2. It SHOULD support arbitrary timespans.
3. It MUST allow the patient to toggle data layers (assessment, mood, symptoms, medications, life events, menstruation, clinical visits) independently.
4. It MUST allow the patient to annotate any point on the timeline with any type of event at any time.
5. Annotations MUST NOT be limited to system or LLM-defined categories.
6. The patient SHOULD be able to annotate the timeline with free text and tags at their discretion.
