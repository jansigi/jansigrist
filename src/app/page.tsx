import Image from "next/image";
import Link from "next/link";
import photoPortrait from "@/image/portrait.jpeg";
import photoGuitar1 from "@/image/playing_guitar.jpeg";
import photoGuitar2 from "@/image/playing_guitar_2.jpeg";
import photoBike from "@/image/riding_gravel_bike.jpeg";

export default function Home() {
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
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800">
              <h3 className="text-base font-medium">Dope Query Builder</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Open-source SQL query builder project. Explore the repository on GitHub.
              </p>
              <div className="mt-3 text-sm">
                <Link
                  href="https://github.com/ergon/dope-query-builder"
                  className="text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View repository
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Photos */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold tracking-tight">Photos</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="relative aspect-square overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
              <Image src={photoPortrait} alt="Portrait of Jan" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
              <Image src={photoGuitar1} alt="Jan playing guitar" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
              <Image src={photoGuitar2} alt="Jan playing guitar (2)" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
              <Image src={photoBike} alt="Jan riding a gravel bike" fill className="object-cover" />
            </div>
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
    </div>
  );
}
