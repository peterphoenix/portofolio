import { useState } from 'react';
import { m } from 'motion/react';
import { experience } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';
import { fadeUp, staggerContainer, viewport } from '../lib/motionVariants';

function ExperienceEntry({ job, isHead, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <m.li variants={fadeUp} className="group relative pl-8 sm:pl-10">
      <span
        aria-hidden="true"
        className="absolute left-[-5px] top-2 h-[10px] w-[10px] rounded-full border-2 border-text-dim bg-ink-base transition group-hover:border-accent group-hover:bg-accent group-hover:shadow-glow-sm"
      />
      {isHead && (
        <span className="absolute left-[-46px] top-0.5 hidden rounded border border-accent/40 bg-accent-dim px-1.5 py-0.5 font-mono text-[10px] text-accent lg:inline">
          HEAD
        </span>
      )}

      <div className="rounded-lg border border-ink-border bg-ink-surface p-6 transition group-hover:border-accent/40 group-hover:shadow-glow-sm">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-text-dim">
          <span className="text-accent">{job.company.toLowerCase()}</span>
          <span aria-hidden="true">·</span>
          <span>{job.location.toLowerCase()}</span>
          <span className="ml-auto rounded border border-ink-border px-2 py-0.5">
            {job.period}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-text-bright md:text-xl">{job.role}</h3>
        <p className="mt-1 text-sm italic text-text-dim">{job.description}</p>

        {open && (
          <ul className="mt-4 space-y-2">
            {job.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
                <span className="select-none font-mono text-accent" aria-hidden="true">
                  +
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
        {!defaultOpen && (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="mt-4 font-mono text-xs text-text-dim transition-colors hover:text-accent"
          >
            {open ? '[ - collapse ]' : `[ + expand ${job.highlights.length} highlights ]`}
          </button>
        )}
      </div>
    </m.li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="01" title="Experience" slug="experience" />

        <m.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative space-y-8 border-l border-ink-border lg:ml-12"
        >
          {experience.map((job, index) => (
            <ExperienceEntry
              key={`${job.company}-${job.period}`}
              job={job}
              isHead={index === 0}
              defaultOpen={index < 3}
            />
          ))}
        </m.ol>
      </div>
    </section>
  );
}
