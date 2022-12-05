import { useContext } from "react";
import "./css/App.css";
import { AppsInUseContext } from "./contexts/AppsInUseContext";


function App() {

  const {apps} = useContext(AppsInUseContext);

  return (
    <div className="App">
      {apps}
    </div>
  );
}


export default App;
