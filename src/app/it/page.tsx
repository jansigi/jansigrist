import type { Metadata } from "next";
import Link from "next/link";
import { IconTrophy } from "../icons";

const SKILLS: { category: string; items: string[] }[] = [
  {
    category: "Backend & Desktop",
    items: [
      "Kotlin, Java",
      "C# (.NET, Entity Framework)",
      "Spring Boot (REST, MVC)",
      "Ktor",
      "Java Swing",
      "Compose Multiplatform (Desktop)",
    ],
  },
  {
    category: "Web",
    items: [
      "React",
      "Vue.js",
      "HTML, CSS, JavaScript",
      "Full-stack apps (frontend ↔ backend)",
    ],
  },
  {
    category: "Mobile",
    items: ["Android (Alarm Manager, NFC, background)", "Swift (basics)"],
  },
  {
    category: "Databases",
    items: [
      "Couchbase, SQL++",
      "SQL and NoSQL",
      "Indexing, aggregation, data modeling",
    ],
  },
];

const PROJECTS: {
  name: string;
  desc: string;
  tags: string[];
  links: { label: string; href: string }[];
  highlight?: boolean;
}[] = [
  {
    name: "DOPE Query Builder",
    desc: "Type-safe Kotlin DSL for N1QL/SQL++ with fluent API and compile-time checks. Work in progress, available via JitPack.",
    tags: ["Kotlin", "DSL", "Couchbase"],
    links: [
      { label: "Repository", href: "https://github.com/ergon/dope-query-builder" },
      {
        label: "Wiki",
        href: "https://github.com/ergon/dope-query-builder/wiki/%5B0%5D-Setup-Guide",
      },
    ],
  },
  {
    name: "TagAlarm — NFC Alarm Clock",
    desc: "Alarm clock that only dismisses with a pre-registered NFC tag. Uses Alarm Manager and platform APIs for reliable scheduling.",
    tags: ["Android", "NFC", "Kotlin"],
    links: [
      { label: "Repository", href: "https://github.com/jansigi/TagAlarm/" },
      { label: "Website", href: "https://jansigi.github.io/TagAlarm/" },
    ],
  },
  {
    name: "Hermes Situation Room",
    desc: "Secure platform that connects activists and journalists for trusted, anonymous exchange of sensitive information.",
    tags: ["Security", "Full-stack", "React"],
    links: [
      { label: "Repository", href: "https://github.com/hermes-situation-room/core" },
      { label: "Website", href: "https://situation-room.org" },
    ],
  },
  {
    name: "Bimaru Game",
    desc: "Full-stack puzzle game with a React frontend and a Ktor backend.",
    tags: ["React", "Ktor", "Full-stack"],
    links: [{ label: "Repository", href: "https://github.com/jansigi/bimaru" }],
  },
  {
    name: "Chain Reaction",
    desc: "Turn-based grid strategy game with human, bot, and network players. Includes variable boards, walls, and round-based win logic.",
    tags: ["Game Dev", "Kotlin", "Networking"],
    links: [
      { label: "Repository", href: "https://github.com/jansigi/chain-reaction" },
      { label: "Website", href: "https://jansigi.github.io/chain-reaction/" },
    ],
  },
  {
    name: "Gym Tracker",
    desc: "Desktop app for tracking workouts (sets, exercises, weights) built with Kotlin Compose Multiplatform. ICT Regional 2025 — 1st place.",
    tags: ["Kotlin", "Compose", "Desktop"],
    links: [{ label: "Repository", href: "https://github.com/jansigi/rm-2025" }],
    highlight: true,
  },
];

export const metadata: Metadata = {
  title: "Jan Sigrist - IT",
  description: "Projects and skills by Jan Sigrist.",
};

export default function ITPage() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="mb-14 fade-in-up">
          <h1
            className="mb-3 text-[var(--color-fg-strong)]"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            IT &amp; Projects
          </h1>
          <p className="text-base leading-relaxed text-[var(--color-muted)]">
            Skills, tools, and things I&apos;ve built.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="subheading mb-6 block">Skills</h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((s) => (
              <div key={s.category} className="card p-6">
                <h4 className="subheading mb-4 block">{s.category}</h4>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="relative pl-3 text-sm leading-relaxed text-[var(--color-muted)] before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-accent-glow)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <h3 className="subheading mb-6 block">Projects</h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {PROJECTS.map((p) => (
              <article
                key={p.name}
                className={`card card-hover relative p-7 ${
                  p.highlight
                    ? "border-[var(--color-accent)] bg-[var(--color-surface-alt)] shadow-[0_0_24px_var(--color-accent-dim)]"
                    : ""
                }`}
              >
                {p.highlight && (
                  <span
                    className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent-dim)] text-[var(--color-accent)]"
                    aria-label="Award winner"
                    title="ICT Regional 2025 — 1st place"
                  >
                    <IconTrophy className="h-5 w-5" />
                  </span>
                )}
                <h4 className="mb-2 pr-12 text-base font-bold text-[var(--color-fg-strong)]">
                  {p.name}
                </h4>
                <p className="mb-4 text-sm leading-relaxed text-[var(--color-muted)]">
                  {p.desc}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="tag-chip">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {p.links.map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm tracking-wide text-[var(--color-accent)] hover:underline"
                    >
                      {l.label} ↗
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
