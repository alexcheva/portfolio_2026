import Link from "next/link";
import Image from "next/image";

const navItems = ["About", "Projects", "Experience", "Writing", "Contact"];

export default function NavHeader() {
  return (
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
                  className={`transition hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 ${isCurrent ? "text-orange-300" : ""
                    }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>);
}