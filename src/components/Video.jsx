import React from "react";

// Reactstrap
import { Container, Row, Col } from "reactstrap";

// Personal files
import Summary from "./../videos/sampleSummary.mp4";
import Poster from "../images/poster.jpg";

const Video = () => {
  return (
    <div className="Cards Video">
      <Container>
        <h1 className="cards-title">A VIDEO SUMMARY</h1>
        <Row>
          <Col>
            <video
              controls
              poster={Poster}
              style={{ width: "100%", objectFit: 'cover' }}
              src={Summary}
            ></video>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Video;
