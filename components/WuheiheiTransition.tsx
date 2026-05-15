'use client';

import dynamic from 'next/dynamic';
import { TransitionContextProvider, useTransition } from './TransitionContext';

// Three.js canvas loaded browser-only — never runs on the server
const TransitionCanvas = dynamic(() => import('./TransitionCanvas'), { ssr: false });

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  return (
    <TransitionContextProvider>
      <TransitionInner>{children}</TransitionInner>
    </TransitionContextProvider>
  );
}

function TransitionInner({ children }: { children: React.ReactNode }) {
  const { isTransitioning } = useTransition();
  return (
    <>
      {children}
      {isTransitioning && <TransitionCanvas />}
    </>
  );
}

export function TransitionLink({
  href, children, className,
}: { href: string; children: React.ReactNode; className?: string }) {
  const { navigateTo } = useTransition();
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => { e.preventDefault(); navigateTo(href); }}
    >
      {children}
    </a>
  );
}
