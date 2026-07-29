import { CalendarDays, Mail } from "lucide-react";
import Link from "next/link";
import BrandIcon from "@/components/BrandIcon";
import { GalaxyScene } from "@/components/effects/GalaxyScene";

/* LET'S BUILD SOMETHING GREAT
Email
LinkedIn
GitHub */
const contactLinks = [
  {
    label: "LinkedIn",
    detail: "Connect with me",
    href: "https://www.linkedin.com/in/alexandra-lukinicheva",
    brand: "linkedin" as const,
  },
  {
    label: "GitHub",
    detail: "Follow my work",
    href: "https://github.com/alexcheva",
    brand: "github" as const,
  },
  {
    label: "Calendly",
    detail: "Schedule a time to talk",
    href: "https://calendly.com/a-lukinicheva",
    icon: CalendarDays,
  },
  {
    label: "Email",
    detail: "Send me a message",
    href: "mailto:a.lukinicheva@gmail.com",
    icon: Mail,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-[#02030a] px-6 py-20"
    >
      <GalaxyScene />

      <div className="relative z-10 mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-orange-300/25 bg-[#120f1d]/80 p-8 md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(251,146,60,0.22),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(14,165,233,0.14),transparent_30%),radial-gradient(circle_at_52%_92%,rgba(217,70,239,0.12),transparent_36%),linear-gradient(135deg,rgba(2,3,10,0.04),rgba(2,3,10,0.48))]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,3,10,0.08),rgba(2,3,10,0.5))]" />

        <div className="relative z-10">
          <div className="max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-200">
              Contact
            </p>
            <h2 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Let&apos;s build something great together.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
              If you&apos;re hiring, looking to collaborate, or would like to discuss an opportunity, I&apos;d love to connect.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contactLinks.map(({ label, detail, href, icon: Icon, brand }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-24 items-start gap-4 rounded-xl border border-white/15 bg-white/[0.06] p-4 transition hover:border-orange-300/50 hover:bg-orange-300/14 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-300/15 text-orange-200 transition group-hover:bg-orange-300/25 group-hover:text-orange-100">
                  {brand ? (
                    <BrandIcon brand={brand} className="h-5 w-5" />
                  ) : Icon ? (
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  ) : null}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    {label}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-300">
                    {detail}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
