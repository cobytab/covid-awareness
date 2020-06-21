import React from "react";
import { Row, Col, Container } from "reactstrap";

const CardSet = ({ list }) => {
  return (
    <Row>
      {list.map((item) => {
        return (
          <Col lg="6">
            <img src={item} className="card-image" />
          </Col>
        );
      })}
    </Row>
  );
};

export default CardSet;
