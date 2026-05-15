'use client';

import { useState } from 'react';
import { PROJECTS, CATEGORIES, wixThumb } from '@/lib/projects';
import { TransitionLink } from '@/components/WuheiheiTransition';

/**
 * 5-tile repeating bento layout (12-column grid):
 *   i%5 == 0 → span-1 : 6 cols × 3 rows  (left featured)
 *   i%5 == 1 → span-2 : 6 cols × 3 rows  (right featured — same height)
 *   i%5 == 2 → span-3 : 4 cols × 2 rows
 *   i%5 == 3 → span-4 : 4 cols × 2 rows
 *   i%5 == 4 → span-5 : 4 cols × 2 rows
 * Row A (tiles 0+1) = 3 rows, Row B (tiles 2+3+4) = 2 rows. No gaps.
 */
const SPAN_CLASS = ['span-1', 'span-2', 'span-3', 'span-4', 'span-5'] as const;

export default function WorkGrid() {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active
    ? PROJECTS.filter(p => p.cat === active)
    : PROJECTS;

  return (
    <>
      {/* Category chips */}
      <div className="chips">
        <button
          className={'chip' + (!active ? ' active' : '')}
          onClick={() => setActive(null)}
        >
          All
        </button>
        {CATEGORIES.map(c => (
          <button
            key={c.id}
            className={'chip' + (active === c.id ? ' active' : '')}
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="work-grid">
        {filtered.map((p, i) => (
          <TransitionLink
            key={p.id}
            href={`/projects/${p.id}`}
            className={`tile ${SPAN_CLASS[i % 5]}`}
          >
            <img
              src={wixThumb(p.cover, 800)}
              alt={p.title}
              loading={i < 4 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <div className="tile-meta">
              <div>
                <div className="tile-title">{p.title}</div>
                <div className="tile-tag">{p.catLabel}</div>
              </div>
              <span className="tile-num">{String(i + 1).padStart(2, '0')}</span>
            </div>
          </TransitionLink>
        ))}
      </div>
    </>
  );
}
