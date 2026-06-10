import { useRef } from 'react';
import { m } from 'motion/react';
import { ExternalLink, Folder } from 'lucide-react';
import { projects } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';
import useTilt from '../hooks/useTilt';
import { fadeUp, staggerContainer, viewport } from '../lib/motionVariants';

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function ProjectCard({ project }) {
  const slug = slugify(project.title);
  const cardRef = useRef(null);
  const { onMouseMove, onMouseLeave } = useTilt(cardRef, 5);
  const Wrapper = project.link ? 'a' : 'div';
  const wrapperProps = project.link
    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <m.div variants={fadeUp} className="h-full">
      <Wrapper
        {...wrapperProps}
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="group flex h-full flex-col rounded-lg border border-ink-border bg-ink-surface p-6 transition will-change-transform hover:border-accent/40 hover:shadow-glow-sm"
      >
        <div className="flex items-center gap-2 font-mono text-xs text-text-dim">
          <Folder size={14} className="shrink-0 text-accent" aria-hidden="true" />
          <span className="truncate">~/projects/{slug}</span>
          {project.link && (
            <ExternalLink
              size={14}
              className="ml-auto shrink-0 transition-colors group-hover:text-accent"
              aria-hidden="true"
            />
          )}
        </div>

        <h3 className="mt-4 text-lg font-semibold text-text-bright transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed">{project.description}</p>

        <ul className="mt-4 space-y-2">
          {project.highlights.slice(0, 2).map((highlight) => (
            <li key={highlight} className="flex gap-2 text-sm leading-relaxed text-text-dim">
              <span className="select-none text-accent" aria-hidden="true">
                ▸
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-ink-border px-2 py-0.5 font-mono text-[11px] text-text-dim transition-colors group-hover:border-ink-edge"
            >
              {tag}
            </span>
          ))}
        </div>
      </Wrapper>
    </m.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" title="Projects" slug="projects" />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </m.div>
      </div>
    </section>
  );
}
