import "./sample.scss";
import imggy from "../../Video/Thumbnail/theBox.png";
import giffy from "../../Video/Gifs/theBox.gif";
import Preview from "./Helpers/Preview";

import { useRef, useEffect } from "react";
import useOnScreen from "../Hooks/useOnScreen";

// import { useSampleTrueContext } from "../../Contexts/BackToSample";
import { useSendToSampleContext } from "../../Contexts/BackToSample";

const Greenless = {
    key: 1,
    title: "Greenless",
    date: "05-22-2000",
    gif: giffy,
    img: imggy,
  };
 

const TheBox = {
  key: 2,
  title: "The Box",
  date: "03-23-2010",
  gif: giffy,
  img: imggy,
};

const Three = {
  key: 3,
  title: "Three",
  date: "03-03-2033",
  gif: giffy,
  img: imggy,
};

const Four = {
  key: 4,
  title: "Four",
  date: "04-04-2014",
  gif: giffy,
  img: imggy,
};

export default function Samples({ setIsSampleVisble, innerRef }) {
  // const setSampleTrue = useSampleTrueContext();
  const { setSendToSample } = useSendToSampleContext();

  const ref = useRef();
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setSendToSample(false);
      // console.log("Sample is visible: " + isVisible + " so is setAtSample");
    }
  }, [isVisible, setSendToSample]);

  return (
    <div className="SampleContainer" id="sample" ref={ref}>
      <div className="sectionHeading noMarginBot">
        <div className="heading text-neutral-400" ref={innerRef}>
          SAMPLES
        </div>
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
        <div className="SamplePreview fs-heading"></div>
        <div className="SamplePreview fs-heading">
          <Preview {...Four} />
        </div>
      </div>
    </div>
  );
}
