/* 
Upstart
How did you improve performance?
Lighthouse improvements?
SEO?
Accessibility?
Working with designers?
A/B testing?
*/

import Header from "@/components/Header";
import Link from "next/link";

const sections = [
  {
    title: "Overview",
    body:
      "At Upstart, I built performant marketing and product experiences using React and Next.js. The work sat close to business goals: page speed, SEO, accessibility, localization, A/B testing, and reusable frontend systems all affected how users discovered and moved through the product.",
  },
  {
    title: "My Role",
    body:
      "I worked as a Full Stack Software Engineer, shipping production landing pages, building reusable components, improving performance, supporting experiments, and collaborating with designers, product managers, and engineers across teams.",
  },
  {
    title: "Technical Highlights",
    body:
      "I built six production landing pages with React and Next.js, improved Lighthouse scores from about 30 to 90 on mobile and 60 to 96 on desktop, implemented SEO and accessibility improvements, supported localization, built Storybook components, and contributed to A/B experiments.",
  },
  {
    title: "Challenges",
    body:
      "The main challenge was balancing polish, speed, accessibility, and experimentation. Marketing pages needed to be visually strong and flexible for business needs, while still staying fast, accessible, measurable, and maintainable.",
  },
  {
    title: "What I've Learned",
    body:
      "Small performance improvements can have a measurable impact on user experience, SEO, and business outcomes. I learned to think about frontend work through both a technical and product lens.",
  },
];

const interviewQuestions = [
  {
    question: "How did you improve performance?",
    answer:
      "I focused on the parts of the page that affected real user experience: asset loading, rendering behavior, component structure, image optimization, and unnecessary JavaScript. The result was a major Lighthouse improvement on both mobile and desktop.",
  },
  {
    question: "What did the Lighthouse improvements mean?",
    answer:
      "The scores improved from about 30 to 90 on mobile and 60 to 96 on desktop. More importantly, those improvements translated into faster pages, better SEO signals, and a smoother first impression for users.",
  },
  {
    question: "How did you approach accessibility?",
    answer:
      "I treated accessibility as part of frontend quality: semantic structure, keyboard support, focus states, contrast, and readable content all needed to be part of the implementation rather than a separate checklist at the end.",
  },
  {
    question: "What was it like working with designers?",
    answer:
      "I worked closely with design partners to preserve visual intent while making sure the implementation stayed responsive, performant, accessible, and reusable across future pages.",
  },
];

export default function UpstartExperiencePage() {
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
            Upstart
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Performance, SEO, accessibility, and product-minded frontend work.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Full Stack Software Engineer, 2021-2023
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
