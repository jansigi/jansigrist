import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] px-6 py-6 sm:px-10">
      <span className="text-xs text-[var(--color-muted)]">
        © 2026 Jan Sigrist · Zürich, Switzerland
      </span>
      <div className="flex gap-5">
        <Link
          href="https://github.com/jansigi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/jan-sigrist-870224289/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          LinkedIn
        </Link>
        <Link
          href="mailto:jan.sigrist@gmx.net"
          className="text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          Email
        </Link>
      </div>
    </footer>
  );
}
