"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";
import { MathUtils } from "three";

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

export function GalaxyScene() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <color attach="background" args={["#020617"]} />

        <ambientLight intensity={0.4} />

        <ParallaxRig>
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