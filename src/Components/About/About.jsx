import "./about.scss";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { BsArrowsExpand, BsArrowsCollapse } from "react-icons/bs";

export default function About() {
  const [aboutMinimized, setAboutMinimized] = useState(true);
  const toggleAbout = () => {
    setAboutMinimized(!aboutMinimized);
  };

  const myRef = useRef();
  const [aboutVisible, setAboutVisible] = useState();

  let options = {
    threshold: 0.15,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setAboutVisible(entry.isIntersecting);
    }, options);
    observer.observe(myRef.current);
  }, []);

  const iconSize = 25;
  const iconColor = "var(--clr-neutral-400)";

  const xFromLeft = -50; 
  const xFromRight = 150;
  const animDelay = 0.2;
  const stagDelay = 0.15;

  const framerContainerLeft = {
    hidden: {
      x: xFromLeft,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delay: animDelay,
        staggerChildren: stagDelay,
      },
    },
  };

  const framerContainerRight = {
    hidden: {
      x: xFromRight,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delay: animDelay,
        staggerChildren: stagDelay,
      },
    },
  };

  const framerItemLeft = {
    hidden: {
      x: xFromLeft,
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
      },
    },
  };

  const framerItemRight = {
    hidden: {
      x: xFromRight,
      opacity: 0,
      when: "afterChildren",
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
      },
    },
  };

  if (aboutMinimized) {
    return (
      <div className="AboutContainer" id="about">
        <div className="sectionHeading">
          <div className="heading AboutMin">ABOUT</div>
        </div>

        <div className="AboutContent AboutMin" ref={myRef}>
          <motion.div
            className="AboutDesc AboutMin"
            variants={framerContainerLeft}
            key={Math.random()}
            initial="hidden"
            animate={aboutVisible ? "show" : "hidden"}
          >
            <motion.div className="title" variants={framerItemLeft}>
              Hey!
            </motion.div>
            <motion.div className="textBody" variants={framerItemLeft}>
              I’m Bruno&nbsp;Arnabar, a filmmaker and computer programmer with
              degrees from the University of Pittsburgh. I use these tools to
              create experiences based on ideas.
            </motion.div>
            <motion.div className="textBody" variants={framerItemLeft}>
              I’m looking for employment as a programmer or developer for a
              company that values art and storytelling.
            </motion.div>
          </motion.div>
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
      <div className="AboutContainer" id="about">
        <div className="sectionHeading">
          <div className="heading">ABOUT</div>
          <div className="subHeading wrap-sm">Let Me Introduce&nbsp;Myself</div>
        </div>

        <div className="AboutContent" ref={myRef}>
          <motion.div
            className="AboutDesc"
            key={Math.random()}
            variants={framerContainerLeft}
            initial="hidden"
            animate={aboutVisible ? "show" : "hidden"}
          >
            <motion.div className="title" variants={framerItemLeft}>
              Hey!
            </motion.div>
            <motion.div className="textBody" variants={framerItemLeft}>
              I’m Bruno&nbsp;Arnabar, a filmmaker and computer programmer with
              degrees from the University of Pittsburgh. I use these tools to
              transform ideas into experiences.
            </motion.div>
            <motion.div className="textBody" variants={framerItemLeft}>
              I’m looking for employment as a programmer or developer for a
              company that values art and storytelling.
            </motion.div>
            <motion.div className="title" variants={framerItemLeft}>
              I’m enthusiastic about…
            </motion.div>
            <motion.div className="textBody" variants={framerItemLeft}>
              exploring and redesigning technologies to create amazing
              experiences for people. Cinema is one of my biggest inspirations
              because it’s constantly evolving and pushing boundaries, and it
              too began from scientific innovation.
            </motion.div>
            <motion.div className="textBody" variants={framerItemLeft}>
              I want to use my skills to create art that will entertain, engage,
              and inspire people to consider the world in a different light.
            </motion.div>
          </motion.div>

          <motion.div
            className="AboutEnjoy"
            key={Math.random()}
            variants={framerContainerRight}
            initial="hidden"
            animate={aboutVisible ? "show" : "hidden"}
          >
            <motion.div className="title" variants={framerItemRight}>
              I&nbsp;enjoy…
            </motion.div>
            <motion.div
              className="AboutImgBox AboutCinema"
              variants={framerItemRight}
            >
              <div className="label">Cinema</div>
            </motion.div>
            <motion.div
              className="AboutImgBox AboutPhilosophy"
              variants={framerItemRight}
            >
              <div className="label">Philosophy</div>
            </motion.div>
            <motion.div
              className="AboutImgBox AboutTravel"
              variants={framerItemRight}
            >
              <div className="label">Traveling</div>
            </motion.div>
          </motion.div>
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
