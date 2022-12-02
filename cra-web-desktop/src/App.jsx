import { useEffect, useRef, useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Paint from "./apps/Paint";
import Timer from "./apps/Timer";
import Clock from "./apps/Clock";

import Calculator from "./apps/Calculator";


import Music from "./apps/Music";
import { AppsInUseContext } from "./contexts/AppsInUseContext";


function App() {
  const [count, setCount] = useState(0);

  const {apps} = useContext(AppsInUseContext);

  return (
    <div className="App">
      {apps}
    </div>
  );
}


export default App;
