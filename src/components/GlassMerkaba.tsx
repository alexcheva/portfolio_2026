import { Edges, Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";
import { MathUtils } from "three";

function QuartzFractures() {
  return (
    <group>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array([
                -0.55, 0.35, 0.25, 0.45, -0.2, -0.15,
                -0.25, -0.55, 0.35, 0.35, 0.5, -0.25,
                -0.7, 0.05, -0.2, 0.1, 0.7, 0.25,
                0.2, -0.75, -0.15, 0.65, 0.1, 0.3,
                -0.35, 0.15, 0.55, 0.5, 0.35, -0.35,
              ]),
              3,
            ]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#e0f2fe"
          transparent
          opacity={0.42}
        />
      </lineSegments>

      <lineSegments rotation={[0.4, 0.9, 0.2]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array([
                -0.45, -0.25, 0.15, 0.35, 0.15, -0.25,
                -0.15, 0.6, -0.1, 0.55, -0.45, 0.2,
                -0.6, 0.25, 0.3, 0.2, -0.55, -0.25,
              ]),
              3,
            ]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.28}
        />
      </lineSegments>
    </group>
  );
}

export function GlassMerkaba() {
  const groupRef = useRef<Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!groupRef.current) return;

    groupRef.current.rotation.x = MathUtils.lerp(
      groupRef.current.rotation.x,
      0.18 - pointer.y * 0.22,
      0.06,
    );

    groupRef.current.rotation.y = MathUtils.lerp(
      groupRef.current.rotation.y,
      0.7 + pointer.x * 0.35,
      0.06,
    );
  });

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.35}>
      <group ref={groupRef} rotation={[0.18, 0.7, 0]} scale={1.45}>
        {/* Upward tetrahedron */}
        <mesh rotation={[0, Math.PI / 4, 0]}>
          <tetrahedronGeometry args={[1.35, 0]} />
          <MeshTransmissionMaterial
            color="#ffffff"
            transmission={1}
            thickness={0.9}
            roughness={0.02}
            ior={2.35}
            chromaticAberration={0.08}
            anisotropicBlur={0.08}
            distortion={0.12}
            distortionScale={0.35}
            temporalDistortion={0.08}
            transparent
            opacity={0.42}
          />
          <Edges color="#f8fafc" scale={1.01} />
        </mesh>

        {/* Downward tetrahedron */}
        <mesh rotation={[Math.PI, Math.PI / 4, 0]}>
          <tetrahedronGeometry args={[1.35, 0]} />
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0.015}
            metalness={0}
            transmission={0.96}
            thickness={1.2}
            ior={2.45}
            transparent
            opacity={0.32}
            clearcoat={1}
            clearcoatRoughness={0.01}
            attenuationColor="#dbeafe"
            attenuationDistance={1.8}
          />
          <Edges color="#fb923c" scale={1.01} />
        </mesh>
        <QuartzFractures />
      </group>
    </Float>
  );
}
