import Section from "./sections/Section";
const projectRows = [
  {
    title: "Spiritual Peach",
    status: "In progress",
    description:
      "AI-powered wellness web application built with modern frontend technologies.",
    tags: ["AI", "Wellness", "Frontend"],
  },
  {
    title: "Accessibility AI Proof of Concept",
    status: "Prototype",
    description:
      "Explored AI-assisted accessibility validation workflows for product QA and modernization work.",
    tags: ["Accessibility", "AI", "Automation"],
  },
  {
    title: "Interactive Data Visualization",
    status: "Experiments",
    description:
      "React, D3.js, Canvas, eCharts, and Mapbox GL experiments for rich analytical interfaces.",
    tags: ["React", "D3.js", "Mapbox GL"],
  },
];

export default function ProjectsSection() {
  return (<Section eyebrow="Projects" title="Selected projects and experiments.">
    <div className="grid gap-4 md:grid-cols-3">
      {projectRows.map((project) => (
        <article
          key={project.title}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
        >
          <p className="text-sm text-orange-300">{project.status}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </Section>);
}
