"use client";

import { GlassMerkaba } from "@/components/GlassMerkaba";
import { Canvas } from "@react-three/fiber";

export function MerkabaScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 42 }}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 6]} intensity={2.4} />
      <pointLight position={[-3, -2, 4]} intensity={1.4} color="#fb923c" />
      <pointLight position={[2, 1, 3]} intensity={1.2} color="#93c5fd" />

      <GlassMerkaba />
    </Canvas>
  );
}
