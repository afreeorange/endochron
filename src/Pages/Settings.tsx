import { useNavigate } from "react-router";
import { PiArrowCounterClockwiseDuotone } from "react-icons/pi";
import { Page } from "../Page";
import { useOnboarding } from "../Onboarding";

const Settings = () => {
  const navigate = useNavigate();
  const { restart } = useOnboarding();

  const replay = () => {
    restart();
    // Onboarding's coach marks anchor to the dock, so land on a shell route.
    navigate("/record");
  };

  return (
    <Page title="Settings" showDock>
      <section>
        {/* <h2 className="mb-2 font-semibold text-pink-600 text-sm">Help</h2> */}
        <button
          type="button"
          onClick={replay}
          className="flex items-center gap-3 p-3 border border-pink-200 rounded-xl w-full text-sm text-left"
        >
          <PiArrowCounterClockwiseDuotone className="text-pink-400 text-2xl shrink-0" />
          <div>
            <div className="font-medium">Replay the intro tour</div>
            <div className="text-pink-400 text-xs">
              See the quick walkthrough again
            </div>
          </div>
        </button>
      </section>
    </Page>
  );
};

export default Settings;
