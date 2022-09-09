import GoBack from "./Helpers/GoBack"
import GoTo from "./Helpers/GoTo";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import React, { useState } from "react";
import ResponsivePlayer from "./Helpers/ResponsivePlayer";
import Loader from "../../../Loader/LoaderRing";

import { TbBrandVimeo } from "react-icons/tb";

import "./filmInstance.scss";

export default function FilmInstance(props) {

  const num = String(props.filmInfo.key).padStart(2, "0");
  const [instanceLoadSuccess, setInstanceLoadSuccess] = useState(false);
  function successState() {
    setTimeout(() => {
      setInstanceLoadSuccess(true);
    }, 500);
  }

  const sideInfoAnim = {
    visible: {
      x: "0vh",
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
      x: "200vh",
      width: "100%",
      opacity: 0,
      transition: {
        duration: 1,
        when: "afterChildren",
        staggerChildren: 0.125,
      },
    },
  };
  const childAnim = {
    visible: {
      opacity: 1,
      x: "0vh",
    },
    hidden: {
      opacity: 0,
      x: "10vh",
    },
  };

  const [open, openInfo] = useCycle(false, true);
  console.log(props.filmInfo.filmInfo);

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
            <div className="FilmInstanceAsideContainer text-neutral-400">
              <h1 className="fs-title" onClick={openInfo}>
                {" "}
                ( CLOSE ){" "}
              </h1>
              <motion.div className="fs-title" variants={childAnim}>
                {props.filmInfo.date} / {props.filmInfo.workType}
              </motion.div>
              <motion.div
                className="heading text-neutral-400"
                variants={childAnim}
              >
                {props.filmInfo.title}
              </motion.div>
              <motion.div className="fs-title" variants={childAnim}>
                {props.filmInfo.info}
              </motion.div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="FilmInstanceContainer bg-neutral-200">
        <div className="FilmInstanceTopNav">
          <GoBack />
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
            <a href="https://vimeo.com/brunoarnabar">
              <TbBrandVimeo color={"var(--clr-primary-900)"} />
            </a>
          </div>
          <GoTo location="About" />
          <GoTo location="Contact" />
        </div>
      </div>
    </>
  );
}
