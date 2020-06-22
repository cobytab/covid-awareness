import React from "react";

// Reactstrap
import { Container, Row, Col } from "reactstrap";

// Personal files
import Poster from "../images/poster.jpg";
const link =
  "https://r1---sn-h5q7kned.c.drive.google.com/videoplayback?expire=1592806115&ei=oxLwXqLzCsX5-gWi-rHoBg&ip=102.176.88.54&cp=QVNOVElfVVFPRlhOOnRvdjJScFNXdDVZb05iR3dqZHlNN2FrZ19VQkhwUDNaZWRtRmRfZ29pOG8&id=eac699a63b693c97&itag=22&source=webdrive&requiressl=yes&mh=79&mm=32&mn=sn-h5q7kned&ms=su&mv=u&mvi=0&pl=18&sc=yes&ttl=transient&susc=dr&driveid=1DKBp1Uv9sJR95mJkAT9tcZmMowOWOiUJ&app=texmex&mime=video/mp4&vprv=1&prv=1&dur=76.393&lmt=1592790866431162&mt=1592791563&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIgW7ETgnX-Q5lUtksze3jk1j-q1_gT6gOx8gokXIYZtvoCIQDr6Xt17qaBUUHRVsYW26hOaSgatOUV5FHP0-rw3c0CZQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AG3C_xAwRAIgb5D8eWhVNxK1RFBmoQO-LRsNSMF_IpCGoodrnv03ujUCID-1erRoy0NyNErVkDnvTpE7kj2EM-byY_H4T2cds7Ku&cpn=iLKzVxdif5J7ydbt&c=WEB_EMBEDDED_PLAYER&cver=20200618";

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
                width: "100%",
                objectFit: "cover",
                borderRadius: "13px",
              }}
              src={link}
            ></video>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Video;
