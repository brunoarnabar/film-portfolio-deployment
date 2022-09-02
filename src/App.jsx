import './App.scss';
import Landing from './Components/Landing/Landing'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Philosophy from './Components/Philosophy/Philosophy'
import Contact from './Components/Contact/Contact'
import Sample from './Components/Sample/Sample'
import Skill from './Components/Skill/Skill'

import React, {useState} from 'react';


export default function App() {

  const [isSampleVisible, setIsSampleVisble] = useState(false);
  // const [toSampleBool, setToSampleBool] = useState(false);
  console.log("App: " + isSampleVisible);

  return (
    <div className="App">
      <Landing />
      <About />
      <Service />
      <Skill />
      <Sample
        setIsSampleVisble={setIsSampleVisble}
      />
      <Philosophy />
      <Contact />
    </div>
  );
}