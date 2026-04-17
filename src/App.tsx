import "./Fonts.css";
import "./App.css";

import { PiTriangleDuotone } from "react-icons/pi";
import { PiUserGearDuotone } from "react-icons/pi";
import { SiGreptimedb } from "react-icons/si";
import { PiHandWavingDuotone } from "react-icons/pi";
import { Page } from "./Page";
import { NavLink } from "react-router";

const App = () => (
  <Page>
    <div className="flex flex-col h-full">
      <div className="flex justify-center md:justify-normal">
        <SiGreptimedb className="mb-6 text-pink-600 text-8xl rotate-180 scale-x-[-1]" />
      </div>
      <h1 className="font-black text-pink-600 text-6xl tracking-tight">
        EndoChron
      </h1>

      <div className="content-center gap-4 grid grow">
        <h2 className="font-extralight text-pink-600 text-2xl">
          Welcome! <PiHandWavingDuotone className="inline scale-x-[-1]" />{" "}
          <br />
          How would you like to start?
        </h2>

        <NavLink to={"/speak"}>
          <button className="btn-block justify-start btn-lg btn">
            <PiTriangleDuotone className="mr-2 rotate-180" /> Use my Phendo
            Account
          </button>
        </NavLink>
        <NavLink to={"/profile"}>
          <button className="btn-block justify-start btn btn-lg">
            <PiUserGearDuotone className="mr-2" /> Create a profile
          </button>
        </NavLink>
      </div>

      <footer>
        <ul className="flex justify-center gap-4 text-pink-300 text-sm tracking-wide">
          <li>
            <NavLink to="/Terms">Terms</NavLink>
          </li>
          <li>
            <NavLink to="/Privacy">Privacy</NavLink>
          </li>
          <li>
            <NavLink to="/Support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/Colophon">Colophon</NavLink>
          </li>
        </ul>
      </footer>
    </div>
  </Page>
);

export default App;
