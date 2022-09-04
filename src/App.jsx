import './App.scss';
import Landing from './Components/Landing/Landing'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Philosophy from './Components/Philosophy/Philosophy'
import Contact from './Components/Contact/Contact'
import Sample from './Components/Sample/Sample'
import Skill from './Components/Skill/Skill'

// import {BackToSample} from "./Contexts/BackToSample"
// import {BackToSampleProvider} from "./Contexts/BackToSample";

// import React from 'react';
import React, { useRef, useState } from "react";


export default function App() {

  // const [toSampleBool, setToSampleBool] = useState(false);
  const [isSampleVisible, setIsSampleVisble] = useState(false);
  console.log("App: " + isSampleVisible);

  const childRef = useRef();

  function handleClick() {
    console.log(childRef.current);
  }

  return (
    // <BackToSampleProvider>
    <div className="App">
      <Landing />
      <About />
      <Service />
      <Skill />
      <button onClick={handleClick}>Get Ref</button>
      <Sample innerRef={childRef} setIsSampleVisble={setIsSampleVisble} />
      {/* <Sample /> */}
      <Philosophy />
      <Contact />
    </div>
    // </BackToSampleProvider>
  );
}