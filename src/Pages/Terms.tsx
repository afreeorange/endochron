import { Page } from "../Page";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-6">
    <h2 className="mb-2 font-semibold text-pink-600 text-sm">{title}</h2>
    <div className="space-y-2 text-sm leading-relaxed">{children}</div>
  </section>
);

const Terms = () => (
  <Page title="Terms of Use">
    <p className="mb-6 text-pink-200 text-xs">Last updated January 2026</p>

    <Section title="Not Medical Advice">
      <p>EndoChron is a personal symptom-tracking tool, not a medical device. Nothing in this app constitutes medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for any medical concerns.</p>
    </Section>

    <Section title="Your Data">
      <p>All health information you enter belongs to you. You are responsible for the accuracy of data you log. We do not verify, validate, or act on any information you record.</p>
    </Section>

    <Section title="No Warranty">
      <p>The app is provided "as is" without warranty of any kind. We make no guarantees about availability, accuracy, or fitness for a particular purpose. Use it at your own discretion.</p>
    </Section>

    <Section title="Limitation of Liability">
      <p>To the fullest extent permitted by law, the developers of EndoChron are not liable for any damages arising from your use of the app, including health decisions made based on data recorded here.</p>
    </Section>

    <Section title="Changes">
      <p>These terms may be updated at any time. Continued use of the app after changes constitutes acceptance of the new terms.</p>
    </Section>
  </Page>
);

export default Terms;
