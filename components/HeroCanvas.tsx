'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      const targetX = state.pointer.x * 2;
      const targetY = state.pointer.y * 2;
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
    }
  });

  return (
    <mesh
      ref={meshRef}
      // eslint-disable-next-line react/no-unknown-property
      position={[0, 0, 0]}
      scale={2.5}
    >
      {/* eslint-disable-next-line react/no-unknown-property */}
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial
        color="#ffffff"
        // eslint-disable-next-line react/no-unknown-property
        wireframe
        // eslint-disable-next-line react/no-unknown-property
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
        stencil: false,
        depth: false,
      }}
    >
      <AbstractShape />
    </Canvas>
  );
}
