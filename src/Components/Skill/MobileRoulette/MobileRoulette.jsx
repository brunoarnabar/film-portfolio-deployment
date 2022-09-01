import { React, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Steps from "../Roulette/Steps";
import "./mobileRoulette.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function MobileRoulette(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function updateCurrentSlide(index) {
    if (currentSlide !== index) {
      setCurrentSlide(index);
      props.setSlideIndex(index);
    }
  }

  useEffect(() => {
    setCurrentSlide(props.slideIndex);
  }, [props.slideIndex]);

  return (
    <Carousel
      className="MobileRouletteContainer"
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
      showArrows={false}
      swipeable={true}
      emulateTouch={true}
      interval={9500}
      useKeyboardArrows={true}
      selectedItem={currentSlide}
      onChange={updateCurrentSlide}
      stopOnHover={false}
      swipeScrollTolerance={5}
      preventMovementUntilSwipeScrollTolerance={false}
    >
      {props.info.map((info) => (
        <div className="MobileRouletteCardBody" key={info.id}>
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
