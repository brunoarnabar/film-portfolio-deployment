import "./App.scss";
import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Skill from "./Components/Skill/Skill";
import Sample from "./Components/Sample/Sample";
import Philosophy from "./Components/Philosophy/Philosophy";
import Contact from "./Components/Contact/Contact";
import GridLoader from "react-spinners/GridLoader";

import React, { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="AppLoader fs-heading">
          <GridLoader
            color={"var(--clr-neutral-accent-300)"}
            loading={loading}
            size={50}
          />
          Bruno Arnabar's Portfolio
        </div>
      ) : (
        <>
          <Navigation />
          <Landing />
          <About />
          <Service />
          <Skill />
          <Sample />
          <Philosophy />
          <Contact />
        </>
      )}
    </div>
  );
}
