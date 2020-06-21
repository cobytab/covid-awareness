import React from "react";
import "./App.css";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Facts from "./components/Facts";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
        <Home />
        <Cards />
        <Facts />
    </div>
  );
}

export default App;
