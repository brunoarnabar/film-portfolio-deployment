import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./responsiveplayer.scss";
import "../Films/filmInstance.scss"
import Loader from "../../Loader/LoaderRing";



function ResponsivePlayer({ url }) {
  const [instanceLoadSuccess, setInstanceLoadSuccess] = useState(false);
  function successState() {   
    setTimeout(() => {
      setInstanceLoadSuccess(true);
    }, 500);  
  }
  return (
    <div className="player-wrapper">
      {instanceLoadSuccess === false ? <Loader /> : null}
      <ReactPlayer
        url={url}
        className="react-player"
        playing={false}
        width="100%"
        height="100%"
        controls={true}
        onReady={successState}
      />
    </div>
  );
}

export default ResponsivePlayer