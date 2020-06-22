import React from 'react';
import { Row, Col } from 'reactstrap';

const CardSet = ({ list }) => {
  return (
    <Row>
      {list.map((item) => {
        return (
          <Col md="6">
            <img alt="covid art" src={item} className="card-image" />
          </Col>
        );
      })}
    </Row>
  );
};

export default CardSet;
