import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import zelouris from "../../Assets/Projects/zelouris.png";
import hcs from "../../Assets/Projects/hcs.png";
import sprexzox from "../../Assets/Projects/sprexzox.png";
import logistics from "../../Assets/Projects/logistics.png";
import express from "../../Assets/Projects/express.png";
import goldenstar from "../../Assets/Projects/goldern star.png";
import ruam from "../../Assets/Projects/ruam.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import first from "../../Assets/Projects/first.png";
import hotel from "../../Assets/Projects/hotel.png";
import loan from "../../Assets/Projects/loan.png";
import ids from "../../Assets/Projects/IDS.png";
import "./Project.css"; 

const projectData = [
  {
    imgPath: zelouris,
    title: "Zelouris",
    description: "An AI-powered creative agency website built as a full React + Vite project with separate pages and component-level CSS.",
    ghLink: "https://github.com/ahanas2004/ZELOURIS",
    demoLink: "https://zelouris.netlify.app/",
  },
  {
    imgPath: hcs,
    title: "HYDRO-CLEAN",
    description: "A production-ready Next.js 14 lead generation website for Hydroclean Systems Pvt. Ltd., featuring an ROI calculator and Resend API integration.",
    ghLink: "https://github.com/ahanas2004/HYDRO-CLEAN",
    demoLink: "https://hydro-clean-alpha.vercel.app/",
  },
  {
    imgPath: sprexzox,
    title: "Sprezox-Webapp",
    description: "A modern React + Vite web application template featuring HMR, ESLint integration, and a clean UI architecture.",
    ghLink: "https://github.com/ahanas2004/sprezox-webapp",
    demoLink: "https://www.sprezox.com/",
  },
  {
    imgPath: logistics,
    title: "New-Line-Logistics",
    description: "A full-featured React + Vite logistics website for Newline Express Logistics (NEXL), featuring animated hero sections and interactive quote forms.",
    ghLink: "https://github.com/ahanas2004/new-line-logistics",
    demoLink: "https://newlineexpress.netlify.app/",
  },
  {
    imgPath: express,
    title: "Newline-Express",
    description: "A high-performance logistics web application for Newline Express, optimized for speed and user engagement.",
    ghLink: "https://github.com/ahanas2004/newline-express-",
    demoLink: "https://newline-express-iqe3.vercel.app/",
  },
  {
    imgPath: goldenstar,
    title: "Golden Star Logistics",
    description: "A comprehensive SCSS-based testing and verification suite for Golden Star Logistics protocol services and UI components.",
    ghLink: "https://github.com/ahanas2004/gsl-test",
    demoLink: "https://goldenstar.co.in/",
  },
  {
    imgPath: ruam,
    title: "RUAM-INSURANCE",
    description: "A professional insurance services website for Ruam Insurance, featuring a clean, responsive layout and policy information.",
    ghLink: "https://github.com/ahanas2004/RUAM-INSURANCE",
    demoLink: "https://ruaminsurance.in/",
  },
  {
    imgPath: portfolio,
    title: "Portfolio",
    description: "My professional developer portfolio built with React and interactive animations, showcasing my full engineering journey.",
    ghLink: "https://github.com/ahanas2004/portfolio",
    demoLink: "https://ahamed-anas-portfolio.netlify.app/",
  },
  {
    imgPath: first,
    title: "First-Portfolio",
    description: "The foundational version of my digital presence, built with CSS to explore web layout and styling fundamentals.",
    ghLink: "https://github.com/ahanas2004/first-portfolio",
    demoLink: "https://ahamed-anas.neocities.org/portfolio/",
  },
  {
    imgPath: hotel,
    title: "Hotel",
    description: "An interactive and responsive hotel booking system featuring CSS-driven animations and real-time room availability.",
    ghLink: "https://github.com/ahanas2004/hotel",
    demoLink: "https://ahamed-anas.neocities.org/hotel%20page/HOTEL",
  },
  {
    imgPath: loan,
    title: "Loan Prediction",
    description: "An intelligent loan eligibility screening and advisory system powered by Machine Learning, OCR-based document verification, and Explainable AI.",
    ghLink: "https://github.com/ahanas2004/LOAN-PREDICTION",
    demoLink: "",
  },
  {
    imgPath: ids,
    title: "Intrusion Detection System",
    description: "An AI-powered Intrusion Detection System that uses face recognition to detect unauthorized access and sends real-time alerts via Email and Telegram.",
    ghLink: "https://github.com/ahanas2004/INDRUSION-DETECTION-SYSTEM",
    demoLink: "",
  },
  {
    imgPath: "https://opengraph.githubassets.com/1/ahanas2004/internship",
    title: "Internship",
    description: "A collection of advanced JavaScript tasks and project implementations completed during professional internship programs.",
    ghLink: "https://github.com/ahanas2004/internship",
    demoLink: "",
  },
  {
    imgPath: "https://opengraph.githubassets.com/1/ahanas2004/mood-tracker",
    title: "Mood-Tracker",
    description: "A dedicated JavaScript application designed to monitor and visualize emotional trends and daily mental well-being.",
    ghLink: "https://github.com/ahanas2004/mood-tracker",
    demoLink: "",
  },
  {
    imgPath: "https://opengraph.githubassets.com/1/ahanas2004/Encryptix-intrenship",
    title: "Encryptix-Intrenship",
    description: "A series of CSS and web development projects completed during the Encryptix internship, focusing on UI design.",
    ghLink: "https://github.com/ahanas2004/Encryptix-intrenship",
    demoLink: "",
  }
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-down">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p className="project-description" data-aos="fade-down" data-aos-delay="200">
          I have curated 15 specific projects from my GitHub. Here is the complete list with accurate details.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((project, index) => (
            <Col 
              md={4} 
              className="project-card" 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={(index % 3) * 200}
            >
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
