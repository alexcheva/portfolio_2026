/* 
Upstart
How did you improve performance?
Lighthouse improvements?
SEO?
Accessibility?
Working with designers?
A/B testing?
*/

import AboutBackground from "@/components/AboutBackground";
import AboutConnectSection from "@/components/AboutConnectSection";
import Footer from "@/components/Footer";
import ExperienceImageColumn from "@/components/ExperienceImageColumn";
import Header from "@/components/Header";
import NextExperienceSection from "@/components/NextExperienceSection";
import UpstartPerformanceCaseStudies from "@/components/UpstartPerformanceCaseStudies";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const experienceImages = [
  {
    src: "/experience/upstart/alexandra-lukinicheva-upstart-tenth-anniversary.jpg",
    alt: "Alexandra Lukinicheva celebrating Upstart's tenth anniversary",
    caption: "Celebrating Upstart's tenth anniversary at the San Mateo office.",
    width: 3024,
    height: 4032,
  },
  {
    src: "/experience/upstart/upstart-engineering-team-outing.jpeg",
    alt: "Alexandra Lukinicheva with Upstart engineering colleagues at a team outing",
    caption: "An Upstart engineering team outing after building and shipping together.",
    width: 4032,
    height: 3024,
  },
];

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
    <main className="relative isolate min-h-screen overflow-hidden bg-[#02030a] text-slate-100">
      <AboutBackground />
      <Header />

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.58fr]">
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
              Upstart
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Performance, SEO, accessibility, and product-minded frontend work.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Full Stack Software Engineer, 2021-2023
            </p>
          </div>

          <div className="mt-14 max-w-3xl space-y-12">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold text-white">
                  {section.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <UpstartPerformanceCaseStudies />

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
        <aside aria-label="Upstart photos and related experience" className="space-y-6 lg:pt-24">
          <ExperienceImageColumn company="Upstart" images={experienceImages} />
          <NextExperienceSection currentSlug="upstart" />
        </aside>
        </div>
      </section>
      <div className="relative z-10">
        <AboutConnectSection />
        <Footer />
      </div>
    </main>
  );
}
