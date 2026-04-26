import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import './ProjectCards.css';

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
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            className="project-card-button"
          >
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
              className="project-card-button"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
