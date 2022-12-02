import React from "react";

export default function DesktopIcon({ src, appName, onClick }) {
  return (
    <div className="d-flex flex-column icon justify-content-center align-items-center">
      <img src={src} alt={`${appName} icon`} onClick={onClick}/>
      <span>{appName}</span>
    </div>
  );
}
