import React from "react";
import "./landing.scss";
import Typewriter from "typewriter-effect";
import Resume from "../../Assets/Resume/BrunoArnabarResume.pdf";  
import { FiDownload } from "react-icons/fi";

export default function Landing() {

  function romanize(num) {
    if (!+num) return false;
    var digits = String(+num).split(""),
      key = [
        "",
        "C",
        "CC",
        "CCC",
        "CD",
        "D",
        "DC",
        "DCC",
        "DCCC",
        "CM",
        "",
        "X",
        "XX",
        "XXX",
        "XL",
        "L",
        "LX",
        "LXX",
        "LXXX",
        "XC",
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
      ],
      roman = "",
      i = 3;
    while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
  }

  const currentYear = new Date().getFullYear();
  const currentRomanYear = romanize(currentYear); 



  return (
    <div className="LandingPoster" id="landing">
      <div className="poster-accent">SITE DEVELOPED BY&nbsp;A</div>
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
      <div className="LandingMyName name">BRUNO ARNABAR</div>
      <div className="LandingLogline ff-accent fw-bold fs-logline text-neutral-200 text-shadow-halation">
        Turning&nbsp;Ideas Into&nbsp;Experiences
      </div>
      <div className="LandingResumeContainer">
        <a
          href={Resume}
          download
          className="LandingResume link-color link-primary-900 fs-button text-shadow-halation-dark"
        >
          <FiDownload className="svg-shadow-halation-dark" />
          &nbsp;my&nbsp;resume
        </a>
        <div className="LandingResumeInfo text-shadow-halation">(PDF 69kb)</div>
      </div>

      <div className="poster-accent bottom">
        <div className="LandingCopyright">
          Creating&nbsp;🎬&nbsp;{currentRomanYear}&emsp;
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
        </div>
        <div className="LandingAllRights">All Rights Reserved.</div>
      </div>
    </div>
  );
}
