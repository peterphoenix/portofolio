import { m } from 'motion/react';
import { Medal, ScrollText } from 'lucide-react';
import { awards } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';
import { fadeUp, staggerContainer, viewport } from '../lib/motionVariants';

const ICONS = [Medal, ScrollText];

export default function Awards() {
  return (
    <section id="awards" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05" title="Awards" slug="awards" />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-6 md:grid-cols-2"
        >
          {awards.map((award, index) => {
            const Icon = ICONS[index % ICONS.length];
            const year = award.date.split(' ').pop();
            return (
              <m.div
                key={award.title}
                variants={fadeUp}
                className="group rounded-lg border border-ink-border border-l-2 border-l-accent bg-ink-surface p-6 transition hover:border-accent/40 hover:border-l-accent hover:shadow-glow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-xs text-text-dim">
                    {'// '}
                    {year}
                  </p>
                  <span className="rounded border border-ink-border px-2 py-0.5 font-mono text-xs text-text-dim">
                    {award.date}
                  </span>
                </div>
                <div className="mt-4 flex items-start gap-3">
                  <span className="shrink-0 rounded border border-ink-border bg-ink-raised p-2 text-accent">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold leading-snug text-text-bright md:text-lg">
                    {award.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed">{award.description}</p>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
