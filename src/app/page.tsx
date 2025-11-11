"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import photoPortrait from "@/image/portrait.jpeg";
import photoGuitar1 from "@/image/playing_guitar.jpeg";
import photoGuitar2 from "@/image/playing_guitar_2.jpeg";
import photoGuitar3 from "@/image/playing_guitar_3.jpeg";
import photoRandom1 from "@/image/random_picture.jpeg";
import photoRandom2 from "@/image/random_picture_2.jpeg";
import photoRandom3 from "@/image/random_picture_3.jpeg";
import photoBike from "@/image/riding_gravel_bike.jpeg";
import photoRunning from "@/image/running.jpeg";
import photoProgramming from "@/image/programming.jpeg";

export default function Home() {
  // Keep portrait for About only; exclude from slideshow/gallery
  const galleryImages = [
    { src: photoGuitar2, alt: "Jan playing guitar (2)" },
    { src: photoRandom1, alt: "Random picture" },
    { src: photoProgramming, alt: "Jan Programming" },
    { src: photoRandom2, alt: "Random picture (2)" },
    { src: photoRunning, alt: "Jan Running" },
    { src: photoGuitar1, alt: "Jan playing guitar" },
    { src: photoBike, alt: "Jan riding a gravel bike" },
    { src: photoGuitar3, alt: "Jan playing guitar (3)" },
    { src: photoRandom3, alt: "Random picture (3)" },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gridOffset, setGridOffset] = useState(0);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState(0);
  const [lbEntering, setLbEntering] = useState(true);
  const [gridEntering, setGridEntering] = useState(true);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const showNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const showPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

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

  const visibleImages = Array.from({ length: 4 }, (_, i) => galleryImages[(i + gridOffset) % galleryImages.length]);

  // Animate on lightbox image change
  useEffect(() => {
    if (!lightboxOpen) return;
    setLbEntering(false);
    const id = requestAnimationFrame(() => setLbEntering(true));
    return () => cancelAnimationFrame(id);
  }, [currentIndex, lightboxOpen]);

  // Animate grid change (especially on mobile)
  useEffect(() => {
    setGridEntering(false);
    const id = requestAnimationFrame(() => setGridEntering(true));
    return () => cancelAnimationFrame(id);
  }, [gridOffset]);

  // Touch helpers: Lightbox swipe
  const onLightboxTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    setTouchStart({ x: t.clientX, y: t.clientY });
    setTouchDeltaX(0);
  };
  const onLightboxTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const t = e.touches[0];
    const dx = t.clientX - touchStart.x;
    const dy = t.clientY - touchStart.y;
    // If horizontal gesture dominates, prevent scroll to improve feel
    if (Math.abs(dx) > Math.abs(dy)) e.preventDefault();
    setTouchDeltaX(dx);
  };
  const onLightboxTouchEnd = () => {
    if (Math.abs(touchDeltaX) > 40) {
      if (touchDeltaX < 0) showNext();
      else showPrev();
    }
    setTouchStart(null);
    setTouchDeltaX(0);
  };

  // Touch helpers: Grid swipe (phones)
  const onGridTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    setTouchStart({ x: t.clientX, y: t.clientY });
    setTouchDeltaX(0);
  };
  const onGridTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const t = e.touches[0];
    const dx = t.clientX - touchStart.x;
    const dy = t.clientY - touchStart.y;
    if (Math.abs(dx) > Math.abs(dy)) e.preventDefault();
    setTouchDeltaX(dx);
  };
  const onGridTouchEnd = () => {
    if (Math.abs(touchDeltaX) > 40) {
      if (touchDeltaX < 0)
        setGridOffset((o) => (o + 1) % galleryImages.length);
      else
        setGridOffset((o) => (o - 1 + galleryImages.length) % galleryImages.length);
    }
    setTouchStart(null);
    setTouchDeltaX(0);
  };

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
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5A2.25 2.25 0 0 1 22.5 6.75v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75Zm3.383-.75a.75.75 0 0 0-.633 1.172l6.75 9.75a.75.75 0 0 0 1.2 0l6.75-9.75a.75.75 0 0 0-.633-1.172H4.883Z" />
              </svg>
              Email
            </Link>
            <Link
              href="https://www.linkedin.com/in/jan-sigrist-870224289/"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M4.983 3.5A2.484 2.484 0 1 0 5 8.468 2.484 2.484 0 0 0 4.983 3.5zM3 21h4V9H3v12zm7 0h4v-6.4c0-3.41-4-3.15-4 0V21zm5 0h4v-6.4c0-6.26-7-6-7-2.94V9h-4v12h4v-6.4c0-3.15 3-3.41 3 0V21z"/>
              </svg>
              LinkedIn
            </Link>
            <Link
              href="https://github.com/jansigi"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.23 3.4 9.66 8.12 11.23.6.11.82-.26.82-.58v-2.1c-3.3.73-4-1.42-4-1.42-.55-1.45-1.35-1.84-1.35-1.84-1.1-.78.08-.76.08-.76 1.22.09 1.86 1.28 1.86 1.28 1.08 1.86 2.83 1.32 3.52 1.01.11-.8.42-1.33.76-1.63-2.63-.31-5.4-1.36-5.4-6.06 0-1.34.47-2.43 1.25-3.29-.13-.31-.54-1.58.12-3.3 0 0 1.01-.33 3.3 1.26a11.37 11.37 0 0 1 6 0c2.28-1.59 3.28-1.26 3.28-1.26.67 1.72.25 2.99.13 3.3.78.86 1.25 1.95 1.25 3.29 0 4.71-2.78 5.74-5.43 6.05.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A11.51 11.51 0 0 0 23.5 12.3 11.5 11.5 0 0 0 12 .5Z" clipRule="evenodd"/>
              </svg>
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

        {/* Projects moved to /it */}


        {/* Photos */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold tracking-tight">Photos</h2>
          <div
            className="relative px-8 sm:px-10 md:px-14"
            onTouchStart={onGridTouchStart}
            onTouchMove={onGridTouchMove}
            onTouchEnd={onGridTouchEnd}
          >
            <div className={`grid grid-cols-1 gap-3 sm:grid-cols-4 sm:gap-4 transition-all duration-300 ease-out ${
              gridEntering ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
            }`}>
              {visibleImages.map((img, idx) => (
                <button
                  key={`${img.alt}-${idx}`}
                  type="button"
                  onClick={() => openLightbox((idx + gridOffset) % galleryImages.length)}
                  className={`group relative aspect-square overflow-hidden rounded-xl bg-white shadow-sm outline-none transition hover:shadow-md focus-visible:ring-2 focus-visible:ring-zinc-950/70 dark:bg-zinc-900 dark:focus-visible:ring-zinc-50/70 ${idx > 0 ? "hidden sm:block" : "block"}`}
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
              onClick={() => setGridOffset((o) => (o - 1 + galleryImages.length) % galleryImages.length)}
              className="pointer-events-auto absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-zinc-900/60 text-zinc-100 shadow-sm backdrop-blur transition hover:bg-zinc-900/80 dark:bg-zinc-100/20 dark:text-zinc-50 h-12 w-12 text-2xl sm:h-14 sm:w-14 sm:text-3xl md:h-16 md:w-16"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next photos"
              onClick={() => setGridOffset((o) => (o + 1) % galleryImages.length)}
              className="pointer-events-auto absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-zinc-900/60 text-zinc-100 shadow-sm backdrop-blur transition hover:bg-zinc-900/80 dark:bg-zinc-100/20 dark:text-zinc-50 h-12 w-12 text-2xl sm:h-14 sm:w-14 sm:text-3xl md:h-16 md:w-16"
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
              className="absolute right-3 top-0 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900/60 text-xl text-zinc-100 backdrop-blur transition hover:bg-zinc-900/80 sm:right-6"
              style={{ top: "calc(env(safe-area-inset-top, 0px) + 2px)" }}
            >
              ×
            </button>

            <div
              className="relative w-full px-6 sm:px-10 md:px-16"
              style={{ height: "min(70svh, 70vh)" }}
              onTouchStart={onLightboxTouchStart}
              onTouchMove={onLightboxTouchMove}
              onTouchEnd={onLightboxTouchEnd}
            >
              <div
                className={`flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-transparent transition-all duration-300 ease-out ${
                  lbEntering && touchDeltaX === 0 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
                }`}
                style={{
                  transform: touchDeltaX !== 0 ? `translateX(${touchDeltaX}px)` : undefined,
                }}
              >
                <Image
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].alt}
                  className="h-full w-auto max-w-full object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>
              <button
                type="button"
                aria-label="Previous"
                onClick={showPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center rounded-full bg-zinc-900/60 text-zinc-100 shadow-sm backdrop-blur transition hover:bg-zinc-900/80 dark:bg-zinc-100/20 h-12 w-12 text-2xl sm:h-14 sm:w-14 sm:text-3xl md:h-16 md:w-16"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={showNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center rounded-full bg-zinc-900/60 text-zinc-100 shadow-sm backdrop-blur transition hover:bg-zinc-900/80 dark:bg-zinc-100/20 h-12 w-12 text-2xl sm:h-14 sm:w-14 sm:text-3xl md:h-16 md:w-16"
              >
                ›
              </button>
            </div>

              <div className="flex w-full items-center justify-center gap-3 overflow-x-auto pb-1" style={{height: "5rem"}}>
              {galleryImages.map((img, idx) => (
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
