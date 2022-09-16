import React from "react";
import ReactPlayer from "react-player";
import "../filmInstance.scss"; 

function ResponsivePlayer({ url, skinny, successState }) { 
  let className = "player-wrapper";

  if (skinny) {
    className = "player-wrapper skinny";
  }

  return (
    <div className={className}>
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
