# wuhei·hei — Next.js + React Three Fiber

The planned migration target for the portfolio. Vanilla-JS version lives one folder up at `wuheihei-portfolio/` and is the deployed site today.

## Setup

```bash
cd wuheihei-next
npm install
npm run dev
```

Then open http://localhost:3000.

## Stack

- **Next.js 14** (App Router)
- **React Three Fiber** + `@react-three/drei` for 3D
- **GSAP** for tweens during the page-flip transition
- **TypeScript**
- Project data sourced from `lib/projects.json` (32 projects scraped from wuheicreates.com)

## Structure

```
wuheihei-next/
├── app/
│   ├── layout.tsx          ← root layout, mounts TransitionProvider + nav
│   ├── globals.css         ← copied from the vanilla site
│   ├── page.tsx            ← Home
│   ├── work/page.tsx       ← Work grid (32 projects)
│   ├── projects/[id]/page.tsx ← Static project pages (one per project)
│   ├── about/page.tsx
│   ├── tools/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Nav.tsx
│   ├── SocialRail.tsx
│   ├── HomeHero.tsx        ← R3F hero with particles + floating geometry
│   ├── ProjectGallery.tsx  ← Gallery + zoom lightbox (client component)
│   ├── ContactForm.tsx
│   └── WuheiheiTransition.tsx ← R3F GLB book-flip transition
├── lib/
│   ├── projects.ts         ← typed helpers (projectById, prev/next, wixThumb)
│   └── projects.json       ← scraped data
└── public/
    ├── wuheihei.glb        ← the 3D model used in the transition
    ├── logo.png
    └── FeifanLiResume.pdf
```

## Transitions

`components/WuheiheiTransition.tsx` is wired into `app/layout.tsx`. Every nav link uses `<TransitionLink>`, which:

1. Mounts a fullscreen R3F `<Canvas>` and plays the `wuheihei.glb` animation (~3.75s)
2. Fires `onMidpoint` at ~1.875s — at that moment `router.push` swaps the underlying page
3. Fades the canvas out and unmounts when the animation finishes

## What still needs to be done

- Port `tools.js` (FFmpeg.wasm converter, subtitle editor, palette extractor, etc.) to React. Stub UI is in `app/tools/page.tsx`.
- Wire the contact form to a real email service (Formspree, Resend, etc.).
- Polish the work-grid layout — current `span-N` classes are stubbed; copy the precise grid CSS from the vanilla site.
- Add `<picture>` / `<Image>` with proper srcsets for responsive Wix thumbnails.
- Implement an interactive image-zoom that pans on drag instead of toggling a 2× scale.
