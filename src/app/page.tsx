// import Image from "next/image";
// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
// ];
const navItems = ["About", "Projects", "Experience", "Writing", "Contact"];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <img
          src="/brand/merkaba-logo-transparent.png"
          alt="Alexandra Lukinicheva logo"
          className="h-10 w-10 rounded-xl"
        />
        <a href="/" className="text-sm font-semibold tracking-wide">
          Alexandra Lukinicheva
        </a>

        <nav aria-label="Main navigation">
          <ul className="flex gap-4 text-sm text-slate-300">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
            Software Engineer
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            I build thoughtful interfaces and reliable product systems.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A portfolio for engineering work, product thinking, case studies,
            and experiments in interactive visual identity.
          </p>
        </div>

        <div
          aria-label="Placeholder for future interactive merkaba visual"
          className="flex aspect-square w-full items-center justify-center border border-cyan-300/30 bg-slate-900/80"
        >
          <span className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">
            Merkaba WebGL
          </span>
        </div>
      </section>
    </main>
  );
}
