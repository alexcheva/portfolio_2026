import { projectRows } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type NextProjectSectionProps = {
  currentSlug: string;
};

export default function NextProjectSection({
  currentSlug,
}: NextProjectSectionProps) {
  const currentIndex = projectRows.findIndex(
    (project) => project.slug === currentSlug,
  );
  const nextProject = projectRows[(currentIndex + 1) % projectRows.length];

  if (currentIndex < 0 || !nextProject) {
    return null;
  }

  return (
    <section
      aria-labelledby="next-project-heading"
      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
    >
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-200">
        Next project
      </p>
      <Link
        href={`/projects/${nextProject.slug}`}
        className="group mt-5 block rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-orange-300/45 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-orange-300"
      >
        <p className="text-sm font-medium text-orange-300">
          {nextProject.status}
        </p>
        <h2
          id="next-project-heading"
          className="mt-3 text-xl font-semibold leading-tight text-white"
        >
          {nextProject.title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          {nextProject.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {nextProject.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-orange-300/40 bg-orange-300/10 px-4 py-2 text-sm font-medium text-white transition group-hover:bg-orange-300/20">
          {nextProject.ctaLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </Link>
    </section>
  );
}
