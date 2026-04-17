import "./Fonts.css";
import "./App.css";

import { TbTriangleInvertedFilled } from "react-icons/tb";
import { TbCircleDotted } from "react-icons/tb";
import { SiGreptimedb } from "react-icons/si";

function App() {
  return (
    <>
      <div className="grid mx-auto max-w-2xl h-full">
        <div className="flex flex-col p-8 pb-6">
          <div className="mx-auto">
            <SiGreptimedb className="mb-6 text-pink-600 text-8xl rotate-180 scale-x-[-1]" />
          </div>
          <h1 className="font-black text-pink-600 text-6xl tracking-tight">
            EndoChron
          </h1>
          <h2 className="font-extralight text-pink-600 text-4xl">Welcome!</h2>

          <div className="content-center gap-4 grid grow">
            <p className="mb-2">How would you like to sign in?</p>
            <button className="btn-block justify-start btn">
              <TbTriangleInvertedFilled className="mr-2" /> Use my Phendo
              Account
            </button>
            <button className="btn-block justify-start btn">
              <TbCircleDotted className="mr-2" /> Use Anonymously
            </button>
          </div>

          <footer>
            <ul className="flex justify-center gap-4 font-light text-xs uppercase tracking-wide">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Colophon</a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
