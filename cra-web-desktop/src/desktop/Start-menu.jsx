import React from "react"
import startmenu from "../assets/start-menu.png"

export default function Startmenu({ onClick }) {
    return (
      <div className="startmenu">
        <img src={startmenu} alt="a start menu" onClick={onClick}></img>


      </div>
    );
  }