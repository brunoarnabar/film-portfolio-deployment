import { AnimatePresence, motion, useCycle } from "framer-motion";
import React, { useState } from "react";
import ResponsivePlayer from "./Helpers/ResponsivePlayer";
import Loader from "../../../Loader/LoaderRing";
import { FiXCircle } from "react-icons/fi";
import { useMediaQuery } from "../../../Hooks/useMediaQuery";
import { TbBrandYoutube } from "react-icons/tb";
import back from "../../../../Images/Icons/back.png";

import { HashLink } from "react-router-hash-link";

import "./filmInstance.scss";

export default function FilmInstance(props) {
  const isMobile = useMediaQuery("(max-width: 37.5em)");

  const num = String(props.filmInfo.key).padStart(2, "0");
  const [instanceLoadSuccess, setInstanceLoadSuccess] = useState(false);
  function successState() {
    setTimeout(() => {
      setInstanceLoadSuccess(true);
    }, 500);
  }

  let sideInfoAnim;
  let childAnim;

  if (!isMobile) {
    sideInfoAnim = {
      visible: {
        x: "70vw",
        height: "100vh",
        width: "30%",
        opacity: 1,
        transition: {
          duration: 1,
          mass: 0.005,
          type: "tween",
          when: "beforeChildren",
          staggerChildren: 0.125,
        },
      },
      hidden: {
        x: "200vw",
        height: "100vh",
        width: "100%",
        opacity: 0,
        transition: {
          duration: 1,
          when: "afterChildren",
          staggerChildren: 0.125,
        },
      },
    };
    childAnim = {
      visible: {
        opacity: 1,
        x: "0vw",
      },
      hidden: {
        opacity: 0,
        x: "10vw",
      },
    };
  } else if (isMobile) {
    sideInfoAnim = {
      visible: {
        y: "30vh",
        height: "30%",
        width: "100%",
        opacity: 1,
        transition: {
          duration: 1,
          mass: 0.005,
          type: "tween",
          when: "beforeChildren",
          staggerChildren: 0.125,
        },
      },
      hidden: {
        y: "200vh",
        height: "100%",
        width: "100%",
        opacity: 0,
        transition: {
          duration: 1,
          when: "afterChildren",
          staggerChildren: 0.125,
        },
      },
    };
    childAnim = {
      visible: {
        opacity: 1,
        x: "0vh",
      },
      hidden: {
        opacity: 0,
        x: "10vh",
      },
    };
  }

  const [open, openInfo] = useCycle(false, true);

  const handleMouseOver = () => {
    openInfo(true);
  };

  const handleMouseOut = () => {
    openInfo(false);
  };
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.aside
            variants={sideInfoAnim}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div
              className={`FilmInstanceAsideContainer text-neutral-400 fs-logline ${
                isMobile ? "" : "isFullScreen"
              }`}
            >
              <div className="FilmInstanceAsideClose">
                <h1 className="fs-title" onClick={openInfo}>
                  <FiXCircle />
                </h1>
              </div>
              <div className="FilmInstanceAsideContent fs-button">
                <motion.div className="fs-body" variants={childAnim}>
                  {props.filmInfo.date} / {props.filmInfo.workType}
                </motion.div>
                <motion.div
                  className="heading text-neutral-400 FilmInstanceAsideTitle"
                  variants={childAnim}
                >
                  {props.filmInfo.title}
                </motion.div>
                <motion.div
                  className="fs-body FilmInstanceAsideBody"
                  variants={childAnim}
                >
                  {props.filmInfo.info}
                </motion.div>
              </div>
              <div className="FilmInstanceAsideBottomSpacer" />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="FilmInstanceContainer bg-neutral-200">
        <div className="FilmInstanceTopNav">
          <HashLink to="/#sample">
            <img src={back} alt="backButton" width="35rem" />
          </HashLink>
        </div>
        <div className="FilmInstanceOpenAside" onClick={openInfo}>
          <div className="FilmInstanceId">
            <div className="title noPad">
              {num} / {props.filmInfo.workType}
            </div>
            <div className="title noPad">{props.filmInfo.title}</div>
          </div>
          <div className="FilmInstanceInfo">
            <div
              className="fs-sub-heading ff-body fw-bold text-primary-900 pointer FilmInstanceInfoButton"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              information
            </div>
          </div>
        </div>

        {instanceLoadSuccess === false ? <Loader /> : null}
        <div className="FilmInstancePlayerContainer">
          <ResponsivePlayer
            url={props.filmInfo.vidUrl}
            skinny={props.filmInfo.skinny}
            successState={successState}
          />
        </div>

        <div className="FilmInstanceBotNav">
          <div className="fs-sub-heading FilmInstanceVimeo">
            <a href="https://www.youtube.com/@brunoarnabar7450">
              <TbBrandYoutube color={"var(--clr-primary-900)"} />
            </a>
          </div>
          <HashLink to="/#about">
            <div className="title text-primary-900 pointer">About</div>
          </HashLink>
          <HashLink to="/#contact">
            <div className="title text-primary-900 pointer">Contact</div>
          </HashLink>
        </div>
      </div>
    </>
  );
}
