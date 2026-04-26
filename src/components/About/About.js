import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css"; // Ensure this CSS file exists

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="section-row" style={{ justifyContent: "center", alignItems: "center", padding: "10px" }}>
          <Col
            md={7}
            sm={12}
            xs={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
            data-aos="fade-right"
          >
            <h1
              className="responsive-heading"
              style={{
                fontSize: "2.1em",
                paddingBottom: "20px",
                fontWeight: "600",
                textAlign: "center",
                fontFamily: "monospace",
              }}
            >
              Acknowledge My <strong className="highlight-text">Professional Profile</strong>
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={5}
            sm={12}
            xs={12}
            style={{
              paddingBottom: "50px",
              textAlign: "center",
            }}
            className="about-img"
            data-aos="fade-left"
          >
            <img src={laptopImg} alt="about" className="img-fluid" style={{ maxWidth: "100%" }} />
          </Col>
        </Row>

        <h1 className="project-heading" data-aos="fade-up">
          Professional <strong className="highlight-text">Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading" data-aos="fade-up">
          <strong className="highlight-text">Tools</strong> I Use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
