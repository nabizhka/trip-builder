export const metadata = { title: 'About — wuhei·hei' };

// Three of Feifan's strongest cover images, used as the about-page art wall
const ART = [
  {
    src: 'https://static.wixstatic.com/media/bce868_24696ab3e92a42cab99ef04ac9430d97~mv2.jpg',
    alt: 'Prefabricated Dreams',
  },
  {
    src: 'https://static.wixstatic.com/media/bce868_b9cc81fa058d43269c9b34c2ed2ef8b4~mv2.jpg',
    alt: 'Interstellar Pirates',
  },
  {
    src: 'https://static.wixstatic.com/media/bce868_38c66c027d774a43b1c2d08c6b15b0f6~mv2.png',
    alt: 'AIG Mural',
  },
];

export default function AboutPage() {
  return (
    <section className="route route-about">
      <div className="spread">

        {/* ── LEFT — art wall ──────────────────────────────────────── */}
        <div className="leaf left about-art-leaf">
          <div className="folio">
            <span>about · artist</span>
            <span>03 / 05</span>
          </div>

          {/* Mosaic grid */}
          <div className="about-mosaic">
            {/* Large hero image */}
            <div className="about-mosaic__hero">
              <img src={ART[0].src} alt={ART[0].alt} />
            </div>
            {/* Two smaller stacked images */}
            <div className="about-mosaic__stack">
              <div className="about-mosaic__small">
                <img src={ART[1].src} alt={ART[1].alt} />
              </div>
              <div className="about-mosaic__small">
                <img src={ART[2].src} alt={ART[2].alt} />
              </div>
            </div>
          </div>

          {/* Sticker badge */}
          <div className="about-sticker">Atlanta · she / her</div>
        </div>

        {/* ── RIGHT — bio ──────────────────────────────────────────── */}
        <div className="leaf right">
          <h1 className="display">
            Hi,<br />I&apos;m <em>Feifan</em>
          </h1>

          <p className="lede">
            3D animator and concept artist with experience in video editing
            and production. I bring a cross-cultural perspective — making
            visuals that are adaptable, accessible, and&nbsp;engaging.
          </p>

          <dl className="facts">
            <dt>Based</dt>    <dd>Atlanta, Georgia</dd>
            <dt>Degree</dt>   <dd>BFA · Illustration</dd>
            <dt>Mascot</dt>   <dd>the sheep 🐑</dd>
            <dt>Pronouns</dt> <dd>she / her</dd>
          </dl>

          <div>
            <p className="caption" style={{ marginBottom: '10px' }}>Tools</p>
            <div className="tools-pills">
              <span className="hl">Blender</span>
              <span className="hl">After Effects</span>
              <span className="hl">Photoshop</span>
              <span>Illustrator</span>
              <span>Procreate</span>
              <span>Three.js</span>
              <span>GSAP</span>
              <span>Python</span>
            </div>
          </div>

          <a
            className="cta-pill"
            href="/FeifanLiResume.pdf"
            download="FeifanLi_Resume.pdf"
            target="_blank"
            rel="noopener"
            style={{ alignSelf: 'flex-start', marginTop: 'auto' }}
          >
            Download CV
            <span className="arrow">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}
