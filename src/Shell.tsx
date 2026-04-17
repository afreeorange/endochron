import type { PropsWithChildren } from "react";
import { PiMicrophoneDuotone } from "react-icons/pi";
import { PiAsclepiusDuotone } from "react-icons/pi";
import { PiPersonDuotone } from "react-icons/pi";
import { PiGearDuotone } from "react-icons/pi";

export const Shell = ({ children }: PropsWithChildren) => (
  <div className="h-full">
    {children}

    <div className="dock dock-md">
      <button className="dock-active">
        <PiMicrophoneDuotone className="text-2xl" />
        <span className="dock-label">Record</span>
      </button>

      <button>
        <PiAsclepiusDuotone className="text-2xl" />
        <span className="dock-label">Reflect</span>
      </button>

      <button>
        <PiPersonDuotone className="text-2xl" />
        <span className="dock-label">Prepare</span>
      </button>

      <button>
        <PiGearDuotone className="text-2xl" />
        <span className="dock-label">Settings</span>
      </button>
    </div>
  </div>
);

export default Shell;
