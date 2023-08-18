import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import CLOUDS, { Instance } from "vanta/dist/vanta.clouds2.min";

const Background = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<Instance | null>(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1,
          speed: 0.5,
          texturePath: "images/noise.png",
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div className="!absolute h-full w-full" ref={vantaRef}></div>;
};

export default Background;
