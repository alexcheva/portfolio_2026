import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { projectRows } from "@/data/projects";
import Section from "./sections/Section";

export default function ProjectsSection() {
  return (<Section id="projects" eyebrow="Projects" background="creative">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {projectRows.map((project) => (
        <article
          key={project.title}
          className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6"
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
          <Link
            href={`/projects/${project.slug}`}
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-orange-300/40 bg-orange-300/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-300/20 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            Learn more
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </article>
      ))}
    </div>
  </Section>);
}
