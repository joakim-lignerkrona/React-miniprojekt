import React from "react";
import start from "./assets/start.png";
import middle from "./assets/taskbar.middle.png";
import clock from "./assets/clock.png";
import startmenu from "./desktop/Start-menu";

export default function Taskbar({ children }) {
  return (
    <div className="taskbar d-flex w-100">
      <img src={start} onClick={startmenu} style={{ height: "100%" }}></img>

      <div
        className="flex-grow-1"
        style={{ backgroundImage: `url(${middle})` }}
      ></div>

      <img src={clock} style={{ height: "100%" }}></img>
    </div>
  );
}
