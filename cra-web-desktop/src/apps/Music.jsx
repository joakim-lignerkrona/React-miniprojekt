import React from "react";
import Window from "../window/Window";
import YouTube from "react-youtube";


export default function Music({videoId}) {

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 0,
      loop: 1,
      disablekb: 1
    }
  };

  return (
    <Window windowTitle={"Best song.exe"}>
      <div style={{position: "relative"}}>

      <YouTube videoId={videoId} opts={videoOptions} />
      <div style={{position:"absolute", width: "100%", height: "100%"}}></div>
      </div>
    </Window>
  );
}
