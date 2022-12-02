import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Paint from "./apps/paint";
import Timer from "./apps/Timer";
import Music from "./apps/Music";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Timer></Timer> */}
      {/* <Paint></Paint> */}
      <Music></Music>
    </div>
  );
}

export default App;
