import { useEffect, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Types and deletes each string in a loop. Under prefers-reduced-motion the
// first string is returned in full with no animation.
export default function useTypewriter(strings, { typeSpeed = 80, deleteSpeed = 40, pause = 2200 } = {}) {
  const [reduced] = useState(prefersReducedMotion);
  const [text, setText] = useState(() => (reduced ? strings[0] : ''));
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return undefined;

    const current = strings[index % strings.length];
    let delay;
    let action;

    if (!deleting && text === current) {
      delay = pause;
      action = () => setDeleting(true);
    } else if (deleting && text === '') {
      delay = typeSpeed;
      action = () => {
        setDeleting(false);
        setIndex((i) => (i + 1) % strings.length);
      };
    } else {
      delay = deleting ? deleteSpeed : typeSpeed;
      action = () => setText(current.slice(0, text.length + (deleting ? -1 : 1)));
    }

    const timeout = setTimeout(action, delay);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, strings, typeSpeed, deleteSpeed, pause, reduced]);

  return text;
}
