export default function Footer() {
  return (
    <footer className="border-t border-ink-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center font-mono text-xs text-text-dim sm:flex-row sm:justify-between sm:text-left">
        <p>© {new Date().getFullYear()} peter phoenix</p>
        <p>
          built with react + vite + tailwind{' '}
          <a
            href="https://github.com/peterphoenix/portofolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-body transition-colors hover:text-accent"
          >
            [ source ]
          </a>
        </p>
        <p aria-hidden="true">
          <span className="text-accent">$</span> exit 0
        </p>
      </div>
    </footer>
  );
}
