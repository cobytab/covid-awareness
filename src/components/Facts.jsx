import React, {useState} from "react";

// Reactstrap
import {Container } from "reactstrap";

// Personal files
import Covid5 from '../images/covid1.png'
import Covid6 from '../images/covid2.png'
import Covid7 from '../images/covid3.png'
import Covid8 from '../images/covid4.png'

// Components
import CardSet from './CardSet';

const Cards = () => {
    const [list] = useState([Covid5, Covid6, Covid7, Covid8]);
  return (
    <div className="Cards Facts">
      <Container>
        <h1 className="cards-title">COVID-19 FACTS</h1>
        <CardSet list={list} />
      </Container>
    </div>
  );
};

export default Cards;
