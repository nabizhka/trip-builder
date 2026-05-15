'use client';

import { useState, useEffect } from 'react';
import { wixThumb } from '@/lib/projects';

export default function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [zoomIdx, setZoomIdx] = useState<number | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (zoomIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     setZoomIdx(null);
      if (e.key === 'ArrowRight') setZoomIdx(i => i === null ? 0 : (i + 1) % images.length);
      if (e.key === 'ArrowLeft')  setZoomIdx(i => i === null ? 0 : (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [zoomIdx, images.length]);

  return (
    <>
      <div className="pd-gallery">
        {images.map((src, i) => (
          <div key={i} className="pd-img" onClick={() => { setScale(1); setZoomIdx(i); }}>
            <img
              src={wixThumb(src, 1200)}
              alt={`${title} — image ${i + 1}`}
              loading={i < 2 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        ))}
      </div>

      {zoomIdx !== null && (
        <div className="zoom-lightbox is-open" onClick={(e) => {
          if (e.target === e.currentTarget) setZoomIdx(null);
        }}>
          <button className="zoom-close" onClick={() => setZoomIdx(null)} aria-label="Close">×</button>
          <button className="zoom-prev" onClick={() => setZoomIdx((zoomIdx - 1 + images.length) % images.length)} aria-label="Previous">‹</button>
          <button className="zoom-next" onClick={() => setZoomIdx((zoomIdx + 1) % images.length)} aria-label="Next">›</button>
          <div className="zoom-stage" onClick={() => setZoomIdx(null)}>
            <img
              className="zoom-img"
              src={images[zoomIdx]}
              alt=""
              style={{ transform: `scale(${scale})`, cursor: scale === 1 ? 'zoom-in' : 'zoom-out' }}
              onClick={(e) => { e.stopPropagation(); setScale(s => s === 1 ? 2 : 1); }}
            />
          </div>
          <div className="zoom-counter">
            <span>{zoomIdx + 1}</span> / <span>{images.length}</span>
          </div>
        </div>
      )}
    </>
  );
}
