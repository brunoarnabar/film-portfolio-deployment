import React from "react";
import "./landing.scss";
import Typewriter from "typewriter-effect";

export default function Landing() {
  return (
    <div className="Poster">
      <div className="poster-accent">SITE DEVELOPED BY&nbsp;A</div>
      <Typewriter
        options={{
          strings: ["SCREENWRITER", "DEVELOPER", "FILMMAKER", "CREATOR"],
          autoStart: true,
          loop: true,
          delay: 110,
          deleteSpeed: "natural",
          pauseFor: 2500,
          wrapperClassName: "poster-accent typewriter",
          cursorClassName: "poster-accent typewriter",
        }}
      />
      <div className="name MyName">BRUNO ARNABAR</div>
      <div className="ff-accent fw-bold fs-logline text-neutral-200 text-shadow-halation Logline">
        Turning&nbsp;Ideas Into&nbsp;Experiences
      </div>
      <div className="poster-accent bottom">
        Copywrite ⓒ MMXV LinkedIn&nbsp;Instagram&nbsp;Vimeo,
        <br /> All Rights Reserved.
      </div>
    </div>
  );
}
