"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "About",
    href: "/about",
    activePath: "/about",
  },
  {
    label: "Projects",
    href: "/#projects",
  },
  {
    label: "Experience",
    href: "/#experience",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="relative">
      <div className="flex items-center justify-end">
        <ul className="hidden gap-4 text-sm text-slate-300 md:flex">
          {navItems.map((item) => {
            const isCurrent = item.activePath === pathname;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`transition hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 ${isCurrent ? "text-orange-300" : ""
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          className="text-slate-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <ul className="absolute z-40 right-0 mt-3 flex w-44 flex-col gap-3 rounded-md border border-white/10 bg-slate-950 p-4 text-sm text-slate-300 shadow-lg md:hidden">
          {navItems.map((item) => {
            const isCurrent = item.activePath === pathname;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block transition hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 ${isCurrent ? "text-orange-300" : ""
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
