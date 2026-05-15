import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact — wuhei·hei' };

export default function ContactPage() {
  return (
    <section className="route route-contact">
      <div className="spread">

        {/* ── LEFT — contact info ──────────────────────────────────── */}
        <div className="leaf left">
          <div className="folio">
            <span>contact · say hello</span>
            <span>05 / 05</span>
          </div>

          <h1 className="display">
            Let&apos;s<br /><em>talk.</em>
          </h1>

          <p className="lede">
            Open to commissions, collaborations, and interesting projects.
            Based in Atlanta — working worldwide.
          </p>

          {/* Social links */}
          <div className="contact-links">
            <a
              className="contact-link"
              href="https://www.instagram.com/wuhei_hei/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link__label">Instagram</span>
              <span className="contact-link__arrow">↗</span>
            </a>
            <a
              className="contact-link"
              href="https://twitter.com/FeifanLi1713088"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link__label">Twitter / X</span>
              <span className="contact-link__arrow">↗</span>
            </a>
            <a
              className="contact-link"
              href="mailto:hello@wuheicreates.com"
            >
              <span className="contact-link__label">hello@wuheicreates.com</span>
              <span className="contact-link__arrow">↗</span>
            </a>
          </div>

          {/* Map */}
          <div className="map-card" style={{ marginTop: 'auto' }}>
            <iframe
              title="Atlanta, GA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212944.8067947757!2d-84.55949858286948!3d33.76727163553772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1716000000000"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* ── RIGHT — form + artwork backdrop ──────────────────────── */}
        <div className="leaf right contact-right">
          {/* Artwork backdrop — her pixel-game art as a decorative header */}
          <div className="contact-art">
            <img
              src="https://static.wixstatic.com/media/bce868_bcefc47e42fe48139d1998560b1ef471~mv2.jpg"
              alt="AIG Mural artwork"
            />
            <div className="contact-art__scrim" />
          </div>

          <div className="contact-form-wrap">
            <ContactForm />
          </div>
        </div>

      </div>
    </section>
  );
}
