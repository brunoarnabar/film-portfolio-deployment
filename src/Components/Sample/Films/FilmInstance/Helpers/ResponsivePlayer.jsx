import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../filmInstance.scss";
import Loader from "../../../../Loader/LoaderRing";
// import LoadCaller from "../../../../Loader/LoadCaller";

function ResponsivePlayer({ url, skinny, successState }) {
  // const [spin, setSpin] = useState(true);
  // const [instanceLoadSuccess, setInstanceLoadSuccess] = useState(false);
  // function successState() {
  //   setTimeout(() => {
  //     setInstanceLoadSuccess(true);
  //   }, 500);
  // }

  let className = "player-wrapper";

  if (skinny) {
    className = "player-wrapper skinny";
  }

  return (
    <div className={className}>
      {/* {instanceLoadSuccess === false ? <Loader /> : null} */}
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

export default ResponsivePlayer;
