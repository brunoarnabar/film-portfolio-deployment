import "./about.scss";

import React, { useRef, useEffect, useCallback, useState } from "react";
// import { AnimatePresence, motion, useCycle } from "framer-motion";

//goToContext
import useOnScreen from "../Hooks/useOnScreen";
import { useGoToAboutContext } from "../../Contexts/GoToAboutContext";
import { useAboutClickerContext } from "../../Contexts/AboutClickerContext";

import { BsArrowsExpand, BsArrowsCollapse } from "react-icons/bs";

export default function About() {
  //goToContext
  const setAtAbout = useGoToAboutContext();
  const { aboutClicked } = useAboutClickerContext();

  const AboutRef = useRef();
  const isVisible = useOnScreen(AboutRef);

  const checkIfVisible = useCallback(() => {
    if (isVisible) {
      setAtAbout(true);
    }
  }, [isVisible, setAtAbout]);

  useEffect(() => {
    if (aboutClicked) {
      checkIfVisible();
    }
  }, [checkIfVisible, aboutClicked]);

  // ------------

  // const sideInfoAnim = {
  //   visible: {
  //     x: "70vw",
  //     height: "100vh",
  //     width: "30%",
  //     opacity: 1,
  //     transition: {
  //       duration: 1,
  //       mass: 0.005,
  //       type: "tween",
  //       when: "beforeChildren",
  //       staggerChildren: 0.125,
  //     },
  //   },
  //   hidden: {
  //     x: "200vw",
  //     height: "100vh",
  //     width: "100%",
  //     opacity: 0,
  //     transition: {
  //       duration: 1,
  //       when: "afterChildren",
  //       staggerChildren: 0.125,
  //     },
  //   },
  // };
  // const childAnim = {
  //   visible: {
  //     opacity: 1,
  //     x: "0vw",
  //   },
  //   hidden: {
  //     opacity: 0,
  //     x: "10vw",
  //   },
  // };
  // ------------

  const [aboutMinimized, setAboutMinimized] = useState(true);
  const toggleAbout = () => {
    setAboutMinimized(!aboutMinimized);
  };

  const iconSize = 25;
  const iconColor = "var(--clr-neutral-400)";

  if (aboutMinimized) {
    return (
      <div className="AboutContainer" id="about" ref={AboutRef}>
        <div className="sectionHeading">
          <div className="heading AboutMin">ABOUT</div>
        </div>

        <div className="AboutContent AboutMin">
          <div className="AboutDesc AboutMin">
            {/* <AnimatePresence> */}
                <div className="title">
                  Hey!{" "}
                </div>
                <div className="textBody" 
                // variants={childAnim}
                >
                  I’m Bruno&nbsp;Arnabar, a filmmaker and computer programmer
                  with degrees from the University of Pittsburgh. I use these
                  tools to create experiences based on ideas.
                </div>
                <div className="textBody" 
                // variants={childAnim}
                >
                  I’m looking for employment as a programmer or developer for a
                  company that values art and storytelling.
                </div>
            {/* </AnimatePresence> */}
          </div>
        </div>

        <a href="#about">
          <div className="AboutExpand fs-heading" onClick={toggleAbout}>
            <BsArrowsExpand size={iconSize} color={iconColor} />
          </div>
        </a>
      </div>
    );
  } else {
    return (
      <div className="AboutContainer" id="about" ref={AboutRef}>
        <div className="sectionHeading">
          <div className="heading">ABOUT</div>
          <div className="subHeading wrap-sm">Let Me Introduce&nbsp;Myself</div>
        </div>

        <div className="AboutContent">
          <div className="AboutDesc">
            <div className="title"> Hey! </div>
            <div className="textBody">
              I’m Bruno&nbsp;Arnabar, a filmmaker and computer programmer with
              degrees from the University of Pittsburgh. I use these tools to
              transform ideas into experiences.
            </div>
            <div className="textBody">
              I’m looking for employment as a programmer or developer for a
              company that values art and storytelling.
            </div>
            <div className="title"> I’m enthusiastic about… </div>
            <div className="textBody">
              exploring and redesigning technologies to create amazing
              experiences for people. Cinema is one of my biggest inspirations
              because it’s constantly evolving and pushing boundaries, and it
              too began from scientific innovation.
            </div>
            <div className="textBody">
              I want to use my skills to create art that will entertain, engage,
              and inspire people to consider the world in a different light.
            </div>
          </div>

          <div className="AboutEnjoy">
            <div className="title">I enjoy...</div>
            <div className="AboutImgBox AboutCinema">
              <div className="label">Cinema</div>
            </div>
            <div className="AboutImgBox AboutPhilosophy">
              <div className="label">Philosophy</div>
            </div>
            <div className="AboutImgBox AboutTravel">
              <div className="label">Traveling</div>
            </div>
          </div>
        </div>

        <a href="#about">
          <div className="AboutExpand fs-heading" onClick={toggleAbout}>
            <BsArrowsCollapse size={iconSize} color={iconColor} />
          </div>
        </a>
      </div>
    );
  }
}
