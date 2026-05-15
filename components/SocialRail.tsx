'use client';

export default function SocialRail() {
  const links = [
    { href: 'https://www.instagram.com/wuhei_hei/', label: 'Instagram',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg> },
    { href: 'https://www.facebook.com/profile.php?id=61556257682250', label: 'Facebook',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
    { href: 'https://twitter.com/FeifanLi1713088', label: 'X / Twitter',
      icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
    { href: 'https://www.linkedin.com/in/feifan-li-concept-animation/', label: 'LinkedIn',
      icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zm6 0h3.8v1.7h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.85-3-1.85 0-2.13 1.45-2.13 2.9V21H9z"/></svg> },
    { href: 'https://youtube.com/@apairofshoes', label: 'YouTube',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M22.5 6.5a3 3 0 0 0-2.1-2.1C18.6 4 12 4 12 4s-6.6 0-8.4.4A3 3 0 0 0 1.5 6.5C1.1 8.3 1.1 12 1.1 12s0 3.7.4 5.5a3 3 0 0 0 2.1 2.1c1.8.4 8.4.4 8.4.4s6.6 0 8.4-.4a3 3 0 0 0 2.1-2.1c.4-1.8.4-5.5.4-5.5s0-3.7-.4-5.5z"/><path d="M9.75 15.25v-6.5l5.5 3.25z" fill="currentColor" stroke="none"/></svg> },
  ];
  return (
    <div className="social-rail" aria-label="Social links">
      {links.map(l => (
        <a key={l.href} className="social-ico" href={l.href}
           target="_blank" rel="noopener noreferrer"
           aria-label={l.label} title={l.label}>
          {l.icon}
        </a>
      ))}
    </div>
  );
}
