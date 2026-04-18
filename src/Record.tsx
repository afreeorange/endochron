import { PiAsclepiusDuotone, PiMicrophoneDuotone } from "react-icons/pi";
import { PiArrowCounterClockwise } from "react-icons/pi";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";

import Shell from "./Shell";
import { Page } from "./Page";
import { useEffect, useRef, useState } from "react";
import { streamText, useAnimatedText } from "./textStream";
import { WaveformVisualizer } from "./WaveformVisualizer";
import { NavLink } from "react-router";

type Phase = "idle" | "recording" | "done";

export const Record = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [privacyDismissed, setPrivacyDismissed] = useState(false);
  const [animatedText, setText, clearText] = useAnimatedText();
  const scrollRef = useRef<HTMLDivElement>(null);
  const stopRef = useRef(false);
  const streamRef = useRef<AsyncGenerator<string> | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const observer = new MutationObserver(() => {
      el.scrollTop = el.scrollHeight;
    });
    observer.observe(el, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    return () => observer.disconnect();
  }, []);

  async function record(resume = false) {
    stopRef.current = false;
    setPhase("recording");

    if (!resume || !streamRef.current) {
      const { textStream } = await streamText();
      streamRef.current = textStream;
    }

    const stream = streamRef.current;
    while (true) {
      if (stopRef.current) return;
      const { value, done } = await stream.next();
      if (done) break;
      setText(value);
    }

    streamRef.current = null;
    setPhase("done");
  }

  function stop() {
    stopRef.current = true;
    setPhase("done");
  }

  function reset() {
    stopRef.current = true;
    streamRef.current = null;
    clearText();
    setPhase("idle");
  }

  const isRecording = phase === "recording";

  return (
    <Shell disableDock={isRecording}>
      <Page>
        <div className="flex flex-col h-full">
          <AnimatePresence mode="wait">
            <motion.h1
              key={phase}
              className="font-light text-pink-600 text-5xl"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              dangerouslySetInnerHTML={{
                __html:
                  phase === "recording"
                    ? "Listening&hellip;"
                    : phase === "done"
                      ? "What would you like next?"
                      : "What&#8217;s on your mind, Mischa?",
              }}
            />
          </AnimatePresence>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          >
            <div
              ref={scrollRef}
              className="absolute opacity-25 mt-4 w-full h-[35vh] overflow-y-scroll no-scrollbar"
            >
              {animatedText}
            </div>
          </motion.div>

          <motion.div
            className="z-50 flex flex-col justify-end items-center pb-[30%] w-full h-full grow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            {phase === "done" ? (
              <motion.div
                className="z-40 bg-base-100 -mb-[14%] border border-pink-300 w-full card"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                <div className="gap-4 p-4 card-body">
                  <div className="join join-horizontal">
                    <button
                      className="border-pink-200 w-1/2 btn btn-lg join-item"
                      onClick={() => record(true)}
                    >
                      <PiMicrophoneDuotone className="text-lg" /> Continue
                    </button>
                    <button
                      className="border-pink-200 border-l-0 btn-outline w-1/2 btn btn-lg join-item"
                      onClick={reset}
                    >
                      <PiArrowCounterClockwise className="text-lg" /> Start over
                    </button>
                  </div>
                  <NavLink to={"/reflect/daily"}>
                    <button className="btn-block btn btn-lg btn-primary">
                      <PiAsclepiusDuotone className="text-2xl" /> Add to Diary
                    </button>
                  </NavLink>

                  <p className="opacity-50 text-xs text-center">
                    You can review, re-record, or remove any thing at any time.
                  </p>
                </div>
              </motion.div>
            ) : (
              <>
                <div className="relative">
                  {isRecording && (
                    <span className="inline-flex absolute bg-pink-400 opacity-75 rounded-full w-full h-full animate-ping" />
                  )}
                  <div
                    className={clsx(
                      "inline-flex relative rounded-full",
                      isRecording && "bg-pink-500",
                    )}
                  >
                    <button
                      className={clsx(
                        "block p-6 border rounded-full cursor-pointer",
                        isRecording
                          ? "border-solid border-pink-400"
                          : "border-dashed border-pink-400 bg-pink-100",
                      )}
                      onClick={isRecording ? stop : () => record()}
                    >
                      <PiMicrophoneDuotone
                        className={clsx(
                          "text-6xl",
                          isRecording && "text-white",
                        )}
                      />
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  {isRecording ? (
                    <WaveformVisualizer isActive={isRecording} />
                  ) : (
                    <p
                      className={clsx(
                        "opacity-50 px-8 h-6 text-pink-300 text-xs text-center",
                        privacyDismissed && "invisible",
                      )}
                    >
                      Your <strong>voice in words</strong> &mdash;{" "}
                      <strong>nothing more</strong>. <br />{" "}
                      <em>All audio is deleted.</em>{" "}
                      <button
                        className="border border-pink-400 btn btn-xs"
                        onClick={() => setPrivacyDismissed(true)}
                      >
                        Got it
                      </button>
                    </p>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </Page>
    </Shell>
  );
};

export default Record;
