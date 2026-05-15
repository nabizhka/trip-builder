'use client';

import { usePathname } from 'next/navigation';
import { TransitionLink } from './WuheiheiTransition';

const PAGES = [
  { href: '/',        idx: '01', label: 'Home'    },
  { href: '/work',    idx: '02', label: 'Work'    },
  { href: '/about',   idx: '03', label: 'About'   },
  { href: '/tools',   idx: '04', label: 'Tools'   },
  { href: '/contact', idx: '05', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <>
      <TransitionLink href="/" className="brand">
        <img src="/logo.png" alt="wuhei·hei" />
        <span>wuhei<em>·</em>hei</span>
      </TransitionLink>
      <nav className="nav-rail" aria-label="Main navigation">
        {PAGES.map(p => {
          const active = pathname === p.href || (p.href !== '/' && pathname.startsWith(p.href));
          return (
            <TransitionLink key={p.href} href={p.href}
              className={'nav-link' + (active ? ' active' : '')}>
              <span className="nav-idx">{p.idx}</span>{p.label}
            </TransitionLink>
          );
        })}
      </nav>
    </>
  );
}
