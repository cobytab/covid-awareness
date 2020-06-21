import React, { useState } from "react";

// Reactstrap
import { Container } from "reactstrap";

// Personal files
import Covid5 from "../images/covid5.jpg";
import Covid6 from "../images/covid6.png";
import Covid7 from "../images/covid7.png";
import Covid8 from "../images/covid8.png";

// Components
import CardSet from "./CardSet";

const Facts = () => {
  const [list] = useState([Covid5, Covid6, Covid7, Covid8]);
  return (
    <div className="Cards Facts">
      <Container>
        <h1 className="cards-title text-light">COVID-19 FACTS</h1>
        <CardSet list={list} />
      </Container>
    </div>
  );
};

export default Facts;
