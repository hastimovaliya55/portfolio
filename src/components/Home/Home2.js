import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/_p";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
       <Row>
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
      LET ME <span className="purple"> INTRODUCE </span> MYSELF
    </h1>
    <p className="home-about-body">
      I'm a passionate <b className="purple">MERN Stack Developer</b> who enjoys building full-stack web applications and solving real-world problems through code.
      <br />
      <br />
      I also have a strong interest in <b className="purple">Competitive Programming</b>, especially using <b className="purple">C++</b>, where I sharpen my problem-solving and algorithmic thinking.
      <br />
      <br />
      I'm well-versed in core computer science subjects like <b className="purple">Data Structures, Algorithms, Operating Systems, and Computer Architecture</b>, which form a solid foundation for my work.
      <br />
      <br />
      I'm also exploring the exciting world of <b className="purple">Machine Learning</b> and have hands-on experience with <b className="purple">ASP.NET</b> for building robust backend systems.
      <br />
      <br />
      My stack includes <b className="purple">Node.js</b>, <b className="purple">React.js</b>, <b className="purple">MongoDB</b>, and <b className="purple">Express.js</b>, and I enjoy working with modern tools to create impactful digital products.
    </p>
  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src="_photo.webp" className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
</Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hastimovaliya55"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  // href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                   href="https://www.linkedin.com/in/hasti-movaliya-0a54b726a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  // href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
