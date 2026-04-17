import { PiAsclepiusDuotone, PiMicrophoneDuotone } from "react-icons/pi";
import { PiArrowCounterClockwise } from "react-icons/pi";
import clsx from "clsx";

import Shell from "./Shell";
import { Page } from "./Page";
import { useEffect, useRef, useState } from "react";
import { streamText, useAnimatedText } from "./textStream";
import { WaveformVisualizer } from "./WaveformVisualizer";

type Phase = "idle" | "recording" | "done";

export const Record = () => {
  const [phase, setPhase] = useState<Phase>("idle");
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
    <Shell>
      <Page>
        <div className="flex flex-col h-full">
          <h1
            className="font-light text-pink-600 text-5xl"
            dangerouslySetInnerHTML={{
              __html:
                phase === "recording"
                  ? "Listening&hellip;"
                  : phase === "done"
                    ? "What do you want to do next?"
                    : "What&#8217;s on your mind, Mischa?",
            }}
          />

          <div className="relative">
            <div
              ref={scrollRef}
              className="absolute opacity-25 mt-4 w-full h-[30vh] overflow-y-scroll no-scrollbar"
            >
              {animatedText}
            </div>
          </div>

          <div className="z-50 flex flex-col justify-end items-center gap-6 pb-[15%] w-full h-full grow">
            {phase === "done" ? (
              <div className="z-40 bg-base-100 border border-pink-300 w-full card">
                <div className="gap-3 p-4 card-body">
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
                  <button className="btn-block btn btn-lg btn-primary">
                    <PiAsclepiusDuotone className="text-2xl" /> Add
                    to Diary
                  </button>

                  <p className="opacity-50 text-xs text-center">
                    You can review, edit, or delete anything at any time.
                  </p>
                </div>
              </div>
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

                <div className="mb-8">
                  {!isRecording ? (
                    <p className="h-6 text-pink-300 text-xs text-center">
                      Your voice is used to capture your words —{" "}
                      <strong>nothing more</strong>. Once it's transcribed, the
                      audio is{" "}
                      <span className="underline underline-offset-2">
                        deleted
                      </span>
                      .
                    </p>
                  ) : (
                    <WaveformVisualizer isActive={isRecording} />
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </Page>
    </Shell>
  );
};

export default Record;
