import { PiMicrophoneDuotone } from "react-icons/pi";
import Shell from "./Shell";
import { Page } from "./Page";
import { useEffect, useRef, useState } from "react";
import { streamText, useAnimatedText } from "./textStream";

export const Record = () => {
  const [greeting, setGreeting] = useState("What&#8217;s on your mind Mischa?");
  const [isRecording, setIsRecording] = useState(false);
  const [animatedText, setText] = useAnimatedText();
  const scrollRef = useRef<HTMLDivElement>(null);

  /**
   * Anchor scrolling text to the bottom of the parent.
   */
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
            dangerouslySetInnerHTML={{ __html: greeting }}
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

          <div className="z-50 flex justify-center items-end pb-[25%] w-full h-full grow">
            <span className="relative flex">
              {isRecording ? (
                <>
                  <span className="inline-flex absolute bg-pink-400 opacity-75 rounded-full w-full h-full animate-ping"></span>
                  <span className="inline-flex relative bg-pink-500 rounded-full">
                    <button
                      className="block p-6 border border-pink-400 border-dashed rounded-full cursor-pointer"
                      onClick={() => setIsRecording(false)}
                    >
                      <PiMicrophoneDuotone className="text-white text-6xl" />
                    </button>
                  </span>
                </>
              ) : (
                <button
                  className="block bg-pink-100 p-6 border border-pink-400 border-dashed rounded-full cursor-pointer"
                  onClick={() => {
                    setGreeting("Listening&hellip;");
                    record();
                    setIsRecording(true);
                  }}
                >
                  <PiMicrophoneDuotone className="text-6xl" />
                </button>
              )}
            </span>
          </div>
        </div>
      </Page>
    </Shell>
  );
};

export default Record;
