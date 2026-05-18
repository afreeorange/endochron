import { Page } from "../Page";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-6">
    <h2 className="mb-2 font-semibold text-pink-600 text-sm">{title}</h2>
    <div className="space-y-2 text-sm leading-relaxed">{children}</div>
  </section>
);

export const Privacy = () => (
  <Page title="Privacy Policy">
    <p className="mb-8 text-xs">Last updated May 2026</p>

    <Section title="Data Storage">
      <p>
        Your health data is stored locally on your device. We do not operate
        servers that collect or store your personal health information. The one
        exception is described under <em>AI Summarization</em> below.
      </p>
    </Section>

    <Section title="What We Collect">
      <p>
        EndoChron collects only the symptom and health information you
        explicitly enter. We do not collect usage analytics, crash reports, or
        device identifiers. Audio is transcribed and then immediately deleted.
        It is never stored or transmitted.
      </p>
    </Section>

    <Section title="AI Summarization">
      <p>
        To generate the narrative weekly, monthly, and visit-preparation
        summaries, we send the text of your transcripts to a third-party
        frontier large language model provider.
      </p>
      <p>
        This transcript text is anonymized before it leaves your device: it
        carries no name, account, contact details, or device identifier, and is
        not linked back to you. No other data on your device, especially audio, is
        ever sent.
      </p>
    </Section>

    <Section title="Third Parties">
      <p>
        Aside from the anonymized transcript text sent for AI summarization
        described above, we do not sell, share, or transmit your data to any
        third party.
      </p>
    </Section>

    <Section title="Sensitive Health Data">
      <p>
        We recognize that endometriosis-related health data is sensitive. It
        remains entirely under your control. You can delete your data at any
        time by clearing the app's local storage or uninstalling the app.
      </p>
    </Section>

    <Section title="Contact">
      <p>
        Reach us at{" "}
        <a
          className="text-pink-500 underline"
          href="mailto:privacy@endochron.app"
        >
          privacy@endochron.app
        </a>
        .
      </p>
    </Section>
  </Page>
);

export default Privacy;
