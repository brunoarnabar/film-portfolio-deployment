import "./App.scss";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
// import Philosophy from './Components/Philosophy/Philosophy'
import Contact from "./Components/Contact/Contact";
import Sample from "./Components/Sample/Sample";
import Skill from "./Components/Skill/Skill";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";

import React from "react";

export default function App() {
  return (
    // <BackToSampleProvider>
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Service />
      <Skill />
      <Sample />
      {/* <Philosophy /> */}
      <Contact />
      <Footer />
    </div>
    // </BackToSampleProvider>
  );
}
