import './App.scss';
import Landing from './Components/Landing/Landing'
import About from './Components/About/About'
import Service from './Components/Service/Service'
// import Philosophy from './Components/Philosophy/Philosophy'
import Contact from './Components/Contact/Contact'
import Sample from './Components/Sample/Sample'
import Skill from './Components/Skill/Skill'
import Nav from './Components/Nav/Nav'

// import useComponentVisible from './Components/Hooks/useComponentVisible';
// import {BackToSample} from "./Contexts/BackToSample"
// import {BackToSampleProvider} from "./Contexts/BackToSample";

import React from 'react';


export default function App() {

  // const { NavRefClick, isComponentVisible} =
  //   useComponentVisible(false);

  //   console.log(isComponentVisible);

  return (
    // <BackToSampleProvider>
    <div className="App">
      <Nav/>
      <Landing />
      <About />
      <Service />
      <Skill />
      <Sample />
      {/* <Philosophy /> */}
      <Contact />
    </div>
    // </BackToSampleProvider>
  );
}