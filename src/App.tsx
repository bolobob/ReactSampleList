import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Page from "./features/PropsHeading";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Page />
    </div>
  );
}

export default App;
