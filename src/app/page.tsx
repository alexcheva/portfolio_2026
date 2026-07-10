import { GalaxyScene } from "@/components/GalaxyScene";
import { MerkabaScene } from "@/components/MerkabaScene";
import {
  Bot,
  Code2,
  Database,
  ExternalLink,
  Map,
  MonitorCheck,
  TestTube2,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = ["About", "Projects", "Experience", "Writing", "Contact"];

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

const educationRows = [
  {
    school: "Techtonica",
    program: "Full Stack Software Engineering Apprenticeship",
    period: "Software Engineering",
    gpa: null,
    detail:
      "Intensive full-stack engineering program focused on production web development, collaboration, and practical software engineering foundations.",
  },
  {
    school: "Berkeley City College",
    program: "Associate of Arts in Mobile and Web Design",
    period: "September 2014 - April 2018",
    gpa: "4.0",
    detail:
      "Studied mobile and web design with a focus on visual communication, interactive experiences, and practical digital production.",
  },
  {
    school: "Saint Petersburg State University of Cinema and Television",
    program: "Bachelor of Arts in Interactive Multimedia",
    period: "September 2008 - April 2010",
    gpa: "3.92",
    detail:
      "Studied interactive multimedia, combining design, media, technology, and creative production foundations.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#02030a] text-slate-100">
      <section className="relative overflow-hidden bg-[#02030a]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-b from-transparent to-[#02030a]" />

        <div className="relative z-10">
          <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/brand/merkaba-logo-transparent.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl"
                priority
              />
              <span className="text-sm font-semibold tracking-wide">
                Alexandra Lukinicheva
              </span>
            </Link>

            <nav aria-label="Main navigation">
              <ul className="flex gap-4 text-sm text-slate-300">
                {navItems.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          <div className="relative overflow-hidden">
            <GalaxyScene />

            <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 px-6 pb-16 pt-8 md:min-h-[calc(100svh-88px)] md:grid-cols-[1.05fr_0.95fr] md:py-10">
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
                  Software Engineer
                </p>

                <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                  I build performant, accessible, and memorable web experiences.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Bay Area engineer with 6+ years across React, TypeScript,
                  Next.js, accessibility, automation, data visualization, and
                  AI-assisted engineering workflows.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="https://www.linkedin.com/in/alexandra-lukinicheva"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white transition hover:border-orange-300/50 hover:bg-orange-300/10 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    LinkedIn
                  </Link>
                  <Link
                    href="https://github.com/alexcheva"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white transition hover:border-orange-300/50 hover:bg-orange-300/10 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-orange-300/40 bg-orange-300/10 px-4 py-2 text-sm text-white transition hover:bg-orange-300/20 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  >
                    About me
                  </Link>
                </div>
              </div>

              <div
                aria-label="Interactive glass merkaba WebGL visual"
                className="relative h-[clamp(20rem,42vw,36rem)] w-full overflow-hidden [contain:layout_paint_size]"
              >
                <MerkabaScene />
                <span className="sr-only">Interactive glass merkaba visual</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.78fr_1.22fr]">
        <aside className="space-y-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-dashed border-orange-300/30 bg-[radial-gradient(circle_at_40%_20%,rgba(251,146,60,0.22),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] text-center">
              <div className="px-8">
                <Image
                  src="/profile/alexandra_lukinicheva.png"
                  alt="Alexandra Lukinicheva - Software Engineer"
                  width={400}
                  height={400}
                  className="h-100 w-100 rounded-xl object-cover"
                  priority
                />
                {/* <p className="mt-4 text-lg font-semibold text-white">
                  Alexandra Lukinicheva
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Frontend Software Engineer
                </p> */}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-300">
              Location
            </p>
            <p className="mt-3 text-lg font-semibold text-white">Bay Area, CA</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Open to remote and hybrid frontend engineering roles.
            </p>
          </div>
        </aside>

        <div>
          {/* <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
            Professional Summary
          </p> */}
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            I care about building software people actually enjoy using.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Over the last six years I&apos;ve worked across fintech, gaming,
            accessibility, and data visualization. I enjoy turning complex
            systems into fast, intuitive interfaces while collaborating closely
            with engineering and product teams to deliver experiences that
            people genuinely enjoy using.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-300">
                6+ Years
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Building products and experiences
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-300">
                React
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Primary frontend framework
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-300">
                Accessibility
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                WCAG & inclusive design
              </p>
            </div>
          </div>
        </div>
      </section>

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
      </Section>

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

      <Section eyebrow="Projects" title="Selected projects and experiments.">
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
      </Section>

      <Section eyebrow="Education" title="Education and continued learning.">
        <div className="grid gap-4 md:grid-cols-3">
          {educationRows.map((education, index) => (
            <article
              key={`${education.school}-${index}`}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-300/10 text-orange-300">
                <MonitorCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {education.school}
              </h3>
              <p className="mt-2 text-sm font-medium text-orange-200">
                {education.program}
              </p>
              <p className="mt-3 text-sm text-slate-400">
                {education.period}
              </p>
              {education.gpa ? (
                <p className="mt-2 text-sm text-slate-300">
                  GPA: {education.gpa}
                </p>
              ) : null}
              <p className="mt-4 text-sm leading-6 text-slate-300">
                {education.detail}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-orange-300/20 bg-orange-300/10 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-200">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Let&apos;s build something thoughtful.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#02030a] transition hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mb-10 max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
          {eyebrow}
        </p>
        <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
