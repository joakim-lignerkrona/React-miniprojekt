import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Window from "./window/Window";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Window></Window>
    </div>
  );
}

export default App;
