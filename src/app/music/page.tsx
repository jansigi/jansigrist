"use client";

import Link from "next/link";
import { useState } from "react";

const YOUTUBE_VIDEOS: { id: string; featured?: boolean }[] = [
  { id: "B5OhAnngxu8", featured: true },
  { id: "LTvKfoY5Tco" },
  { id: "1BoKgVH5TQs" },
  { id: "-c6-8CMND9E" },
  { id: "yvsbNPi66yY" },
];

export default function MusicPage() {
  const [activeVideo, setActiveVideo] = useState(YOUTUBE_VIDEOS[0].id);

  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="mb-14 fade-in-up">
          <span className="eyebrow mb-5 block">Music</span>
          <h1 className="display text-[clamp(2.6rem,7vw,5rem)]" style={{ fontWeight: 800 }}>
            What I play<span className="text-[var(--color-accent)]">.</span>
          </h1>
          <p className="mt-5 max-w-xl text-[1.1rem] leading-relaxed text-[var(--color-muted)]">
            Guitar, piano, bass and drums. Some of my playing, on YouTube and
            Spotify.
          </p>
        </div>

        {/* Featured video */}
        <div className="mb-6">
          <div className="relative overflow-hidden rounded-xl border border-[var(--color-border)] pb-[56.25%]">
            <iframe
              key={activeVideo}
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=0`}
              title="Jan Sigrist Music"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <p className="mt-3 text-sm text-[var(--color-muted)]">
            Watch on{" "}
            <Link
              href={`https://youtu.be/${activeVideo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              YouTube
            </Link>
            .
          </p>
        </div>

        {/* Thumbnails */}
        <div className="mb-16 flex gap-3 overflow-x-auto pb-2">
          {YOUTUBE_VIDEOS.map((v) => {
            const active = v.id === activeVideo;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setActiveVideo(v.id)}
                className={`relative h-[90px] w-[160px] flex-shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                  active
                    ? "border-[var(--color-accent)]"
                    : "border-[var(--color-border)] hover:border-[var(--color-accent-glow)]"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                  alt="Video thumbnail"
                  className="h-full w-full object-cover"
                />
                {v.featured && (
                  <span className="absolute left-1.5 top-1.5 rounded bg-[var(--color-accent)] px-1.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-[var(--color-on-accent)]">
                    Featured
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Spotify */}
        <div>
          <h3 className="subheading mb-6 block">Spotify</h3>
          <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
            <iframe
              src="https://open.spotify.com/embed/artist/0lU1CwTbKNiyagnPBawvtk?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="block rounded-xl bg-[var(--color-surface)]"
            />
          </div>
          <p className="mt-3 text-sm text-[var(--color-muted)]">
            Open on{" "}
            <Link
              href="https://open.spotify.com/intl-de/artist/0lU1CwTbKNiyagnPBawvtk?si=qhIbLHRXTmK7JCAwMs2Jbw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              Spotify
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
