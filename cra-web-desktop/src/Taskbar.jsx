import React, {useState} from "react";
import start from "./assets/start.png";
import middle from "./assets/taskbar.middle.png";
import clock from "./assets/clock.png";
import Startmenu from "./desktop/Start-menu";

export default function Taskbar({ children }) {
  const [showStart, setShowStart] = useState(false);

  

  return (
    <div className="taskbar d-flex w-100">
      <img src={start} onClick={e => {setShowStart(x => !x)}} style={{ height: "100%" }}></img>
      {showStart && <Startmenu onClick={e => {setShowStart(x => !x)}}/>}
      <div
        className="flex-grow-1"
        style={{ backgroundImage: `url(${middle})` }}
      ></div>

      <img src={clock} style={{ height: "100%" }}></img>
    </div>
  );
}
