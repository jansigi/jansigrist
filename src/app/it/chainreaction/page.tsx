import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Chain Reaction | Jan Sigrist",
  description: "Download the Chain Reaction JAR.",
};

export default function ChainReactionPage() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6 py-16 sm:px-10">
      <div className="card w-full max-w-lg p-10 text-center fade-in-up">
        <h1
          className="mb-3 text-[var(--color-fg-strong)]"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Chain Reaction
        </h1>
        <p className="mb-7 text-sm text-[var(--color-muted)]">
          Download the desktop JAR file.
        </p>
        <a href="/chain-reaction.jar" download className="btn-primary">
          Download JAR ↓
        </a>
      </div>
    </section>
  );
}
