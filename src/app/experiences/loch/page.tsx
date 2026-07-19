/* 
LOCH
Tell me about the Mapbox project.
Explain the visualization architecture.
How did you handle large datasets?
Biggest frontend challenge?
Tell me about collaborating with backend engineers.


Then, in the LOCH project page, tell the real story:

"The application was built on a Ruby/Jinja architecture. Rather than migrating the entire 
application to React, we introduced Preact for new interactive features because it provided a
lightweight integration with the existing stack."

That makes you sound like someone who makes pragmatic engineering decisions, not someone who 
just happened to use Preact.

It's this story:

"As data density increased, the D3 implementation began creating too many DOM elements, causing 
browser performance issues. I evaluated alternatives and replaced that visualization with a 
Canvas-based implementation that handled continuous streaming data much more efficiently."
*/

import Header from "@/components/Header";
import Link from "next/link";

const sections = [
  {
    title: "Overview",
    body:
      "At LOCH Technologies, I built frontend experiences for geospatial analytics and visualization-heavy workflows. The product needed to make dense technical data readable, interactive, and useful for people making decisions from live or complex datasets.",
  },
  {
    title: "My Role",
    body:
      "I worked as a Senior Frontend Software Engineer, building React and Preact interfaces, interactive maps, reporting flows, and reusable visualization patterns. I collaborated closely with backend engineers to connect frontend views with geospatial and analytics data sources.",
  },
  {
    title: "Technical Highlights",
    body:
      "The application was built on a Ruby/Jinja architecture. Rather than migrating the entire application to React, we introduced Preact for new interactive features because it provided a lightweight integration with the existing stack. I also built visualizations with Mapbox GL, D3.js, Canvas.js, and eCharts, and implemented dynamic PDF reporting features.",
  },
  {
    title: "Challenges",
    body:
      "As data density increased, the D3 implementation began creating too many DOM elements, causing browser performance issues. I evaluated alternatives and replaced that visualization with a Canvas-based implementation that handled continuous streaming data much more efficiently.",
  },
  {
    title: "What I've Learned",
    body:
      "Building complex visualizations taught me that good frontend engineering isn't just about making interfaces look good. It's about making difficult technical problems feel effortless to the user.",
  },
];

const interviewQuestions = [
  {
    question: "Tell me about the Mapbox project.",
    answer:
      "The work involved building geospatial interfaces where users could inspect and reason about complex location-based data. Mapbox GL provided the map foundation, while the frontend architecture handled interactive layers, filtering, and related analytics views.",
  },
  {
    question: "Why did you use Preact instead of a full React migration?",
    answer:
      "The existing app used Ruby and Jinja, so a full migration would have been expensive and risky. Preact gave us a pragmatic path to add modern interactive features without disrupting the whole system.",
  },
  {
    question: "How did you handle large datasets?",
    answer:
      "When DOM-heavy D3 rendering began to strain performance, I moved the dense visualization work to Canvas. That reduced the number of DOM nodes and made the interface better suited for continuous streaming data.",
  },
  {
    question: "What was the biggest frontend challenge?",
    answer:
      "The biggest challenge was turning dense technical data into an interface that felt responsive and understandable. That meant thinking about rendering performance, interaction design, and data clarity together.",
  },
];

export default function LochExperiencePage() {
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
            LOCH Technologies
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Geospatial analytics, visualization architecture, and performance.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Senior Frontend Software Engineer, 2023-2024
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
