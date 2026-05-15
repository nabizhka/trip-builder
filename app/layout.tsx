import type { Metadata } from 'next';
import './globals.css';
import { TransitionProvider } from '@/components/WuheiheiTransition';
import Nav from '@/components/Nav';
import SocialRail from '@/components/SocialRail';
import CursorTracker from '@/components/CursorTracker';
import dynamic from 'next/dynamic';

// Browser-only — Three.js must not run on the server
const FloatingCharacter = dynamic(
  () => import('@/components/FloatingCharacter'),
  { ssr: false },
);

export const metadata: Metadata = {
  title: 'wuhei·hei — portfolio',
  description: 'Feifan Li — 3D animator and concept artist (Atlanta, GA).',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Custom cursor */}
        <div id="cursor" />
        <div id="cursor-ring" />
        <div id="cursor-glow" />
        <CursorTracker />

        <TransitionProvider>
          <header className="chrome">
            <Nav />
            <SocialRail />
          </header>
          <main data-page-content>{children}</main>
          {/* Floating character — visible on all pages except home & during transitions */}
          <FloatingCharacter />
        </TransitionProvider>
      </body>
    </html>
  );
}
