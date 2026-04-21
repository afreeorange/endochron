import dayjs from "dayjs";
import Shell from "../Shell";
import days from "../data/days";
import {
  RiEmotionHappyFill,
  RiEmotionNormalLine,
  RiEmotionUnhappyLine,
} from "react-icons/ri";
import clsx from "clsx";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Nav } from "./Common";

// ── Component ────────────────────────────────────────────────────────────────
export const Yearly = () => {
  return (
    <Shell>
      <div className="flex flex-col h-full">
        <Nav />
      </div>
    </Shell>
  );
};

export default Yearly;
