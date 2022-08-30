import React from 'react'
import { Carousel } from "react-responsive-carousel";
import Steps from "../Roulette/Steps";
import './cardMobile.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function CardMobile(props) {
  return (
    <Carousel
      className="CarouselSlide"
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
      swipeable={true}
      emulateTouch={true}
      interval={9550}
      useKeyboardArrows={true}
    >
      {props.info.map((info) => (
        <div className="blue"
          key={info.id}>
          <Steps
            steps={info.steps}
            ex1={info.ex1}
            ex2={info.ex2}
            ex3={info.ex3}
            key={info.id}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default CardMobile