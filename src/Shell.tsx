import type { PropsWithChildren } from "react";
import { PiMicrophoneDuotone } from "react-icons/pi";
import { PiAsclepiusDuotone } from "react-icons/pi";
import { PiPersonDuotone } from "react-icons/pi";
import { PiGearDuotone } from "react-icons/pi";
import { useLocation } from "react-router";
import clsx from "clsx";

interface ShellProps extends PropsWithChildren {
  disableDock?: boolean;
}

export const Shell = ({ children, disableDock }: ShellProps) => {
  const { pathname } = useLocation();

  return (
    <div className="h-full">
      {children}

      <div className="dock dock-md">
        <button
          disabled={disableDock}
          className={clsx(
            pathname.includes("/record") ? "dock-active" : "opacity-35",
          )}
        >
          <PiMicrophoneDuotone className="text-2xl" />
          <span className="dock-label">Record</span>
        </button>

        <button
          disabled={disableDock}
          className={clsx(
            pathname.includes("/reflect") ? "dock-active" : "opacity-35",
          )}
        >
          <PiAsclepiusDuotone className="text-2xl" />
          <span className="dock-label">Reflect</span>
        </button>

        <button
          disabled={disableDock}
          className={clsx(
            pathname.includes("/prepare") ? "dock-active" : "opacity-35",
          )}
        >
          <PiPersonDuotone className="text-2xl" />
          <span className="dock-label">Prepare</span>
        </button>

        <button
          disabled={disableDock}
          className={clsx(
            pathname.includes("/settings") ? "dock-active" : "opacity-35",
          )}
        >
          <PiGearDuotone className="text-2xl" />
          <span className="dock-label">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Shell;
