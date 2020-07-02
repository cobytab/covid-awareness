import React from 'react';

// Reactstrap
import { Container, Row, Col } from 'reactstrap';

// Personal files
import Poster from '../images/poster.jpg';
import videoLink from './../videos/426ExamEdit.mp4';

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
              style={{
                width: '100%',
                objectFit: 'cover',
                borderRadius: '13px',
              }}
              src={videoLink}
            ></video>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Video;
