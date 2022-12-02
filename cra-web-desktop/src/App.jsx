import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Paint from "./paint";
import Timer from "./apps/Timer";
import Calculator from "./apps/Calculator";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Timer></Timer>
      <Calculator></Calculator>
    </div>
  );
}

export default App;
