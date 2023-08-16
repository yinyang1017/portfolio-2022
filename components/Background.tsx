import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import { useCallback } from "react";
import type { Engine, Container } from "tsparticles-engine";

const Background = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // await console.log(container)
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        pauseOnBlur: false,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 8,
              size: 6,
              speed: 3,
            },
          },
        },
        particles: {
          color: {
            value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"],
          },
          links: {
            color: "random",
            distance: 45,
            enable: true,
            opacity: 0.8,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            speed: 1,
          },
          number: {
            value: 200,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
            value: { min: 0.3, max: 0.8 },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 1,
          },
        },
        polygon: {
          draw: {
            enable: true,
            lineColor: "rgba(255,255,255,0.2)",
            lineWidth: 0.5,
          },
          enable: true,
          move: {
            radius: 5,
          },
          position: {
            x: 30,
            y: 10,
          },
          inline: {
            arrangement: "equidistant",
          },
          scale: 1.5,
          type: "inline",
          url: "https://particles.js.org/images/google.svg",
        },
        background: {
          color: "#000000",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
    />
  );
};

export default Background;
