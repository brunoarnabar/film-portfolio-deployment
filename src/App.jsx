import './App.scss';
import Landing from './Components/Landing/Landing'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Philosophy from './Components/Philosophy/Philosophy'
import Contact from './Components/Contact/Contact'
import Sample from './Components/Sample/Sample'
import Skill from './Components/Skill/Skill'

import React from 'react';


export default function App() {
  return (

      <div className="App">
        {/* <Landing/>
        <About/>
        <Service/> */}
        <Skill/>
        {/* <Sample/>
        <Philosophy/>
        <Contact/> */}
        
        {/* <div className='gfg-div'> <div className="responsiveBuilder"> <span></span> </div> </div>  */}
      </div>

  );
}