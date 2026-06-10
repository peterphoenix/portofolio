import { useEffect, useRef, useState } from 'react';
import { personalInfo, projects } from '../../data/portfolioData';
import useTypewriter from '../../hooks/useTypewriter';

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

const TYPED_COMMANDS = ['./resume.pdf', 'help', 'open linkedin', 'sudo hire-me'];

const MAX_ENTRIES = 3;

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const HELP_LINES = [
  'available commands:',
  '  whoami           who is this guy',
  '  ls projects      list featured projects',
  '  cat resume.pdf   download my resume',
  '  open linkedin    open my profile',
  '  mail peter       get in touch',
  '  clear            clear the terminal',
  "  ...and sudo might get you somewhere",
];

const canTypeHere = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

function downloadResume() {
  const a = document.createElement('a');
  a.href = resumeUrl;
  a.download = 'Peter_Phoenix_Resume.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default function TerminalPrompt({ apiRef }) {
  const typed = useTypewriter(TYPED_COMMANDS);
  const [canType] = useState(canTypeHere);
  const [active, setActive] = useState(false);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const [entries, setEntries] = useState([]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const inputRef = useRef(null);
  const timersRef = useRef([]);

  const focusPrompt = () => {
    if (!canType) return;
    setActive(true);
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  useEffect(() => {
    if (apiRef) apiRef.current = { focus: focusPrompt };
  });

  useEffect(() => {
    const onKeyDown = (e) => {
      const tag = document.activeElement?.tagName;
      if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA') {
        e.preventDefault();
        focusPrompt();
        inputRef.current?.scrollIntoView({ block: 'center' });
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canType]);

  useEffect(() => {
    const timers = timersRef.current;
    return () => timers.forEach(clearTimeout);
  }, []);

  const push = (cmd, lines) =>
    setEntries((prev) => [...prev, { cmd, lines }].slice(-MAX_ENTRIES));

  const appendLines = (lines) =>
    setEntries((prev) => {
      if (prev.length === 0) return prev;
      const last = prev[prev.length - 1];
      return [...prev.slice(0, -1), { ...last, lines: [...last.lines, ...lines] }];
    });

  const later = (ms, fn) => timersRef.current.push(setTimeout(fn, ms));

  const run = (raw) => {
    const cmd = raw.trim();
    const lower = cmd.toLowerCase();

    if (cmd === '') return;
    setCmdHistory((prev) => [...prev, cmd]);

    if (lower === 'clear') {
      setEntries([]);
      return;
    }
    if (lower === 'help' || lower === '--help' || lower === '-h') {
      push(cmd, HELP_LINES);
      return;
    }
    if (lower === 'whoami') {
      push(cmd, [`${personalInfo.name.toLowerCase()} — ${personalInfo.title.toLowerCase()}`]);
      return;
    }
    if (lower === 'ls' || lower === 'ls projects' || lower === 'ls ./projects') {
      push(cmd, projects.map((p) => `${slugify(p.title)}/`));
      return;
    }
    if (['cat resume.pdf', './resume.pdf', 'cat resume', 'resume'].includes(lower)) {
      push(cmd, ['opening resume.pdf ...']);
      later(400, downloadResume);
      return;
    }
    if (['open linkedin', 'linkedin'].includes(lower)) {
      push(cmd, ['opening linkedin ...']);
      later(400, () => window.open(`https://${personalInfo.linkedin}`, '_blank', 'noopener'));
      return;
    }
    if (['mail peter', 'mail', 'contact', 'email'].includes(lower)) {
      push(cmd, ['drafting email ...']);
      later(400, () => {
        window.location.href = `mailto:${personalInfo.email}`;
      });
      return;
    }
    if (lower === 'sudo hire-me' || lower === 'hire-me' || lower === 'sudo hire me') {
      push(cmd, ['[sudo] password for recruiter:']);
      later(700, () => appendLines(['********']));
      later(1400, () => appendLines(['access granted ✓ — opening mail client ...']));
      later(2200, () => {
        window.location.href = `mailto:${personalInfo.email}?subject=Let%27s%20talk`;
      });
      return;
    }
    if (lower.startsWith('sudo')) {
      push(cmd, ['nice try. permission granted anyway — try: sudo hire-me']);
      return;
    }
    push(cmd, [`command not found: ${cmd} — try 'help'`]);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      run(value);
      setValue('');
    } else if (e.key === 'ArrowUp' && cmdHistory.length > 0) {
      e.preventDefault();
      setValue(cmdHistory[cmdHistory.length - 1]);
    } else if (e.key === 'Escape') {
      inputRef.current?.blur();
    }
  };

  if (!active) {
    return (
      <div className={canType ? 'cursor-text' : undefined} onClick={focusPrompt}>
        <p className="text-text-bright" aria-hidden="true">
          <span className="text-accent">$</span> {typed}
          <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-accent animate-blink" />
        </p>
        {canType && (
          <p className="mt-2 font-mono text-[11px] text-text-dim/80">
            {'// press / or click to type'}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="cursor-text" onClick={() => inputRef.current?.focus()}>
      {entries.map((entry, i) => (
        <div key={`${entry.cmd}-${i}`} className="mb-2">
          <p className="text-text-dim">
            <span className="text-accent">$</span> {entry.cmd}
          </p>
          {entry.lines.map((lineText, j) => (
            <p key={j} className="whitespace-pre-wrap text-text-body">
              {lineText}
            </p>
          ))}
        </div>
      ))}

      <div className="relative flex items-center text-text-bright">
        <span className="text-accent">$</span>
        <span className="whitespace-pre">&nbsp;{value}</span>
        <span
          aria-hidden="true"
          className={`ml-0.5 inline-block h-4 w-2 bg-accent ${focused ? 'animate-blink' : 'opacity-40'}`}
        />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-label="Terminal command input — type help for available commands"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
          className="absolute inset-0 w-full cursor-text opacity-0"
        />
      </div>
      <p className="mt-2 font-mono text-[11px] text-text-dim/80">
        {"// type 'help' for commands"}
      </p>
    </div>
  );
}
