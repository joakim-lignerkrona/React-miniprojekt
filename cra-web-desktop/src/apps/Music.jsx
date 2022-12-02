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
      <YouTube videoId={videoId} opts={videoOptions} />
    </Window>
  );
}
