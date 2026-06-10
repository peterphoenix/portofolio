import { useRef } from 'react';
import { m, useReducedMotion } from 'motion/react';
import { ArrowDown, FileDown, Mail } from 'lucide-react';
import GithubIcon from './ui/GithubIcon';
import LinkedinIcon from './ui/LinkedinIcon';
import TerminalPrompt from './ui/TerminalPrompt';
import { personalInfo } from '../data/portfolioData';

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

const terminal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.35, delayChildren: 0.4 } },
};

const line = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const promptApi = useRef(null);
  const sectionRef = useRef(null);
  const spotlightRef = useRef(null);
  const bioLines = personalInfo.bio.split('. ').map((s) => (s.endsWith('.') ? s : `${s}.`));

  const onMouseMove = (e) => {
    const spot = spotlightRef.current;
    const section = sectionRef.current;
    if (!spot || !section) return;
    const rect = section.getBoundingClientRect();
    spot.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    spot.style.setProperty('--my', `${e.clientY - rect.top}px`);
    spot.style.opacity = '1';
  };

  const onMouseLeave = () => {
    if (spotlightRef.current) spotlightRef.current.style.opacity = '0';
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={reducedMotion ? undefined : onMouseMove}
      onMouseLeave={reducedMotion ? undefined : onMouseLeave}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-24 sm:px-6"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-dots bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_65%_65%_at_50%_45%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 bg-grid-dots-bright bg-[size:32px_32px] opacity-0 transition-opacity duration-300 [-webkit-mask-image:radial-gradient(220px_circle_at_var(--mx,50%)_var(--my,50%),black,transparent)] [mask-image:radial-gradient(220px_circle_at_var(--mx,50%)_var(--my,50%),black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[480px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-faint blur-3xl"
      />

      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative w-full max-w-3xl rounded-xl border border-ink-border bg-ink-surface shadow-2xl shadow-glow"
      >
        <div className="flex items-center gap-2 rounded-t-xl border-b border-ink-border bg-ink-raised px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-ink-edge" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-ink-edge" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-accent/70" aria-hidden="true" />
          <span className="ml-3 font-mono text-xs text-text-dim">peter@phoenix:~</span>
        </div>

        <m.div
          variants={terminal}
          initial="hidden"
          animate="visible"
          onClick={() => promptApi.current?.focus()}
          className="p-6 font-mono text-sm md:p-10"
        >
          <m.p variants={line} className="text-text-dim">
            <span className="text-accent">$</span> whoami
          </m.p>
          <m.h1
            variants={line}
            className="mt-2 font-sans text-4xl font-bold tracking-tight text-text-bright sm:text-5xl md:text-6xl"
          >
            {personalInfo.name}
          </m.h1>

          <m.p variants={line} className="mt-6 text-text-dim">
            <span className="text-accent">$</span> cat role.txt
          </m.p>
          <m.p variants={line} className="mt-2 font-sans text-xl text-text-body md:text-2xl">
            {personalInfo.title}
          </m.p>

          <m.div
            variants={line}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-dim px-3 py-1.5 text-xs text-accent"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" aria-hidden="true" />
            systemd: open-to-work
          </m.div>

          <m.div variants={line} className="mt-6 space-y-1 text-text-body">
            {bioLines.map((sentence) => (
              <p key={sentence} className="leading-relaxed">
                <span className="select-none text-text-dim"># </span>
                {sentence}
              </p>
            ))}
          </m.div>

          <m.div variants={line} className="mt-6">
            <TerminalPrompt apiRef={promptApi} />
          </m.div>

          <m.div variants={line} className="mt-8 flex flex-wrap gap-3">
            <a
              href={resumeUrl}
              download="Peter_Phoenix_Resume.pdf"
              className="inline-flex items-center gap-2 rounded border border-accent/50 px-4 py-2 text-xs text-accent transition hover:border-accent hover:bg-accent-dim hover:shadow-glow-sm sm:text-sm"
            >
              <FileDown size={15} aria-hidden="true" />
              [ download resume ]
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 rounded border border-ink-edge px-4 py-2 text-xs text-text-body transition hover:border-accent hover:text-accent sm:text-sm"
            >
              <Mail size={15} aria-hidden="true" />
              [ get in touch ]
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-ink-edge px-4 py-2 text-xs text-text-body transition hover:border-accent hover:text-accent sm:text-sm"
            >
              <LinkedinIcon size={15} />
              [ linkedin ]
            </a>
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-ink-edge px-4 py-2 text-xs text-text-body transition hover:border-accent hover:text-accent sm:text-sm"
            >
              <GithubIcon size={15} />
              [ github ]
            </a>
          </m.div>
        </m.div>
      </m.div>

      <m.a
        href="#experience"
        aria-label="Scroll to experience"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-text-dim transition-colors hover:text-accent"
        animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="inline-flex items-center gap-1">
          scroll <ArrowDown size={12} aria-hidden="true" />
        </span>
      </m.a>
    </section>
  );
}
