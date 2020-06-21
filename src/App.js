import React from "react";
import "./App.css";
import Home from "./components/Home";
import Cards from "./components/Cards";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
        <Home />
        <Cards />
    </div>
  );
}

export default App;
