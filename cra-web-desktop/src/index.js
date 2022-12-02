import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Background from "./Background";
import Desktop from "./Desktop";
import DesktopIcon from "./desktop/DesktopIcon";
import "bootstrap/dist/css/bootstrap.min.css";
import paintLogo from "./assets/paintLogo.jpg";
import Taskbar from './Taskbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Background>
      <Desktop>
        <Taskbar />
        <DesktopIcon src="/vite.svg" appName="Timer" />
        <DesktopIcon src="https://cdn2.iconfinder.com/data/icons/icons-mega-pack-1-and-2/256/Windows_Media_Player_10.png" appName="Music" />
        <DesktopIcon src={paintLogo} appName="Paint" />
      </Desktop>
      <App />
    </Background>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
