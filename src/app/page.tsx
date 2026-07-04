"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState, type ComponentType, type SVGProps } from "react";
import photoPortrait from "@/image/portrait.png";
import photoGuitar1 from "@/image/playing_guitar.jpeg";
import photoGuitar2 from "@/image/playing_guitar_2.jpeg";
import photoGuitar3 from "@/image/playing_guitar_3.jpeg";
import photoRandom1 from "@/image/random_picture.jpeg";
import photoRandom2 from "@/image/random_picture_2.jpeg";
import photoRandom3 from "@/image/random_picture_3.jpeg";
import photoBike from "@/image/riding_gravel_bike.jpeg";
import photoProgramming from "@/image/programming.jpeg";
import {
  IconBike,
  IconCode,
  IconCube,
  IconGitHub,
  IconLinkedIn,
  IconMail,
  IconMusic,
  IconRun,
  IconTrophy,
  IconWaves,
} from "./icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const SECTIONS: { label: string; desc: string; href: string; icon: Icon }[] = [
  {
    label: "IT & Projects",
    desc: "Full-stack web, Android tooling, Kotlin DSLs and a few games built end to end.",
    href: "/it",
    icon: IconCode,
  },
  {
    label: "Music",
    desc: "Guitar, piano, bass and drums. Some of my playing on YouTube and Spotify.",
    href: "/music",
    icon: IconMusic,
  },
];

const INTERESTS: { icon: Icon; label: string }[] = [
  { icon: IconMusic, label: "Guitar, Piano, Bass, Drums" },
  { icon: IconBike, label: "Biking" },
  { icon: IconWaves, label: "Swimming" },
  { icon: IconRun, label: "Running" },
  { icon: IconTrophy, label: "Triathlon" },
  { icon: IconCube, label: "Rubik's Cube" },
];

