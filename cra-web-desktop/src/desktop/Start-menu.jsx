import React from "react"
import startmenu from "../assets/start-menu.png"
import startbutton from "../assets/startclicked.png"

export default function Startmenu({ onClick }) {
    return (
      <div className="startmenu">
        <img src={startmenu} alt="a start menu" onClick={onClick}></img>


      </div>
    );
  }