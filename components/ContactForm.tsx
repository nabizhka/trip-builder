'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) return (
    <div className="form-success">
      <div style={{ fontSize: 48, marginBottom: 12 }}>✉️</div>
      <div className="display" style={{ fontSize: 32 }}>Sent!<br /><em>Talk soon.</em></div>
    </div>
  );
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <label className="field">
        <span>Your name</span>
        <input name="name" type="text" required placeholder="Feifan Li" />
      </label>
      <label className="field">
        <span>Email</span>
        <input name="email" type="email" required placeholder="hello@example.com" />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={4} required placeholder="I'd love to collaborate on…" />
      </label>
      <button type="submit" className="cta-pill">Send it <span className="arrow">→</span></button>
    </form>
  );
}
