import { PiMicrophoneDuotone } from "react-icons/pi";
import Shell from "./Shell";
import { Page } from "./Page";
import { useState } from "react";

export const Record = () => {
  const [greeting, setGreeting] = useState("What&#8217;s on your mind Mischa?");
  const [isRecording, setIsRecording] = useState(false);

  return (
    <Shell>
      <Page>
        <div className="flex flex-col h-full">
          <h1
            className="font-light text-pink-600 text-5xl"
            dangerouslySetInnerHTML={{ __html: greeting }}
          />

          <div className="justify-center content-center grid pt-24 w-full h-full grow">
            {isRecording ? (
              <span className="relative flex">
                <span className="inline-flex absolute bg-pink-400 opacity-75 rounded-full w-full h-full animate-ping"></span>
                <span className="inline-flex relative bg-pink-500 rounded-full">
                  <button
                    className="block p-6 border border-pink-400 border-dashed rounded-full cursor-pointer"
                    onClick={() => setIsRecording(!isRecording)}
                  >
                    <PiMicrophoneDuotone className="text-white text-6xl" />
                  </button>
                </span>
              </span>
            ) : (
              <button
                className="block p-6 border border-pink-400 border-dashed rounded-full cursor-pointer"
                onClick={() => setIsRecording(!isRecording)}
              >
                <PiMicrophoneDuotone className="text-6xl" />
              </button>
            )}
          </div>
        </div>
      </Page>
    </Shell>
  );
};

export default Record;
