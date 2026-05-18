import clsx from "clsx";
import dayjs from "dayjs";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { useNavigate, useLocation, useSearchParams } from "react-router";

export const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const btn = (path: string) =>
    clsx("join-item btn", pathname.startsWith(path) && "btn-primary");

  // Derive context from the URL. `yearMonth` is tracked separately from
  // `date` because the week-start date on /weeks/:ym?week=... can live in the
  // previous month — we want the displayed month for month/week targets.
  const context = (() => {
    const m = pathname.match(
      /^\/reflect\/(days|weeks|months|years)(?:\/([^/]+))?/,
    );
    if (!m) return null;
    const [, section, param] = m;
    if (!param) return null;
    if (section === "days") {
      const date = dayjs(param);
      return {
        date,
        yearMonth: date.format("YYYY-MM"),
        year: date.format("YYYY"),
      };
    }
    if (section === "weeks") {
      const week = searchParams.get("week");
      const date = week ? dayjs(week) : dayjs(`${param}-01`);
      return { date, yearMonth: param, year: param.slice(0, 4) };
    }
    if (section === "months") {
      return {
        date: dayjs(`${param}-01`),
        yearMonth: param,
        year: param.slice(0, 4),
      };
    }
    if (section === "years") {
      return {
        date: dayjs(`${param}-01-01`),
        yearMonth: `${param}-01`,
        year: param,
      };
    }
    return null;
  })();

  const go = (section: "days" | "weeks" | "months" | "years" | "any") => {
    if (!context || section === "any") {
      navigate(`/reflect/${section}`);
      return;
    }
    if (section === "days") {
      navigate(`/reflect/days/${context.date.format("YYYY-MM-DD")}`);
    } else if (section === "weeks") {
      const wk = context.date.startOf("week").format("YYYY-MM-DD");
      navigate(`/reflect/weeks/${context.yearMonth}?week=${wk}`);
    } else if (section === "months") {
      navigate(`/reflect/months/${context.yearMonth}`);
    } else if (section === "years") {
      navigate(`/reflect/years/${context.year}`);
    }
  };

  return (
    <div className="grid grid-cols-5 px-4 py-2 w-full join">
      <button className={btn("/reflect/days")} onClick={() => go("days")}>
        Days
      </button>
      <button className={btn("/reflect/weeks")} onClick={() => go("weeks")}>
        Weeks
      </button>
      <button className={btn("/reflect/months")} onClick={() => go("months")}>
        Months
      </button>
      <button className={btn("/reflect/years")} onClick={() => go("years")}>
        Years
      </button>
      <button className={btn("/reflect/search")} onClick={() => go("any")}>
        <PiMagnifyingGlassDuotone className="text-xl" />
      </button>
    </div>
  );
};
