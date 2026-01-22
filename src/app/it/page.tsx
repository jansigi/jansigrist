import type { Metadata } from "next";
import Link from "next/link";

// Lightweight inline icon set (no external deps)
function Icon({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <span aria-hidden className="inline-flex h-5 w-5 items-center justify-center text-zinc-500 dark:text-zinc-400">
      {children}
    </span>
  );
}

// Note: Badges removed from projects per request

export const metadata: Metadata = {
  title: "Jan Sigrist - IT",
  description: "Projects and skills by Jan Sigrist.",
};

export default function ITPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-12 sm:gap-14 sm:px-10 sm:py-16">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">IT</h1>
          </div>
          <Link
            href="/"
            className="self-start rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            Back to Home
          </Link>
        </header>

        {/* Skills */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm ring-1 ring-transparent transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-900/70">
              <div className="flex items-center gap-2">
                <Icon label="Backend">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
                </Icon>
                <h3 className="text-base font-medium">Backend & Desktop</h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"/>Kotlin, Java</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"/>C# (.NET, Entity Framework)</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"/>Spring Boot (REST, MVC)</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"/>Ktor</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"/>Java Swing</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"/>Compose Multiplatform (Desktop)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm ring-1 ring-transparent transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-900/70">
              <div className="flex items-center gap-2">
                <Icon label="Web">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9"/></svg>
                </Icon>
                <h3 className="text-base font-medium">Web</h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"/>React</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"/>Vue.js</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"/>HTML, CSS, JavaScript</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"/>Full‑stack apps (frontend ↔ backend)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm ring-1 ring-transparent transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-900/70">
              <div className="flex items-center gap-2">
                <Icon label="Mobile">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>
                </Icon>
                <h3 className="text-base font-medium">Mobile</h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"/>Android (Alarm Manager, NFC, background)</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"/>Swift (basics)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm ring-1 ring-transparent transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-900/70">
              <div className="flex items-center gap-2">
                <Icon label="Databases">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6"/></svg>
                </Icon>
                <h3 className="text-base font-medium">Databases</h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"/>Couchbase, SQL++</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"/>SQL and NoSQL</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"/>Indexing, aggregation, data modeling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-900/70">
              <h3 className="text-base font-medium">DOPE Query Builder</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Type‑safe Kotlin DSL for N1QL/SQL++ with fluent API and compile‑time checks. Work in progress, available via JitPack.
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm">
                <Link
                  href="https://github.com/ergon/dope-query-builder"
                  className="text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository
                </Link>
                <Link
                  href="https://github.com/ergon/dope-query-builder/wiki/%5B0%5D-Setup-Guide"
                  className="text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wiki
                </Link>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-900/70">
              <h3 className="text-base font-medium">TagAlarm — NFC Alarm Clock</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Alarm clock that only dismisses with a pre‑registered NFC tag. Uses Alarm Manager and platform APIs for reliable scheduling.
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm">
                <Link
                  href="https://github.com/jansigi/TagAlarm/"
                  className="text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository
                </Link>
                <Link
                  href="https://jansigi.github.io/TagAlarm/"
                  className="text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </Link>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-900/70">
              <h3 className="text-base font-medium">Hermes Situation Room</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Secure platform that connects activists and journalists for trusted, anonymous exchange of sensitive information.
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm">
                <Link
                  href="https://github.com/hermes-situation-room/core"
                  className="text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository
                </Link>
                <Link
                  href="https://situation-room.org"
                  className="text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </Link>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-900/70">
              <h3 className="text-base font-medium">Bimaru Game</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Full‑stack puzzle game with a React frontend and a Ktor backend.
              </p>
              <div className="mt-3 text-sm">
                <Link
                  href="https://github.com/jansigi/bimaru"
                  className="text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository
                </Link>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-900/70">
              <h3 className="text-base font-medium">Chain Reaction</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Turn‑based grid strategy game with human, bot, and network players. Includes variable boards, walls, and round‑based win logic.
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm">
                <Link
                  href="https://github.com/jansigi/chain-reaction"
                  className="text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository
                </Link>
                <Link
                  href="https://jansigi.github.io/chain-reaction/"
                  className="text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </Link>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-900/70">
              <h3 className="text-base font-medium">Gym Tracker (ICT Regional 2025 — 1st place)</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Desktop app for tracking workouts (sets, exercises, weights) built with Kotlin Compose Multiplatform.
              </p>
              <div className="mt-3 text-sm">
                <Link
                  href="https://github.com/jansigi/rm-2025"
                  className="text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
