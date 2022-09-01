import React from 'react';
// import {Link} from "react-router-dom";
import "./navigation.scss"

function Navigation({ aboutRef }) {

//   const handleScroll = (ref) => {
//     window.scrollTo({
//       top: ref.offsetTop,
//       left: 0,
//       behavior: "smooth",
//     });
//   };

  return (
    <div className="NavigationContainer">
      <div className="fs-title">
        <a href="#landing">Home</a>
      </div>
      <div className="fs-title">
        <a href="#about">About</a>
      </div>
      <div className="fs-title">
        <a href="#sample">Sample</a>
      </div>
    </div>
  );
}

export default Navigation