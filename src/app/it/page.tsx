import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT — Jan Sigrist",
  description: "Projects and skills by Jan Sigrist.",
};

export default function ITPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-16 sm:gap-14 sm:px-10 sm:py-24">
        <header className="flex items-end justify-between gap-4">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">IT</h1>
          <Link
            href="/"
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            Back to Home
          </Link>
        </header>

        {/* Skills */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-base font-medium">Backend & Desktop</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Kotlin, Java</li>
                <li>C# (.NET, Entity Framework)</li>
                <li>Spring Boot (REST, MVC)</li>
                <li>Ktor</li>
                <li>Java Swing</li>
                <li>Kotlin Compose Multiplatform for Desktop</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-base font-medium">Web</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                <li>React</li>
                <li>Vue.js</li>
                <li>HTML, CSS, JavaScript</li>
                <li>Full‑stack apps (frontend + backend integration)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-base font-medium">Mobile</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Android (Alarm Manager, NFC, navigation, background services)</li>
                <li>Swift (basic)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-base font-medium">Databases</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Couchbase, SQL++</li>
                <li>SQL and NoSQL</li>
                <li>Indexing, aggregation, data modeling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800">
              <h3 className="text-base font-medium">DOPE Query Builder</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Kotlin‑first, type‑safe query builder for N1QL/SQL++ (Couchbase and compatibles). Fluent API with compile‑time checks; work in progress and available via JitPack.
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

            <article className="rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800">
              <h3 className="text-base font-medium">TagAlarm — NFC Alarm Clock (Android)</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Android alarm clock that can only be turned off using a pre‑registered NFC tag. Uses Alarm Manager and system APIs.
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

            <article className="rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800">
              <h3 className="text-base font-medium">Hermes Situation Room</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                A secure platform connecting activists with journalists, enabling anonymous, trusted, and safe exchange of sensitive information.
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

            <article className="rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800">
              <h3 className="text-base font-medium">Bimaru Game</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Full‑stack game with React frontend and Ktor backend.
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

            <article className="rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800">
              <h3 className="text-base font-medium">Chain Reaction</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Chain Reaction is a turn‑based grid strategy game where players place bombs that grow in strength and, upon reaching capacity,
                explode to adjacent cells, triggering cascading chain reactions to capture territory. This repo is a Kotlin/Swing implementation
                with human, bot, and network players, variable boards and walls, and round‑based win detection.
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

            <article className="rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800">
              <h3 className="text-base font-medium">Gym Tracker (ICT Regional 2025 — 1st place)</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Desktop app to track workouts (sets, exercises, weights) built with Kotlin Compose Multiplatform. Project repository: rm-2025.
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
