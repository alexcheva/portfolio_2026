import { assetPath } from "@/lib/assetPath";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    title: "Home Improvement Loans",
    result: "Lighthouse performance: 60 → 100",
    liveUrl: "https://www.upstart.com/home-improvement-loans",
    liveLabel: "View live Home Improvement Loans page",
    comparisons: [
      {
        viewport: "Desktop",
        before:
          "/projects/upstart_optimization/upstart-home-improvement-loans-lighthouse-before-desktop.png",
        after:
          "/projects/upstart_optimization/upstart-home-improvement-loans-lighthouse-after-desktop.png",
      },
      {
        viewport: "Mobile",
        before:
          "/projects/upstart_optimization/upstart-home-improvement-loans-lighthouse-before-mobile.png",
        after:
          "/projects/upstart_optimization/upstart-home-improvement-loans-lighthouse-after-mobile.png",
      },
    ],
  },
  {
    title: "Personal Loans",
    result: "Lighthouse performance: 63 → 99",
    liveUrl: "https://www.upstart.com/personal-loans",
    liveLabel: "View live Personal Loans page",
    comparisons: [
      {
        viewport: "Desktop",
        before:
          "/projects/upstart_optimization/upstart-personal-loans-lighthouse-before-desktop.png",
        after:
          "/projects/upstart_optimization/upstart-personal-loans-lighthouse-after-desktop.png",
      },
      {
        viewport: "Mobile",
        before:
          "/projects/upstart_optimization/upstart-personal-loans-lighthouse-before-mobile.png",
        after:
          "/projects/upstart_optimization/upstart-personal-loans-lighthouse-after-mobile.png",
      },
    ],
  },
];

function ReportImage({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: "Before" | "After";
}) {
  return (
    <figure className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="text-sm font-semibold text-white">{label}</span>
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            label === "After" ? "bg-emerald-400" : "bg-amber-400"
          }`}
          aria-hidden="true"
        />
      </div>
      <Image
        src={assetPath(src)}
        alt={alt}
        width={900}
        height={900}
        sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
        className="h-auto w-full"
      />
    </figure>
  );
}

export default function UpstartPerformanceCaseStudies() {
  return (
    <section aria-labelledby="performance-results-title" className="mt-16">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
        Production evidence
      </p>
      <h2
        id="performance-results-title"
        className="mt-3 text-3xl font-semibold tracking-tight text-white"
      >
        Landing-page performance, before and after
      </h2>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
        I optimized critical rendering, asset delivery, component structure,
        images, and unnecessary JavaScript across high-traffic Upstart landing
        pages. These captured Lighthouse reports show the resulting gains on
        desktop and mobile.
      </p>

      <div className="mt-10 space-y-12">
        {caseStudies.map((caseStudy) => (
          <article
            key={caseStudy.title}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 md:p-6"
          >
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {caseStudy.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-emerald-300">
                  {caseStudy.result}
                </p>
              </div>
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 text-sm font-medium text-orange-200 underline decoration-orange-300/40 underline-offset-4 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                {caseStudy.liveLabel}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-7 space-y-8">
              {caseStudy.comparisons.map((comparison) => (
                <section key={comparison.viewport}>
                  <h4 className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                    {comparison.viewport}
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <ReportImage
                      src={comparison.before}
                      label="Before"
                      alt={`${caseStudy.title} ${comparison.viewport.toLowerCase()} Lighthouse report before optimization`}
                    />
                    <ReportImage
                      src={comparison.after}
                      label="After"
                      alt={`${caseStudy.title} ${comparison.viewport.toLowerCase()} Lighthouse report after optimization`}
                    />
                  </div>
                </section>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-slate-400">
        Lighthouse scores are lab measurements and can vary by environment and
        test conditions. The live pages have continued evolving since these
        reports were captured.
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
          Additional production pages
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          {[
            ["Credit Card Consolidation", "https://www.upstart.com/credit-card-consolidation"],
            ["Wedding Loans", "https://www.upstart.com/wedding-loans"],
            ["Moving Loans", "https://www.upstart.com/moving-loans"],
            ["Medical Loans", "https://www.upstart.com/medical-loans"],
            ["Debt Consolidation Loans", "https://www.upstart.com/debt-consolidation-loans"],
          ].map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-orange-200 underline decoration-orange-300/40 underline-offset-4 hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-5 border-t border-white/10 pt-5">
          Read the deeper engineering guide:{" "}
          <Link
            href="/insights/nextjs-react-typescript-performance-accessibility-seo"
            className="font-medium text-orange-200 underline decoration-orange-300/40 underline-offset-4 hover:text-white"
          >
            How Next.js, React, and TypeScript help optimize performance,
            accessibility, and SEO
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
