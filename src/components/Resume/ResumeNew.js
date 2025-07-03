import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
       <Row style={{ justifyContent: "center", position: "relative" }}>
  <Button
    variant="primary"
    href={pdf}
    target="_blank"
    style={{ maxWidth: "250px", marginTop: "10%" }}
  >
    <AiOutlineDownload />
    &nbsp;Download CV
  </Button>
</Row>

        {/* <Row className="resume" style={{ justifyContent: "center", marginTop: 20 }}>
          <iframe
            src={pdf}
            title="CV"
            width="80%"
            height="600px"
            style={{ border: "none" }}
          ></iframe>
        </Row> */}

        {/* <Row style={{ justifyContent: "center", position: "relative", marginTop: 20 }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}
      </Container>
    </div>
  );
}

export default ResumeNew;
