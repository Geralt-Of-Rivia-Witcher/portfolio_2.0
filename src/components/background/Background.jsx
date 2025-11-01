import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import "./backgroud.styles.css";

export const Background = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
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
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 3 },
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
              speed: 1.6,
              outModes: { default: "out" },
              random: true,
              straight: false,
            },
            number: { density: { enable: true, area: 900 }, value: 55 },
            opacity: { value: 0.6 },
            shape: { type: ["circle", "triangle"] },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default Background;
