import type { PropsWithChildren } from "react";
import { SiGreptimedb } from "react-icons/si";
import Shell from "./Shell";
import { Page } from "./Page";

export const Record = ({ children }: PropsWithChildren) => (
  <Shell>
    <Page>
      <h1 className="font-light text-pink-600 text-5xl">
        <span className="">Hi Mischa.</span> <br />
        <br /> What&#8217;s on your mind?
      </h1>
    </Page>
    <div className="dock">
      <button>
        <span className="dock-label">Home</span>
      </button>

      <button className="dock-active">
        <svg
          className="size-[1.2em]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
            <polyline
              points="3 14 9 14 9 17 15 17 15 14 21 14"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              strokeWidth="2"
            ></polyline>
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              ry="2"
              fill="none"
              stroke="currentColor"
              strokeLinecap="square"
              stroke-miterlimit="10"
              strokeWidth="2"
            ></rect>
          </g>
        </svg>
      </button>

      <button>
        <svg
          className="size-[1.2em]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
            <circle
              cx="12"
              cy="12"
              r="3"
              fill="none"
              stroke="currentColor"
              strokeLinecap="square"
              stroke-miterlimit="10"
              strokeWidth="2"
            ></circle>
            <path
              d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="square"
              stroke-miterlimit="10"
              strokeWidth="2"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  </Shell>
);

export default Record;
