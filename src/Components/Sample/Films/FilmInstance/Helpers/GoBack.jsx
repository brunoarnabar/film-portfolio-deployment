import back from "../../../../../Images/Icons/back.png";
import { useSampleFalseContext } from "../../../../../Contexts/BackToSample";

import React from "react";

export default function GoBack() {

  // const {setAtSample} = useContext(BackToSample);
  const setSampleFalse = useSampleFalseContext();

  return (
    <div onClick={setSampleFalse}>
      <img src={back} alt="backButton" width="35rem" />
    </div>
  );
}
