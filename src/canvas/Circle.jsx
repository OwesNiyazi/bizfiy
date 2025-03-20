import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as THREE from "three";

const Circle = () => {
  const containerRef = useRef(null); 
  useEffect(() => {
    // Scene Setup
    const scene = new THREE.Scene();

    // Camera Setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Gradient Circle Setup
    const geometry = new THREE.CircleGeometry(2, 64);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(0x4682b6) }, // Blue
        color2: { value: new THREE.Color(0x00f3) }, // Green
        color3: { value: new THREE.Color(0xffffff) }, // White
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;

        void main() {
          float gradient = vUv.y;
          vec3 color = mix(color1, color2, gradient);
          color = mix(color, color3, pow(gradient, 2.0));
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      transparent: true,
    });

    const circle = new THREE.Mesh(geometry, material);
    scene.add(circle);

    // GSAP Animation for Circle Scale
    gsap.to(circle.scale, {
      x: 1.2,
      y: 1.2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      circle.rotation.z += 0.02; // Rotate the circle
      renderer.render(scene, camera);
    };

    animate();

    // Handle Window Resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on Component Unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute w-full h-full top-0 left-0 pointer-events-none blur-lg"
    ></div>
  );
};

export default Circle;
