import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Paint from "./paint";
import Timer from "./apps/Timer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Timer></Timer>
    </div>
  );
}

export default App;
