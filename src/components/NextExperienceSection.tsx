import { experienceRows } from "@/data/experiences";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type NextExperienceSectionProps = {
  currentSlug: string;
};

export default function NextExperienceSection({
  currentSlug,
}: NextExperienceSectionProps) {
  const currentIndex = experienceRows.findIndex(
    (experience) => experience.slug === currentSlug,
  );
  const nextExperience =
    experienceRows[(currentIndex + 1) % experienceRows.length];

  if (currentIndex < 0 || !nextExperience) {
    return null;
  }

  return (
    <section
      aria-labelledby="next-experience-heading"
      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
    >
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-200">
        Next experience
      </p>
      <Link
        href={`/experiences/${nextExperience.slug}`}
        className="group mt-5 block rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-orange-300/45 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-orange-300"
      >
        <p className="text-sm font-medium text-orange-300">
          {nextExperience.period}
        </p>
        <h2
          id="next-experience-heading"
          className="mt-3 text-xl font-semibold leading-tight text-white"
        >
          {nextExperience.company}
        </h2>
        <p className="mt-3 text-sm font-medium leading-6 text-slate-300">
          <strong>{nextExperience.role}</strong>
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          {nextExperience.summary}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {nextExperience.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-orange-300/40 bg-orange-300/10 px-4 py-2 text-sm font-medium text-white transition group-hover:bg-orange-300/20">
          Learn more
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </Link>
    </section>
  );
}
