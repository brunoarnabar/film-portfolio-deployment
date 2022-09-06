import React, { useState, useEffect, useRef } from "react";
import useScrollDirection from "../Hooks/useScrollDirection";
import BrunoLogo from "../../Images/Logo/MyLogo";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import usePersistedState from "../Hooks/usePersistedState";
import "./navigation.scss";

function Nav() {
  const initialToggleMenuValue = false;
  const scrollDirection = useScrollDirection();

  // const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleMenu, setToggleMenu] = usePersistedState(
    "toggleMenuValue",
    initialToggleMenuValue
  );

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    getNavSize();
  };

  // const [height, setHeight] = useState(0);
  // const NavRef = useRef(null);

  const [heightTop, setHeightTop] = useState(0);
  const [heightBot, setHeightBot] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);

  const NavRefTop = useRef(null);
  const NavRefBot = useRef(null);

  const getNavSize = () => {
    const newHeightTop = NavRefTop.current.clientHeight;
    let newHeightBot = 0;

    if (NavRefBot.current.classList.contains("NavShowing")) {
      newHeightBot = NavRefBot.current.clientHeight;
    }
    setHeightTop(newHeightTop);
    setHeightBot(newHeightBot);

    setTotalHeight(newHeightTop + newHeightBot);
    // set CSS variable
    document.documentElement.style.setProperty(`--NavHeight`, `'${totalHeight}'`);
  };

  useEffect(() => {
    getNavSize();
  }, [toggleMenu]);

  useEffect(() => {
    window.addEventListener("resize", getNavSize);
  }, []);

  return (
    <div className="attempt" ref={NavRefTop}>
      <div
        className={`NavContainer fs-logline ${
          scrollDirection === "down" ? "NavHidden" : "NavShowing"
        }`}
      >
        <div className="NavLogo">
          <a href="#landing">
            {/* <BrunoLogo /> */}
            scrollDirection:{scrollDirection}&nbsp;TotalHeight:
            {totalHeight}
          </a>
        </div>
        <div className="NavMobileToggler text-neutral-400" onClick={toggleNav}>
          {toggleMenu ? (
            <IoCloseCircleOutline className="NavMobileMenu" size={30} />
          ) : (
            <GiHamburgerMenu className="NavMobileMenu" size={30} />
          )}
        </div>
        <div
          className={
            toggleMenu ? "NavLinkContainer NavShowing" : "NavLinkContainer"
          }
          ref={NavRefBot}
        >
          <div className="NavHome NavListItem">
            <a href="#landing">Home</a>
          </div>
          <div className="NavAbout NavListItem">
            <a href="#about">About</a>
          </div>
          <div className="NavService NavListItem">
            <a href="#service">Services</a>
          </div>
          <div className="NavSkill NavListItem">
            <a href="#skill">Skills</a>
          </div>
          <div className="NavSample NavListItem">
            <a href="#sample">Samples</a>
          </div>
          <div className="NavContact NavListItem">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
