"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import photoPortrait from "@/image/portrait.jpeg";
import photoGuitar1 from "@/image/playing_guitar.jpeg";
import photoGuitar2 from "@/image/playing_guitar_2.jpeg";
import photoGuitar3 from "@/image/playing_guitar_3.jpeg";
import photoRandom from "@/image/random_picture.jpeg";
import photoBike from "@/image/riding_gravel_bike.jpeg";

export default function Home() {
  const images = [
    { src: photoPortrait, alt: "Portrait of Jan Sigrist" },
    { src: photoGuitar1, alt: "Jan playing guitar" },
    { src: photoGuitar2, alt: "Jan playing guitar (2)" },
    { src: photoGuitar3, alt: "Jan playing guitar (3)" },
    { src: photoRandom, alt: "Random picture" },
    { src: photoBike, alt: "Jan riding a gravel bike" },
  ] as const;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gridOffset, setGridOffset] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const showNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const showPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, showNext, showPrev]);

  const visibleImages = Array.from({ length: 4 }, (_, i) => images[(i + gridOffset) % images.length]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-6 py-16 sm:px-10 sm:py-24">
        {/* Hero */}
        <section className="flex flex-col items-start gap-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Jan Sigrist</h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Based in Zürich, Switzerland. Connect via GitHub or LinkedIn, or reach me by email.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:jan.sigrist@gmx.net"
              className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Email Me
            </Link>
            <Link
              href="https://www.linkedin.com/in/jan-sigrist-870224289/"
              className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/jansigi"
              className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        </section>

        {/* About */}
        <section className="grid grid-cols-1 items-start gap-8 sm:grid-cols-5">
          <div className="relative col-span-2 aspect-[4/5] overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src={photoPortrait}
              alt="Portrait of Jan Sigrist"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="col-span-3 flex flex-col gap-4">
            <h2 className="text-xl font-semibold tracking-tight">About</h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              Personal page for Jan Sigrist. Find my links below and feel free to reach out.
            </p>
            <ul className="mt-2 grid grid-cols-1 gap-2 text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-2">
              <li>• Location: Zürich, Switzerland</li>
              <li>
                • Work: Apprentice (4th/final year) at{' '}
                <Link
                  href="https://www.ergon.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:no-underline"
                >
                  Ergon Informatik AG
                </Link>
              </li>
              <li>• Music: guitar, piano, bass, drums</li>
              <li>• Sports: biking, swimming, running, triathlon</li>
              <li>• Other: Rubik's Cube</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800">
              <h3 className="text-base font-medium">DOPE Query Builder</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                A Kotlin-first, type-safe query builder for N1QL/SQL++ (Couchbase and compatibles).
                Provides a fluent API with compile-time checks to reduce runtime errors. Currently a work in progress
                and available via JitPack.
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm">
                <Link
                  href="https://github.com/ergon/dope-query-builder"
                  className="text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View repository
                </Link>
                <Link
                  href="https://github.com/ergon/dope-query-builder/wiki/%5B0%5D-Setup-Guide"
                  className="text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the wiki
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Photos */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold tracking-tight">Photos</h2>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {visibleImages.map((img, idx) => (
                <button
                  key={`${img.alt}-${idx}`}
                  type="button"
                  onClick={() => openLightbox((idx + gridOffset) % images.length)}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-white shadow-sm outline-none transition hover:shadow-md focus-visible:ring-2 focus-visible:ring-zinc-950/70 dark:bg-zinc-900 dark:focus-visible:ring-zinc-50/70"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label="Previous photos"
              onClick={() => setGridOffset((o) => (o - 1 + images.length) % images.length)}
              className="pointer-events-auto absolute -left-10 top-1/2 -translate-y-1/2 rounded-full bg-zinc-900/60 p-4 text-3xl text-zinc-100 backdrop-blur transition hover:bg-zinc-900/80 sm:-left-16 dark:bg-zinc-100/20 dark:text-zinc-50"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next photos"
              onClick={() => setGridOffset((o) => (o + 1) % images.length)}
              className="pointer-events-auto absolute -right-10 top-1/2 -translate-y-1/2 rounded-full bg-zinc-900/60 p-4 text-3xl text-zinc-100 backdrop-blur transition hover:bg-zinc-900/80 sm:-right-16 dark:bg-zinc-100/20 dark:text-zinc-50"
            >
              ›
            </button>
          </div>
        </section>

        {/* Contact */}
        <section className="flex flex-col items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-xl font-semibold tracking-tight">Get In Touch</h2>
          <p className="max-w-2xl text-zinc-700 dark:text-zinc-300">
            Whether you have a question, a project idea, or just want to say
            hello, feel free to reach out.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:jan.sigrist@gmx.net"
              className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Send an email
            </Link>
            <Link
              href="https://www.linkedin.com/in/jan-sigrist-870224289/"
              className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </Link>
          </div>
        </section>

        <footer className="mt-4 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          © {new Date().getFullYear()} Jan Sigrist
        </footer>
      </main>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 p-4 backdrop-blur-sm dark:bg-zinc-900/20"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute right-6 top-0 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900/60 text-xl text-zinc-100 backdrop-blur transition hover:bg-zinc-900/80 sm:right-10 sm:top-1"
            >
              ×
            </button>

            <div className="relative w-full" style={{ height: "70vh" }}>
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-transparent">
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="h-full w-auto max-w-full object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>
              <button
                type="button"
                aria-label="Previous"
                onClick={showPrev}
                className="absolute top-1/2 -left-10 -translate-y-1/2 z-10 inline-flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900/60 text-3xl text-zinc-100 backdrop-blur transition hover:bg-zinc-900/80 sm:-left-16 dark:bg-zinc-100/20"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={showNext}
                className="absolute top-1/2 -right-10 -translate-y-1/2 z-10 inline-flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900/60 text-3xl text-zinc-100 backdrop-blur transition hover:bg-zinc-900/80 sm:-right-16 dark:bg-zinc-100/20"
              >
                ›
              </button>
            </div>

            <div className="flex w-full items-center justify-center gap-3 overflow-x-auto pb-1" style={{height: "5rem"}}>
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md ring-1 ring-transparent transition ${
                    idx === currentIndex
                      ? "ring-2 ring-zinc-100"
                      : "hover:ring-zinc-300 dark:hover:ring-zinc-700"
                  }`}
                  aria-label={`Show image ${idx + 1}`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
