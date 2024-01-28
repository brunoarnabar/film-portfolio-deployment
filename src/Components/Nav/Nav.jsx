import React, { useState, useEffect, useRef, useCallback } from "react";
import useScrollDirection from "../Hooks/useScrollDirection";
import BrunoLogo from "../../Images/Logo/MyLogo";
import { FiMenu } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import usePersistedState from "../Hooks/usePersistedState";
import "./nav.scss";
import ReactDOM from "react-dom";

function Nav() {
  const initialToggleMenuValue = false;
  let scrollDirection = useScrollDirection();

  const [toggleMenu, setToggleMenu] = usePersistedState(
    "toggleMenuValue",
    initialToggleMenuValue
  );

  const [totalHeight, setTotalHeight] = useState(0);

  const NavRefTop = useRef(null);
  const NavRefBot = useRef(null);

  const getNavSize = useCallback(() => {
    setTimeout(() => {
      let newHeightTop = 0;
      let newHeightBot = 0;

      if (NavRefTop.current) {
        newHeightTop = NavRefTop.current.clientHeight;
        if (NavRefBot.current.classList.contains("NavShowing")) {
          newHeightBot = NavRefBot.current.clientHeight;
        }
      }

      setTotalHeight((newHeightTop + newHeightBot) * 0.1 + 0.4);
      // set CSS variable
      document.documentElement.style.setProperty(
        `--NavDynamicHeight`,
        "-" + totalHeight + "rem"
      );
    }, 300);
  }, [totalHeight]);

  const toggleNav = useCallback(() => {
    setToggleMenu(!toggleMenu);
    getNavSize();
  }, [toggleMenu, setToggleMenu, getNavSize]);

  useEffect(() => {
    getNavSize();
  }, [getNavSize]);

  useEffect(() => {
    window.addEventListener("resize", getNavSize);
  }, [getNavSize]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const domNode = ReactDOM.findDOMNode(NavRefBot.current);

      if (!domNode || !domNode.contains(event.target)) {
        if (toggleMenu) {
          toggleNav();
        }
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [toggleMenu, toggleNav]);

  return (
    <div
      className={`NavContainer text-neutral-400 fs-logline ${
        scrollDirection === "down" ? "NavDown" : "NavUp"
      }`}
      ref={NavRefTop}
    >
      <div className="NavLogo">
        <a href="#top" onClick={toggleMenu ? toggleNav : null}>
          <BrunoLogo />
        </a>
      </div>
      <div className="NavMobileToggler text-neutral-400" onClick={toggleNav}>
        {toggleMenu ? (
          <IoCloseCircleOutline className="NavMobileMenu" size={30} />
        ) : (
          <FiMenu className="NavMobileMenu" size={30} />
        )}
      </div>

      <div
        className={
          toggleMenu ? "NavLinkContainer NavShowing" : "NavLinkContainer"
        }
        ref={NavRefBot}
      >
        <div className="NavHome NavListItem">
          <a href="#top" onClick={toggleNav}>
            Home
          </a>
        </div>
        <div className="NavAbout NavListItem">
          <a href="#about" onClick={toggleNav}>
            About
          </a>
        </div>
        <div className="NavService NavListItem">
          <a href="#goals" onClick={toggleNav}>
            Goals
          </a>
        </div>
        {/* <div className="NavService NavListItem">
          <a href="#service" onClick={toggleNav}>
            Services
          </a>
        </div> */}
        {/* <div className="NavSkill NavListItem">
          <a href="#skill" onClick={toggleNav}>
            Skills
          </a>
        </div> */}
        <div className="NavSample NavListItem">
          <a href="#sample" onClick={toggleNav}>
            Samples
          </a>
        </div>
        <div className="NavContact NavListItem">
          <a href="#contact" onClick={toggleNav}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
export default Nav;
