import "./skill.scss";
import Roulette from "./Roulette/Roulette";
import Card from "./Card/Card";
import MobileRoulette from "./MobileRoulette/MobileRoulette";
// import SwitchSelector from "react-switch-selector";
import React, { useState } from "react";
import useMediaQuery from "../Hooks/useMediaQuery";

const infoCompSci = [
  {
    steps: "1. Understand the task",
    ex1: "Brainstorm a solution towards objective",
    ex2: "Draw diagrams to visualize concept",
    ex3: "Create pseudo-code, articulating steps needed",
    id: 1,
  },
  {
    steps: "2. Break solution into steps",
    ex1: "Implement one part at a time",
    ex2: "Refactor the code as needed",
    ex3: "Write documentation about the code",
    id: 2,
  },
  {
    steps: "3. Look at the big picture",
    ex1: "Observing how code aids objective",
    ex2: "Thinking of the approach taken",
    ex3: "Considering how to improve code",
    id: 3,
  },
  {
    steps: "4. Seek feedback often",
    ex1: "Via unit tests and debugging",
    ex2: "By participating in code reviews",
    ex3: "From asking coworkers and mentors",
    id: 4,
  },
  {
    steps: "5. Check correctness and efficiency",
    ex1: "Optimize the code for performance",
    ex2: "Conduct tests frequently and debug",
    ex3: "Push often, only when ready",
    id: 5,
  },
];

const infoFilm = [
  {
    steps: "1. Find a meaningful idea",
    ex1: "Bring characters and plot to life",
    ex2: "Break story into narrative beats",
    ex3: "Build screenplay through specific scenes",
    id: 1,
  },
  {
    steps: "2. Organize the production",
    ex1: "Network the cast/crew team",
    ex2: "Prepare, plan, and execute schedule",
    ex3: "Manage the locations and resources",
    id: 2,
  },
  {
    steps: "3. Shoot the film",
    ex1: "Direct authentic performances with atmosphere",
    ex2: "Collaborate to frame/capture footage",
    ex3: "Troubleshoot towards solutions on set",
    id: 3,
  },
  {
    steps: "4. Edit raw materials",
    ex1: "Montage to communicate original idea",
    ex2: "Execute any additional pick-up shots",
    ex3: "Refine final touches and audio",
    id: 4,
  },
  {
    steps: "5. Finish and release",
    ex1: "Add visual effects and color-grade",
    ex2: "Create titles, thumbnails, and posters",
    ex3: "Release and market final product",
    id: 5,
  },
];

const dataCompSci = [
  {
    compSciIcon: true,
    title: "Developer Languages",
    oneOne: "Java",
    oneTwo: "SQL",
    oneThree: "React/JS",
    twoOne: "C",
    twoTwo: "Python",
    twoThree: "Git",
    id: 1,
  },
];

const dataFilm = [
  {
    compSciIcon: false,
    title: "Filmmaking Software",
    oneOne: "StudioBinder",
    oneTwo: "Storyboarder",
    oneThree: "DaVinci Resolve",
    twoOne: "Adobe",
    twoTwo: "RunwayML",
    twoThree: "Blender",
    id: 1,
  },
];

export default function SkillTest() {
  const [skillDev, setSkillDev] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const isDesktop = useMediaQuery("(min-width:60em)");

  const rouletteDev = (
    <Roulette
      info={infoCompSci}
      slideIndex={slideIndex}
      setSlideIndex={setSlideIndex}
    />
  );
  const mobileRouletteDev = (
    <MobileRoulette
      info={infoCompSci}
      slideIndex={slideIndex}
      setSlideIndex={setSlideIndex}
    />
  );
  const cardDev = <Card qual={dataCompSci}/>;

  const rouletteFilm = (
    <Roulette
      info={infoFilm}
      slideIndex={slideIndex}
      setSlideIndex={setSlideIndex}
    />
  );
  const mobileRouletteFilm = (
    <MobileRoulette
      info={infoFilm}
      setSlideIndex={setSlideIndex}
      slideIndex={slideIndex}
    />
  );
  const cardFilm = <Card qual={dataFilm}/>;

  const titleDev = (
    <div className="fs-title text-primary-400">
      My&nbsp;programming&nbsp;process:
    </div>
  );
  const titleFilm = (
    <div className="fs-title text-primary-400">
      My&nbsp;filmmaking&nbsp;process:
    </div>
  );

  let rouletteToggler = rouletteDev;
  let mobileRouletteToggler = mobileRouletteDev;;
  let cardToggler = cardDev;
  let titleToggler = titleDev;

  function skillDevToggle() {
    setSkillDev(!skillDev);
  };

  if (skillDev) {
    cardToggler = cardDev;
    titleToggler = titleDev;
    rouletteToggler = rouletteDev;
    mobileRouletteToggler = mobileRouletteDev;
  } else {
    cardToggler = cardFilm;
    titleToggler = titleFilm;
    rouletteToggler = rouletteFilm;
    mobileRouletteToggler = mobileRouletteFilm;
  }

  if (isDesktop) {
    rouletteToggler = (
      <Roulette
        info={infoCompSci}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
    );

    mobileRouletteToggler = (
      <MobileRoulette
        info={infoCompSci}
        setSlideIndex={setSlideIndex}
        slideIndex={slideIndex}
      />
    );
    cardToggler = <Card qual={dataCompSci} />;
  }

  return (
    <div className="SkillContainer" id="skill">
      <div className="sectionHeading">
        <div className="heading no-margin">SKILLS</div>
        <div className="SkillSwitchWrapper">
          <div
            className={
              skillDev
                ? "switch-text --active fs-title dv"
                : "switch-text fs-title dv"
            }
            onClick={skillDevToggle}
          >
            Developer
          </div>
          <div
            className={
              skillDev
                ? "switch-text fs-title fm"
                : "switch-text --active fs-title fm"
            }
            onClick={skillDevToggle}
          >
            Filmmaker
          </div>
        </div>
      </div>
      <div className="SkillGrid">
        {/* <div className="SkillGridCard"> */}
        <div className="SkillCardToggle">{cardToggler}</div>
        <div className="SkillCardDev">{cardDev}</div>
        <div className="SkillCardFilm">{cardFilm}</div>
        {/* </div> */}
        <div className="SkillGridSubHeading">
          <div className="fs-sub-heading text-primary-900">
            The&nbsp;tools&nbsp;are&nbsp;important,
            but&nbsp;only&nbsp;as&nbsp;much&nbsp;as
            how&nbsp;they&nbsp;are&nbsp;used.
          </div>
        </div>
        {/* <div className="SkillGridTitle"> */}
        <div className="SkillTitleToggle">{titleToggler}</div>
        <div className="SkillTitleDev">{titleDev}</div>
        <div className="SkillTitleFilm">{titleFilm}</div>
        {/* </div> */}
        {/* <div className="SkillGridRoulette"> */}
        <div className="SkillRouletteToggle">
          {mobileRouletteToggler}
          {rouletteToggler}
        </div>
        <div className="SkillRouletteDev">{rouletteDev}</div>
        <div className="SkillRouletteFilm">{rouletteFilm}</div>
        {/* </div> */}
      </div>
    </div>
  );
}
