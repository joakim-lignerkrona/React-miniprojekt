import React from "react";
import { AppsInUseContext } from "../contexts/AppsInUseContext";

export default function DesktopIcon({ src, appName, appToStart }) {
  const {startApp} = React.useContext(AppsInUseContext);
  return (
    <div className="d-flex flex-column icon justify-content-center align-items-center" onDoubleClick={e => {startApp(appToStart)}}>
      <img src={src} alt={`${appName} icon`}/>
      <span>{appName}</span>
    </div>
  );
}
