import "./App.scss";
import Nav from "./Components/Nav/Nav";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
// import Service from "./Components/Service/Service";
import Goals from "./Components/Goals/Goals";
import Contact from "./Components/Contact/Contact";
import Sample from "./Components/Sample/Sample";
// import Skill from "./Components/Skill/Skill";
// import Philosophy from './Components/Philosophy/Philosophy'
import Footer from "./Components/Footer/Footer";

import React from "react";

export default function App() {
  return (

    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Goals />
      {/* <Service /> */}
      {/* <Skill /> */}
      <Sample />
      {/* <Philosophy /> */}
      <Contact />
      <Footer />
    </div>
  );
}
