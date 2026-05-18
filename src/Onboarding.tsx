import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type PropsWithChildren,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  PiMicrophoneDuotone,
  PiAsclepiusDuotone,
  PiPersonDuotone,
  PiLockKeyDuotone,
} from "react-icons/pi";
import clsx from "clsx";

const STORAGE_KEY = "onboarding_seen";

type Target = "record" | "reflect" | "prepare" | null;

type Step = {
  target: Target;
  icon: React.ReactNode;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    target: "record",
    icon: <PiMicrophoneDuotone className="text-pink-500 text-2xl" />,
    title: "Record",
    body: "Tap here and just speak. No forms, no fields. Your words are transcribed on your device. All audio is deleted.",
  },
  {
    target: "reflect",
    icon: <PiAsclepiusDuotone className="text-pink-500 text-2xl" />,
    title: "Reflect",
    body: "Look back over days, weeks, months, and years to see the shape of your trajectory.",
  },
  {
    target: "prepare",
    icon: <PiPersonDuotone className="text-pink-500 text-2xl" />,
    title: "Prepare",
    body: "A body-map summary of recent symptoms to bring along to clinic visits.",
  },
  {
    target: null,
    icon: <PiLockKeyDuotone className="text-pink-500 text-2xl" />,
    title: "Yours alone",
    body: "Everything stays on this device as much as possible. We only send your anonymous transcripts for summarization to a server: no other personal data ever leaves your device.",
  },
];

interface OnboardingContextValue {
  active: boolean;
  step: number;
  total: number;
  maybeStart: () => void;
  restart: () => void;
  next: () => void;
  back: () => void;
  skip: () => void;
}

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

export const useOnboarding = () => {
  const ctx = useContext(OnboardingContext);
  if (!ctx)
    throw new Error("useOnboarding must be used within OnboardingProvider");
  return ctx;
};

const clamp = (v: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, v));

export const OnboardingProvider = ({ children }: PropsWithChildren) => {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  const finish = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // localStorage unavailable — onboarding simply re-shows next time.
    }
    setActive(false);
    setStep(0);
  }, []);

  const maybeStart = useCallback(() => {
    if (active) return;
    let seen = false;
    try {
      seen = localStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      seen = false;
    }
    if (seen) return;
    setStep(0);
    setActive(true);
  }, [active]);

  const restart = useCallback(() => {
    setStep(0);
    setActive(true);
  }, []);

  const next = useCallback(() => {
    setStep((s) => {
      if (s >= STEPS.length - 1) {
        finish();
        return s;
      }
      return s + 1;
    });
  }, [finish]);

  const back = useCallback(() => setStep((s) => Math.max(0, s - 1)), []);

  const value = useMemo<OnboardingContextValue>(
    () => ({
      active,
      step,
      total: STEPS.length,
      maybeStart,
      restart,
      next,
      back,
      skip: finish,
    }),
    [active, step, maybeStart, restart, next, back, finish],
  );

  return (
    <OnboardingContext.Provider value={value}>
      {children}
      <OnboardingCoach />
    </OnboardingContext.Provider>
  );
};

const CARD_MAX = 340;

const OnboardingCoach = () => {
  const { active, step, total, next, back, skip } = useOnboarding();
  const current = STEPS[step];
  const [rect, setRect] = useState<DOMRect | null>(null);

  // Locate + track the current step's dock target. Retries via rAF because the
  // dock can mount a frame or two after onboarding starts (e.g. on a replay
  // that navigates into a shell route).
  useLayoutEffect(() => {
    if (!active || !current.target) {
      setRect(null);
      return;
    }
    let raf = 0;
    let tries = 0;
    const selector = `[data-onboarding="${current.target}"]`;
    const measure = () => {
      const el = document.querySelector(selector);
      if (el) {
        setRect(el.getBoundingClientRect());
        return;
      }
      if (tries++ < 60) raf = requestAnimationFrame(measure);
    };
    measure();
    const onResize = () => {
      const el = document.querySelector(selector);
      if (el) setRect(el.getBoundingClientRect());
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, true);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize, true);
    };
  }, [active, current.target, step]);

  const escRef = useRef(skip);
  escRef.current = skip;
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") escRef.current();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  if (!active) return null;

  const isLast = step === total - 1;
  // Fall back to a centered card if a targeted element can't be found.
  const anchored = !!rect && !!current.target;

  const pad = 8;
  const spotlight = anchored
    ? {
        left: rect!.left - pad,
        top: rect!.top - pad,
        width: rect!.width + pad * 2,
        height: rect!.height + pad * 2,
      }
    : null;

  const cardW = Math.min(CARD_MAX, window.innerWidth - 32);
  const cardStyle: React.CSSProperties = anchored
    ? {
        position: "fixed",
        bottom: window.innerHeight - rect!.top + 18,
        left: clamp(
          rect!.left + rect!.width / 2 - cardW / 2,
          16,
          window.innerWidth - cardW - 16,
        ),
        width: cardW,
      }
    : {};

  const card = (
    <motion.div
      key={step}
      role="dialog"
      aria-modal="true"
      aria-label={`${current.title} — onboarding step ${step + 1} of ${total}`}
      className="bg-base-100 shadow-xl p-5 border border-pink-100 pointer-events-auto card"
      style={anchored ? cardStyle : { width: cardW }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2 mb-2">
        {current.icon}
        <h2 className="font-semibold text-pink-600 text-lg">{current.title}</h2>
      </div>
      <p className="mb-4 text-sm leading-relaxed">{current.body}</p>

      <div className="flex justify-center gap-1.5 mb-4">
        {STEPS.map((_, i) => (
          <span
            key={i}
            className={clsx(
              "rounded-full w-1.5 h-1.5 transition-colors",
              i === step ? "bg-pink-500" : "bg-pink-200",
            )}
          />
        ))}
      </div>

      <div className="flex justify-between items-center">
        <button
          type="button"
          className="text-pink-400 btn btn-ghost btn-sm"
          onClick={skip}
        >
          Skip
        </button>
        <div className="join">
          {step > 0 && (
            <button
              type="button"
              className="btn btn-sm join-item"
              onClick={back}
            >
              Back
            </button>
          )}
          <button
            type="button"
            className="btn btn-primary btn-sm join-item"
            onClick={next}
          >
            {isLast ? "Done" : "Next"}
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="z-70 fixed inset-0 pointer-events-auto">
      {spotlight ? (
        <motion.div
          className="absolute rounded-xl"
          initial={false}
          animate={spotlight}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ boxShadow: "0 0 0 9999px rgba(0,0,0,0.55)" }}
        />
      ) : (
        <div className="absolute inset-0 bg-black/55" />
      )}
      <AnimatePresence mode="wait">
        {anchored ? (
          card
        ) : (
          <div className="absolute inset-0 flex justify-center items-center p-4">
            {card}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
