import { useState } from 'react';

const tiltEnabled = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mouse-following 3D tilt for the element behind `targetRef`. Writes the
// transform directly to the node to avoid re-rendering on every mousemove.
export default function useTilt(targetRef, maxDeg = 5) {
  const [enabled] = useState(tiltEnabled);

  const onMouseMove = (e) => {
    const el = targetRef.current;
    if (!el || !enabled) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${(-py * maxDeg).toFixed(2)}deg) rotateY(${(px * maxDeg).toFixed(2)}deg) translateY(-4px)`;
  };

  const onMouseLeave = () => {
    const el = targetRef.current;
    if (el) el.style.transform = '';
  };

  return { onMouseMove, onMouseLeave };
}
