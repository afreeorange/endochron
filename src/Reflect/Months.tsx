import dayjs from "dayjs";
import Shell from "../Shell";
import { useParams } from "react-router";
import { Nav } from "./Common";

export const Monthly = () => {
  const { yearMonth } = useParams<{ yearMonth: string }>();
  const month = yearMonth ? dayjs(`${yearMonth}-01`) : dayjs();

  return (
    <Shell>
      <div className="flex flex-col h-full">
        <div className="z-20 bg-base-100 shrink-0">
          <Nav />
        </div>
        <div className="flex-1 px-4 pb-12 overflow-y-auto">
          <h1 className="mt-2 text-4xl">{month.format("MMMM YYYY")}</h1>
        </div>
      </div>
    </Shell>
  );
};

export default Monthly;
