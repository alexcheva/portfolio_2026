import { assetPath } from "@/lib/assetPath";
import Image from "next/image";
import Link from "next/link";

const auditComparison = [
  {
    label: "Earlier production audit",
    src: "/projects/portfolio_optimization/alexcheva-portfolio-lighthouse-audit-before.png",
    alt: "Earlier Lighthouse audit for alexcheva.com showing incomplete performance, accessibility, and agentic browsing checks",
  },
  {
    label: "After iteration",
    src: "/projects/portfolio_optimization/alexcheva-portfolio-lighthouse-audit-after.png",
    alt: "Updated Lighthouse audit for alexcheva.com showing all measured categories in green",
  },
];

const responsivenessComparison = [
  {
    label: "Earlier local metrics",
    src: "/projects/portfolio_optimization/portfolio-core-web-vitals-before.png",
    alt: "Earlier local web metrics showing LCP 0.79 seconds, CLS 0.10, and INP 56 milliseconds",
    width: 510,
    height: 544,
  },
  {
    label: "After interaction tuning",
    src: "/projects/portfolio_optimization/portfolio-core-web-vitals-after.png",
    alt: "Updated local web metrics showing LCP 0.95 seconds, CLS 0, and INP 16 milliseconds",
    width: 474,
    height: 487,
  },
];

function EvidenceImage({
  label,
  src,
  alt,
  width = 968,
  height = 812,
}: {
  label: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
      <figcaption className="border-b border-white/10 px-4 py-3 text-sm font-semibold text-white">
        {label}
      </figcaption>
      <Image
        src={assetPath(src)}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
        className="h-auto w-full"
      />
    </figure>
  );
}

export default function PortfolioOptimizationEvidence() {
  return (
    <section aria-labelledby="portfolio-optimization-title">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
        Measured iteration
      </p>
      <h2
        id="portfolio-optimization-title"
        className="mt-3 text-3xl font-semibold tracking-tight text-white"
      >
        Improving the portfolio as a production product
      </h2>
      <p className="mt-4 text-lg leading-8 text-slate-300">
        I used Lighthouse and browser performance tooling throughout development
        to catch accessibility gaps, eliminate layout movement, reduce
        interaction latency, and validate each iteration instead of treating
        optimization as a final cleanup pass.
      </p>

      <article className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
        <h3 className="text-xl font-semibold text-white">
          Production audit progression
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Iteration resolved the remaining automated accessibility and
          agentic-browsing checks while keeping best-practice and SEO validation
          green.
        </p>
        <div className="mt-5 grid items-start gap-4 sm:grid-cols-2">
          {auditComparison.map((image) => (
            <EvidenceImage key={image.src} {...image} />
          ))}
        </div>
      </article>

      <article className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
        <h3 className="text-xl font-semibold text-white">
          Interaction and layout stability
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Cumulative Layout Shift improved from 0.10 to 0, while Interaction to
          Next Paint dropped from 56 ms to 16 ms in the captured local tests.
        </p>
        <div className="mt-5 grid items-start gap-4 sm:grid-cols-2">
          {responsivenessComparison.map((image) => (
            <EvidenceImage key={image.src} {...image} />
          ))}
        </div>
      </article>

      <p className="mt-5 text-sm leading-6 text-slate-400">
        Lighthouse and local metrics are point-in-time lab measurements and can
        vary with environment, device, and test conditions.{" "}
        <Link
          href="/insights/nextjs-react-typescript-performance-accessibility-seo"
          className="font-medium text-orange-200 underline decoration-orange-300/40 underline-offset-4 hover:text-white"
        >
          Read the optimization case study
        </Link>
        .
      </p>
    </section>
  );
}
