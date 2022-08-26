import "./roulette.scss"
import Steps from "./Steps"
import React from "react";
import ReactCardCarousel from "react-card-carousel";

export default function Roulette(props) {
  return (
    <div className="containerStyle">
      <ReactCardCarousel autoplay={true} autoplay_speed={9500}>  
          {props.info.map((info)  =>
            <div className="rouletteStyle" key={info.id}>
              <Steps steps={info.steps} ex1={info.ex1} ex2={info.ex2} ex3={info.ex3} key={info.id}/>
            </div>
          )}
      </ReactCardCarousel>
    </div>
  )
}
