import AboutBackground from "@/components/AboutBackground";
import AboutConnectSection from "@/components/AboutConnectSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engineering Insights | Alexandra Lukinicheva",
  description:
    "Frontend engineering and product-development articles by Alexandra Lukinicheva, covering performance, accessibility, SEO, creative tooling, and audio experiences.",
  alternates: { canonical: "https://www.alexcheva.com/insights" },
};

const insights = [
  {
    href: "/insights/self-hypnosis-audio-studio-spiritual-peach",
    eyebrow: "Product experiment · Spiritual Peach",
    title: "Designing a self-hypnosis audio studio",
    description:
      "How a personal recording experiment became a script library, browser recorder, session organizer, and composable audio workflow.",
    date: "September 17, 2026",
    readTime: "8 minute read",
  },
  {
    href: "/insights/nextjs-react-typescript-performance-accessibility-seo",
    eyebrow: "Frontend engineering case study",
    title:
      "How Next.js, React, and TypeScript help optimize performance, accessibility, and SEO",
    description:
      "A practical look at rendering boundaries, semantic HTML, Core Web Vitals, image strategy, metadata, and continuous measurement.",
    date: "July 31, 2026",
    readTime: "10 minute read",
  },
];

export default function InsightsPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#02030a] text-slate-100">
      <AboutBackground />
      <Header />

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
        <header className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
            Insights
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Notes from building, measuring, and experimenting.
          </h1>
          <p className="mt-7 text-xl leading-9 text-slate-300">
            Longer-form stories about frontend engineering, product decisions,
            prototypes, and what I learned while making them real.
          </p>
        </header>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {insights.map((insight) => (
            <article
              key={insight.href}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 md:p-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-orange-200">
                {insight.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white">
                {insight.title}
              </h2>
              <p className="mt-4 flex-1 text-base leading-7 text-slate-300">
                {insight.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400">
                <span>{insight.date}</span>
                <span>{insight.readTime}</span>
              </div>
              <Link
                href={insight.href}
                className="group mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-orange-300/40 bg-orange-300/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-300/20 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                Read insight
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <div className="relative z-10">
        <AboutConnectSection />
        <Footer />
      </div>
    </main>
  );
}
