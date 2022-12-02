import React from "react";

export default function DesktopIcon({ src, appName }) {
  return (
    <div className="d-flex flex-column icon justify-content-center align-items-center">
      <img src={src} alt={`${appName} icon`} />
      <span>{appName}</span>
    </div>
  );
}
