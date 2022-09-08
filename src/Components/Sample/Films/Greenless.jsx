import GoBack from "../Helpers/GoBack";
import GoTo from "../Helpers/GoTo";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import React from "react";
import ResponsivePlayer from "../Helpers/ResponsivePlayer";

import { TbBrandVimeo } from "react-icons/tb";

import imggy from "../../../Video/Thumbnail/theBox.png";
import giffy from "../../../Video/Gifs/theBox.gif";

import "./filmInstance.scss";

export default function Greenless(props) {
  const Greenless = {
    key: 1,
    title: "Greenless",
    date: "05-22-2000",
    gif: giffy,
    img: imggy,
    workType: "Personal",
  };
  const num = String(Greenless.key).padStart(2, "0");
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
                date / type
              </motion.div>
              <motion.div
                className="heading text-neutral-400"
                variants={childAnim}
              >
                Title
              </motion.div>
              <motion.div className="fs-title" variants={childAnim}>
                info
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
              {num} / {Greenless.workType}
            </div>
            <div className="title noPad">{Greenless.title}</div>
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
        <ResponsivePlayer url={"https://vimeo.com/600214381"} />
        <div className="FilmInstanceBotNav">
          <div className="fs-sub-heading FilmInstanceVimeo">
            <a href="https://vimeo.com/brunoarnabar">
              <TbBrandVimeo color={"var(--clr-primary-900)"} />
            </a>
          </div>
          <GoTo location="About" />
          {/* <div className="title">About</div> */}
          <GoTo location="Contact" />
          {/* <div className="title">Contact</div> */}
        </div>
      </div>
    </>
  );
}
