import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  projectById, prevProject, nextProject, wixThumb, PROJECTS,
} from '@/lib/projects';
import ProjectGallery from '@/components/ProjectGallery';

export function generateStaticParams() {
  return PROJECTS.map(p => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const p = projectById(params.id);
  return { title: p ? `${p.title} — wuhei·hei` : 'Project — wuhei·hei' };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const p = projectById(params.id);
  if (!p) notFound();

  const prev = prevProject(p.id);
  const next = nextProject(p.id);
  const idx  = PROJECTS.findIndex(x => x.id === p.id);

  return (
    <article className="project-detail-page">
      <header className="pd-header">
        <Link className="pd-back" href="/work">
          <span className="pd-back-arrow">←</span>
          <span>Back to work</span>
        </Link>
        <div className="pd-meta">
          <span className="pd-cat">{p.catLabel}</span>
          <span className="pd-num">
            {String(idx + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
          </span>
        </div>
      </header>

      <div className="pd-hero">
        <h1 className="pd-title display">{p.title}</h1>
        {p.description && <p className="pd-desc lede">{p.description}</p>}
      </div>

      <ProjectGallery
        images={p.images.length ? p.images : [p.cover]}
        title={p.title}
      />

      <footer className="pd-footer">
        {prev ? (
          <Link className="pd-nav prev" href={`/projects/${prev.id}`}>
            <span className="pd-nav-arrow">←</span>
            <span className="pd-nav-text">
              <span className="pd-nav-label">Previous</span>
              <span className="pd-nav-title">{prev.title}</span>
            </span>
          </Link>
        ) : <div />}
        {next && (
          <Link className="pd-nav next" href={`/projects/${next.id}`}>
            <span className="pd-nav-text right">
              <span className="pd-nav-label">Next project</span>
              <span className="pd-nav-title">{next.title}</span>
            </span>
            <span className="pd-nav-arrow">→</span>
          </Link>
        )}
      </footer>
    </article>
  );
}
