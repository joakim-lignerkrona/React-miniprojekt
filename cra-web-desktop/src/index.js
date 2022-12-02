import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Background from "./Background";
import Desktop from "./Desktop";
import DesktopIcon from "./desktop/DesktopIcon";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Background>
      <Desktop>
        <DesktopIcon src="/vite.svg" appName="Timer" />
        <DesktopIcon src="/vite.svg" appName="ToDo" />
        <DesktopIcon src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Microsoft_Paint.svg" appName="Paint" />
      </Desktop>
      <App />
    </Background>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
