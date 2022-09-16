import "./service.scss";
import React from "react";
import ServiceEntry from "./ServiceEntry";
import { IoDesktopOutline } from "react-icons/io5";
import { GiFilmStrip } from "react-icons/gi";
import { FaPeopleCarry } from "react-icons/fa";

const entryOne = {
  sub: "Programming",
  txt: "I’m a programmer with experience in both the front and back end of production. I’m driven to work on technologies surrounding film and art, and I’m excited to work with you on your next project.",
};

const entryTwo = {
  sub: "Filmmaking",
  txt: "I can write and create a compelling narrative to be produced independently or commercially. I can direct actors and bring a vision from a page to the screen.",
};

const entryThree = {
  sub: "Combination",
  txt: "My education has been multi-disiplinary, so there's lots of factors that cross-over between each field. I'm detail-oriented and have a knack for creativity. I'd love to bring those skills to your team.",
};

export default function Service() {
  return (
    <div className="ServiceContainer" id="service">
      <div className="sectionHeading">
        <div className="heading">SERVICES</div>
        <div className="subHeading wrap-md">
          What&nbsp;Can&nbsp;I Do&nbsp;For&nbsp;You?
        </div>
      </div>
      <div className="ServiceGrid">
        <ServiceEntry icon={<IoDesktopOutline size={100} />} {...entryOne} />
        <ServiceEntry
          icon={
            <GiFilmStrip size={100} style={{ transform: "rotate(270deg)" }} />
          }
          {...entryTwo}
        />
        <ServiceEntry icon={<FaPeopleCarry size={100} />} {...entryThree} />
      </div>
    </div>
  );
}
