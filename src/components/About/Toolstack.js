import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  // SiVisualstudiocode, // might error
  SiPostman,
  
  SiOpencv,
  SiFigma,
  SiGithub,
 
  // SiMacos, // this might not exist
} from "react-icons/si";


import { SiXampp} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
    </Row>
  );
}

export default Toolstack;
