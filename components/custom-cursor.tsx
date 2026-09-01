'use client';

import { useEffect, useRef } from 'react';
import { BrandSymbol } from '@/components/brand-mark';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

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
      cursor.dataset.active = target?.closest('a, button, [role="button"]') ? 'true' : 'false';
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
    </div>
  );
}
