import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CarList from "./components/CarList";

function App() {
  const [input, setInput] = useState("");
  const [searchingFor, setSearchingFor] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const handleSearch = () => {
    setSearchingFor(input);
    console.log("Searching for:", input);
  };

  return (
    <div>
      <input onChange={handleInputChange} value={input} />
      <button onClick={handleSearch}>Search</button>
      <CarList query={searchingFor} />
    </div>
  );
}

export default App;
