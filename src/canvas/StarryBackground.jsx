/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const StarryBackground = () => {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "110%",
        zIndex: -23,
      }}
      camera={{ position: [0, 0, 5] }}
    >
      <ambientLight />
      <Stars />
    </Canvas>
  );
};

const Stars = () => {
  const starsRef = useRef([]);
  
  const stars = Array.from({ length: 1000 }, () => ({
    position: [
      (Math.random() - 0.5) * 20, 
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 10,
    ],
    speed: Math.random() * 0.02 + 0.01, // Random movement speed
    opacity: Math.random() * 0.5 + 0.5, // Initial opacity for twinkling
  }));

  useFrame(() => {
    starsRef.current.forEach((star, i) => {
      if (star) {
        // Move the star slightly
        star.position.z += stars[i].speed;
        if (star.position.z > 5) {
          star.position.z = -5; // Reset star position when it moves out of view
        }

        // Twinkle effect
        const newOpacity = 0.5 + 0.5 * Math.sin(Date.now() * 0.003 + i);
        star.material.opacity = newOpacity;
      }
    });
  });

  return (
    <>
      {stars.map((star, index) => (
        <mesh
          key={index}
          position={star.position}
          ref={(ref) => (starsRef.current[index] = ref)}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="white" transparent />
        </mesh>
      ))}
    </>
  );
};

export default StarryBackground;
