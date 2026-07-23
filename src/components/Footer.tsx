import { CalendarDays, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BrandIcon from "@/components/BrandIcon";
import { assetPath } from "@/lib/assetPath";
// import Navbar from "@/components/Navbar";

const footerLinks = [
  {
    label: "Email",
    href: "mailto:a.lukinicheva@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/alexcheva",
    brand: "github" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alexandra-lukinicheva",
    brand: "linkedin" as const,
  },
  {
    label: "Calendly",
    href: "https://calendly.com/a-lukinicheva",
    icon: CalendarDays,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#02030a]/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-sm font-semibold tracking-wide">
          2026 build by Alexandra Lukinicheva
        </span>
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <nav aria-label="Footer links" className="flex items-center gap-2">
            {footerLinks.map(({ label, href, icon: Icon, brand }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-orange-300/50 hover:bg-orange-300/10 hover:text-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                {brand ? (
                  <BrandIcon brand={brand} className="h-4 w-4" />
                ) : Icon ? (
                  <Icon className="h-4 w-4" aria-hidden="true" />
                ) : null}
              </Link>
            ))}
          </nav>
          <Image
            src={assetPath("/brand/merkaba-logo-transparent.png")}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl"
            priority
          />
        </div>

        {/* <Navbar /> */}
      </div>
    </footer>
  );
}
