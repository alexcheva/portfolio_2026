"use client";

import { Stars } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group } from "three";
import { MathUtils, AdditiveBlending, Texture, CanvasTexture } from "three";

function createNebulaBackdropTexture() {
  const size = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext("2d");

  if (!context) {
    return new Texture();
  }

  context.clearRect(0, 0, size, size);

  const clouds = [
    { x: 0.34, y: 0.45, r: 0.34, color: "rgba(147, 51, 234, 0.22)" },
    { x: 0.48, y: 0.5, r: 0.28, color: "rgba(217, 70, 239, 0.18)" },
    { x: 0.58, y: 0.42, r: 0.3, color: "rgba(59, 130, 246, 0.16)" },
    { x: 0.42, y: 0.6, r: 0.24, color: "rgba(244, 114, 182, 0.13)" },
    { x: 0.66, y: 0.55, r: 0.22, color: "rgba(125, 211, 252, 0.1)" },
    { x: 0.72, y: 0.38, r: 0.15, color: "rgba(34, 197, 94, 0.08)" },
  ];

  for (const cloud of clouds) {
    const gradient = context.createRadialGradient(
      cloud.x * size,
      cloud.y * size,
      0,
      cloud.x * size,
      cloud.y * size,
      cloud.r * size,
    );

    gradient.addColorStop(0, cloud.color);
    gradient.addColorStop(0.45, cloud.color.replace(/0\.\d+\)/, "0.06)"));
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);
  }

  const imageData = context.getImageData(0, 0, size, size);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3];

    if (alpha === 0) continue;

    const noise = 0.82 + Math.random() * 0.32;

    data[i] = Math.min(255, data[i] * noise);
    data[i + 1] = Math.min(255, data[i + 1] * noise);
    data[i + 2] = Math.min(255, data[i + 2] * noise);
    data[i + 3] = Math.min(255, alpha * (0.85 + Math.random() * 0.25));
  }

  context.putImageData(imageData, 0, 0);

  const texture = new CanvasTexture(canvas);
  texture.needsUpdate = true;

  return texture;
}

function ParallaxRig({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y = MathUtils.lerp(
      groupRef.current.rotation.y,
      pointer.x * 0.8,
      0.04,
    );

    groupRef.current.rotation.x = MathUtils.lerp(
      groupRef.current.rotation.x,
      -pointer.y * 0.5,
      0.04,
    );
  });

  return <group ref={groupRef}>{children}</group>;
}

function NebulaBackdrop() {
  const texture = useMemo(() => createNebulaBackdropTexture(), []);

  return (
    <mesh position={[0, 0, -9]} scale={[14, 8, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={1}
        depthWrite={false}
        depthTest={false}
        blending={AdditiveBlending}
      />
    </mesh>
  );
}

export function GalaxyScene() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <color attach="background" args={["#020617"]} />

        <ambientLight intensity={0.4} />

        <ParallaxRig>
          <NebulaBackdrop />
          <Stars
            radius={200}
            depth={250}
            count={2500}
            factor={4}
            saturation={0}
            fade
            speed={0.4}
          />
        </ParallaxRig>
      </Canvas>
    </div >
  );
}