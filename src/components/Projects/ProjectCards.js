import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaEye } from "react-icons/fa"; // Import icon for 'View Project'
import './ProjectCards.css';  // Import custom CSS for styling

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className="project-card-img"
      />
      <Card.Body className="project-card-body">
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Text className="project-card-description">
          {props.description}
        </Card.Text>
        <div className="project-card-buttons">
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="project-card-button view-project-button"
            >
              <FaEye /> &nbsp; {/* Use the 'FaEye' icon */}
              {"View Project"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
