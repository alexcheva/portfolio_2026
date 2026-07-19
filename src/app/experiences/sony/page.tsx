/*
Sony
Tell me about the accessibility work.
Tell me about the AI proof of concept.
Tell me about the platform migration.
What was technically challenging?
What did you learn?
What would you improve today?
*/

import Header from "@/components/Header";
import Link from "next/link";

const sections = [
  {
    title: "Overview",
    body:
      "At Sony Interactive Entertainment, I supported accessibility and regression confidence across PlayStation user experiences during a major platform migration. The work combined hands-on testing, automation, collaboration with cross-functional partners, and identifying customer-facing issues before they reached production.",
  },
  {
    title: "My Role",
    body:
      "I worked as a Software Development Engineer in Test, focusing on accessibility validation, regression coverage, Python and Selenium automation, Jenkins integration, and exploratory testing across migrated experiences. I also investigated ways AI could support accessibility validation workflows.",
  },
  {
    title: "Technical Highlights",
    body:
      "I improved validation coverage across 12+ PlayStation user experiences, identified 8 customer-facing issues, and surfaced 3 high-priority accessibility defects with ADA implications. I designed automation that helped teams catch regressions earlier and explored an AI proof of concept for accelerating accessibility checks.",
  },
  {
    title: "Challenges",
    body:
      "The most challenging part was balancing speed, accuracy, and accessibility expectations during migration work. Accessibility issues often sit at the intersection of product behavior, implementation details, assistive technology support, and legal risk, so clear communication mattered as much as technical validation.",
  },
  {
    title: "What I've Learned",
    body:
      "One of the biggest takeaways from this role was discovering what kind of engineering work energizes me. While I enjoyed improving accessibility and collaborating across teams, I found myself consistently drawn toward building user-facing features and solving frontend challenges rather than specializing in test automation. Accessibility isn't a feature added at the end of development; it's part of building a better product from the beginning. This experience also helped me clarify that my long-term passion is building user experiences rather than specializing in test automation.",
  },
];

const interviewQuestions = [
  {
    question: "Tell me about the accessibility work.",
    answer:
      "I helped validate accessibility across PlayStation user experiences during a platform migration, identifying issues that affected keyboard navigation, screen reader behavior, and customer-facing usability. The work required both technical testing and clear prioritization because some defects had meaningful ADA implications.",
  },
  {
    question: "Tell me about the AI proof of concept.",
    answer:
      "I explored how AI could assist accessibility validation by helping review experience flows and flag possible issues earlier. The goal was not to replace manual accessibility testing, but to reduce repetitive review work and help teams focus attention on the most likely problem areas.",
  },
  {
    question: "What was technically challenging?",
    answer:
      "The platform migration created a moving target: behavior could change as components, pages, and workflows were rebuilt. I had to design validation that was reliable enough to catch regressions while still being adaptable to ongoing product changes.",
  },
  {
    question: "What would you improve today?",
    answer:
      "I would push accessibility checks even further left in the development process, pairing automated validation with reusable accessibility guidance for engineers and designers before implementation begins.",
  },
];

export default function SonyExperiencePage() {
  return (
    <main className="min-h-screen bg-[#02030a] text-slate-100">
      <Header />

      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
        <Link
          href="/#experience"
          className="text-sm font-medium text-orange-300 transition hover:text-orange-200"
        >
          Back to experience
        </Link>

        <div className="mt-8 max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
            Sony Interactive Entertainment
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Accessibility, automation, and platform migration support.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Software Development Engineer in Test, 2025-Present
          </p>
        </div>

        <div className="mt-12 grid gap-5">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
            >
              <h2 className="text-2xl font-semibold text-white">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {section.body}
              </p>
            </article>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Interview Q&A
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {interviewQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-3xl border border-orange-300/20 bg-orange-300/10 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
