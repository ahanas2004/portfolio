import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import myImage from "../../Assets/anas1.jpg"; // Adjust the path as necessary

// Define the GlowingCircleSVG component
const GlowingCircleSVG = () => {
    return (
        <svg
            width="100%" // Set width to 100% for responsiveness
            height="auto" // Set height to auto to maintain aspect ratio
            viewBox="0 0 300 300" // Adjusted viewBox
            style={{ filter: "drop-shadow(0 0 50px rgba(128, 0, 128, 1))" }}
        >
            <circle cx="150" cy="150" r="150" fill="url(#gradient)" />
            <clipPath id="clip-circle">
                <circle cx="150" cy="150" r="150" />
            </clipPath>
            <image
                href={myImage} // Use the imported image here
                x="0"
                y="0"
                width="300" // Match the width of the SVG
                height="300" // Match the height of the SVG
                clipPath="url(#clip-circle)"
                preserveAspectRatio="xMidYMid slice"
            />
        </svg>
    );
};

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hi There!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> AHAMED ANAS </strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <GlowingCircleSVG /> {/* Use the SVG here */}
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Home2 />
        </section>
    );
}

export default Home;
