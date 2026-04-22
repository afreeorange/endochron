import Shell from "../Shell";
import { useParams } from "react-router";
import { Nav } from "./Common";

export const Weekly = () => {
  const { week } = useParams<{ week: string }>();

  return (
    <Shell>
      <div className="flex flex-col h-full">
        <Nav />
        <div className="flex-1 px-4 pb-12 overflow-y-auto">
          <h1 className="text-4xl mt-2">{week ?? "Weeks"}</h1>
        </div>
      </div>
    </Shell>
  );
};

export default Weekly;
