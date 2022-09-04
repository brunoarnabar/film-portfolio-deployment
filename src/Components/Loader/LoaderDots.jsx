import React from "react";
import GridLoader from "react-spinners/GridLoader";
import "./loader.scss";

export default function LoaderDots() {

  return(
    <div className="LoaderContainer">
      <GridLoader color={"var(--clr-accent-300)"} loading={true} size={75} />
      <div className="LoaderHeading  fs-heading">Arnabar's Portfolio</div>
    </div>
  )
}
