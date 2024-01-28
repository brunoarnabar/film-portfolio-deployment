import "./goals.scss";
import React from "react";
import GoalEntry from "./GoalEntry";
import { MdOutlineHistoryEdu } from "react-icons/md";
// import { IoDesktopOutline } from "react-icons/io5";
import { GiFilmStrip } from "react-icons/gi";
// import { FaPeopleCarry } from "react-icons/fa";

import { TbBuildingCommunity } from "react-icons/tb";

const entryOne = {
  sub: "Compelling Narrative",
  txt: "My creative pursuit involves crafting narratives that deeply explore identity, individuality, and morality, weaving these complex themes into resonant, multi-layered storytelling.",
};

const entryTwo = {
  sub: "Community Outreach",
  txt: "Cultivating relationships in the filmmaking community is vital to my artistic growth, valuing collaboration with creatives, mentors, and audiences for shared inspiration and development.",
};

const entryThree = {
  sub: "Cinematic Execution",
  txt: "Cinematic execution combines visual artistry, skillful direction, and technical precision, transforming a script's written words into a captivating, immersive, and visually stunning film experience.",
};

export default function Service() {
  return (
    <div className="ServiceContainer" id="goals">
      <div className="sectionHeading">
        <div className="heading">GOALS</div>
        <div className="subHeading wrap-md">What&nbsp;I&nbsp;Focus&nbsp;On</div>
      </div>
      <div className="ServiceGrid">
        <GoalEntry icon={<MdOutlineHistoryEdu size={100} />} {...entryOne} />
        <GoalEntry
          icon={
            <TbBuildingCommunity
              size={90}
              // style={{ transform: "rotate(270deg)" }}
            />
          }
          {...entryTwo}
        />
        <GoalEntry
          icon={
            <GiFilmStrip size={100} style={{ transform: "rotate(270deg)" }} />
          }
          {...entryThree}
        />
      </div>
    </div>
  );
}
