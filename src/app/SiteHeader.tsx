"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "IT", href: "/it" },
  { label: "Music", href: "/music" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-colors sm:px-10 ${
          scrolled
            ? "border-b border-[var(--color-border)] bg-[var(--color-nav-bg)] backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-[var(--color-fg-strong)]"
          style={{ fontFamily: "'DM Mono', monospace", letterSpacing: "-0.03em" }}
        >
          JS<span className="text-[var(--color-accent)]">.</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className={`rounded-md px-3 py-1.5 text-xs uppercase tracking-[0.08em] transition-colors ${
                  active
                    ? "bg-[var(--color-accent-dim)] text-[var(--color-accent)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex flex-col gap-[5px] p-1 md:hidden"
        >
          <span
            className={`block h-[2px] w-[22px] rounded bg-[var(--color-text)] transition-transform ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-[22px] rounded bg-[var(--color-text)] transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-[22px] rounded bg-[var(--color-text)] transition-transform ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-x-0 top-[64px] z-40 flex flex-col border-b border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-4 md:hidden">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="border-b border-[var(--color-border)] py-3 text-[var(--color-text)] last:border-b-0"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
