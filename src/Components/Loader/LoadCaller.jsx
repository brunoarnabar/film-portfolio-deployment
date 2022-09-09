import React, { useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import "./loader.scss";

function Loader({spin}) {
  let [color] = useState("var(--clr-accent-300)");

  return (
    <div className="LoaderContainer">
      <RingLoader color={color} loading={spin} size={150} />
      <div className="LoaderHeading  fs-heading">Arnabar's Portfolio</div>
    </div>
  );
}

export default Loader;
