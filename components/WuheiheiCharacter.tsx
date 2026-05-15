'use client';

import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WuheiheiCharacterProps {
  pointer?: { x: number; y: number };
  scale?: number;
  position?: [number, number, number];
}

export function WuheiheiCharacter({
  pointer = { x: 0, y: 0 },
  scale = 1.6,
  position = [0, -1.0, 0],
}: WuheiheiCharacterProps) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF('/wuheihei_bookanim.glb');
  const { actions, names } = useAnimations(animations, group);

  // Fix texture colour space so embedded textures render correctly
  useEffect(() => {
    scene.traverse((o: any) => {
      if (!o.isMesh || !o.material) return;
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      mats.forEach((m: any) => {
        if (m.map) m.map.colorSpace = THREE.SRGBColorSpace;
        m.needsUpdate = true;
      });
    });
  }, [scene]);

  useEffect(() => {
    if (!actions || !names.length) return;

    // Animation index 3 = hands movement (animation 4 in the viewer)
    const hands = actions[names[3]];
    // Animation 2 = "PageAction" = book page flip
    const pageFlip = actions['PageAction'];

    // Sync both animations to the same loop duration (page flip drives the speed)
    if (hands && pageFlip) {
      const ratio = pageFlip.getClip().duration / hands.getClip().duration;
      hands.setEffectiveTimeScale(ratio);
    }

    hands?.reset().fadeIn(0.3).play();
    pageFlip?.reset().fadeIn(0.3).play();

    return () => {
      hands?.fadeOut(0.3);
      pageFlip?.fadeOut(0.3);
    };
  }, [actions, names]);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    // Gentle bob + mouse-tracking rotation
    group.current.position.y = position[1] + Math.sin(t * 0.8) * 0.06;
    // -Math.PI/2 faces her toward camera, -0.4 gives a natural 3/4 angle to the other side
    group.current.rotation.y = -Math.PI / 2 - 0.4 + Math.sin(t * 0.4) * 0.18 + pointer.x * 0.35;
    group.current.rotation.x = -pointer.y * 0.15;
  });

  return (
    <primitive
      ref={group}
      object={scene}
      scale={scale}
      position={position}
    />
  );
}

useGLTF.preload('/wuheihei_bookanim.glb');
