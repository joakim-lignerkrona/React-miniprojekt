import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Background from "./Background";
import Desktop from "./desktop";
import DesktopIcon from "./desktop/DesktopIcon";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Background>
      <Desktop>
        <DesktopIcon src="/vite.svg" appName="Timer" />
        <DesktopIcon src="/vite.svg" appName="ToDo" />
        <DesktopIcon src="/vite.svg" appName="Paint" />
      </Desktop>
      <App />
    </Background>
  </React.StrictMode>
);
