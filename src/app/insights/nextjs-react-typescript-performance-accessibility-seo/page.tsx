import AboutBackground from "@/components/AboutBackground";
import AboutConnectSection from "@/components/AboutConnectSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

const articlePath =
  "/insights/nextjs-react-typescript-performance-accessibility-seo";
const canonicalUrl = `https://www.alexcheva.com${articlePath}`;

export const metadata: Metadata = {
  title:
    "How Next.js, React & TypeScript Improve Performance, Accessibility & SEO",
  description:
    "A practical frontend engineering case study on using Next.js, React, TypeScript, Core Web Vitals, semantic HTML, and continuous measurement to improve web performance, accessibility, and SEO.",
  keywords: [
    "Next.js performance optimization",
    "React performance optimization",
    "TypeScript web development",
    "Core Web Vitals",
    "web accessibility",
    "technical SEO",
    "frontend performance",
    "Lighthouse optimization",
    "Alexandra Lukinicheva",
  ],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "article",
    url: canonicalUrl,
    title:
      "How Next.js, React & TypeScript Improve Performance, Accessibility & SEO",
    description:
      "A measured, practical approach to building faster, more accessible, and more discoverable frontend applications.",
    publishedTime: "2026-07-31",
    authors: ["Alexandra Lukinicheva"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline:
    "How Next.js, React, and TypeScript Help Optimize Web Performance, Accessibility, and SEO",
  description:
    "A practical frontend engineering case study connecting framework choices, Core Web Vitals, accessibility, and technical SEO.",
  datePublished: "2026-07-31",
  dateModified: "2026-07-31",
  mainEntityOfPage: canonicalUrl,
  author: {
    "@type": "Person",
    name: "Alexandra Lukinicheva",
    url: "https://www.alexcheva.com/about",
  },
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Core Web Vitals",
    "web accessibility",
    "technical SEO",
  ],
};

const sourceLinkClass =
  "font-medium text-orange-200 underline decoration-orange-300/40 underline-offset-4 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300";

