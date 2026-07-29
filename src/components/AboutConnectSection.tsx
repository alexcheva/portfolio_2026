import { FileText, Mail } from "lucide-react";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

const connectLinks = [
  {
    label: "View resume",
    href: "/profile/alexandra_lukinicheva_resume.pdf",
    icon: FileText,
    external: true,
  },
  {
    label: "Contact me",
    href: "mailto:a.lukinicheva@gmail.com",
    icon: Mail,
  },
];

export default function AboutConnectSection() {
  return (
    <section aria-labelledby="about-contact-heading" className="px-6 pb-16">
      <div className="mx-auto w-full max-w-6xl rounded-2xl border border-orange-300/25 bg-[#120f1d]/70 p-6 shadow-2xl shadow-black/25 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-200">
              Connect
            </p>
            <h2
              id="about-contact-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl"
            >
              Let&apos;s Build Something Great Together
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              I&apos;m always happy to chat about frontend engineering,
              accessibility, React, or interesting opportunities.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            {connectLinks.map(({ label, href, icon: Icon, external }) => {
              const className =
                "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition hover:border-orange-300/50 hover:bg-orange-300/10 focus:outline-none focus:ring-2 focus:ring-orange-300";

              return external ? (
                <a
                  key={label}
                  href={assetPath(href)}
                  target="_blank"
                  rel="noreferrer"
                  className={className}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </a>
              ) : (
                <Link key={label} href={href} className={className}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
