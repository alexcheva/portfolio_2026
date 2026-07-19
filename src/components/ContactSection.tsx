import { CalendarDays, Mail } from "lucide-react";
import Link from "next/link";
import { GalaxyScene } from "@/components/effects/GalaxyScene";

function FontAwesomeBrandIcon({
  brand,
  className,
}: {
  brand: "github" | "linkedin";
  className?: string;
}) {
  const paths = {
    github:
      "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z",
    linkedin:
      "M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 24.1 24.1 0 53.8 0s53.8 24.1 53.8 53.8c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z",
  };

  return (
    <svg
      viewBox={brand === "github" ? "0 0 496 512" : "0 0 448 512"}
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={paths[brand]} />
    </svg>
  );
}

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
    href: "mailto:a.lukinicheva@gamil.com",
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
              If you're hiring, looking to collaborate, or would like to discuss an opportunity, I'd love to connect.
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
                    <FontAwesomeBrandIcon brand={brand} className="h-5 w-5" />
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
