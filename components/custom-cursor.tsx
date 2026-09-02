'use client';

import { useEffect, useRef } from 'react';
import { BrandSymbol } from '@/components/brand-mark';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!cursor || !finePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    let x = -80;
    let y = -80;

    const render = () => {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = 0;
    };
    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      cursor.dataset.visible = 'true';
      if (!frame) frame = window.requestAnimationFrame(render);
    };
    const leave = () => { cursor.dataset.visible = 'false'; };
    const over = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const interactive = target?.closest('a, button, input, [role="button"]');
      cursor.dataset.active = interactive ? 'true' : 'false';
      if (!labelRef.current || !interactive) return;
      labelRef.current.textContent = interactive.matches('input[type="range"]')
        ? 'DRAG'
        : interactive.matches('.project-trigger')
          ? 'VIEW'
          : interactive.matches('button')
            ? 'SELECT'
            : 'OPEN';
    };

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerover', over, { passive: true });
    document.documentElement.addEventListener('mouseleave', leave);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <BrandSymbol />
      <span ref={labelRef} className="custom-cursor-label">OPEN</span>
    </div>
  );
}
