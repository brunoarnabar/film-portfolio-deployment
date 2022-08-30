import { React, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Steps from "../Roulette/Steps";
import "./cardMobile.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import useMediaQuery from "../../Hooks/useMediaQuery";

function CardMobile(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function updateCurrentSlide(index) {
    if (currentSlide !== index) {
      setCurrentSlide(index);
      props.setSlideIndex(index);
    //   console.log("cardMobile autoplay is:" + !isNotMobile);
    }
  }

  const isNotMobile = useMediaQuery("(min-width: 50em)");


    useEffect(() => {
        //   if (isNotMobile) {
            //   console.log("cardMobile from RouletteSlideIndex:" + props.slideIndex);
            setCurrentSlide(props.slideIndex);
        //   }
    });


  return (
    <>
      {/* <p>We are at index: {index}</p> */}

      <Carousel
        className="CarouselSlide"
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        swipeable={true}
        emulateTouch={true}
        interval={9500}
        useKeyboardArrows={false}
        selectedItem={currentSlide}
        onChange={updateCurrentSlide}
        stopOnHover={false}
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
    </>
  );
}

export default CardMobile;
