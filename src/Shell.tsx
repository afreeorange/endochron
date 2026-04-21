import type { PropsWithChildren } from "react";
import { PiMicrophoneDuotone } from "react-icons/pi";
import { PiAsclepiusDuotone } from "react-icons/pi";
import { PiPersonDuotone } from "react-icons/pi";
import { PiGearDuotone } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router";
import clsx from "clsx";

interface ShellProps extends PropsWithChildren {
  disableDock?: boolean;
  hideDock?: boolean;
}

export const Shell = ({ children, disableDock, hideDock }: ShellProps) => {
  const { pathname } = useLocation();
  let navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 pb-24 min-h-0 overflow-y-auto">{children}</div>

      {!hideDock && (<div className="z-50 dock dock-md">
        <button
          disabled={disableDock}
          onClick={() => navigate("/record")}
          className={clsx(
            pathname.includes("/record") ? "dock-active" : "opacity-35",
          )}
        >
          <PiMicrophoneDuotone className="text-2xl" />
          <span className="dock-label">Record</span>
        </button>

        <button
          disabled={disableDock}
          onClick={() => navigate("/reflect/days")}
          className={clsx(
            pathname.includes("/reflect") ? "dock-active" : "opacity-35",
          )}
        >
          <PiAsclepiusDuotone className="text-2xl" />
          <span className="dock-label">Reflect</span>
        </button>

        <button
          disabled={disableDock}
          onClick={() => navigate("/prepare")}
          className={clsx(
            pathname.includes("/prepare") ? "dock-active" : "opacity-35",
          )}
        >
          <PiPersonDuotone className="text-2xl" />
          <span className="dock-label">Prepare</span>
        </button>

        <button
          disabled={disableDock}
          onClick={() => navigate("/settings")}
          className={clsx(
            pathname.includes("/settings") ? "dock-active" : "opacity-35",
          )}
        >
          <PiGearDuotone className="text-2xl" />
          <span className="dock-label">Settings</span>
        </button>
      </div>
      )}
    </div>
  );
};

export default Shell;
