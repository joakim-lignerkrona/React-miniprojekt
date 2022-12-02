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
import calcLogo from "./assets/calcLogo.png";

import Taskbar from './Taskbar';
import Clock from "./apps/Clock";

import Music from './apps/Music';
import { AppProvider } from './contexts/AppsInUseContext';
import './Calculator.css';
import Timer from './apps/Timer';
import Paint from './apps/Paint';
import Calculator from './apps/Calculator';
import Startmenu from './desktop/Start-menu';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
    <Background>
      <Desktop>
        <Taskbar />
        <Clock />
        <DesktopIcon src="https://winaero.com/blog/wp-content/uploads/2017/01/clock-time-icon.png" appName="Timer" appToStart={<Timer/>} />
        <DesktopIcon src="https://cdn2.iconfinder.com/data/icons/icons-mega-pack-1-and-2/256/Windows_Media_Player_10.png" appName="Music" appToStart={<Music videoId={"dQw4w9WgXcQ"}/>}/>
        <DesktopIcon src={paintLogo} appName="Paint" appToStart={<Paint />}/>
        <DesktopIcon src={calcLogo} appName="Calculator" appToStart={<Calculator />}/>
              <Startmenu/>

      </Desktop>
      <App />
    </Background>
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