export default function FrontendOptimizationArticlePage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#02030a] text-slate-100">
      <AboutBackground />
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article className="relative z-10 mx-auto w-full max-w-4xl px-6 py-16 lg:py-24">
        <Link
          href="/projects/portfolio-2026"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-orange-300/60 hover:bg-orange-300/10 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Portfolio 2026
        </Link>

        <header className="mt-10 border-b border-white/10 pb-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
            Frontend engineering case study
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.08]">
            How Next.js, React, and TypeScript help optimize web performance,
            accessibility, and SEO
          </h1>
          <p className="mt-7 text-xl leading-9 text-slate-300">
            Frameworks do not make a site fast, accessible, or discoverable by
            themselves. They provide architectural tools. The engineering work
            is choosing the right rendering boundary, shipping less code,
            preserving semantic HTML, and measuring what users actually
            experience.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
            <span>By Alexandra Lukinicheva</span>
            <time dateTime="2026-07-31">July 31, 2026</time>
            <span>10 minute read</span>
          </div>
        </header>

        <div className="mt-12 space-y-14 text-lg leading-8 text-slate-300">
          <section>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Optimization is a system, not a Lighthouse score
            </h2>
            <p className="mt-5">
              Performance, accessibility, and SEO are often reviewed as
              separate checklists. In production they reinforce one another. A
              page with clear document structure is easier for assistive
              technology and search engines to understand. Correctly sized
              images reduce download cost and layout movement. Less client-side
              JavaScript improves responsiveness and reduces the number of
              states that can break keyboard or screen-reader behavior.
            </p>
            <p className="mt-5">
              Core Web Vitals make part of that experience measurable. Google
              describes LCP, INP, and CLS as signals for loading,
              interactivity, and visual stability, while emphasizing field data
              at the 75th percentile rather than a single perfect lab run. See
              the official{" "}
              <a href="https://web.dev/articles/vitals" className={sourceLinkClass}>
                Web Vitals guidance
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              What Next.js contributes
            </h2>
            <p className="mt-5">
              Next.js provides useful defaults: Server Components, route-level
              code splitting, prefetching, static rendering, image optimization,
              and a metadata API. The production advantage is not the framework
              label; it is using these features to reduce browser work and send
              meaningful HTML early.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="rounded-xl border border-white/10 bg-white/[0.035] p-5">
                <strong className="text-white">Render intentionally.</strong>{" "}
                Keep content and data-fetching on the server when they do not
                need browser APIs. Add Client Components only around genuine
                interaction. This can reduce client bundle size and hydration
                work.
              </li>
              <li className="rounded-xl border border-white/10 bg-white/[0.035] p-5">
                <strong className="text-white">Control image cost.</strong>{" "}
                Provide intrinsic dimensions, responsive sizes, useful alt text,
                and preload only the true LCP image. Reserved dimensions also
                help prevent layout shift.
              </li>
              <li className="rounded-xl border border-white/10 bg-white/[0.035] p-5">
                <strong className="text-white">Ship crawlable context.</strong>{" "}
                Page-specific titles, descriptions, canonical URLs, Open Graph
                data, sitemaps, and structured content make the page easier to
                understand and share.
              </li>
            </ul>
            <p className="mt-5">
              These practices align with the official Next.js{" "}
              <a
                href="https://nextjs.org/docs/app/guides/production-checklist"
                className={sourceLinkClass}
              >
                production checklist
              </a>
              ,{" "}
              <a
                href="https://nextjs.org/docs/app/api-reference/components/image"
                className={sourceLinkClass}
              >
                Image component documentation
              </a>
              , and{" "}
              <a
                href="https://nextjs.org/docs/app/getting-started/metadata-and-og-images"
                className={sourceLinkClass}
              >
                Metadata API guidance
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              What React contributes
            </h2>
            <p className="mt-5">
              React makes interfaces composable, but component boundaries also
              become performance boundaries. The highest-value work is usually
              keeping state local, keeping rendering pure, avoiding effect
              chains, and ensuring that a small interaction does not invalidate
              an entire page.
            </p>
            <p className="mt-5">
              Memoization is useful only after measurement. React explicitly
              describes <code className="text-orange-200">memo</code> as a
              performance optimization rather than a guarantee. Profile first,
              then memoize expensive components with stable inputs. For work
              that can load progressively, Suspense boundaries provide useful
              fallbacks without blocking the entire interface. Review the
              official React references for{" "}
              <a href="https://react.dev/reference/react/memo" className={sourceLinkClass}>
                memo
              </a>{" "}
              and{" "}
              <a
                href="https://react.dev/reference/react/Suspense"
                className={sourceLinkClass}
              >
                Suspense
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              What TypeScript contributes—and what it does not
            </h2>
            <p className="mt-5">
              TypeScript does not make the browser execute JavaScript faster;
              its types are erased during compilation. Its optimization value
              is engineering confidence. Typed component props, API responses,
              metadata objects, and image models make large refactors safer and
              expose invalid states before they reach production.
            </p>
            <p className="mt-5">
              That matters when splitting components, moving work between the
              server and client, replacing image pipelines, or making reusable
              accessible primitives. The official{" "}
              <a
                href="https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"
                className={sourceLinkClass}
              >
                TypeScript handbook
              </a>{" "}
              describes TypeScript as a static type checker that catches errors
              before execution.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Accessibility and SEO share a foundation
            </h2>
            <p className="mt-5">
              Semantic HTML is the common layer. A logical heading hierarchy,
              descriptive links, labeled controls, landmarks, useful image
              alternatives, and keyboard-operable interactions help people use
              the page while also giving crawlers clearer structure. JavaScript
              should enhance these foundations, not replace them with anonymous
              clickable containers.
            </p>
            <p className="mt-5">
              Automated checks are a useful baseline, not proof of full
              accessibility. Keyboard testing, screen-reader evaluation, zoom,
              contrast review, and real-user feedback remain essential. The{" "}
              <a
                href="https://www.w3.org/WAI/fundamentals/accessibility-intro/"
                className={sourceLinkClass}
              >
                W3C Web Accessibility Initiative
              </a>{" "}
              provides the standards-based foundation.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Results from production work
            </h2>
            <p className="mt-5">
              At Upstart, captured Lighthouse reports for two production landing
              pages showed performance moving from 60 to 100 for Home
              Improvement Loans and from 63 to 99 for Personal Loans. On this
              portfolio, captured local tests showed CLS moving from 0.10 to 0
              and INP from 56 ms to 16 ms.
            </p>
            <p className="mt-5">
              These are point-in-time lab measurements, not universal promises.
              Their value is the before-and-after signal: measure, identify the
              bottleneck, make a focused change, and test again.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <Link
                href="/experiences/upstart"
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-orange-300/50 hover:bg-orange-300/[0.06] focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                <span className="flex items-center justify-between gap-3 font-semibold text-white">
                  Upstart performance evidence
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="mt-2 block text-sm leading-6 text-slate-400">
                  Desktop and mobile Lighthouse comparisons.
                </span>
              </Link>
              <Link
                href="/projects/portfolio-2026"
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-orange-300/50 hover:bg-orange-300/[0.06] focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                <span className="flex items-center justify-between gap-3 font-semibold text-white">
                  Portfolio optimization evidence
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="mt-2 block text-sm leading-6 text-slate-400">
                  Accessibility, CLS, INP, and audit progression.
                </span>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              A repeatable optimization workflow
            </h2>
            <ol className="mt-6 space-y-4">
              {[
                "Measure production and local behavior with Lighthouse, browser performance tools, and field data when available.",
                "Find the user-visible bottleneck: slow content, layout movement, delayed interaction, inaccessible navigation, or missing search context.",
                "Change one layer deliberately—rendering, JavaScript, images, component state, markup, or metadata.",
                "Verify with automated tools and manual keyboard, screen-reader, responsive, and content checks.",
                "Repeat after deployment, because real products and dependencies continue evolving.",
              ].map((step, index) => (
                <li
                  key={step}
                  className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-300/10 text-sm font-semibold text-orange-200">
                    {index + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <blockquote className="border-l-2 border-orange-300 pl-6 text-2xl font-medium leading-10 text-white">
            The best frontend optimization is not a one-time score. It is a
            development habit that keeps the experience fast, understandable,
            inclusive, and resilient as the product changes.
          </blockquote>
        </div>
      </article>

      <div className="relative z-10">
        <AboutConnectSection />
        <Footer />
      </div>
    </main>
  );
}
