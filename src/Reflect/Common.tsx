import clsx from "clsx";
import {
  PiSmileyDuotone,
  PiSmileyMehDuotone,
  PiSmileySadDuotone,
} from "react-icons/pi";
import { useNavigate } from "react-router";

export const emotionMap = (selected: boolean | null) => ({
  GOOD: (
    <PiSmileyDuotone
      className={
        selected === null
          ? undefined
          : clsx(selected ? "text-white opacity-100" : "text-green-600")
      }
    />
  ),
  MANAGEABLE: (
    <PiSmileyMehDuotone
      className={
        selected === null
          ? undefined
          : clsx(selected ? "text-white opacity-100" : "text-red-400")
      }
    />
  ),
  BAD: (
    <PiSmileySadDuotone
      className={
        selected === null
          ? undefined
          : clsx(selected ? "text-white opacity-100" : "text-yellow-500")
      }
    />
  ),
});

export const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-5 px-4 py-2 w-full join">
      <button
        className="btn-primary btn-xs join-item btn"
        onClick={() => navigate("/reflect/days")}
      >
        Days
      </button>
      <button
        className="btn-xs join-item btn"
        onClick={() => navigate("/reflect/weeks")}
      >
        Weeks
      </button>
      <button
        className="btn-xs join-item btn"
        onClick={() => navigate("/reflect/months")}
      >
        Months
      </button>
      <button
        className="btn-xs join-item btn"
        onClick={() => navigate("/reflect/years")}
      >
        Years
      </button>
      <button
        className="btn-xs join-item btn"
        onClick={() => navigate("/reflect/any")}
      >
        Any
      </button>
    </div>
  );
};

// export const InnerShell = ({ children }: ShellProps) => {
//         <div className="flex flex-col h-full">

//         <div className="z-20 bg-base-100 px-4 pt-4 pb-2 shrink-0">
//           <Nav />

// }
