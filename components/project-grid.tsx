'use client';

/* oxlint-disable next/no-img-element */

import type { CSSProperties } from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Pause, X } from 'lucide-react';
import { BrandSymbol, Wordmark } from '@/components/brand-mark';
import { initialProjectCount, projects, type CaseMedia, type ProjectModule } from '@/data/projects';

function CaseMediaView({ media }: { media: CaseMedia }) {
  if (media.src) {
    return <img className="case-media-image" src={media.src} alt={media.alt} />;
  }

  return (
    <figure className={`case-media-placeholder viewer-${media.tone ?? 'paper'}`} aria-label={media.alt}>
      <BrandSymbol aria-hidden="true" />
      {media.kind === 'video' ? <Pause className="case-video-icon" aria-hidden="true" /> : null}
      <span>{media.label}</span>
      <small>{media.kind === 'video' ? 'VIDEO SLOT' : 'IMAGE SLOT'} — READY TO REPLACE</small>
    </figure>
  );
}

function CaseCarousel({ module }: { module: Extract<ProjectModule, { type: 'carousel' }> }) {
  const [active, setActive] = useState(0);
  const total = module.items.length;
  const move = (direction: -1 | 1) => setActive((current) => (current + direction + total) % total);

  return (
    <section className="case-carousel" aria-roledescription="carousel" aria-label={module.title}>
      <header className="case-module-header">
        <div><p>MEDIA CAROUSEL / {String(total).padStart(2, '0')} FRAMES</p><h3>{module.title}</h3></div>
        <p>{module.description}</p>
      </header>
      <div className="case-carousel-stage" aria-live="polite">
        <CaseMediaView media={module.items[active]} />
        <span className="case-media-label">{module.items[active].label}</span>
      </div>
      <div className="case-carousel-controls">
        <button type="button" onClick={() => move(-1)} aria-label={`Previous image in ${module.title}`}><ArrowLeft aria-hidden="true" /></button>
        <div className="case-carousel-dots" aria-hidden="true">
          {module.items.map((item, index) => <span className={index === active ? 'is-active' : ''} key={`${item.label}-${index}`} />)}
        </div>
        <span>{String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        <button type="button" onClick={() => move(1)} aria-label={`Next image in ${module.title}`}><ArrowRight aria-hidden="true" /></button>
      </div>
    </section>
  );
}

function BeforeAfter({ module }: { module: Extract<ProjectModule, { type: 'before-after' }> }) {
  const [reveal, setReveal] = useState(50);
  const style = { '--reveal': `${reveal}%` } as CSSProperties;

  return (
    <section className="before-after-module">
      <header className="case-module-header">
        <div><p>COMPARISON / INTERACTIVE</p><h3>{module.title}</h3></div>
        <p>Move the control to compare the two stages.</p>
      </header>
      <div className="before-after-stage" style={style}>
        <div className="before-after-layer after-layer"><CaseMediaView media={module.after} /></div>
        <div className="before-after-layer before-layer"><CaseMediaView media={module.before} /></div>
        <span className="before-after-divider" aria-hidden="true" />
        <span className="before-label">BEFORE</span><span className="after-label">AFTER</span>
      </div>
      <label className="before-after-control">
        <span className="sr-only">Comparison position</span>
        <input type="range" min="0" max="100" value={reveal} onChange={(event) => setReveal(Number(event.target.value))} />
      </label>
    </section>
  );
}

function CaseLinkGrid({ module }: { module: Extract<ProjectModule, { type: 'link-grid' }> }) {
  return (
    <section className="case-link-grid">
      <header className="case-module-header">
        <div><p>PROJECT INDEX / {String(module.items.length).padStart(2, '0')} LINKS</p><h3>{module.title}</h3></div>
        <p>{module.description}</p>
      </header>
      <div className="case-link-list">
        {module.items.map((item, index) => (
          <a href={item.href} target="_blank" rel="noreferrer" key={item.href}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item.label}</strong>
            <ExternalLink aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}

export function ProjectGrid() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const viewerRef = useRef<HTMLDialogElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const visibleProjects = showAll ? projects : projects.slice(0, initialProjectCount);

  const selectedIndex = useMemo(
    () => projects.findIndex((project) => project.slug === selectedSlug),
    [selectedSlug],
  );
  const selectedProject = selectedIndex >= 0 ? projects[selectedIndex] : null;

  useEffect(() => {
    const syncWithUrl = () => {
      const slug = new URLSearchParams(window.location.search).get('project');
      setSelectedSlug(projects.some((project) => project.slug === slug) ? slug : null);
    };
    syncWithUrl();
    window.addEventListener('popstate', syncWithUrl);
    return () => window.removeEventListener('popstate', syncWithUrl);
  }, []);

  useEffect(() => {
    const baseTitle = 'UNOOG — Samuel Nogueira | Multidisciplinary Designer';
    document.title = selectedProject ? `${selectedProject.title} — UNOOG` : baseTitle;
    return () => { document.title = baseTitle; };
  }, [selectedProject]);

  const closeProject = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.delete('project');
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
    setSelectedSlug(null);
    window.requestAnimationFrame(() => lastTrigger.current?.focus());
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const focusable = () => Array.from(
      viewerRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])') ?? [],
    );
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeProject();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
    };
  }, [closeProject, selectedProject]);

  const setProjectUrl = (slug: string, mode: 'push' | 'replace' = 'push') => {
    const url = new URL(window.location.href);
    url.searchParams.set('project', slug);
    const nextUrl = `${url.pathname}${url.search}${url.hash}`;
    if (mode === 'push') window.history.pushState({ unoogProject: true }, '', nextUrl);
    else window.history.replaceState({ unoogProject: true }, '', nextUrl);
    setSelectedSlug(slug);
  };

  const openProject = (slug: string, trigger: HTMLButtonElement) => {
    lastTrigger.current = trigger;
    setProjectUrl(slug);
  };

  const navigateProject = (direction: -1 | 1) => {
    const nextIndex = (selectedIndex + direction + projects.length) % projects.length;
    setProjectUrl(projects[nextIndex].slug, 'replace');
  };

  return (
    <>
      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <article className={`project-card project-card-${project.featureSize ?? 'standard'} ${index >= initialProjectCount ? 'revealed-project' : ''}`} key={project.slug}>
            <button
              className="project-trigger"
              type="button"
              onClick={(event) => openProject(project.slug, event.currentTarget)}
              aria-label={`View project: ${project.title}`}
            >
              <div className={`project-cover ${project.coverClass} ${project.coverImage ? 'has-cover-image' : ''} ${project.slug === 'unoog-visual-identity' ? 'is-unoog-cover' : ''}`}>
                {project.coverImage ? <img className="project-cover-image" src={project.coverImage} alt="" /> : null}
                {project.slug === 'unoog-visual-identity' ? (
                  <Wordmark className="cover-logo-center" title="UNOOG" />
                ) : (
                  <>
                    {project.coverLabel || !project.coverImage ? <span className="cover-art" aria-hidden="true">{project.coverLabel ?? project.id}</span> : null}
                    <span className="cover-title">{project.title}</span>
                  </>
                )}
                <span className="cover-status">VIEW PROJECT ↗</span>
              </div>
              <div className="project-meta">
                <span>{project.id}</span>
                <p>{project.year ?? 'YEAR — TBC'}</p>
                <p>{project.categories.join(' / ')}</p>
              </div>
            </button>
          </article>
        ))}
      </div>

      <button className="show-more-projects" type="button" aria-expanded={showAll} onClick={() => setShowAll((current) => !current)}>
        <span>{showAll ? 'SHOW LESS' : 'SEE MORE'}</span>
        <span>{showAll ? 'RETURN TO SELECTED SET ↑' : `+${String(projects.length - initialProjectCount).padStart(2, '0')} PROJECTS ↓`}</span>
      </button>

      {selectedProject ? (
        <div className="project-viewer-layer">
          <dialog open ref={viewerRef} className="project-viewer" aria-modal="true" aria-labelledby="viewer-title" aria-describedby="viewer-description">
            <div className="viewer-toolbar">
              <Wordmark className="viewer-wordmark" title="UNOOG" />
              <button ref={closeButtonRef} type="button" className="viewer-close" onClick={closeProject}>Close <X aria-hidden="true" /></button>
            </div>

            <div className="viewer-scroll">
              <header className={`viewer-hero viewer-${selectedProject.theme}`}>
                <span className="viewer-index">{selectedProject.id} / {String(projects.length).padStart(2, '0')}</span>
                <h2 id="viewer-title">{selectedProject.title}</h2>
                <p id="viewer-description">{selectedProject.summary}</p>
                <dl>
                  <div><dt>Year</dt><dd>{selectedProject.year ?? 'To be confirmed'}</dd></div>
                  <div><dt>Category</dt><dd>{selectedProject.categories.join(' / ')}</dd></div>
                  <div><dt>Services</dt><dd>{selectedProject.services.join(' / ')}</dd></div>
                </dl>
                {selectedProject.sourceUrl ? <a className="viewer-source" href={selectedProject.sourceUrl} target="_blank" rel="noreferrer">View full project <ExternalLink aria-hidden="true" /></a> : null}
                {selectedProject.slug === 'unoog-visual-identity' ? <BrandSymbol className="viewer-symbol" aria-hidden="true" /> : null}
              </header>

              <div className="viewer-gallery">
                {selectedProject.gallery.map((module, index) => {
                  if (module.type === 'chapter') {
                    return <section className="case-chapter" key={`${module.type}-${index}`}><p>{module.eyebrow}</p><h3>{module.title}</h3><p>{module.body}</p></section>;
                  }
                  if (module.type === 'color') {
                    return <div key={`${module.type}-${index}`} className={`gallery-color viewer-${module.tone}`}>{module.label}</div>;
                  }
                  if (module.type === 'text') {
                    return <div key={`${module.type}-${index}`} className="gallery-text"><p>{module.eyebrow}</p><p>{module.body}</p></div>;
                  }
                  if (module.type === 'carousel') return <CaseCarousel key={`${module.type}-${index}`} module={module} />;
                  if (module.type === 'before-after') return <BeforeAfter key={`${module.type}-${index}`} module={module} />;
                  if (module.type === 'link-grid') return <CaseLinkGrid key={`${module.type}-${index}`} module={module} />;
                  return (
                    <section className="case-timeline" key={`${module.type}-${index}`}>
                      <header className="case-module-header"><div><p>PROCESS / {String(module.steps.length).padStart(2, '0')} STAGES</p><h3>{module.title}</h3></div></header>
                      <ol>{module.steps.map((step, stepIndex) => <li key={step}><span>{String(stepIndex + 1).padStart(2, '0')}</span><strong>{step}</strong></li>)}</ol>
                    </section>
                  );
                })}
              </div>

              <nav className="viewer-pagination" aria-label="Project navigation">
                <button type="button" onClick={() => navigateProject(-1)}><ArrowLeft aria-hidden="true" /> Previous</button>
                <span>{selectedProject.id} / {String(projects.length).padStart(2, '0')}</span>
                <button type="button" onClick={() => navigateProject(1)}>Next <ArrowRight aria-hidden="true" /></button>
              </nav>
            </div>
          </dialog>
        </div>
      ) : null}
    </>
  );
}
