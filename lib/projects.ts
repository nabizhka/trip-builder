// Project data sourced from wuheicreates.com scrape
// Re-export from JSON so it stays a single source of truth.

import data from './projects.json';

export type Project = {
  id: string;
  cat: string;
  catLabel: string;
  title: string;
  description: string;
  cover: string;
  images: string[];
};

export type Category = { id: string; label: string };

export const CATEGORIES: Category[] = (data as any).categories;
export const PROJECTS: Project[] = (data as any).projects;

export const projectById = (id: string): Project | undefined =>
  PROJECTS.find(p => p.id === id);

export const projectIndex = (id: string): number =>
  PROJECTS.findIndex(p => p.id === id);

export function nextProject(id: string): Project | undefined {
  const i = projectIndex(id);
  if (i === -1) return undefined;
  return PROJECTS[(i + 1) % PROJECTS.length];
}

export function prevProject(id: string): Project | undefined {
  const i = projectIndex(id);
  if (i === -1) return undefined;
  return PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
}

/** Wix CDN thumbnail helper: returns a sized variant of a wixstatic URL. */
export function wixThumb(url: string, w = 640, h?: number): string {
  // Return the raw URL directly — Wix CDN serves originals fine
  return url;
}
