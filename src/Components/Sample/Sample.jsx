import "./sample.scss";

import greenlessImg from "../../Video/Thumbnail/Greenless.png";
import imggy from "../../Video/Thumbnail/theBox.png";
// import imggy from "../../Video/Thumbnail/Greenless.png";
import giffy from "../../Video/Gifs/theBox.gif";
import greenlessGif from "../../Video/Gifs/Greenless.gif";
// import giffy from "../../Video/Gifs/Greenless.gif";
import Preview from "./Films/Preview/Preview"

//goToContext
import { useRef, useEffect } from "react";
import useOnScreen from "../Hooks/useOnScreen";
import { useSampleTrueContext } from "../../Contexts/BackToSample";

const TheBox = {
  key: 2,
  title: "The Box",
  date: "11-25-2019",
  gif: giffy,
  img: imggy,
  url: "TheBox",
};

const Three = {
  key: 3,
  title: "Three",
  date: "03-03-2033",
  gif: giffy,
  img: imggy,
  url: "TheBox",
};

const Four = {
  key: 4,
  title: "Four",
  date: "04-04-2014",
  gif: giffy,
  img: imggy,
  url: "TheBox",
};

export default function Samples() {
  //goToContext
  const setSampleTrue = useSampleTrueContext();

  const Greenless = {
    key: 1,
    title: "Greenless",
    date: "06-22-2021",
    gif: greenlessGif,
    img: greenlessImg,
    url: "Greenless",
  };

  //goToContext
  const SampleRef = useRef();
  const isVisible = useOnScreen(SampleRef);

  //goToContext
  useEffect(() => {
    if (isVisible) {
      setSampleTrue();
      // console.log("Sample is visible: " + isVisible + " so is setAtSample");
    }
  }, [isVisible, setSampleTrue]);

  return (
    <div className="SampleContainer" id="sample" ref={SampleRef}>
      <div className="sectionHeading noMarginBot">
        <div className="heading text-neutral-400">SAMPLES</div>
        <div className="subHeading wrap-lg text-neutral-200">
          Check&nbsp;Out My&nbsp;Work
        </div>
      </div>
      <div className="SamplePreviewContainers text-neutral-400">
        <div className="SamplePreview fs-heading">
          <Preview {...Greenless} />
        </div>
        <div className="SamplePreview fs-heading">
          <Preview {...TheBox} />
        </div>
        <div className="SamplePreview fs-heading">
          <Preview {...Three} />
        </div>
        <div className="SamplePreview fs-heading">
          <Preview {...Four} />
        </div>
        <div className="SamplePreview fs-heading">
          <Preview {...Four} />
        </div>
        <div className="SamplePreview fs-heading">
          <Preview {...Four} />
        </div>
      </div>
    </div>
  );
}
