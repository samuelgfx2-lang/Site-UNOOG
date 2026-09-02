'use client';

/* oxlint-disable next/no-img-element */

import type { CSSProperties } from 'react';
import { useRef, useState } from 'react';

const faces = ['/brand/icons/asset-30.svg', '/brand/icons/asset-31.svg', '/brand/icons/asset-32.svg', '/brand/icons/asset-33.svg'];

type TrailMark = { id: number; x: number; y: number; face: string };

export function ThoughtBreak() {
  const [trail, setTrail] = useState<TrailMark[]>([]);
  const lastStamp = useRef(0);
  const nextId = useRef(0);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const section = event.currentTarget;
    const rect = section.getBoundingClientRect();
    section.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
    section.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
    const now = performance.now();
    if (now - lastStamp.current < 90) return;
    lastStamp.current = now;
    const id = nextId.current++;
    setTrail((current) => [...current.slice(-5), {
      id,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      face: faces[id % faces.length],
    }]);
  };

  return (
    <section className="thought-break" aria-labelledby="thought-title" onPointerMove={handlePointerMove} onPointerLeave={() => setTrail([])}>
      <div className="thought-invert" aria-hidden="true" />
      {trail.map((mark) => (
        <img
          className={`thought-trail-mark ${mark.id % 2 === 0 ? 'is-trail-light' : 'is-trail-orange'}`}
          src={mark.face}
          alt=""
          key={mark.id}
          style={{ left: mark.x, top: mark.y, '--trail-index': mark.id % 6 } as CSSProperties}
        />
      ))}
      <p>CREATIVE PRINCIPLE / 01</p>
      <h2 id="thought-title">
        <span>MOVE IDEAS</span>
        <span><i>PAST</i> THE EXPECTED*</span>
      </h2>
      <p>Curiosity builds the distance between familiar and unforgettable.</p>
      <img className="thought-character" src="/brand/characters/head-primary.svg" alt="" aria-hidden="true" />
    </section>
  );
}
