import Section from "./sections/Section";

import {
  Bot,
  Code2,
  Database,
  Map,
  TestTube2,
  Wrench,
} from "lucide-react";

const technologyGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "HTML5",
      "CSS3",
      "Storybook",
      "Chromatic",
      "WCAG",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    items: ["Node.js", "Express", "Python", "Flask", "REST APIs", "SQL", "PostgreSQL"],
  },
  {
    title: "Testing",
    icon: TestTube2,
    items: ["Selenium", "Jest", "Cucumber", "Jenkins", "CI/CD", "Python automation"],
  },
  {
    title: "Visualization",
    icon: Map,
    items: ["D3.js", "Canvas.js", "eCharts", "Mapbox GL"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Docker", "Datadog", "Sumo Logic", "Looker"],
  },
  {
    title: "AI Workflow",
    icon: Bot,
    items: ["AI-assisted development", "Accessibility validation", "Developer tooling"],
  },
];

export default function TechnologiesSection() {
  return (
    <Section eyebrow="Core Technologies" title="A practical toolkit for modern product engineering.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {technologyGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-300/10 text-orange-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>);
};