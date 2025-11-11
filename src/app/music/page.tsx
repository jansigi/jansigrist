import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Music — Jan Sigrist",
  description: "Music by Jan Sigrist — YouTube and Spotify embeds.",
};

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-16 sm:gap-12 sm:px-10 sm:py-24">
        <header className="flex items-end justify-between gap-4">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Music</h1>
          <Link
            href="/"
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            Back to Home
          </Link>
        </header>

        {/* YouTube */}
        <section className="flex flex-col gap-3">
          <h2 className="text-base font-medium">Featured Video</h2>
          <div className="rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/B5OhAnngxu8?si=0OmP9nzvwo1-byR-"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Watch on {""}
              <Link
                href="https://youtu.be/B5OhAnngxu8?si=0OmP9nzvwo1-byR-"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:no-underline"
              >
                YouTube
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Spotify */}
        <section className="flex flex-col gap-3">
          <h2 className="text-base font-medium">Spotify</h2>
          <div className="rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="overflow-hidden rounded-lg">
              <iframe
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/artist/0lU1CwTbKNiyagnPBawvtk?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Open on {""}
              <Link
                href="https://open.spotify.com/intl-de/artist/0lU1CwTbKNiyagnPBawvtk?si=qhIbLHRXTmK7JCAwMs2Jbw"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:no-underline"
              >
                Spotify
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

