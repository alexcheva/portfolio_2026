import Header from "@/components/Header";
import { projectRows } from "@/data/projects";
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
    <main className="min-h-screen bg-[#02030a] text-slate-100">
      <Header />

      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
        <Link
          href="/#projects"
          className="text-sm font-medium text-orange-300 transition hover:text-orange-200"
        >
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
      </section>
    </main>
  );
}
