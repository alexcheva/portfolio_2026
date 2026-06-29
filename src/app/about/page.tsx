import { AboutImageSlots } from "@/components/AboutImageSlots";
import Image from "next/image";
import Link from "next/link";

const navItems = ["About", "Projects", "Experience", "Writing", "Contact"];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#02030a] text-slate-100">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/merkaba-logo-transparent.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl"
            priority
          />
          <span className="text-sm font-semibold tracking-wide">
            Alexandra Lukinicheva
          </span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex gap-4 text-sm text-slate-300">
            {navItems.map((item) => {
              const href = `/${item.toLowerCase()}`;
              const isCurrent = item === "About";

              return (
                <li key={item}>
                  <Link
                    href={href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`transition hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 ${
                      isCurrent ? "text-orange-300" : ""
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1fr_0.75fr] lg:py-24">
        <article>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
            About
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Hi, I&apos;m Alex.
          </h1>

          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-300">
            <p>
              I&apos;m a software engineer who loves building experiences that
              feel effortless, delightful, and just a little bit magical.
            </p>

            <p>
              Over the past several years I&apos;ve worked across frontend
              engineering, accessibility, performance optimization, automation,
              and developer tooling. Along the way I&apos;ve learned that the
              software people remember is not just technically correct. It feels
              thoughtful. It loads quickly, works for everyone, communicates
              clearly, and pays attention to the small details.
            </p>

            <p>That&apos;s the kind of software I enjoy building.</p>

            <p>
              My favorite projects sit at the intersection of engineering,
              design, and creativity. Whether I&apos;m developing React
              applications, experimenting with interactive graphics, improving
              accessibility, or exploring AI-powered interfaces, I&apos;m always
              looking for ways to make technology feel a little more human.
            </p>

            <p>
              Outside of work I enjoy building creative projects that challenge
              me to learn new technologies, from modern web experiences and
              generative AI to digital art, 3D printing, and custom fabrication.
              Every project is an opportunity to explore something unfamiliar
              and bring an idea to life.
            </p>

            <p>
              Currently I&apos;m focused on modern frontend engineering with
              React, TypeScript, Next.js, accessibility, motion, and interactive
              web experiences.
            </p>
          </div>

          <blockquote className="mt-12 border-l-2 border-orange-300 pl-6 text-2xl font-medium leading-10 text-white">
            I believe the best products aren&apos;t just functional. They&apos;re
            memorable.
          </blockquote>
        </article>

        <aside aria-label="Image spaces for creative work">
          <AboutImageSlots />
        </aside>
      </section>
    </main>
  );
}
