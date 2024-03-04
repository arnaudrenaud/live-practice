import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Temperature } from "./components/Temperature";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Temperature value={10} />
      </header>
    </div>
  );
}

export default App;
