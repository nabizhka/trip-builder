export const metadata = { title: 'Tools — wuhei·hei' };

const TOOLS = [
  {
    id: 'converter',
    icon: '🎬',
    title: 'Video Converter',
    desc: 'In-browser encoding to mp4 / webm / mov / gif via FFmpeg.wasm. No upload, no server.',
    accent: 'var(--peach)',
    status: 'soon' as const,
  },
  {
    id: 'palette',
    icon: '🎨',
    title: 'Color Palette',
    desc: 'Drop any image and extract its dominant colors as hex, rgb, or CSS variables.',
    accent: 'var(--lavender)',
    status: 'soon' as const,
  },
  {
    id: 'fps',
    icon: '⏱',
    title: 'Frame Rate Calc',
    desc: 'Convert between frames, timecodes, and seconds at any fps. Animators’ staple.',
    accent: 'var(--sage)',
    status: 'soon' as const,
  },
  {
    id: 'aspect',
    icon: '📐',
    title: 'Aspect Ratio',
    desc: 'Resize calculator that locks your aspect ratio — enter any two dimensions.',
    accent: 'var(--sky)',
    status: 'soon' as const,
  },
  {
    id: 'sprites',
    icon: '🗺',
    title: 'Sprite Slicer',
    desc: 'Slice a sprite sheet into individual frame images — export as zip.',
    accent: 'var(--butter)',
    status: 'soon' as const,
  },
  {
    id: 'easing',
    icon: '〰️',
    title: 'Easing Curves',
    desc: 'Visualise bezier easing functions live and copy them as CSS or GSAP values.',
    accent: 'var(--pink)',
    status: 'soon' as const,
  },
];

export default function ToolsPage() {
  return (
    <section className="route route-tools">

      <div className="tools-header">
        <div className="folio">
          <span>tools · creative utilities</span>
          <span>04 / 05</span>
        </div>
        <h1 className="display">
          <em>Creative</em><br />Tools
        </h1>
        <p className="lede" style={{ maxWidth: '38ch', marginTop: 16 }}>
          Browser-based utilities for animators and artists.
          No install. No upload. Everything stays local.
        </p>
      </div>

      <div className="tools-grid">
        {TOOLS.map(t => (
          <div key={t.id} className="tool-card" style={{ '--tool-accent': t.accent } as React.CSSProperties}>
            <div className="tool-card__icon">{t.icon}</div>
            <div className="tool-card__body">
              <h3 className="tool-card__title">{t.title}</h3>
              <p className="tool-card__desc">{t.desc}</p>
            </div>
            <div className="tool-card__footer">
              <span className="tool-badge">Coming soon</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
