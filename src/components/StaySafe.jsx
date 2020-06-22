import React, { useState } from "react";

// Reactstrap
import { Container, Row, Col } from "reactstrap";

// Personal files
import Summary from "./../videos/sampleSummary.mp4";
import Poster from "../images/covid2.png";
import Nose1 from "../images/nose1.png";
import Nose2 from "../images/nose2.png";

// Components
import CardSet from "./CardSet";

const StaySafe = () => {
  // const [list] = useState([Covid1, Covid2, Covid3, Covid4]);
  return (
    <div className="Cards Safe">
      <Container>
        <Row>
          <Col md="4" className="safe-image-col">
            <img src={Nose1} className="safe-image" />
          </Col>
          <Col md="4" className="safe-image-col">
            <h1 className="safe-text">STAY SAFE</h1>
            <h3 className="safe-text">Wear your mask!</h3>
          </Col>
          <Col md="4" className="safe-image-col">
            <img src={Nose2} className="safe-image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StaySafe;
