'use client';

import { Canvas } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import * as THREE from 'three';
import { WuheiheiCharacter } from './WuheiheiCharacter';

function Loading() {
  return (
    <mesh>
      <sphereGeometry args={[0.4, 16, 16]} />
      <meshBasicMaterial color="#98B05A" wireframe />
    </mesh>
  );
}

export default function HomeHero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setPointer({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div
      className="hero-canvas-container"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <Canvas
        camera={{ position: [0, 0.4, 4.2], fov: 45 }}
        gl={{ alpha: true, antialias: true, toneMapping: THREE.NoToneMapping }}
        style={{ background: 'transparent' }}
      >
        {/* Three-point lighting — warm key, cool sage rim, soft fill */}
        <ambientLight intensity={0.65} />
        <directionalLight position={[3, 4, 4]}   intensity={1.1}  color="#fff4d6" />
        <directionalLight position={[-3, 3, -2]}  intensity={0.55} color="#c4d58f" />
        <directionalLight position={[0, -2, 3]}   intensity={0.25} color="#ffe4c4" />

        <Suspense fallback={<Loading />}>
          <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.3}>
            <WuheiheiCharacter pointer={pointer} scale={1.6} position={[0, -1.0, 0]} />
          </Float>
          <ContactShadows
            position={[0, -1.6, 0]}
            opacity={0.3}
            scale={5}
            blur={2.8}
            far={3}
            color="#2a2418"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
