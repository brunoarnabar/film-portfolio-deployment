import React from "react";
import "./landing.scss";
import Typewriter from "typewriter-effect";

export default function Landing() {
  return (
    <div className="Poster">
      <div className="poster-accent">SITE DEVELOPED BY A</div>
      <Typewriter
        options={{
          strings: ["SCREENWRITER", "DEVELOPER", "FILMMAKER"],
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
      <div className="ff-accent fw-bold fs-body text-neutral-200 shadow-halation Logline">
        Turning&nbsp;Ideas Into&nbsp;Experiences
      </div>
      <div className="poster-accent bottom">
        Copywrite ⓒ MMXV LinkedIn Instagram Vimeo,
        <br /> All Rights Reserved.
      </div>
    </div>
  );
}
