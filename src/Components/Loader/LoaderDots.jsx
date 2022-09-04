import React from "react";
import GridLoader from "react-spinners/GridLoader";
import "./loader.scss";

export default function LoaderDots() {
//   let [loading, setLoading] = useState(false);
  //   let [loading, setLoading] = useState(false);
  //   let [color] = useState("var(--clr-accent-300)");

//   if (load) {
//     console.log("load is true: " + load);
//     setLoading(true);
//   } else {
//     console.log("load is false: " + load);
//     setLoading(false);
//   }

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setLoading(load);
  //       console.log("LoaderDots load: " + load);
  //     }, 200);
  //   }, [load]);
  // console.log("load: " + load);

  return(
    <div className="LoaderContainer">
      <GridLoader color={"var(--clr-accent-300)"} loading={true} size={75} />
      <div className="LoaderHeading  fs-heading">Arnabar's Portfolio</div>
    </div>
  )
}
