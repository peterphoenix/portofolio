import { m } from 'motion/react';
import { fadeUp, viewport } from '../../lib/motionVariants';

export default function SectionHeading({ index, title, slug }) {
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
        <h2 className="text-3xl font-bold tracking-tight text-text-bright md:text-4xl">
          {title}
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
