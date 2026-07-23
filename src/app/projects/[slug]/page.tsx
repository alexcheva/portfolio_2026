import AboutBackground from "@/components/AboutBackground";
import AboutConnectSection from "@/components/AboutConnectSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NextProjectSection from "@/components/NextProjectSection";
import { projectRows } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projectRows.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectRows.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#02030a] text-slate-100">
      <AboutBackground />
      <Header />

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-orange-300/60 hover:bg-orange-300/10 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to projects
        </Link>

        <div className="mt-8 max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
            {project.status}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            {project.overview}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.36fr]">
          <div className="max-w-3xl space-y-12">
            {project.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold text-white">
                  {section.title}
                </h2>
                {section.body ? (
                  <p className="mt-4 text-lg leading-8 text-slate-300">
                    {section.body}
                  </p>
                ) : null}
                {section.bullets ? (
                  <ul className="mt-6 space-y-3 text-lg leading-8 text-slate-300">
                    {section.bullets.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-orange-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                Interview Q&A
              </h2>
              <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
                {project.interviewQuestions.map((item) => (
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
          </div>

          <aside
            aria-label={`${project.title} quick facts`}
            className="space-y-5 lg:pt-2"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-200">
                Focus
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <NextProjectSection currentSlug={project.slug} />
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
