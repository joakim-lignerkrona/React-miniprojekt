import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Paint from "./apps/Paint";
import Timer from "./apps/Timer";
import Clock from "./apps/clock";

import Calculator from "./apps/Calculator";


import Music from "./apps/Music";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">

      <Timer></Timer>

      <Calculator></Calculator>

      {/* <Paint></Paint> */}


    

      {/* <Music videoId={"dQw4w9WgXcQ"}></Music> */}



    </div>
  );
}


export default App;
