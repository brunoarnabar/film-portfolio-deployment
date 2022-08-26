import React from 'react'
import './landing.scss';
import Typewriter from 'typewriter-effect';

export default function Landing() {
  return (
    <div className="landContainer">
        <header className="Border">
            <div className="Poster">
                <div className='Header'>SITE DEVELOPED BY A</div>
                <Typewriter options={{
                  strings: ["SCREENWRITER", "DEVELOPER", "FILMMAKER"],
                  autoStart: true,
                  loop: true,
                  delay: 110,
                  deleteSpeed: 'natural',
                  pauseFor: 2500,
                }} className='MovingHeader'/>
                <div className='Title'>BRUNO ARNABAR</div>
                <div className='Bottom'>Copywrite ⓒ MMXV LinkedIn Instagram Vimeo,<br/> All Rights Reserved.</div>
            </div>  
        </header>   
    </div>
  )
}