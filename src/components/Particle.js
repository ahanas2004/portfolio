import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 80, // Number of particles
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: true,
            distance: 150, // Distance for lines to connect particles
            color: "#00b894", // Color of the lines (greenish-blue)
            opacity: 0.2, // Lower opacity for a subtler effect
            width: 2, // Width of lines
          },
          move: {
            enable: true,
            speed: 3, // Moderate speed to mimic electron movement
            direction: "none", // Random movement
            out_mode: "out",
            random: true, // Enable random movement patterns
            straight: false,
            bounce: false,
          },
          size: {
            value: 3, // Size of particles (electron-like)
            random: true, // Random size for particles
            anim: {
              enable: true,
              speed: 5, // Speed of size animation
              size_min: 1,
              sync: false,
            },
          },
          opacity: {
            value: 0.6, // Increased opacity for better visibility
            anim: {
              enable: true,
              speed: 2,
              opacity_min: 0.1,
              sync: false,
            },
          },
          shape: {
            type: "circle", // Use circle shapes for particles
            stroke: {
              width: 0, // Remove stroke
              color: "#ffffff", // Color of stroke
            },
            image: {
              src: "https://example.com/electron.png", // Optional: Use a custom electron image
              width: 32,
              height: 32,
            },
          },
          color: {
            value: "#4c6ef5", // Color for particles (blue for electrons)
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab", // Grab effect on hover
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 1, // Increase opacity on hover
              },
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
