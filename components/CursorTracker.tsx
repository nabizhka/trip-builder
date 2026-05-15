'use client';

import { useEffect } from 'react';

export default function CursorTracker() {
  useEffect(() => {
    const dot  = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    const glow = document.getElementById('cursor-glow');
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId: number;
    let alive = true;

    // Show the cursor once the mouse moves for the first time
    const show = () => {
      dot.style.opacity  = '1';
      ring.style.opacity = '0.45';
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      if (glow) glow.style.transform = `translate(${mx - 140}px, ${my - 140}px)`;
      show();
    };

    const onLeave = () => {
      dot.style.opacity  = '0';
      ring.style.opacity = '0';
    };

    // Ring lags behind — smooth with lerp
    const tick = () => {
      if (!alive) return;
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      ring.style.transform = `translate(${rx - 19}px, ${ry - 19}px)`;
      rafId = requestAnimationFrame(tick);
    };

    // Hover state for interactive elements
    const enter = () => document.body.classList.add('cursor-hover');
    const leave = () => document.body.classList.remove('cursor-hover');

    const wireLinks = () => {
      document.querySelectorAll('a, button, [role="button"], .tile, .chip').forEach(el => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
      });
    };

    wireLinks();
    const mo = new MutationObserver(wireLinks);
    mo.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);

    rafId = requestAnimationFrame(tick);

    return () => {
      alive = false;
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
      mo.disconnect();
    };
  }, []);

  return null;
}
