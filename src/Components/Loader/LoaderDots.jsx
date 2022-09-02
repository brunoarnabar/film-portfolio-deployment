import React, { useState, useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";
import "./loader.scss";

export default function LoaderDots() {
    let [loading, setLoading] = useState(false);
//   let [loading, setLoading] = useState(false);
//   let [color] = useState("var(--clr-accent-300)");

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(load);
//       console.log("LoaderDots load: " + load);
//     }, 200);
//   }, [load]);
// console.log("load: " + load);

  return (
    loading ?
    <div className="LoaderContainer">
      <GridLoader color={"var(--clr-accent-300)"} loading={true} size={75} />
      <div className="LoaderHeading  fs-heading">Arnabar's Portfolio</div>
    </div>
    : null
  );
}
