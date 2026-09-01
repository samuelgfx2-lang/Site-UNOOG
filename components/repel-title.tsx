'use client';

import { useRef } from 'react';

const lines = ['SELECTED', 'WORK*'];

export function RepelTitle() {
  const letters = useRef<Array<HTMLSpanElement | null>>([]);

  const reset = () => {
    letters.current.forEach((letter) => {
      if (letter) letter.style.transform = '';
    });
  };

  const repel = (event: React.PointerEvent<HTMLHeadingElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    letters.current.forEach((letter) => {
      if (!letter) return;
      const rect = letter.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = centerX - event.clientX;
      const deltaY = centerY - event.clientY;
      const distance = Math.hypot(deltaX, deltaY);
      if (distance > 150 || distance === 0) {
        letter.style.transform = '';
        return;
      }
      const force = (150 - distance) / 150;
      const x = (deltaX / distance) * force * 30;
      const y = (deltaY / distance) * force * 30;
      letter.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${x * 0.12}deg)`;
    });
  };

  let letterIndex = 0;
  return (
    <h2 id="work-title" className="repel-title" aria-label="Selected Work" onPointerMove={repel} onPointerLeave={reset}>
      {lines.map((line) => (
        <span className="repel-line" aria-hidden="true" key={line}>
          {Array.from(line).map((character) => {
            const index = letterIndex++;
            return <span className="repel-letter" ref={(node) => { letters.current[index] = node; }} key={`${character}-${index}`}>{character}</span>;
          })}
        </span>
      ))}
    </h2>
  );
}
