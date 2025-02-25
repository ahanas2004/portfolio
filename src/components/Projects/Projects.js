import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import "./Project.css"; // Importing custom CSS for improved styling

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p className="project-description">
        Below are some recent projects I have contributed to.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ruam-Insurance"
              description="A comprehensive insurance website built to offer various insurance products with a focus on user experience, responsiveness, and seamless navigation."
              demoLink="https://ruaminsurance.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Personal Portfolio"
              description="This is my previous personal portfolio, showcasing my work, skills, and achievements. Built with HTML, CSS, and JavaScript, it provides insights into my projects and design preferences."
              demoLink="https://ahamed-anas.neocities.org/portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Hotel Room Booking Site"
              description="An interactive hotel room booking page designed with animations for an engaging user experience. Features include a responsive layout, real-time availability, and seamless booking process."
              demoLink="https://ahamed-anas.neocities.org/hotel%20page/HOTEL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="E-Commerce Landing PageI"
              description="A visually appealing eCommerce landing page featuring a responsive design and smooth animations. Key functionalities include product showcasing, user-friendly navigation, and seamless checkout experience."
              demoLink="anas.neocities.org/landing%20page"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Vouge Vault (my first site)"
              description="This is the first website I built, focusing on eCommerce. It features a responsive design, product listings, and a smooth user experience. The site showcases my ability to create functional and attractive online stores."
              demoLink="https://plant49-ai.herokuapp.com/"

              // No demoLink provided
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
