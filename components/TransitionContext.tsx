'use client';

import { createContext, useContext, useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

type Ctx = {
  isTransitioning: boolean;
  navigateTo: (href: string) => void;
  handleMidpoint: () => void;
  handleComplete: () => void;
};

const TransitionCtx = createContext<Ctx | null>(null);

export function TransitionContextProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const targetRef = useRef<string>('');
  const midFiredRef = useRef(false);

  const navigateTo = useCallback((href: string) => {
    if (isTransitioning) return;
    if (typeof window !== 'undefined' && window.location.pathname === href) return;
    targetRef.current = href;
    midFiredRef.current = false;
    setIsTransitioning(true);
    // Safety fallback: if the 3D canvas fails, navigate directly after 2.5s
    setTimeout(() => {
      if (!midFiredRef.current) {
        router.push(href);
        setIsTransitioning(false);
      }
    }, 2500);
  }, [isTransitioning, router]);

  const handleMidpoint = useCallback(() => {
    midFiredRef.current = true;
    router.push(targetRef.current);
  }, [router]);

  const handleComplete = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  return (
    <TransitionCtx.Provider value={{ isTransitioning, navigateTo, handleMidpoint, handleComplete }}>
      {children}
    </TransitionCtx.Provider>
  );
}

export function useTransition() {
  const ctx = useContext(TransitionCtx);
  if (!ctx) throw new Error('useTransition must be used inside <TransitionContextProvider>');
  return ctx;
}
