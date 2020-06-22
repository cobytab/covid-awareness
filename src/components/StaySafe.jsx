import React, {useState} from "react";

// Reactstrap
import {Container, Row, Col } from "reactstrap";

// Personal files
import Summary from './../videos/sampleSummary.mp4';
import Poster from '../images/covid2.png';


// Components
import CardSet from './CardSet';

const StaySafe = () => {
    // const [list] = useState([Covid1, Covid2, Covid3, Covid4]);
  return (
    <div className="Cards Video">
      <Container>
        <h1 className="cards-title med">A VIDEO SUMMARY</h1>
        {/* <CardSet list={list} /> */}
        <Row>
            <Col>
                <video controls poster={Poster} style={{width: '100%'}} src={Summary} ></video>
            </Col>
        </Row>

      </Container>
    </div>
  );
};

export default StaySafe;
