import React, {useState} from "react";

// Reactstrap
import {Container } from "reactstrap";

// Personal files
import Covid1 from '../images/covid1.png'
import Covid2 from '../images/covid2.png'
import Covid3 from '../images/covid3.png'
import Covid4 from '../images/covid4.png'

// Components
import CardSet from './CardSet';

const Cards = () => {
    const [list] = useState([Covid1, Covid2, Covid3, Covid4]);
  return (
    <div className="Cards">
      <Container>
        <h1 className="cards-title">COVID-19 PRECAUTIONS</h1>
        <CardSet list={list} />
      </Container>
    </div>
  );
};

export default Cards;
