import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ping from "../../Assets/ping.png";
import netflix  from "../../Assets/netflix.png";
import editor from "../../Assets/osms.png";
import chess from "../../Assets/Projects/Chess.png";
import compiler from "../../Assets/compiler.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="Chess Game"
              description="A fully interactive chess game built using Vanilla JavaScript, designed to simulate real-world chess rules and mechanics.Move validation, turn-based gameplay, and game-over detection."
              ghLink="https://github.com/hastimovaliya55/Chess_game.git"
              demoLink="https://chess-game-jzc8.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={compiler}
              isBlog={false}
              title="Online Compiler"
              description="CodoFile is a MERN stack-based online compiler that supports Python, JavaScript, Dart, and HTML/CSS. It includes voice-to-code and image-to-code (OCR) features, with a clean React UI for writing, running, and downloading code. Deployed on Netlify and Render."
              ghLink="https://github.com/hastimovaliya55/online_compiler.git"
              demoLink="https://codefusion11.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="OSMS"
              description="OSMS (Online Service Management System) is a web-based platform that allows users to submit and track service requests while admins manage technicians and resolve complaints. It features user authentication, request tracking, and a simple admin panel for efficient service handling."
              ghLink="https://github.com/hastimovaliya55/open-service-management-system.git"
                        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ping}
              isBlog={false}
              title="Ping Pong Brick Breaker Game"
              description="Ping Pong Game is a browser-based brick breaker game built with HTML5 Canvas and JavaScript. It features paddle control, ball physics, collision detection, scoring, and level progression with smooth animations."
              ghLink="https://github.com/hastimovaliya55/break_bricks.git"
              demoLink="https://hastimovaliya55.github.io/break_bricks/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="Netflix Clone is a front-end web app built with React that mimics the look and feel of Netflix. It fetches movie data using the TMDB API and features movie thumbnails, trailers, categories, and a responsive UI for browsing content."
               ghLink="https://github.com/hastimovaliya55/netflix.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
