'use client';

import { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

function Character() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF('/wuheihei_bookanim.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Fix colors
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

    // Play first available clip as a looping idle
    const clips = Object.values(actions);
    if (clips[0]) {
      clips[0].reset().setLoop(THREE.LoopRepeat, Infinity).play();
    }
  }, [actions, scene]);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={2.0}
      position={[0, -1.6, 0]}
      rotation={[0, Math.PI / 8, 0]}
    />
  );
}

export default function AboutCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 4], fov: 42 }}
      gl={{ alpha: true, antialias: true, toneMapping: THREE.NoToneMapping }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 5, 2]} intensity={0.6} />
      <directionalLight position={[-3, 2, -2]} intensity={0.2} color="#c4d58f" />
      <Character />
    </Canvas>
  );
}

useGLTF.preload('/wuheihei_bookanim.glb');
