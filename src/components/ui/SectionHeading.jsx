import { useEffect, useRef, useState } from 'react';
import { m, useInView, useReducedMotion } from 'motion/react';
import { fadeUp, viewport } from '../../lib/motionVariants';

const SCRAMBLE_CHARS = '!<>-_\\/[]{}=+*^?#';

function useDecode(text, start) {
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!start || reduced) return undefined;
    const totalFrames = Math.max(text.length * 2, 16);
    let frame = 0;
    const id = setInterval(() => {
      frame += 1;
      const revealed = Math.floor((frame / totalFrames) * text.length);
      if (revealed >= text.length) {
        setDisplay(text);
        clearInterval(id);
        return;
      }
      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (i < revealed || char === ' ') return char;
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join('')
      );
    }, 30);
    return () => clearInterval(id);
  }, [start, text, reduced]);

  return display;
}

export default function SectionHeading({ index, title, slug }) {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true, margin: '-60px' });
  const display = useDecode(title, inView);

  return (
    <div className="mb-12">
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
        className="flex items-baseline gap-3"
      >
        <span className="font-mono text-lg text-accent">{index}.</span>
        <h2
          ref={headingRef}
          aria-label={title}
          className="text-3xl font-bold tracking-tight text-text-bright md:text-4xl"
        >
          <span aria-hidden="true">{display}</span>
        </h2>
        <span className="hidden font-mono text-sm text-text-dim sm:inline">
          {'// '}
          {slug}
        </span>
      </m.div>
      <m.div
        aria-hidden="true"
        className="mt-4 h-px origin-left bg-ink-border"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewport}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </div>
  );
}
