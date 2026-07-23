import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Section from "./sections/Section";
import { experienceRows } from "@/data/experiences";

export default function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Professional Experience"
      background="engineering"
    >
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
              <strong>{experience.role}</strong>
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              {experience.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-orange-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul> */}
            <Link
              href={`/experiences/${experience.slug}`}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-orange-300/40 bg-orange-300/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-300/20 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              Learn more
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
