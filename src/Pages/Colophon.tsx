import { Page } from "../Page";

const Row = ({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) => (
  <div className="flex justify-between items-baseline py-2 border-pink-100 border-b last:border-b-0 text-sm">
    <span className="text-pink-400 text-xs tracking-wide">{label}</span>
    {href ? (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-pink-600 underline underline-offset-2"
      >
        {value}
      </a>
    ) : (
      <span className="font-medium">{value}</span>
    )}
  </div>
);

const Colophon = () => (
  <Page title="Colophon">
    <p className="mb-6 text-sm leading-relaxed">
      EndoChron is built for people living with endometriosis who want a clear,
      calm view of their own data.
    </p>

    <section className="mb-8">
      <h2 className="mb-2 font-semibold text-pink-600 text-sm">Built With</h2>
      <div className="px-3 border border-pink-100 rounded-xl divide-y divide-pink-100">
        <Row label="Framework" value="React + Vite" href="https://vitejs.dev" />
        <Row
          label="Routing"
          value="React Router"
          href="https://reactrouter.com"
        />
        <Row
          label="UI"
          value="DaisyUI + Tailwind CSS"
          href="https://daisyui.com"
        />
        <Row label="Animations" value="Motion" href="https://motion.dev" />
        <Row
          label="Icons"
          value="Phosphor Icons"
          href="https://phosphoricons.com"
        />
        <Row
          label="Calendar"
          value="Cally"
          href="https://wicky.nillia.ms/cally"
        />
        <Row label="Dates" value="Day.js" href="https://day.js.org" />
        <Row label="UI" value="Inter" href="https://rsms.me/inter" />
      </div>
    </section>

    <section>
      <h2 className="mb-2 font-semibold text-pink-600 text-sm">
        Acknowledgments
      </h2>
      <p className="text-sm leading-relaxed">
        Symptom taxonomy inspired by{" "}
        <a
          className="text-pink-600 underline underline-offset-2"
          href="https://citizenendo.org/phendo/"
          target="_blank"
          rel="noreferrer"
        >
          Phendo
        </a>
        , the citizen science app developed by the Citizen Science program at
        Columbia University. Built for the endometriosis community, whose lived
        experience shapes everything here.
      </p>
    </section>
  </Page>
);

export default Colophon;
