import { m } from 'motion/react';
import { FileDown, Mail, Phone } from 'lucide-react';
import GithubIcon from './ui/GithubIcon';
import LinkedinIcon from './ui/LinkedinIcon';
import { personalInfo } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';
import { fadeUp, staggerContainer, viewport } from '../lib/motionVariants';

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

const LINKS = [
  { label: 'Email', href: `mailto:${personalInfo.email}`, Icon: Mail },
  {
    label: 'LinkedIn',
    href: `https://${personalInfo.linkedin}`,
    Icon: LinkedinIcon,
    external: true,
  },
  {
    label: 'GitHub',
    href: `https://${personalInfo.github}`,
    Icon: GithubIcon,
    external: true,
  },
  { label: 'Phone', href: `tel:${personalInfo.phone}`, Icon: Phone },
  { label: 'Resume', href: resumeUrl, Icon: FileDown, download: 'Peter_Phoenix_Resume.pdf' },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="06" title="Contact" slug="contact" />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center"
        >
          <m.p variants={fadeUp} className="font-mono text-sm text-text-dim">
            <span className="text-accent">$</span> ping peter --interactive
          </m.p>

          <m.h3
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-text-bright md:text-5xl"
          >
            Let&apos;s build something reliable.
          </m.h3>

          <m.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-sm leading-relaxed md:text-base">
            I&apos;m open to new opportunities and interesting projects. Whether you have a
            question or just want to say hi, my inbox is always open.
          </m.p>

          <m.p variants={fadeUp} className="mt-10">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group relative inline-block font-mono text-lg text-accent md:text-2xl"
            >
              {personalInfo.email}
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full"
              />
            </a>
          </m.p>

          <m.div variants={fadeUp} className="mt-10 flex justify-center gap-4">
            {LINKS.map((item) => {
              const { Icon } = item;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  download={item.download}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="rounded border border-ink-border p-3 text-text-body transition hover:border-accent hover:text-accent hover:shadow-glow-sm"
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              );
            })}
          </m.div>

          <m.p
            variants={fadeUp}
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-dim px-3 py-1.5 font-mono text-xs text-accent"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" aria-hidden="true" />
            open-to-work
          </m.p>
        </m.div>
      </div>
    </section>
  );
}
