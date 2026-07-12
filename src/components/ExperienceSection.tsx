import Section from "./sections/Section";

const experienceRows = [
  {
    company: "Sony Interactive Entertainment",
    role: "Software Development Engineer in Test",
    period: "2025-Present",
    summary:
      "Improving accessibility and regression confidence across PlayStation user experiences during a major platform migration.",
    highlights: [
      "Improved accessibility across 12+ PlayStation user experiences.",
      "Identified 8 customer-facing issues, including 3 high-priority accessibility defects with ADA implications.",
      "Designed Python and Selenium automation integrated with Jenkins.",
      "Developed an AI proof of concept for accessibility validation workflows.",
    ],
  },
  {
    company: "LOCH Technologies",
    role: "Senior Frontend Software Engineer",
    period: "2023-2024",
    summary:
      "Built geospatial analytics interfaces and visualization-heavy product experiences.",
    highlights: [
      "Built React and Preact applications for geospatial analytics.",
      "Developed interactive visualizations with Mapbox GL, D3.js, Canvas.js, and eCharts.",
      "Implemented reporting features including dynamic PDF generation.",
      "Improved frontend architecture with reusable components and data visualization patterns.",
    ],
  },
  {
    company: "Upstart",
    role: "Full StackSoftware Engineer",
    period: "2021-2023",
    summary:
      "Shipped performant, accessible marketing and product experiences with React and Next.js.",
    highlights: [
      "Built six production landing pages using React and Next.js.",
      "Improved Lighthouse performance from about 30 to 90 on mobile and 60 to 96 on desktop.",
      "Implemented accessibility, SEO, localization, A/B experiments, and Storybook.",
      "Built reusable frontend components and collaborated across product teams.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <Section eyebrow="Professional Experience" title="Recent work across accessibility, visualization, and frontend systems.">
      <div className="grid gap-5 lg:grid-cols-3">
        {experienceRows.map((experience) => (
          <article
            key={experience.company}
            className="flex min-w-0 flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6"
          >
            <p className="text-sm font-medium text-orange-300">
              {experience.period}
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
              {experience.company}
            </h3>
            <p className="mt-3 text-sm font-medium leading-6 text-slate-300">
              {experience.role}
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              {experience.summary}
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-orange-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
};
