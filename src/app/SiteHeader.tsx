"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ComponentType, type SVGProps } from "react";
import { IconCode, IconHome, IconMusic } from "./icons";

type NavIcon = ComponentType<SVGProps<SVGSVGElement>>;

const NAV_LINKS: { label: string; href: string; icon: NavIcon }[] = [
  { label: "Home", href: "/", icon: IconHome },
  { label: "IT", href: "/it", icon: IconCode },
  { label: "Music", href: "/music", icon: IconMusic },
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
            ? "border-b border-[var(--color-border-strong)] bg-[var(--color-nav-bg)] backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-baseline gap-2 text-[var(--color-fg-strong)]"
        >
          <span
            className="text-lg"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "-0.04em" }}
          >
            Jan Sigrist
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className={`relative py-1 text-[0.78rem] uppercase tracking-[0.14em] transition-colors ${
                  active
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-fg-strong)]"
                }`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-0 h-px w-full bg-[var(--color-accent)]" />
                )}
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
        <div className="fixed inset-x-0 top-[64px] z-40 flex flex-col border-b border-[var(--color-border-strong)] bg-[var(--color-nav-bg)] backdrop-blur-md px-6 py-2 md:hidden">
          {NAV_LINKS.map((l) => {
            const Icon = l.icon;
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className={`flex items-center gap-4 border-b border-[var(--color-border)] py-4 transition-colors last:border-b-0 ${
                  active ? "text-[var(--color-accent)]" : "text-[var(--color-text)]"
                }`}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                <span
                  className="text-sm uppercase tracking-[0.14em]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {l.label}
                </span>
                {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
