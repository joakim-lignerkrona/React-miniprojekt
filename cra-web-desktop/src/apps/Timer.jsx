import React from "react";
import Window from "../window/Window";

export default function Timer() {
  return (
    <Window windowTitle={"Timer.exe"}>
      <h1>Timer</h1>
      <input type="text" />
      <button className="btn btn-primary">click</button>
    </Window>
  );
}
