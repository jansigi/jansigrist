import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border-strong)] px-6 py-7 sm:px-10">
      <span className="label-mono">
        © 2026 Jan Sigrist
      </span>
      <div className="flex gap-6">
        <Link
          href="https://github.com/jansigi"
          target="_blank"
          rel="noopener noreferrer"
          className="label-mono transition-colors hover:text-[var(--color-accent)]"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/jan-sigrist-870224289/"
          target="_blank"
          rel="noopener noreferrer"
          className="label-mono transition-colors hover:text-[var(--color-accent)]"
        >
          LinkedIn
        </Link>
        <Link
          href="mailto:jan.sigrist@gmx.net"
          className="label-mono transition-colors hover:text-[var(--color-accent)]"
        >
          Email
        </Link>
      </div>
    </footer>
  );
}
