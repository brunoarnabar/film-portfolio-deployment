import "./sample.scss";

import { useRef, useEffect } from "react";
import Preview from "./Films/Preview/Preview";
import filmData from "./FilmData";

//goToContext
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
    <div
      className="SampleContainer text-neutral-400"
      id="sample"
      ref={SampleRef}
    >
      <div className="sectionHeading noMarginBot">
        <div className="heading text-neutral-400">SAMPLES</div>
        <div className="subHeading wrap-lg text-neutral-200">
          Check&nbsp;Out My&nbsp;Work
        </div>
      </div>
      <div className="SamplePreviewContainers">
        {filmData.map((film) => (
          <div className="SamplePreview fs-heading">
            <Preview key={film.key} film={film} />
          </div>
        ))}
      </div>
    </div>
  );
}
