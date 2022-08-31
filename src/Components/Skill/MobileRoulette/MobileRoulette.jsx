import { React, useEffect, useCallback } from "react";
import { Carousel } from "react-responsive-carousel";
import Steps from "../Roulette/Steps";
import "./mobileRoulette.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function MobileRoulette(props) {

  // function updateCurrentSlide(index) {
  //     if (props.slideIndex !== index) {
  //     props.setSlideIndex(index);
  //   }
  // }

  const updateCurrentSlide = useCallback(
    (index) => {
      if (props.slideIndex !== index) {
        props.setSlideIndex(index);
      }
    },
    [index, props.slideIndex, props.setSlideIndex]
  );

  useEffect(() => {
    updateCurrentSlide(props.slideIndex);
  }, [props.slideIndex, updateCurrentSlide]);

  return (
    <Carousel
      className="CarouselSlide"
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
      showArrows={false}
      swipeable={true}
      emulateTouch={true}
      interval={9500}
      useKeyboardArrows={false}
      selectedItem={props.slideIndex}
      onChange={updateCurrentSlide}
      stopOnHover={false}
      swipeScrollTolerance={25}
      preventMovementUntilSwipeScrollTolerance={true}
    >
      {props.info.map((info) => (
        <div className="blue" key={info.id}>
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
