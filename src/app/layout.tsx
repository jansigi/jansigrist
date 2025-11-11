import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jan Sigrist — Personal Page",
  description: "Personal website for Jan Sigrist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-zinc-50/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
          <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-3 sm:px-10">
            <Link href="/" className="text-sm font-medium tracking-tight hover:opacity-80">
              Jan Sigrist
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/it" className="inline-flex items-center gap-2 rounded px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                  <path d="M7 7L3 12l4 5" />
                  <path d="M17 7l4 5-4 5" />
                  <path d="M14 6l-4 12" />
                </svg>
                <span>IT</span>
              </Link>
              <Link href="/music" className="inline-flex items-center gap-2 rounded px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                  <path d="M9 18V6l8-2v12" />
                  <circle cx="7" cy="18" r="2" />
                  <circle cx="17" cy="16" r="2" />
                </svg>
                <span>Music</span>
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-zinc-200 bg-zinc-50 py-6 text-sm text-zinc-500 dark:border-zinc-800 dark:bg-black dark:text-zinc-400">
          <div className="mx-auto w-full max-w-4xl px-6 sm:px-10">© 2025 Jan Sigrist</div>
        </footer>
      </body>
    </html>
  );
}
