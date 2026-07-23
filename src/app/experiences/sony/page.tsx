/*
Sony
Tell me about the accessibility work.
Tell me about the AI proof of concept.
Tell me about the platform migration.
What was technically challenging?
What did you learn?
What would you improve today?
*/

import AboutBackground from "@/components/AboutBackground";
import AboutConnectSection from "@/components/AboutConnectSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NextExperienceSection from "@/components/NextExperienceSection";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { sections, interviewQuestions } from "@/data/sony";

export default function SonyExperiencePage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#02030a] text-slate-100">
      <AboutBackground />
      <Header />

      <section className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1fr_0.36fr] lg:py-24">
        <article>
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-orange-300/60 hover:bg-orange-300/10 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to experience
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
              Sony Interactive Entertainment
            </p>
            <h1 className="text-xl font-semibold tracking-tight text-white md:text-5xl">
              Accessibility engineering, automation, and platform migration for PlayStation experiences.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Software Development Engineer in Test • 2025 - Present
            </p>
          </div>

          <div className="mt-14 max-w-3xl space-y-12">
            {sections.map((section) => (
              <section key={section.title}>
                {section.title ?
                  <h2 className="text-2xl font-semibold text-white">
                    {section.title}
                  </h2> : null}
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  {section.body}
                </p>
                {section.bulletpoints ? (
                  <ul className="mt-6 space-y-3 text-lg leading-8 text-slate-300">
                    {section.bulletpoints.map((point, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-orange-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <section className="mt-16 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Interview Q&A
            </h2>
            <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {interviewQuestions.map((item) => (
                <article key={item.question} className="py-6">
                  <h3 className="text-lg font-semibold text-orange-200">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-slate-300">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </article>
        <aside aria-label="Related experience" className="lg:pt-24">
          <NextExperienceSection currentSlug="sony" />
        </aside>
      </section>
      <div className="relative z-10">
        <AboutConnectSection />
        <Footer />
      </div>
    </main>
  );
}
