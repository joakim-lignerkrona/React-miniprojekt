import React from "react";
import start from "./assets/start.png"
import middle from "./assets/taskbar.middle.png"
import clock from "./assets/clock.png"

export default function Taskbar({ children }) {
  return (
  <div className="taskbar d-flex w-100"> 
        <img src={start} style={{height: "100%"}}></img>
        <img className="flex-grow-1" src={middle} ></img>
        <img src={clock} style={{height: "100%"}}></img>
  </div>
  );
}