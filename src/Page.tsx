import type { PropsWithChildren } from "react";
import { useNavigate } from "react-router";
import { PiArrowLeftDuotone } from "react-icons/pi";
import Shell from "./Shell";

interface PageProps extends PropsWithChildren {
  title?: string;
  showDock?: boolean;
}

export const Page = ({ children, title, showDock }: PageProps) => {
  const navigate = useNavigate();
  const body = (
    <div className="mx-auto p-5 pb-6 max-w-2xl h-full overflow-y-auto">
      {title && (
        <div className="relative flex items-center mb-8">
          <button
            className="btn btn-lg btn-circle"
            onClick={() => navigate(-1)}
          >
            <PiArrowLeftDuotone className="text-2xl" />
          </button>
          <h1 className="absolute inset-x-0 font-semibold text-4xl text-center pointer-events-none">
            {title}
          </h1>
        </div>
      )}
      {children}
    </div>
  );
  return showDock ? <Shell>{body}</Shell> : body;
};
