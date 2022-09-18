import "./about.scss";

import React, { useRef, useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";

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

  const [aboutMinimized, setAboutMinimized] = useState(true);
  const toggleAbout = () => {
    setAboutMinimized(!aboutMinimized);
  };

  const myRef = useRef();
  const [aboutVisible, setAboutVisible] = useState();

  useEffect(() => {
    const options = {
      threshold: .5,
    };
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setAboutVisible(entry.isIntersecting);
    }, options);
    observer.observe(myRef.current);
  }, []);

  const iconSize = 25;
  const iconColor = "var(--clr-neutral-400)";

  const animX = -50;
  const animDelay = 0.1;

  const container = {
    hidden: {
      x: animX,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delay: animDelay,
        staggerChildren: animDelay,
      },
    },
  };

  const item = {
    hidden: { x: animX, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delay: animDelay,
      },
    },
  };

  if (aboutMinimized) {
    return (
      <div className="AboutContainer" id="about" ref={AboutRef}>
        <div className="sectionHeading">
          <div className="heading AboutMin">ABOUT</div>
        </div>

        <div className="AboutContent AboutMin" ref={myRef}>
          <div className="AboutDesc AboutMin">
            {/* <AnimatePresence> */}
            {/* {aboutVisible && ( */}
            <motion.div
              className="title"
              variants={container}
              initial="hidden"
              animate={aboutVisible ? "show" : "hidden"}
            >
              Hey!
              <motion.div className="textBody" variants={item}>
                I’m Bruno&nbsp;Arnabar, a filmmaker and computer programmer with
                degrees from the University of Pittsburgh. I use these tools to
                create experiences based on ideas.
              </motion.div>
              <motion.div className="textBody" variants={item}>
                I’m looking for employment as a programmer or developer for a
                company that values art and storytelling.
              </motion.div>
            </motion.div>
            {/* )} */}
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

        <div className="AboutContent" ref={myRef}>
          <div className="AboutDesc">
            <motion.div
              className="title"
              variants={container}
              initial="hidden"
              animate={aboutVisible ? "show" : "hidden"}
            >
              Hey!
              <motion.div className="textBody" variants={item}>
                I’m Bruno&nbsp;Arnabar, a filmmaker and computer programmer with
                degrees from the University of Pittsburgh. I use these tools to
                transform ideas into experiences.
              </motion.div>
              <motion.div className="textBody" variants={item}>
                I’m looking for employment as a programmer or developer for a
                company that values art and storytelling.
              </motion.div>
            </motion.div>
            <motion.div
              className="title"
              variants={container}
              initial="hidden"
              animate={aboutVisible ? "show" : "hidden"}
            >
              I’m enthusiastic about…
              <motion.div className="textBody" variants={item}>
                exploring and redesigning technologies to create amazing
                experiences for people. Cinema is one of my biggest inspirations
                because it’s constantly evolving and pushing boundaries, and it
                too began from scientific innovation.
              </motion.div>
              <motion.div className="textBody" variants={item}>
                I want to use my skills to create art that will entertain,
                engage, and inspire people to consider the world in a different
                light.
              </motion.div>
            </motion.div>
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
