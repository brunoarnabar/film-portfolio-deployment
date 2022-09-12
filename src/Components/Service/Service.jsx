import "./service.scss";
import React from "react";
import ServiceEntry from "./ServiceEntry";
import { IoDesktopOutline } from "react-icons/io5";
import { GiFilmStrip } from "react-icons/gi";
import { FaPeopleCarry } from "react-icons/fa";
// import {FaHandsHelping, FaPeopleCarry} from "react-icons/fa";

const entryOne = {
  sub: "Programming",
  txt1: "I’m a programmer with experience in both the front and back end of production. I’m driven to work on technologies surrounding film and art, and I’m excited to work with you on your next project.",
  // txt2: "I understand the importance of a well-rounded and complete product, and I’ll be enthusiastic to collaborate with you to help achieve your vision. I’ll work with you to create a product that is not only functional, but also beautiful, user-friendly, and efficient.",
  // txt3: "I’ll work with you to understand your vision for the project, and I’ll use my skills and knowledge to help you bring that vision to life. I’ll also be available to answer any questions and to provide support throughout the project."
};

const entryTwo = {
  sub: "Filmmaking",
  txt1: "I can write and create a compelling narrative to be produced independently or commercially. I can direct actors and bring a vision from a page to the screen.",
  // txt2: "I understand the importance of a well-rounded and complete product, and I’ll be enthusiastic to collaborate with you to help achieve your vision. I’ll work with you to create a product that is not only functional, but also beautiful, user-friendly, and efficient.",
  // txt3: "I’ll work with you to understand your vision for the project, and I’ll use my skills and knowledge to help you bring that vision to life. I’ll also be available to answer any questions and to provide support throughout the project."
};

const entryThree = {
  sub: "Combination",
  txt1: "My education has been multi-disiplinary, so theres lots of factors that cross-over between each other. I'm detail oriented and creative, I'm glad to bring this to your team",
  // txt2: "I understand the importance of a well-rounded and complete product, and I’ll be enthusiastic to collaborate with you to help achieve your vision. I’ll work with you to create a product that is not only functional, but also beautiful, user-friendly, and efficient.",
  // txt3: "I’ll work with you to understand your vision for the project, and I’ll use my skills and knowledge to help you bring that vision to life. I’ll also be available to answer any questions and to provide support throughout the project."
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
