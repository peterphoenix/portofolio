import { useEffect, useState } from 'react';
import { AnimatePresence, m } from 'motion/react';
import { FileDown, Menu, X } from 'lucide-react';
import useActiveSection from '../hooks/useActiveSection';

const NAV_ITEMS = [
  { id: 'experience', index: '01' },
  { id: 'projects', index: '02' },
  { id: 'education', index: '03' },
  { id: 'skills', index: '04' },
  { id: 'awards', index: '05' },
  { id: 'contact', index: '06' },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-ink-base/80 backdrop-blur-md transition-colors ${
        isScrolled ? 'border-b border-ink-border' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          aria-label="Back to top"
          className="rounded border border-transparent px-2 py-1 font-mono text-sm font-semibold text-text-bright transition hover:border-ink-border hover:shadow-glow-sm"
        >
          <span className="text-accent">[ </span>
          PP
          <span className="text-accent"> ]</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map(({ id, index }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`font-mono text-xs tracking-wide transition-colors ${
                  activeSection === id
                    ? 'text-accent underline decoration-accent underline-offset-8'
                    : 'text-text-body hover:text-text-bright'
                }`}
              >
                <span className="text-accent">{index}.</span>
                {id}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={resumeUrl}
            download="Peter_Phoenix_Resume.pdf"
            className="hidden items-center gap-2 rounded border border-accent/40 px-3 py-1.5 font-mono text-xs text-accent transition hover:border-accent hover:bg-accent-dim hover:shadow-glow-sm md:inline-flex"
          >
            <FileDown size={14} aria-hidden="true" />
            resume.pdf
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className="rounded p-2 text-text-bright transition hover:text-accent md:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-4rem)] overflow-y-auto bg-ink-base/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-2 px-8 py-10">
              {NAV_ITEMS.map(({ id, index }, i) => (
                <m.li
                  key={id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 font-mono text-xl ${
                      activeSection === id ? 'text-accent' : 'text-text-bright'
                    }`}
                  >
                    <span className="text-accent">{index}.</span>
                    {id}
                  </a>
                </m.li>
              ))}
              <m.li
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05 }}
              >
                <a
                  href={resumeUrl}
                  download="Peter_Phoenix_Resume.pdf"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 inline-flex items-center gap-2 rounded border border-accent/40 px-4 py-2 font-mono text-base text-accent"
                >
                  <FileDown size={16} aria-hidden="true" />
                  resume.pdf
                </a>
              </m.li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
