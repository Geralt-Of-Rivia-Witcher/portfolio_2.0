import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import "./backgroud.styles.css";

export const Background = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  const isMobile = window.innerWidth < 768;
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: { value: "#050507" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: false, mode: "push" },
              onHover: { enable: !isMobile, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 2 },
              repulse: { distance: 160, duration: 0.4 },
            },
          },
          particles: {
            color: { value: ["#00ffe1", "#ff3cac", "#7afcff"] },
            links: {
              color: "#00ffe1",
              distance: 160,
              enable: true,
              opacity: 0.08,
              width: 1,
            },
            collisions: { enable: false },
            move: {
              enable: true,
              speed: isMobile ? 0.7 : 1,
              outModes: { default: "out" },
              random: true,
              straight: false,
            },
            number: {
              density: { enable: true, area: 900 },
              value: isMobile ? 26 : 45,
            },
            opacity: { value: 0.4 },
            shape: { type: ["circle"] },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default Background;
