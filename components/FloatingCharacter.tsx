'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useTransition } from './TransitionContext';

/**
 * The 3D character with a gentle bob + sway.
 * No animation clip — pure sine-wave float.
 *
 * Rotation fix: The GLB's model forward axis is +X.
 * To face the camera (at +Z) we need rotation.y ≈ Math.PI / 2.
 * We bake in a slight outward angle (-0.18 rad) so it's a ¾ view,
 * then gently oscillate ±0.07 rad around that base.
 */
function FloatingModel() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/wuheihei_bookanim.glb');
  const elapsed = useRef(0);
  const fixed = useRef(false);

  // Fix material colours once
  if (!fixed.current) {
    fixed.current = true;
    scene.traverse((o: any) => {
      if (!o.isMesh || !o.material) return;
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      mats.forEach((m: any) => {
        m.toneMapped = false;
        if (m.map) m.map.colorSpace = THREE.SRGBColorSpace;
        const isWhiteish =
          m.color && m.color.r > 0.95 && m.color.g > 0.95 && m.color.b > 0.95;
        if (!m.map && isWhiteish) {
          m.color = new THREE.Color('#e7d9b8');
          m.roughness = 0.85;
          m.metalness = 0.0;
        }
        m.needsUpdate = true;
      });
    });
  }

  // Base rotation: Math.PI / 2 points +X forward toward camera.
  // Subtract 0.18 rad for a slight ¾ angle that looks charming.
  const BASE_Y = Math.PI / 2 - 0.18;

  useFrame((_, dt) => {
    elapsed.current += dt;
    if (group.current) {
      // Vertical bob
      group.current.position.y = -1.55 + Math.sin(elapsed.current * 1.15) * 0.09;
      // Gentle left-right head sway — oscillating around the forward-facing base
      group.current.rotation.y = BASE_Y + Math.sin(elapsed.current * 0.52) * 0.07;
    }
  });

  return (
    <primitive
      ref={group}
      object={scene}
      scale={2.15}
      position={[0.1, -1.55, 0]}
      rotation={[0, BASE_Y, 0]}
    />
  );
}

/**
 * Persistent floating character — fixed bottom-right corner.
 * Hidden only during page transitions (unmounted so the GLB is free
 * for TransitionCanvas). Visible on ALL routes including home now
 * that the home page no longer has a competing 3D canvas.
 */
export default function FloatingCharacter() {
  const { isTransitioning } = useTransition();

  if (isTransitioning) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        bottom: 0,
        right: 18,
        width: 150,
        height: 180,
        zIndex: 450,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 38 }}
        gl={{ alpha: true, antialias: true, toneMapping: THREE.NoToneMapping }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 4, 2]} intensity={0.65} />
        <directionalLight position={[-2, 1, -1]} intensity={0.2} color="#c4d58f" />
        <FloatingModel />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/wuheihei_bookanim.glb');
