import back from "../../../Images/Icons/back.png";

import React from "react";
// import { useSampleFalseContext } from "../../../Contexts/BackToSample";
import { useSendToSampleContext } from "../../../Contexts/BackToSample";

export default function GoBack() {

  // const {setAtSample} = useContext(BackToSample);
  // const setSampleFalse = useSampleFalseContext();
  const {setSendToSample } = useSendToSampleContext();

  return (
    // <button onClick={setSampleFalse}>
    <button onClick={setSendToSample(true)}>
      <img src={back} alt="backButton" width="35rem" />
    </button>
  );
}
