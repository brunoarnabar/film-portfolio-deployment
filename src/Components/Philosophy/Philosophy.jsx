import React from 'react'
import './philosophy.scss';

function Philosophy() {
  return (
    
    <div className="philContainer">
        <div className="Backdrop">
            <div className="HeadingPh"> My Philosophy </div>
            <div className="SVG One-phi"> </div>

            <div className="Message-phi First-phi"> I’ve always loved how films reflect our cognitive processes and allow us to create profound connections from the formal elements we percieve on screen. </div>
            <div className="SVG Two-phi"> </div>

            <div className="Message-phi Second-phi"> Although "Creative Director & Developer" may sound like an oxymoron (at least, to me it did), I realized my skillset has been defined by that very role. </div>
            <div className="SVG Three-phi"> </div>

            <div className="Message-phi Third-phi"> Blending film and computer science, we can create beautiful and meaningful UI that improves our collective experiences through narrative. </div>
            <div className="SVG Four-phi"> </div>

            <div className="Message-phi Final-phi"> I'm passionate about using my knowledge of art and technology to create innovative solutions and working with a team to explore modern approaches for supporting artistic expression. </div>
            <div className="SVG Five-phi"> </div>
        </div>
    </div>

  )
}

export default Philosophy