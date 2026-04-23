import { Page } from "../Page";
import { PiEnvelopeDuotone, PiGithubLogoDuotone } from "react-icons/pi";

const FAQ = ({ q, a }: { q: string; a: string }) => (
  <div className="mb-4">
    <p className="mb-1 font-medium text-sm">{q}</p>
    <p className="text-pink-400 text-sm leading-relaxed">{a}</p>
  </div>
);

const Support = () => (
  <Page title="Support">
    <section className="mb-8">
      <h2 className="mb-2 font-semibold text-pink-600 text-sm">
        Get in Touch
      </h2>
      <div className="space-y-3">
        <a
          href="mailto:support@endochron.app"
          className="flex items-center gap-3 p-3 border border-pink-200 rounded-xl text-sm"
        >
          <PiEnvelopeDuotone className="text-pink-400 text-2xl shrink-0" />
          <div>
            <div className="font-medium">Email Support</div>
            <div className="text-pink-400 text-xs">support@endochron.app</div>
          </div>
        </a>
        <a
          href="https://github.com/endochron/endochron/issues"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 p-3 border border-pink-200 rounded-xl text-sm"
        >
          <PiGithubLogoDuotone className="text-pink-400 text-2xl shrink-0" />
          <div>
            <div className="font-medium">Report a Bug</div>
            <div className="text-pink-400 text-xs">Open an issue on GitHub</div>
          </div>
        </a>
      </div>
    </section>

    <section>
      <h2 className="flex items-center gap-1 mb-3 font-semibold text-pink-600 text-sm uppercase tracking-wide">
        FAQ
      </h2>
      <FAQ
        q="Is my data backed up?"
        a="Data is stored locally on your device. We recommend exporting your data regularly — backup and export features are coming soon."
      />
      <FAQ
        q="Can I use EndoChron with my doctor?"
        a="Yes. You can show your symptom history to your healthcare provider, but EndoChron is not a substitute for professional medical advice."
      />
      <FAQ
        q="How do I delete my data?"
        a="Clear the app's local storage in your browser settings, or uninstall the app. All data will be permanently removed."
      />
      <FAQ
        q="Is EndoChron free?"
        a="Yes. There are no subscriptions or in-app purchases."
      />
    </section>
  </Page>
);

export default Support;
