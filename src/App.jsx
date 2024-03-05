import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "./components/Common-pages/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Homepage></Homepage>
    </>
  );
}

export default App;
