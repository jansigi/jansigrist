---
name: Jan Sigrist
description: Editorial-cobalt personal portfolio — sharp, restrained, craft-forward.
colors:
  accent-cobalt: "#2347ff"
  accent-dim: "#2347ff1a"
  accent-glow: "#2347ff38"
  paper-bg: "#f1f2f4"
  surface: "#f9fafb"
  surface-alt: "#e6e8ec"
  ink: "#101218"
  text: "#2a2d36"
  muted: "#6a6e7b"
  border: "#12141c21"
  border-strong: "#12141c42"
  on-accent: "#ffffff"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 12vw, 8.5rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 4vw, 2.6rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "DM Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  xs: "2px"
  sm: "3px"
  md: "4px"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.accent-cobalt}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "0.7rem 1.5rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "0.7rem 1.5rem"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "1.75rem"
  tag-chip:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "0.18rem 0.55rem"
---

# Design System: Jan Sigrist

## 1. Overview

**Creative North Star: "The Cobalt Broadsheet"**

This is a personal portfolio built like a well-set newspaper spread, not a marketing page. A grotesque display face sets huge, tight-tracked headlines; a proper reading serif carries the prose; a mono voice handles the small structural type — bylines, section marks, labels. The whole thing sits on a cool paper-grey with a faint printed grain, and a single electric cobalt does all the pointing. The effect is a page that feels edited: confident in its typography, generous with whitespace, and unhurried. Craft does the talking; there is no hard sell.

Restraint is the strategy. Depth comes from type scale, rule lines, and spacing rhythm rather than shadows or effects. The one accent is rationed so it always means something — a link, a state, the full stop after the name. The site reads as one composed voice across two subjects (engineering and music), unified by the same grid, the same type, the same cobalt.

