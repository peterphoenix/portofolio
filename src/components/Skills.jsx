import { m } from 'motion/react';
import { skills, skillCategories } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';
import { fadeUp, staggerContainer, viewport } from '../lib/motionVariants';

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" title="Skills" slug="skills" />

        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="rounded-lg border border-ink-border bg-ink-surface p-6 md:p-8"
        >
          <p className="font-mono text-sm text-text-dim">
            <span className="text-accent">$</span> ls -la ./skills
          </p>

          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-6 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {skillCategories.map(({ key, label }) => (
              <m.div key={key} variants={fadeUp}>
                <h3 className="font-mono text-sm text-accent">{label}/</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills[key].map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-ink-border px-2 py-1 font-mono text-xs text-text-body transition-colors hover:border-accent hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </m.div>
            ))}
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
