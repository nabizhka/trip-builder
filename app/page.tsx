'use client';

import { TransitionLink } from '@/components/WuheiheiTransition';

// Three of her strongest works used as visual heroes
const HERO_IMG = 'https://static.wixstatic.com/media/bce868_24696ab3e92a42cab99ef04ac9430d97~mv2.jpg';
const FLOAT_IMG = 'https://static.wixstatic.com/media/bce868_b9cc81fa058d43269c9b34c2ed2ef8b4~mv2.jpg';

const THUMBS = [
  {
    href: '/projects/aig-mural',
    src: 'https://static.wixstatic.com/media/bce868_38c66c027d774a43b1c2d08c6b15b0f6~mv2.png',
    label: 'AIG Mural',
  },
  {
    href: '/projects/my-project-ae1904',
    src: 'https://static.wixstatic.com/media/bce868_24696ab3e92a42cab99ef04ac9430d97~mv2.jpg',
    label: 'Prefabricated Dreams',
  },
  {
    href: '/projects/interstellar-pirates',
    src: 'https://static.wixstatic.com/media/bce868_b9cc81fa058d43269c9b34c2ed2ef8b4~mv2.jpg',
    label: 'Interstellar Pirates',
  },
];

export default function HomePage() {
  return (
    <section className="route route-home">
      <div className="spread">

        {/* ── LEFT — editorial text ─────────────────────────────── */}
        <div className="leaf left home-left">
          <div className="folio">
            <span>wuhei·hei · portfolio</span>
            <span>01 / 05</span>
          </div>

          <div className="home-text-block">
            <p className="caption home-eyebrow">3D Animator · Concept Artist · Atlanta, GA</p>
            <h1 className="display home-headline">
              Hi,<br />I&apos;m <em>Feifan</em>
            </h1>
            <p className="lede home-lede">
              I make worlds — in pixels, frames, and three dimensions.
              Eastern storytelling meets Western animation, creating
              visuals that are adaptable, accessible, and&nbsp;engaging.
            </p>
          </div>

          {/* Recent work thumbnails */}
          <div className="home-thumb-strip">
            {THUMBS.map(t => (
              <TransitionLink key={t.label} href={t.href} className="home-thumb">
                <img src={t.src} alt={t.label} loading="eager" />
                <span className="home-thumb__label">{t.label}</span>
              </TransitionLink>
            ))}
          </div>

          {/* CTAs */}
          <div className="home-ctas">
            <TransitionLink className="cta-pill" href="/work">
              See my work <span className="arrow">→</span>
            </TransitionLink>
            <TransitionLink className="cta-ghost" href="/about">
              About me
            </TransitionLink>
          </div>
        </div>

        {/* ── RIGHT — artwork hero ──────────────────────────────── */}
        <div className="leaf right home-right">
          {/* Full-bleed featured artwork */}
          <div className="home-hero-art">
            <img src={HERO_IMG} alt="Prefabricated Dreams — featured work" />
            <div className="home-hero-art__overlay" />
            <div className="home-hero-art__caption">
              <span className="caption" style={{ color: 'rgba(251,246,222,0.7)' }}>Featured project</span>
              <span className="home-hero-art__title">Prefabricated Dreams</span>
            </div>
          </div>

          {/* Floating polaroid card — second artwork */}
          <div className="home-float-card">
            <img src={FLOAT_IMG} alt="Interstellar Pirates" />
          </div>

          {/* Scroll hint dot */}
          <div className="home-scroll-hint">
            <span />
          </div>
        </div>

      </div>
    </section>
  );
}
