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

const Privacy = () => (
  <Page title="Privacy Policy">
    <p className="mb-8 text-xs">Last updated January 2026</p>

    <Section title="Data Storage">
      <p>
        Your health data is stored locally on your device. We do not operate
        servers that collect, store, or process your personal health
        information.
      </p>
    </Section>

    <Section title="What We Collect">
      <p>
        EndoChron collects only the symptom and health information you
        explicitly enter. We do not collect usage analytics, crash reports, or
        device identifiers.
      </p>
    </Section>

    <Section title="Third Parties">
      <p>
        We do not sell, share, or transmit your data to any third party. Your
        health information never leaves your device.
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
