import './App.scss';
import Landing from './Components/Landing/Landing';
import Philosophy from './Components/Philosophy/Philosophy'
import Contact from './Components/Contact/Contact'

import React from 'react';


export default function App() {
  return (

      <div className="App">
        <Landing/>
        <Philosophy/>
        <Contact/>
        {/* <div className='gfg-div'> <div className="text"> <span></span> </div> </div> */}
      </div>

  );
}