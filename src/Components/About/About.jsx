import "./about.scss";
import React from "react";

//goToContext
import { useRef, useEffect } from "react";
import useOnScreen from "../Hooks/useOnScreen";
import { useGoToContext } from "../../Contexts/GoToContext";

export default function About() {
  //goToContext
  const setAtAbout = useGoToContext();
  const AboutRef = useRef();
  const isVisible = useOnScreen(AboutRef);

  useEffect(() => {
    if (isVisible) {
      console.log("About is Visible... I get that");
      setAtAbout(true);
    }
  }, [isVisible, setAtAbout]);

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
            exploring and redesigning technologies to create amazing experiences
            for people. Cinema is one of my biggest inspirations because it’s
            constantly evolving and pushing boundaries, and it too began from
            scientific innovation.
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
    </div>
  );
}
