import React from "react";
import "./landing.scss";
// import Typewriter from "typewriter-effect";

export default function Landing() {
  return (
    <div className="LandingPoster" id="landing">
      {/* <div className="poster-accent">SITE DEVELOPED BY&nbsp;A</div>
      <Typewriter
        className="LandingTypewriter"
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
      <div className="name LandingMyName">BRUNO ARNABAR</div>
      <div className="ff-accent fw-bold fs-logline text-neutral-200 text-shadow-halation LandingLogline">
        Turning&nbsp;Ideas Into&nbsp;Experiences
      </div> */}
      {/* <div className="poster-accent bottom">
        Copyright ⓒ MMXV LinkedIn&nbsp;Instagram&nbsp;Vimeo,
        <br /> All Rights Reserved.
      </div> */}
      <div className="poster-accent bottom">
        <div className="LandingCopyright">Copyright ⓒ MMXV&nbsp;</div>
        <div className="LandingLinks">
          <a
            className="link-poster-accent bottom"
            href="https://www.linkedin.com/in/brunoarnabar/"
          >
            LinkedIn
          </a>
          &nbsp;
          <a
            className="link-poster-accent bottom"
            href="https://www.instagram.com/bruno.arnabar/"
          >
            Instagram
          </a>
          &nbsp;
          <a
            className="link-poster-accent bottom"
            href="https://vimeo.com/brunoarnabar"
          >
            Vimeo,&nbsp;
          </a>
        </div>
        <br />
        <div className="LandingAllRights">All Rights Reserved.</div>
      </div>
    </div>
  );
}
