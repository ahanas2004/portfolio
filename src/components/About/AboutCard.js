import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import './AboutCard.css'; // Ensure you have a CSS file for custom styles

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-text">
            Hi Everyone, I am <span className="purple">Ahamed Anas </span>
            <br />
            <br />
            I am currently pursuing B.Tech Information Technology at KCG College of Technology.
            <br />
            <br />
            I have completed my 6 months of internship from Tachyon Robotics and 1 month of internship from Encryptix
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="activity-list">
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
