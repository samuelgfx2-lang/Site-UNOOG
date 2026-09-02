'use client';

/* oxlint-disable next/no-img-element */

import { useRef } from 'react';

type InteractiveCharacterProps = {
  src: string;
  alt: string;
  className: string;
  decorative?: boolean;
};

export function InteractiveCharacter({ src, alt, className, decorative = false }: InteractiveCharacterProps) {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const reset = () => {
    if (imageRef.current) imageRef.current.style.transform = '';
  };

  const followPointer = (event: React.PointerEvent<HTMLImageElement>) => {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.transform = `translate3d(${x * 24}px, ${y * 18}px, 0) rotate(${x * 7}deg) scale(1.035)`;
  };

  return (
    <img
      ref={imageRef}
      className={`${className} interactive-character`}
      src={src}
      alt={decorative ? '' : alt}
      aria-hidden={decorative ? true : undefined}
      onPointerMove={followPointer}
      onPointerLeave={reset}
    />
  );
}
