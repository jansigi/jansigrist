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
  IconBriefcase,
  IconCode,
  IconCube,
  IconGitHub,
  IconGraduation,
  IconKotlin,
  IconLinkedIn,
  IconMail,
  IconMapPin,
  IconMusic,
  IconRun,
  IconSwissFlag,
  IconUser,
  IconWaves,
} from "./icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const QUICK_CARDS: { icon: Icon; label: string; desc: string; href: string }[] = [
  {
    icon: IconCode,
    label: "IT & Projects",
    desc: "Full-stack, Android, Kotlin DSLs, game dev.",
    href: "/it",
  },
  {
    icon: IconMusic,
    label: "Music",
    desc: "Guitar, piano, bass, drums — YouTube & Spotify.",
    href: "/music",
  },
  {
    icon: IconUser,
    label: "About Me",
    desc: "Interests, sports, and a bit more.",
    href: "#about",
  },
];

const INTERESTS: { icon: Icon; label: string }[] = [
  { icon: IconMusic, label: "Guitar, Piano, Bass, Drums" },
  { icon: IconBike, label: "Biking & Triathlon" },
  { icon: IconWaves, label: "Swimming" },
  { icon: IconRun, label: "Running" },
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

  const visibleImages = Array.from(
    { length: 4 },
    (_, i) => galleryImages[(i + gridOffset) % galleryImages.length]
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    let id2 = 0;
    const id1 = requestAnimationFrame(() => {
      setLbEntering(false);
      id2 = requestAnimationFrame(() => setLbEntering(true));
    });
    return () => {
      cancelAnimationFrame(id1);
      if (id2) cancelAnimationFrame(id2);
    };
  }, [currentIndex, lightboxOpen]);

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
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden px-6 py-16 sm:px-10">
        <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="fade-in-up">
            <p className="mb-5 text-[0.78rem] uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Based in Zürich, Switzerland
            </p>
            <h1
              className="mb-6 text-[var(--color-fg-strong)]"
              style={{
                fontSize: "clamp(3.5rem, 7vw, 6rem)",
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
              }}
            >
              Jan
              <br />
              <span className="text-[var(--color-accent)]">Sigrist</span>
            </h1>
            <p className="mb-8 max-w-md text-base leading-relaxed text-[var(--color-muted)]">
              Apprentice software developer at Ergon Informatik AG — building
              full-stack apps, Android tools, and musician on the side.
            </p>
            <div className="mb-7 flex flex-wrap gap-3">
              <Link href="/it" className="btn-primary">
                View Projects
              </Link>
              <Link href="#contact" className="btn-ghost">
                Get in Touch
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="https://github.com/jansigi"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/jan-sigrist-870224289/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip"
              >
                LinkedIn
              </Link>
              <Link href="mailto:jan.sigrist@gmx.net" className="social-chip">
                Email
              </Link>
            </div>
          </div>

          <div
            className="fade-in relative hidden min-h-[340px] items-center justify-center md:flex"
          >
            <div
              className="flex h-[240px] w-[240px] items-center justify-center rounded-full border-2 border-[var(--color-accent)]"
              style={{ boxShadow: "0 0 60px var(--color-accent-glow)" }}
            >
              <div className="relative h-[216px] w-[216px] overflow-hidden rounded-full bg-[var(--color-surface-alt)]">
                <Image
                  src={photoPortrait}
                  alt="Portrait of Jan Sigrist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="float absolute right-0 top-[10%] flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-text)]">
              <IconSwissFlag className="h-4 w-4 rounded-sm" />
              Zürich
            </div>
            <div className="float-delay absolute bottom-[15%] right-[5%] flex items-center gap-2 rounded-lg border border-[var(--color-accent-dim)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-accent)]">
              <IconKotlin className="h-4 w-4" />
              Kotlin
            </div>
            <div className="float absolute left-[-5%] top-[20%] flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-text)]">
              <IconMusic className="h-4 w-4 text-[var(--color-accent)]" />
              Music
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CARDS */}
      <section className="px-6 py-12 sm:px-10">
        <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-3">
          {QUICK_CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.label}
                href={c.href}
                className={`card card-hover relative block p-8 fade-in-delay-${
                  i === 0 ? "1" : "2"
                }`}
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-accent-dim)] text-[var(--color-accent)]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mb-2 text-lg font-bold text-[var(--color-fg-strong)]">{c.label}</h3>
                <p className="mb-5 text-sm leading-relaxed text-[var(--color-muted)]">
                  {c.desc}
                </p>
                <span className="absolute bottom-6 right-7 text-lg text-[var(--color-accent)]">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-16 sm:px-10">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mb-12 fade-in-up">
            <h2
              className="mb-3 text-[var(--color-fg-strong)]"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              About
            </h2>
            <p className="text-base leading-relaxed text-[var(--color-muted)]">
              A bit about who I am beyond the code.
            </p>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="card p-8">
              <h3 className="subheading mb-5 block">At a Glance</h3>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3 text-sm text-[var(--color-text)]">
                  <IconMapPin className="mt-[2px] h-4 w-4 flex-shrink-0 text-[var(--color-accent)]" />
                  <span>Zürich, Switzerland</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[var(--color-text)]">
                  <IconBriefcase className="mt-[2px] h-4 w-4 flex-shrink-0 text-[var(--color-accent)]" />
                  <span>
                    Apprentice (4th/final year) at{" "}
                    <Link
                      href="https://www.ergon.ch/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-accent)] hover:underline"
                    >
                      Ergon Informatik AG
                    </Link>
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[var(--color-text)]">
                  <IconGraduation className="mt-[2px] h-4 w-4 flex-shrink-0 text-[var(--color-accent)]" />
                  <span>Finishing apprenticeship in 2026</span>
                </li>
              </ul>
            </div>

            <div className="card p-8">
              <h3 className="subheading mb-5 block">Interests</h3>
              <div className="flex flex-col gap-3">
                {INTERESTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-2.5"
                    >
                      <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-[var(--color-accent-dim)] text-[var(--color-accent)]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm text-[var(--color-text)]">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="card p-8">
            <p className="mb-4 text-[0.96rem] leading-[1.8] text-[var(--color-muted)]">
              I&apos;m a software apprentice in my final year, working on
              real-world projects at Ergon Informatik AG. My days are split between
              backend systems, full-stack web apps, Android development and my evenings
              often involve a guitar or a bike ride.
            </p>
            <p className="text-[0.96rem] leading-[1.8] text-[var(--color-muted)]">
              I enjoy building things that actually work and solving puzzles,
              whether that&apos;s a Rubik&apos;s Cube, a database query DSL, or
              a multi-player grid strategy game.
            </p>
          </div>
        </div>
      </section>

      {/* PHOTOS */}
      <section className="px-6 py-16 sm:px-10">
        <div className="mx-auto w-full max-w-[1100px]">
          <h3 className="subheading mb-6 block">Photos</h3>
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
                  className={`group relative aspect-square overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition hover:border-[var(--color-accent-glow)] ${
                    idx > 0 ? "hidden sm:block" : "block"
                  }`}
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
              onClick={() =>
                setGridOffset(
                  (o) => (o - 1 + galleryImages.length) % galleryImages.length
                )
              }
              className="pointer-events-auto absolute left-0 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-surface-alt)] text-2xl text-[var(--color-text)] backdrop-blur transition hover:text-[var(--color-accent)] sm:h-14 sm:w-14 sm:text-3xl"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next photos"
              onClick={() =>
                setGridOffset((o) => (o + 1) % galleryImages.length)
              }
              className="pointer-events-auto absolute right-0 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-surface-alt)] text-2xl text-[var(--color-text)] backdrop-blur transition hover:text-[var(--color-accent)] sm:h-14 sm:w-14 sm:text-3xl"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-16 sm:px-10">
        <div className="mx-auto w-full max-w-[640px]">
          <div className="mb-12 fade-in-up">
            <h2
              className="mb-3 text-[var(--color-fg-strong)]"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              Get in Touch
            </h2>
            <p className="text-base leading-relaxed text-[var(--color-muted)]">
              Whether you have a question, a project idea, or just want to say
              hello.
            </p>
          </div>

          <div className="mb-8 flex flex-col gap-4">
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
                  className="card card-hover flex items-center gap-5 px-7 py-6 no-underline"
                >
                  <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-dim)] text-[var(--color-accent)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="mb-1 text-[0.7rem] uppercase tracking-[0.1em] text-[var(--color-muted)]">
                      {c.label}
                    </div>
                    <div className="font-semibold text-[var(--color-text)]">
                      {c.value}
                    </div>
                  </div>
                  <span className="ml-auto text-xl text-[var(--color-accent)]">
                    →
                  </span>
                </Link>
              );
            })}
          </div>

          <p className="mt-6 text-center text-sm text-[var(--color-muted)]">
            Based in Zürich — open to questions, collabs, and new connections.
          </p>
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
              className="absolute right-3 top-0 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface)] text-xl text-[var(--color-text)] backdrop-blur transition hover:text-[var(--color-accent)] sm:right-6"
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
                  lbEntering && touchDeltaX === 0
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-3"
                }`}
                style={{
                  transform:
                    touchDeltaX !== 0
                      ? `translateX(${touchDeltaX}px)`
                      : undefined,
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
                className="absolute left-0 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-surface-alt)] text-2xl text-[var(--color-text)] backdrop-blur transition hover:text-[var(--color-accent)] sm:h-14 sm:w-14 sm:text-3xl"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={showNext}
                className="absolute right-0 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-surface-alt)] text-2xl text-[var(--color-text)] backdrop-blur transition hover:text-[var(--color-accent)] sm:h-14 sm:w-14 sm:text-3xl"
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
