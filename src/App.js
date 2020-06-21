import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
      <div className="overlay">
        <Container>
          <Home />
        </Container>
      </div>
    </div>
  );
}

export default App;
