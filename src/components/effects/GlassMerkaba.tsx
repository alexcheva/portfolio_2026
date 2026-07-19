import { Edges, Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group } from "three";
import { BufferGeometry, Float32BufferAttribute, MathUtils } from "three";

function createTetrahedronGeometry(inverted = false) {
  const apexY = 1.18;
  const baseY = apexY / 3;
  const height = apexY + baseY;
  const radius = height / Math.SQRT2;
  const frontZ = radius / 2;
  const rearZ = -radius;
  const sideX = (Math.sqrt(3) / 2) * radius;

  const apex = inverted ? [0, -apexY, 0] : [0, apexY, 0];
  const base = inverted
    ? [
        [-sideX, baseY, -frontZ],
        [sideX, baseY, -frontZ],
        [0, baseY, radius],
      ]
    : [
        [-sideX, -baseY, frontZ],
        [sideX, -baseY, frontZ],
        [0, -baseY, rearZ],
      ];

  const vertices = new Float32Array([
    apex[0],
    apex[1],
    apex[2],
    base[0][0],
    base[0][1],
    base[0][2],
    base[1][0],
    base[1][1],
    base[1][2],
    base[2][0],
    base[2][1],
    base[2][2],
  ]);

  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));
  geometry.setIndex([0, 1, 2, 0, 2, 3, 0, 3, 1, 1, 3, 2]);
  geometry.computeVertexNormals();

  return geometry;
}

function CrystalTetrahedron({
  inverted = false,
  edgeColor,
  opacity,
}: {
  inverted?: boolean;
  edgeColor: string;
  opacity: number;
}) {
  const geometry = useMemo(() => createTetrahedronGeometry(inverted), [inverted]);

  return (
    <mesh geometry={geometry}>
      <MeshTransmissionMaterial
        color="#ffffff"
        transmission={1}
        thickness={0.9}
        roughness={0.018}
        ior={2.35}
        chromaticAberration={0.08}
        anisotropicBlur={0.08}
        distortion={0.12}
        distortionScale={0.35}
        temporalDistortion={0.08}
        transparent
        opacity={opacity}
      />
      <Edges color={edgeColor} scale={1.01} />
    </mesh>
  );
}

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
  const { pointer, size } = useThree();
  const minCanvasSize = Math.min(size.width, size.height);
  const merkabaScale =
    minCanvasSize < 340
      ? 0.98
      : minCanvasSize < 420
        ? 1.12
        : minCanvasSize < 560
          ? 1.28
          : 1.5;

  useFrame(() => {
    if (!groupRef.current) return;

    groupRef.current.rotation.x = MathUtils.lerp(
      groupRef.current.rotation.x,
      0.04 - pointer.y * 0.18,
      0.06,
    );

    groupRef.current.rotation.y = MathUtils.lerp(
      groupRef.current.rotation.y,
      0.04 + pointer.x * 0.24,
      0.06,
    );
  });

  return (
    <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.3}>
      <group ref={groupRef} rotation={[0.04, 0.04, 0]} scale={merkabaScale}>
        <CrystalTetrahedron edgeColor="#f8fafc" opacity={0.42} />
        <CrystalTetrahedron inverted edgeColor="#fb923c" opacity={0.36} />
        <QuartzFractures />
      </group>
    </Float>
  );
}
