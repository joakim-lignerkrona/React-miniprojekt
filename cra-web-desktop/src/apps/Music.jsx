import React from "react";
import Window from "../window/Window";
import YouTube from "react-youtube";


export default function Music() {

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 0,
      loop: 1
    }
  };

  return (
    <Window windowTitle={"Best song.exe"}>
      <YouTube videoId="dQw4w9WgXcQ" opts={videoOptions} />
    </Window>
  );
}
