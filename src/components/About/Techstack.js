import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiBootstrap,
  DiHtml5,
  DiCss3Full,
  DiAndroid,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiExpress
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <DiCss3Full />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <DiBootstrap/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <DiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <SiExpress />
      </Col>
    </Row>
  );
}

export default Techstack;
