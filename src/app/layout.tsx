import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export const metadata: Metadata = {
  title: "Jan Sigrist",
  description: "Personal website — IT projects and music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        <SiteHeader />
        <main className="flex-1 pt-[72px]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
