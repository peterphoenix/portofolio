import { m } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';
import { fadeUp, staggerContainer, viewport } from '../lib/motionVariants';

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="03" title="Education" slug="education" />

        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="rounded-lg border border-ink-border bg-ink-surface p-6 md:p-8"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-4">
              <span className="rounded border border-ink-border bg-ink-raised p-2.5 text-accent">
                <GraduationCap size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-text-bright">
                  {education.institution}
                </h3>
                <p className="mt-1 text-sm">{education.degree}</p>
                <p className="mt-2 inline-block rounded-full border border-accent/30 bg-accent-dim px-3 py-1 font-mono text-xs text-accent">
                  gpa={education.gpa.replace(/\s/g, '')}
                </p>
              </div>
            </div>
            <div className="font-mono text-xs text-text-dim md:text-right">
              <p>{education.period}</p>
              <p className="mt-1">{education.location.toLowerCase()}</p>
            </div>
          </div>

          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {education.activities.map((activity) => (
              <m.div
                key={activity.title}
                variants={fadeUp}
                className="rounded border border-ink-border/60 bg-ink-base/40 p-4"
              >
                <h4 className="text-sm font-medium text-text-bright">{activity.title}</h4>
                <p className="mt-1 font-mono text-xs text-text-dim">{activity.period}</p>
                <p className="mt-2 text-sm leading-relaxed">{activity.description}</p>
              </m.div>
            ))}
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
