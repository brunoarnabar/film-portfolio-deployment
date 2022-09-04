import React from "react";
import useScrollDirection from "../Hooks/useScrollDirection";
import "./nav.scss";

function Nav() {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`NavContainer fs-title ${
        scrollDirection === "down" ? "NavHidden" : "NavShowing"
      }`}
    >
      <div className="NavHome">
        <a href="#landing">Home</a>
      </div>
      <div className="NavAbout">
        <a href="#about">About</a>
      </div>
      <div className="NavService">
        <a href="#service">Services</a>
      </div>
      <div className="NavSkill">
        <a href="#skill">Skills</a>
      </div>
      <div className="NavSample">
        <a href="#sample">Samples</a>
      </div>
      <div className="NavContact">
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Nav;
