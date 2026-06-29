import { GalaxyScene } from "@/components/GalaxyScene";
import { MerkabaScene } from "@/components/MerkabaScene";
import Image from "next/image";
import Link from "next/link";

const navItems = ["About", "Projects", "Experience", "Writing", "Contact"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#02030a] text-slate-100">
      <section className="relative min-h-screen overflow-hidden">
        <GalaxyScene />

        <div className="relative z-10">
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
                {navItems.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          <div className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
                Software Engineer
              </p>

              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                I build thoughtful interfaces and reliable product systems.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                A portfolio for engineering work, product thinking, case
                studies, and experiments in interactive visual identity.
              </p>
            </div>

            <div
              aria-label="Interactive glass merkaba WebGL visual"
              className="relative aspect-square w-full overflow-hidden"
            >
              <MerkabaScene />
              <span className="sr-only">Interactive glass merkaba visual</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
