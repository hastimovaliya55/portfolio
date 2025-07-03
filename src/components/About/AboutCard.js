import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
  <Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hi Everyone, I am <span className="purple">Hasti Movaliya</span>
        {" "}from <span className="purple">Surat, India</span>.
          <br />
          I am currently a fourth-year Computer Engineering student at Birla Vishvakarma Mahavidyalaya.
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> Reading Books
        </li>
        <li className="about-activity">
          <ImPointRight /> Playing Badminton
        </li>
        <li className="about-activity">
          <ImPointRight /> Travelling
        </li>
      </ul>

      <p style={{ color: "rgb(155 126 172)" }}>
        "Code with passion, learn with curiosity, and live with purpose!"
      </p>
      <footer className="blockquote-footer">Hasti Movaliya</footer>
    </blockquote>
  </Card.Body>
</Card>

  );
}

export default AboutCard;
