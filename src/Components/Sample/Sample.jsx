import "./sample.scss";

import Preview from "./Films/Preview/Preview";
import {
  // GreenlessInfo,
  BirdsEyeViewInfo,
  TheBoxInfo,
  PhenomenaInfo,
  FilmNetInfo,
  ThisPortfolioInfo,
} from "./FilmData";

//goToContext
import { useRef, useEffect } from "react";
import useOnScreen from "../Hooks/useOnScreen";
import { useSampleTrueContext } from "../../Contexts/BackToSample";

export default function Samples() {
  //goToContext
  const setSampleTrue = useSampleTrueContext();

  //goToContext
  const SampleRef = useRef();
  const isVisible = useOnScreen(SampleRef);

  //goToContext
  useEffect(() => {
    if (isVisible) {
      setSampleTrue();
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
        {/* <div className="SamplePreview fs-heading">
          <Preview {...GreenlessInfo} />
        </div> */}
        <div className="SamplePreview fs-heading">
          <Preview {...TheBoxInfo} />
        </div>
        <div className="SamplePreview fs-heading">
          <Preview {...BirdsEyeViewInfo} />
        </div>
        <div className="SamplePreview fs-heading">
          <Preview {...PhenomenaInfo} />
        </div>
        <div className="SamplePreview fs-heading">
          <Preview {...FilmNetInfo} />
        </div>
        <div className="SamplePreview fs-heading">
          <Preview {...ThisPortfolioInfo} />
        </div>
      </div>
    </div>
  );
}
