'use client';

import { useRef, useEffect, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { useTransition } from './TransitionContext';

/**
 * The book-flip model.
 * - Plays animations[0] (the single clip in the new GLB).
 * - Fires onMidpoint() exactly halfway through the animation → route swaps.
 * - Fires onFadeOut() once the clip finishes → overlay fades out.
 */
function FlipModel({
  onMidpoint,
  onFadeOut,
}: {
  onMidpoint: () => void;
  onFadeOut: () => void;
}) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF('/wuheihei_bookanim.glb');
  const { mixer } = useAnimations(animations, group);
  const midFired = useRef(false);
  const fadeFired = useRef(false);
  const elapsed = useRef(0);
  const clipDur = useRef(3.75); // safe fallback; overwritten from actual clip

  // Fix material colours
  useEffect(() => {
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
  }, [scene]);

  // Start the flip animation
  useEffect(() => {
    midFired.current = false;
    fadeFired.current = false;
    elapsed.current = 0;

    const clip = animations[0];
    if (!clip) return;

    clipDur.current = clip.duration;

    const action = mixer.clipAction(clip);
    action.reset().setLoop(THREE.LoopOnce, 1);
    action.clampWhenFinished = true;
    action.play();

    return () => { mixer.stopAllAction(); };
  }, [animations, mixer]);

  // Drive midpoint (50%) and fade-out (after clip ends) from the render loop
  useFrame((_, dt) => {
    elapsed.current += dt;
    const d = clipDur.current;

    if (!midFired.current && elapsed.current >= d * 0.5) {
      midFired.current = true;
      onMidpoint(); // ← route changes here
    }

    if (!fadeFired.current && elapsed.current >= d + 0.12) {
      fadeFired.current = true;
      onFadeOut(); // ← start fade-out
    }
  });

  return (
    <primitive
      ref={group}
      object={scene}
      scale={1.8}
      position={[0, -1.2, 0]}
      rotation={[0, -Math.PI / 2 - 0.4, 0]}
    />
  );
}

export default function TransitionCanvas() {
  const { handleMidpoint, handleComplete } = useTransition();
  const wrap = useRef<HTMLDivElement>(null);

  const startFadeOut = useCallback(() => {
    const el = wrap.current;
    if (!el) return;
    gsap.to(el, {
      opacity: 0,
      duration: 0.45,
      ease: 'power2.in',
      onComplete: handleComplete,
    });
  }, [handleComplete]);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    // Snap in
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.28, ease: 'power2.out' });
    // Hard safety fallback — triggers fade-out if the canvas never fires onFadeOut
    const safety = setTimeout(startFadeOut, 7000);
    return () => clearTimeout(safety);
  }, [startFadeOut]);

  return (
    <div
      ref={wrap}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        opacity: 0,
        background: 'rgba(245, 240, 224, 0.97)',
      }}
    >
      <Canvas
        camera={{ position: [0, 0.5, 4], fov: 45 }}
        gl={{ alpha: true, antialias: true, toneMapping: THREE.NoToneMapping }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.95} />
        <directionalLight position={[3, 5, 2]} intensity={0.55} />
        <directionalLight position={[-3, 2, -2]} intensity={0.25} color="#c4d58f" />
        <FlipModel onMidpoint={handleMidpoint} onFadeOut={startFadeOut} />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/wuheihei_bookanim.glb');
