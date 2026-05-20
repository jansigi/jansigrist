import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

const stroke = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconCode(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  );
}

export function IconMusic(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

export function IconUser(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function IconBriefcase(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

export function IconGraduation(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M22 10v6" />
      <path d="M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
    </svg>
  );
}

export function IconBike(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  );
}

export function IconRun(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="13" cy="4" r="1.5" />
      <path d="M4 17l5 1 .75-1.5" />
      <path d="M15 21v-4l-4-3 1-6-3 2-1 3" />
      <path d="M7 12V9l5-1 3 3 3 1" />
    </svg>
  );
}

export function IconWaves(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M2 8c2 0 2 1.5 4 1.5S8 8 10 8s2 1.5 4 1.5S16 8 18 8s2 1.5 4 1.5" />
      <path d="M2 14c2 0 2 1.5 4 1.5s2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5" />
      <path d="M2 20c2 0 2 1.5 4 1.5s2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5" />
    </svg>
  );
}

export function IconCube(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
    </svg>
  );
}

export function IconHome(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M3 11 12 3l9 8" />
      <path d="M5 10v10h5v-6h4v6h5V10" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

export function IconTrophy(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" />
      <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
      <path d="M6 3h12v6a6 6 0 0 1-12 0V3z" />
      <path d="M12 15v4M8 22h8" />
    </svg>
  );
}

export function IconCoffee(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M3 8h15v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
      <path d="M6 1v3M10 1v3M14 1v3" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function IconDownload(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

/* Brand logos: solid fill, official paths. */

export function IconGitHub(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.23 3.4 9.66 8.12 11.23.6.11.82-.26.82-.58v-2.1c-3.3.73-4-1.42-4-1.42-.55-1.45-1.35-1.84-1.35-1.84-1.1-.78.08-.76.08-.76 1.22.09 1.86 1.28 1.86 1.28 1.08 1.86 2.83 1.32 3.52 1.01.11-.8.42-1.33.76-1.63-2.63-.31-5.4-1.36-5.4-6.06 0-1.34.47-2.43 1.25-3.29-.13-.31-.54-1.58.12-3.3 0 0 1.01-.33 3.3 1.26a11.37 11.37 0 0 1 6 0c2.28-1.59 3.28-1.26 3.28-1.26.67 1.72.25 2.99.13 3.3.78.86 1.25 1.95 1.25 3.29 0 4.71-2.78 5.74-5.43 6.05.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A11.51 11.51 0 0 0 23.5 12.3 11.5 11.5 0 0 0 12 .5Z"
      />
    </svg>
  );
}

export function IconLinkedIn(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V9h3v10zM6.5 7.7a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM19 19h-3v-5.4c0-1.3-.5-2.1-1.7-2.1-1 0-1.5.6-1.7 1.3-.1.2-.1.6-.1.9V19h-3V9h3v1.3a3 3 0 0 1 2.7-1.5c2 0 3.4 1.3 3.4 4V19z" />
    </svg>
  );
}

export function IconSwissFlag(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <rect width="24" height="24" rx="3" fill="#DA291C" />
      <rect x="10" y="4" width="4" height="16" fill="#fff" />
      <rect x="4" y="10" width="16" height="4" fill="#fff" />
    </svg>
  );
}

export function IconKotlin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <defs>
        <linearGradient id="kotlinGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0095D5" />
          <stop offset="50%" stopColor="#7F52FF" />
          <stop offset="100%" stopColor="#E44857" />
        </linearGradient>
      </defs>
      <path d="M2 2h20L12 12l10 10H2V2z" fill="url(#kotlinGrad)" />
    </svg>
  );
}
