import "./roulette.scss";
import Steps from "./Steps";
import { React, useEffect, useRef } from "react";
import ReactCardCarousel from "react-card-carousel";
// import useMediaQuery from "../../Hooks/useMediaQuery";

export default function Roulette(props) {
  const carouselRef = useRef(null);

  // const isMobile = useMediaQuery("(max-width: 50em)");
  // const [autoPlay, setAutoPlay] = useState(!isMobile);
 
    //media query for phone
    useEffect(() => {
      // setAutoPlay(isMobile);
      // console.log("Roulette autoplay is:" + isMobile);
      //  if (!isMobile) {
         // console.log("RouletteSlideIndex from cardMobile:" + props.slideIndex);
         carouselRef.current.goTo(props.slideIndex);
      //  }
    });


  function updateCurrentSlideR() {
    props.setSlideIndex(carouselRef.current.getCurrentIndex());
  }

  return (
    <div className="RouletteContainer">
      <ReactCardCarousel
        autoplay={false}
        // autoplay_speed={3500}
        disable_fade_in={true}
        ref={carouselRef}
        afterChange={updateCurrentSlideR}
        // ref={(Carousel) => (this.Carousel = Carousel)}
      >
        {props.info.map((info) => (
          <div className="RouletteCardBody" key={info.id}>
            <Steps
              steps={info.steps}
              ex1={info.ex1}
              ex2={info.ex2}
              ex3={info.ex3}
              key={info.id}
            />
          </div>
        ))}
      </ReactCardCarousel>
    </div>
  );
}
