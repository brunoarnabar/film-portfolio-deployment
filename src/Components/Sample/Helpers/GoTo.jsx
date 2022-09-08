import back from "../../../Images/Icons/back.png";

import React from "react";
import { useGoToContext } from "../../../Contexts/GoToContext";

export default function GoTo(location) {

    // let startRedirect = null;
    const setAtAbout = useGoToContext();

    let returnThis = (
      <div onClick={() => setAtAbout(false)}>
        <div className="title">About</div>
      </div>
    );
    

    if (location === "About"){
        console.log("hehe im here sneaky sneaky")

        return (
          <div onClick={() => setAtAbout(false)}>
            <div className="title text-primary-900">About</div>
          </div>
        );
    }

//   return (
//     // <div onClick={startRedirect(false)}>
//     //   <div className="title">{location}</div>
//     // </div>

//     // <div onClick={() => setAtAbout(false)}>
//     //   <div className="title">About</div>
//     // </div>
//     {returnThis}
//   );
}