export default function Home() {
  const galleryImages = [
    { src: photoGuitar2, alt: "Jan playing guitar (2)" },
    { src: photoRandom1, alt: "Random picture" },
    { src: photoProgramming, alt: "Jan Programming" },
    { src: photoRandom2, alt: "Random picture (2)" },
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

  const visibleImages = Array.from(
    { length: 4 },
    (_, i) => galleryImages[(i + gridOffset) % galleryImages.length]
  );

  useEffect(() => {
    let id2 = 0;
    const id1 = requestAnimationFrame(() => {
      setGridEntering(false);
      id2 = requestAnimationFrame(() => setGridEntering(true));
    });
    return () => {
      cancelAnimationFrame(id1);
      if (id2) cancelAnimationFrame(id2);
    };
  }, [gridOffset]);

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
        setGridOffset(
          (o) => (o - 1 + galleryImages.length) % galleryImages.length
        );
    }
    setTouchStart(null);
    setTouchDeltaX(0);
  };

  return (
    <div className="relative z-10">
      {/* HERO */}
      <section className="px-6 pb-12 pt-10 sm:px-10 sm:pt-16">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="fade-in-up mb-8 flex items-center gap-4">
            <span className="eyebrow">Software developer · Musician</span>
            <span className="h-px flex-1 bg-[var(--color-border)]" />
          </div>

          <div className="grid grid-cols-1 items-end gap-x-10 gap-y-10 md:grid-cols-[1fr_320px]">
            <div className="fade-in-up">
              <div className="flex items-center gap-5 md:block">
                <h1
                  className="display"
                  style={{ fontSize: "clamp(2.5rem, 12vw, 8.5rem)", fontWeight: 800 }}
                >
                  Jan
                  <br />
                  Sigrist<span className="text-[var(--color-accent)]">.</span>
                </h1>
                <div className="relative aspect-square w-28 flex-shrink-0 overflow-hidden rounded-full border border-[var(--color-border-strong)] sm:w-40 md:hidden">
                  <Image
                    src={photoPortrait}
                    alt="Portrait of Jan Sigrist"
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 160px, 112px"
                    priority
                  />
                </div>
              </div>
              <p className="mt-8 max-w-xl text-[1.15rem] leading-[1.6] text-[var(--color-text)]">
                Final-year software apprentice at{" "}
                <Link
                  href="https://www.ergon.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] underline decoration-[var(--color-accent-glow)] underline-offset-4 hover:decoration-[var(--color-accent)]"
                >
                  Ergon Informatik
                </Link>{" "}
                in Zürich. I build full-stack web apps, Android tooling and Kotlin
                DSLs by day, and play guitar most evenings.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/it" className="btn-primary">
                  View projects
                </Link>
                <Link href="#contact" className="btn-ghost">
                  Get in touch
                </Link>
              </div>
            </div>

            <div className="fade-in hidden md:block">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3px] border border-[var(--color-border-strong)]">
                <Image
                  src={photoPortrait}
                  alt="Portrait of Jan Sigrist"
                  fill
                  className="object-cover"
                  sizes="320px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDEX */}
      <section className="px-6 py-10 sm:px-10">
        <div className="mx-auto w-full max-w-[1100px]">
          <hr className="rule mb-2" />
          {SECTIONS.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.label}
                href={s.href}
                className="group flex items-center gap-5 border-b border-[var(--color-border)] py-7 transition-colors sm:gap-8"
              >
                <Icon className="h-6 w-6 flex-shrink-0 text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent)]" />
                <div className="min-w-0 flex-1">
                  <h3
                    className="display text-[clamp(1.6rem,4vw,2.6rem)] transition-colors group-hover:text-[var(--color-accent)]"
                    style={{ fontWeight: 700 }}
                  >
                    {s.label}
                  </h3>
                  <p className="mt-1 max-w-md text-[0.95rem] leading-relaxed text-[var(--color-muted)]">
                    {s.desc}
                  </p>
                </div>
                <span className="flex-shrink-0 text-2xl text-[var(--color-muted)] transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-[var(--color-accent)]">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20 sm:px-10">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-[200px_1fr]">
            <div className="fade-in-up">
              <span className="eyebrow">About</span>
            </div>

            <div className="fade-in-up">
              <p className="text-[1.45rem] leading-[1.55] text-[var(--color-fg-strong)]">
                I like work that makes me think, and I&apos;ll happily stay on a
                hard problem until it clicks.
              </p>
              <p className="mt-6 text-[1.05rem] leading-[1.8] text-[var(--color-muted)]">
                Most of my apprenticeship has been real client work: backend
                services, full-stack web apps and a fair bit of Android. The
                things I&apos;ve had the most fun with are the fiddly ones, like a
                type-safe query DSL, an NFC alarm clock that did not want to
                cooperate, or working out how to solve a Rubik&apos;s Cube.
              </p>

              <div className="mt-10">
                <span className="label-mono mb-5 block">Away from the keyboard</span>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {INTERESTS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={item.label}
                        className="flex items-center gap-3 text-[0.95rem] text-[var(--color-text)]"
                      >
                        <Icon className="h-4 w-4 flex-shrink-0 text-[var(--color-muted)]" />
                        <span>{item.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTOS */}
      <section className="px-6 py-16 sm:px-10">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mb-8 flex items-center gap-4">
            <span className="eyebrow">Off the clock</span>
            <span className="h-px flex-1 bg-[var(--color-border)]" />
          </div>
          <div
            className="relative px-8 sm:px-10 md:px-14"
            onTouchStart={onGridTouchStart}
            onTouchMove={onGridTouchMove}
            onTouchEnd={onGridTouchEnd}
          >
            <div
              className={`grid grid-cols-1 gap-3 transition-all duration-300 ease-out sm:grid-cols-4 sm:gap-4 ${
                gridEntering ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
              }`}
            >
              {visibleImages.map((img, idx) => (
                <button
                  key={`${img.alt}-${idx}`}
                  type="button"
                  onClick={() =>
                    openLightbox((idx + gridOffset) % galleryImages.length)
                  }
                  className={`group relative aspect-square overflow-hidden rounded-[3px] border border-[var(--color-border)] bg-[var(--color-surface)] transition hover:border-[var(--color-border-strong)] ${
                    idx > 0 ? "hidden sm:block" : "block"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-200 [@media(hover:hover)]:group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label="Previous photos"
              onClick={() =>
                setGridOffset(
                  (o) => (o - 1 + galleryImages.length) % galleryImages.length
                )
              }
              className="pointer-events-auto absolute left-0 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-surface-alt)] text-2xl text-[var(--color-text)] backdrop-blur transition hover:text-[var(--color-accent)] active:scale-90 sm:h-14 sm:w-14 sm:text-3xl"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next photos"
              onClick={() =>
                setGridOffset((o) => (o + 1) % galleryImages.length)
              }
              className="pointer-events-auto absolute right-0 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-surface-alt)] text-2xl text-[var(--color-text)] backdrop-blur transition hover:text-[var(--color-accent)] active:scale-90 sm:h-14 sm:w-14 sm:text-3xl"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 sm:px-10">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-[200px_1fr]">
            <div className="fade-in-up">
              <span className="eyebrow">Contact</span>
            </div>

            <div className="fade-in-up">
              <h2 className="display max-w-2xl text-[clamp(2rem,5vw,3.4rem)]" style={{ fontWeight: 700 }}>
                Working on something interesting? Let&apos;s talk.
              </h2>

              <div className="mt-10 border-t border-[var(--color-border-strong)]">
                {(
                  [
                    {
                      icon: IconMail,
                      label: "Email",
                      value: "jan.sigrist@gmx.net",
                      href: "mailto:jan.sigrist@gmx.net",
                      external: false,
                    },
                    {
                      icon: IconLinkedIn,
                      label: "LinkedIn",
                      value: "Jan Sigrist",
                      href: "https://www.linkedin.com/in/jan-sigrist-870224289/",
                      external: true,
                    },
                    {
                      icon: IconGitHub,
                      label: "GitHub",
                      value: "jansigi",
                      href: "https://github.com/jansigi",
                      external: true,
                    },
                  ] satisfies { icon: Icon; label: string; value: string; href: string; external: boolean }[]
                ).map((c) => {
                  const Icon = c.icon;
                  return (
                    <Link
                      key={c.label}
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-5 border-b border-[var(--color-border)] py-5 no-underline"
                    >
                      <Icon className="h-5 w-5 flex-shrink-0 text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent)]" />
                      <span className="label-mono w-24 flex-shrink-0">{c.label}</span>
                      <span className="text-[1.05rem] text-[var(--color-fg-strong)] transition-colors group-hover:text-[var(--color-accent)]">
                        {c.value}
                      </span>
                      <span className="ml-auto text-lg text-[var(--color-muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--color-accent)]">
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-overlay)] p-4 backdrop-blur-sm"
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
              className="absolute right-3 top-0 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface)] text-xl text-[var(--color-text)] backdrop-blur transition hover:text-[var(--color-accent)] active:scale-90 sm:right-6"
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
                className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-transparent"
                style={{
                  transform:
                    touchDeltaX !== 0
                      ? `translateX(${touchDeltaX}px)`
                      : undefined,
                  transition: touchStart
                    ? "none"
                    : "transform 0.2s var(--ease-out)",
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
                className="absolute left-0 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-surface-alt)] text-2xl text-[var(--color-text)] backdrop-blur transition hover:text-[var(--color-accent)] active:scale-90 sm:h-14 sm:w-14 sm:text-3xl"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={showNext}
                className="absolute right-0 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-surface-alt)] text-2xl text-[var(--color-text)] backdrop-blur transition hover:text-[var(--color-accent)] active:scale-90 sm:h-14 sm:w-14 sm:text-3xl"
              >
                ›
              </button>
            </div>

            <div
              className="flex w-full items-center justify-center gap-3 overflow-x-auto pb-1"
              style={{ height: "5rem" }}
            >
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border-2 transition ${
                    idx === currentIndex
                      ? "border-[var(--color-accent)]"
                      : "border-transparent hover:border-[var(--color-border)]"
                  }`}
                  aria-label={`Show image ${idx + 1}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
