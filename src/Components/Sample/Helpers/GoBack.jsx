import back from "../../../Images/Icons/back.png";

import React from "react";
import { useSampleFalseContext } from "../../../Contexts/BackToSample";

export default function GoBack() {

  // const {setAtSample} = useContext(BackToSample);
  const setSampleFalse = useSampleFalseContext();

  return (
    <button onClick={setSampleFalse}>
      <img src={back} alt="backButton" width="35rem" />
    </button>
  );
}
