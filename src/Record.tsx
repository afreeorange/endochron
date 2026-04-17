import { PiMicrophoneDuotone } from "react-icons/pi";
import Shell from "./Shell";
import { Page } from "./Page";
import { useEffect, useRef, useState } from "react";
import { streamText, useAnimatedText } from "./textStream";
import { WaveformVisualizer } from "./WaveformVisualizer";

export const Record = () => {
  const [isRecordingInProgress, setIsRecordingInProgress] = useState(false);
  const [animatedText, setText] = useAnimatedText();
  const scrollRef = useRef<HTMLDivElement>(null);

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

  async function record() {
    const { textStream } = await streamText();
    for await (const textPart of textStream) {
      setText(textPart);
    }
  }

  return (
    <Shell>
      <Page>
        <div className="flex flex-col h-full">
          <h1
            className="font-light text-pink-600 text-5xl"
            dangerouslySetInnerHTML={{
              __html: isRecordingInProgress
                ? "Listening&hellip;"
                : "What&#8217;s on your mind Mischa?",
            }}
          />

          <div className="relative">
            <div
              ref={scrollRef}
              className="absolute opacity-15 mt-4 w-full h-[45vh] overflow-y-scroll no-scrollbar"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 20%)",
              }}
            >
              {animatedText}
            </div>
          </div>

          <div className="z-50 flex flex-col justify-end items-center gap-6 pb-[15%] w-full h-full grow">
            <div
              className={`w-full transition-all duration-500 ${isRecordingInProgress ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
              style={{ height: 48 }}
            ></div>

            <div className="relative fkex">
              {isRecordingInProgress ? (
                <>
                  <span className="inline-flex absolute bg-pink-400 opacity-75 rounded-full w-full h-full animate-ping" />
                  <div className="inline-flex relative bg-pink-500 rounded-full">
                    <button
                      className="block p-6 border border-pink-400 border-solid rounded-full cursor-pointer"
                      onClick={() => setIsRecordingInProgress(false)}
                    >
                      <PiMicrophoneDuotone className="text-white text-6xl" />
                    </button>
                  </div>
                </>
              ) : (
                <button
                  className="block bg-pink-100 p-6 border border-pink-400 border-dashed rounded-full cursor-pointer"
                  onClick={() => {
                    setIsRecordingInProgress(true);
                    record();
                  }}
                >
                  <PiMicrophoneDuotone className="text-6xl" />
                </button>
              )}
            </div>

            {isRecordingInProgress ? (
              <WaveformVisualizer isActive={isRecordingInProgress} />
            ) : (
              // NOTE: See WaveformVisualizer for the correct height. Want to prevent layout shift.
              <div className="h-6"></div>
            )}
          </div>
        </div>
      </Page>
    </Shell>
  );
};

export default Record;
