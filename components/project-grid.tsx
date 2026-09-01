'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { BrandSymbol, Wordmark } from '@/components/brand-mark';
import { projects } from '@/data/projects';

export function ProjectGrid() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const viewerRef = useRef<HTMLDialogElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

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
    const baseTitle = 'Samuel Unoog — Multidisciplinary Designer';
    document.title = selectedProject ? `${selectedProject.title} — Samuel Unoog` : baseTitle;
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
      viewerRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? [],
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
        {projects.map((project, index) => (
          <article className={`project-card project-card-${index + 1}`} key={project.slug}>
            <button
              className="project-trigger"
              type="button"
              onClick={(event) => openProject(project.slug, event.currentTarget)}
              aria-label={`View project: ${project.title}`}
            >
              <div className={`project-cover ${project.coverClass}`}>
                <span className="cover-index">{project.id}</span>
                <span className="cover-title">{project.title}</span>
                {project.slug === 'unoog-visual-identity' ? <Wordmark className="cover-logo" /> : null}
                <BrandSymbol className="cover-hover-symbol" aria-hidden="true" />
                <span className="cover-status">VIEW PROJECT ↗</span>
              </div>
              <div className="project-meta">
                <span>{project.id}</span>
                <h3>{project.title}</h3>
                <p>{project.year ?? 'YEAR — TBC'}</p>
                <p>{project.categories.join(' / ')}</p>
              </div>
            </button>
          </article>
        ))}
      </div>

      {selectedProject ? (
        <div className="project-viewer-layer">
          <dialog
            open
            ref={viewerRef}
            className="project-viewer"
            aria-modal="true"
            aria-labelledby="viewer-title"
            aria-describedby="viewer-description"
          >
            <div className="viewer-toolbar">
              <Wordmark className="viewer-wordmark" title="UNOOG" />
              <button ref={closeButtonRef} type="button" className="viewer-close" onClick={closeProject}>
                Close <X aria-hidden="true" />
              </button>
            </div>

            <div className="viewer-scroll">
              <header className={`viewer-hero viewer-${selectedProject.theme}`}>
                <span className="viewer-index">{selectedProject.id} / 08</span>
                <h2 id="viewer-title">{selectedProject.title}</h2>
                <p id="viewer-description">{selectedProject.summary}</p>
                <dl>
                  <div><dt>Year</dt><dd>{selectedProject.year ?? 'To be confirmed'}</dd></div>
                  <div><dt>Category</dt><dd>{selectedProject.categories.join(' / ')}</dd></div>
                  <div><dt>Services</dt><dd>{selectedProject.services.join(' / ')}</dd></div>
                </dl>
                {selectedProject.slug === 'unoog-visual-identity' ? <BrandSymbol className="viewer-symbol" aria-hidden="true" /> : null}
              </header>

              <div className="viewer-gallery">
                {selectedProject.gallery.map((module, index) => {
                  if (module.type === 'color') {
                    return <div key={`${module.type}-${index}`} className={`gallery-color viewer-${module.tone}`}>{module.label}</div>;
                  }
                  if (module.type === 'text') {
                    return <div key={`${module.type}-${index}`} className="gallery-text"><p>{module.eyebrow}</p><p>{module.body}</p></div>;
                  }
                  return (
                    <div key={`${module.type}-${index}`} className={`gallery-placeholder gallery-${module.orientation}`}>
                      <BrandSymbol aria-hidden="true" />
                      <p>{module.label}</p>
                      <span>ASSET PLACEHOLDER — REPLACE IN /PUBLIC/PROJECTS/{selectedProject.slug.toUpperCase()}</span>
                    </div>
                  );
                })}
              </div>

              <nav className="viewer-pagination" aria-label="Project navigation">
                <button type="button" onClick={() => navigateProject(-1)}><ArrowLeft aria-hidden="true" /> Previous</button>
                <span>{selectedProject.id} / 08</span>
                <button type="button" onClick={() => navigateProject(1)}>Next <ArrowRight aria-hidden="true" /></button>
              </nav>
            </div>
          </dialog>
        </div>
      ) : null}
    </>
  );
}
