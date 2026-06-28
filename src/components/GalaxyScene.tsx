"use client";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export function GalaxyScene() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <color attach="background" args={["#020617"]} />

        <ambientLight intensity={0.4} />

        <Stars
          radius={80}
          depth={50}
          count={2500}
          factor={4}
          saturation={0}
          fade
          speed={0.4}
        />
      </Canvas>
    </div>
  );
}