import React from "react";
import start from "./assets/start.png"
import middle from "./assets/taskbar.middle.png"
import clock from "./assets/clock.png"

export default function Taskbar({ children }) {
  return (
  <div className="taskbar d-flex w-100"> 
        <img src={start}></img>
        <div className="flex-grow-1"><div style={{width: "100%"}} ><img src={middle} style={{maxHeight: "100%", maxWidth: "100%", height: "auto"}}></img></div></div>
        <img src={clock}></img>
  </div>
  );
}