This system explicitly rejects the **generic SaaS/startup template** (no hero-metric card walls, no gradient buttons), the **corporate/stiff résumé** (no impersonal formality), the **cluttered try-hard** (effects never pile up), and the **bland/forgettable default** (if it could be anyone's site, it has failed).

**Key Characteristics:**
- Editorial three-voice type system: grotesque display, reading serif, mono labels
- Cool paper-grey canvas with a subtle printed grain, full dark-mode counterpart
- One rationed cobalt accent as the only chromatic voice
- Sharp corners (2–4px) and thin rule lines instead of soft cards and shadows
- Depth from type scale and whitespace, not elevation

## 2. Colors

A near-monochrome cool-neutral field with a single high-energy cobalt doing all the work.

### Primary
- **Electric Cobalt** (`#2347ff`; dark mode `#5d7dff`): The only chromatic voice. Links, the full stop after "Sigrist.", hover states, active nav, focus, selection, the scrollbar thumb. Never decorative — its presence always signals interaction or emphasis.
- **Cobalt Dim** (`#2347ff1a`): 10%-alpha cobalt wash behind small accent glyphs (project link chips, list bullets).
- **Cobalt Glow** (`#2347ff38`): 22%-alpha cobalt for underline decoration and soft bullet dots that resolve to full cobalt on hover.

### Neutral
- **Paper Grey** (`#f1f2f4`; dark `#0d0e12`): The body canvas. Cool, not warm — deliberately *not* cream/sand. Carries a faint fractal-noise grain (opacity ~0.035, `multiply` in light / `screen` in dark).
- **Surface** (`#f9fafb`; dark `#15171d`): Cards, floating controls, the nav backdrop tint.
- **Surface Alt** (`#e6e8ec`; dark `#1d1f28`): Recessed controls — the gallery arrow buttons, thumbnails.
- **Ink** (`#101218`; dark `#f3f5fb`): Display headings and strongest emphasis text.
- **Text** (`#2a2d36`; dark `#d7dae4`): Default body reading colour. Meets 4.5:1 on Paper Grey.
- **Muted** (`#6a6e7b`; dark `#868b9b`): Secondary prose, labels, iconography at rest, descriptions.
- **Border** (`#12141c21` ≈ 13% ink; dark 12% light): Hairline dividers and default card strokes.
- **Border Strong** (`#12141c42` ≈ 26% ink): Section rules, footer top border, portrait frame, ghost-button stroke.

### Named Rules
**The One Cobalt Rule.** Cobalt is the *only* saturated colour on the page and it never exceeds ~10% of any screen. It marks interaction and emphasis — nothing else earns it. If a second accent hue is ever tempting, the answer is no.

**The Cool-Not-Cream Rule.** The neutral field is deliberately cool grey (`#f1f2f4`), never a warm cream/sand/paper tint. Warmth is banned from the canvas; personality comes from type and the cobalt.

## 3. Typography

**Display Font:** Bricolage Grotesque (fallback: ui-sans-serif, system-ui, sans-serif)
**Body Font:** Newsreader (fallback: Georgia, "Times New Roman", serif)
**Label/Mono Font:** DM Mono (fallback: ui-monospace, SFMono-Regular, Menlo, monospace)

**Character:** A deliberate three-axis pairing — a slightly quirky variable grotesque for display, a genuine optical-sized reading serif for prose, and a mono for structural micro-type. The contrast axes (grotesque vs. serif vs. mono) are wide enough that the three never blur together; each has a clear job.

### Hierarchy
- **Display** (Bricolage, 800, `clamp(2.5rem, 12vw, 8.5rem)`, line-height 0.94, tracking −0.035em): The name lockup and page titles. Optical sizing on. Massive and tightly set.
- **Headline** (Bricolage, 700, `clamp(1.6rem, 4vw, 2.6rem)`, line-height ~1.05): Section index links, sub-page H1s. Shifts to cobalt on hover.
- **Body** (Newsreader, 400, 1.05–1.15rem, line-height 1.6–1.8): Reading prose. Constrained to ~`max-w-xl` (≈36rem, well under 75ch) for comfortable measure.
- **Lead** (Newsreader, 400, ~1.45rem, line-height 1.55): The opening statement in the About block — larger reading serif for a pull-quote feel.
- **Label / Eyebrow** (DM Mono, 500, 0.7–0.72rem, tracking 0.12–0.18em, uppercase): Section marks, byline, footer nav, form-style labels. Eyebrow is cobalt; plain labels are muted.

### Named Rules
**The Three-Voice Rule.** Every piece of text is display (Bricolage), reading (Newsreader), or structural (DM Mono). No fourth font, and no borrowing a voice for the wrong job — prose is never set in mono, labels are never set in serif.

**The Rationed Eyebrow Rule.** The mono uppercase eyebrow is a real part of the system, but it is *not* owed to every section. Use it as a deliberate byline, not reflexive scaffolding above every heading. When in doubt, let the headline and a rule line carry the section instead.

## 4. Elevation

Flat by doctrine. The system conveys depth through the type scale, thin rule lines, and whitespace rhythm — not shadows. Surfaces sit on the page at rest with a hairline border; there is no ambient drop-shadow layer. Backdrop blur appears only on the sticky nav and the lightbox overlay, where it separates a floating layer from scrolling content.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 10px 30px rgba(24,19,11,0.1)`): The single shadow in the system. Applied *only* on hover of an interactive project card (`.card-hover`), paired with a −3px translate. It is a response to state, never a resting decoration.

### Named Rules
**The Flat-At-Rest Rule.** Surfaces are flat until touched. The only shadow (`card-lift`) exists solely as a hover response on interactive cards. A shadow on a static element is forbidden.

## 5. Components

### Buttons
- **Shape:** Nearly square — 2px radius (`{rounded.xs}`). Mono type, 0.8rem, tracking 0.04em.
- **Primary:** Solid cobalt fill, white text (`0.7rem 1.5rem` padding). Hover lifts −1px (`translateY`). Used for the single lead CTA ("View projects").
- **Ghost:** Transparent with a `border-strong` stroke and ink text. Hover shifts border and text to cobalt. The secondary/companion action.
- **Focus:** Keyboard focus must show a visible cobalt ring (not `outline: none`); confirm on any new interactive element.

### Chips / Tags
- **Style:** Transparent fill, hairline `border` stroke, muted mono text at 0.68rem, 2px radius. Used for tech tags on project cards.
- **State:** Static labels — no selected/unselected variant. Not interactive.

### Cards / Containers
- **Corner Style:** 4px radius (`{rounded.md}`) — sharp, editorial, never pill-soft.
- **Background:** Surface (`#f9fafb`) on the paper canvas.
- **Shadow Strategy:** Flat at rest; `card-lift` shadow + −3px translate on hover for interactive cards only (see Elevation).
- **Border:** 1px hairline `border`, deepening to `border-strong` on hover.
- **Internal Padding:** 1.5–1.75rem (`p-6` / `p-7`).

### Navigation
- **Style:** Fixed top bar, transparent over the hero; on scroll (>40px) it gains a `nav-bg` blurred tint and a `border-strong` bottom rule. Links are mono labels with an icon; active/hover state is cobalt. Mobile collapses to a toggle menu.

### Signature: Rule + Eyebrow Section Head
The recurring section-opener pattern — a mono eyebrow followed by a hairline rule that fills the remaining width (`<span class="eyebrow"> … <span class="h-px flex-1 bg-border" />`). This is the system's editorial signature. Deploy it deliberately (see the Rationed Eyebrow Rule), not on every block.

### Signature: Lightbox Gallery
A full-viewport `overlay`-tinted, backdrop-blurred modal with keyboard (arrows/Esc) and touch-swipe navigation, a thumbnail strip, and a crossfade+slide transition on image change. Arrow controls use `surface-alt` circular buttons. The one place motion is choreographed rather than incidental.

## 6. Do's and Don'ts

### Do:
- **Do** keep cobalt (`#2347ff`) as the single accent, rationed to ≤10% of any screen — links, states, emphasis only.
- **Do** set every text element in one of the three voices: Bricolage display, Newsreader body, DM Mono labels.
- **Do** keep the canvas cool grey (`#f1f2f4`) and let the printed grain carry atmosphere.
- **Do** convey depth with type scale, rule lines, and whitespace — surfaces stay flat at rest.
- **Do** keep corners sharp (2–4px) across buttons, chips, cards, and image tiles.
- **Do** honour `prefers-reduced-motion` (fades already disabled) and keep body text ≥4.5:1 in both themes.
- **Do** hold reading prose to ~`max-w-xl` for a comfortable measure.

### Don't:
- **Don't** ship a **generic SaaS/startup template** — no hero-metric card walls, no gradient buttons, no icon-heading-blurb card grids repeated endlessly.
- **Don't** let it read **corporate or stiff** — no impersonal third-person résumé formality; keep the first-person, dry voice.
- **Don't** go **cluttered or try-hard** — effects never pile up; motion and blur must earn their place.
- **Don't** settle for **bland or forgettable** — if it could be anyone's site, it has failed.
- **Don't** introduce a second accent hue, warm the canvas toward cream/sand, or add gradient text.
- **Don't** put a resting drop-shadow on any surface; the only shadow is the interactive-card hover lift.
- **Don't** paste the mono eyebrow above every section — it's a deliberate byline, not default scaffolding.
- **Don't** use `border-left`/`border-right` colour stripes as accents; use full borders, background tints, or nothing.
