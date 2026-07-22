// import { AboutImageSlots } from "@/components/AboutImageSlots";
import AboutBackground from "@/components/AboutBackground";
import AboutConnectSection from "@/components/AboutConnectSection";
import Footer from "@/components/Footer";
import NavHeader from "@/components/Header";
import RgbParallaxImage from "@/components/RgbParallaxImage";
import { BookOpen, Code2, Layers3, Palette } from "lucide-react";

const pathSteps = [
  {
    label: "Art school",
    detail: "Visual foundations, composition, and creative problem-solving.",
    icon: Palette,
  },
  {
    label: "Interactive media",
    detail: "Digital storytelling, multimedia systems, and user interaction.",
    icon: Layers3,
  },
  {
    label: "Mobile and web design",
    detail: "Responsive interfaces shaped around real user behavior.",
    icon: BookOpen,
  },
  {
    label: "Full stack software engineering",
    detail: "Production React, TypeScript, APIs, accessibility, and data-rich tools.",
    icon: Code2,
  },
];

function TrajectoryMap() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/25">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-orange-200">
            Evolution
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">
            How creativity became engineering.
          </h2>
        </div>
      </div>

      <ol className="relative mt-6 space-y-3 before:absolute before:bottom-6 before:left-5 before:top-6 before:w-px before:bg-gradient-to-b before:from-orange-300 before:via-sky-300 before:to-fuchsia-300">
        {pathSteps.map(({ label, detail, icon: Icon }, index) => (
          <li
            key={label}
            tabIndex={0}
            className="group relative grid grid-cols-[2.5rem_1fr] gap-3 rounded-xl p-2 transition hover:bg-white/[0.06] focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-orange-300/60"
          >
            <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#02030a] text-orange-200 transition group-hover:scale-105 group-hover:border-orange-300/60 group-focus:scale-105 group-focus:border-orange-300/60">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-2 text-sm font-semibold text-white">
                <span className="text-xs text-slate-500">
                  0{index + 1}
                </span>
                {label}
              </span>
              <span className="mt-1 block max-h-0 overflow-hidden text-sm leading-6 text-slate-300 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100 group-focus:max-h-24 group-focus:opacity-100">
                {detail}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#02030a] text-slate-100">
      <AboutBackground />
      <NavHeader />

      <section className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1fr_0.75fr] lg:py-24">
        <article>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-orange-200">
            About
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Hi, I&apos;m Alex.{" "}
            <span
              aria-hidden="true"
              className="inline-block origin-[70%_70%] animate-wave"
            >
              👋
            </span>
          </h1>

          <blockquote className="mt-12 border-l-2 border-orange-300 pl-6 text-2xl font-medium leading-10 text-white">
            I love turning complex systems into intuitive, responsive, and enjoyable user experiences.
          </blockquote>

          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-300">
            <p>
              I&apos;ve always been fascinated by how people interact with technology. Long before I became a software engineer, I was drawn to visual communication, digital experiences, and the way thoughtful design can make even complex ideas feel intuitive.
            </p>
            <p>
              That curiosity naturally led me from graphic design into interactive media, web and mobile design, and eventually software engineering. The more I learned, the more I realized I didn&apos;t just want to design interfaces—I wanted to understand how they worked and build them myself.
            </p>
            <p>
              Since then, I&apos;ve had the opportunity to work across fintech, gaming, accessibility, and data visualization, building everything from customer-facing dashboards and geospatial applications to accessibility improvements for millions of PlayStation users.
            </p>
            <p>
              What I enjoy most is solving technical challenges at the intersection of engineering and design.
            </p>
            <blockquote className="mt-12 border-l-2 border-orange-300 pl-6 text-2xl font-medium leading-10 text-white">
              I believe great software isn&apos;t about exposing complexity—it&apos;s about hiding it behind experiences that feel intuitive, responsive, and effortless to use.
            </blockquote>

            <p>This is the philosophy I try to bring to every project. Whether I&apos;m developing React
              applications, experimenting with interactive graphics, improving
              accessibility, or exploring AI-powered interfaces, I&apos;m always thinking about how the user experiences the product.
            </p>

            {/* <p>
              Currently I&apos;m focused on modern frontend engineering with
              React, TypeScript, Next.js, accessibility, motion, and interactive
              web experiences.
            </p> */}

            <blockquote className="mt-12 border-l-2 border-orange-300 pl-6 text-2xl font-medium leading-10 text-white">
              I like making difficult technical problems disappear behind an interface that feels effortless to the user.
            </blockquote>

            <p>
              Today I&apos;m focused on frontend engineering, interactive experiences, AI-powered tools, and data visualization. I&apos;m always looking for opportunities to solve interesting problems, learn new technologies, and build products that people genuinely enjoy using.
            </p>
          </div>
        </article>

        <aside
          aria-label="Portrait and education trajectory"
          className="space-y-6 lg:sticky lg:top-28 lg:self-start"
        >
          {/* <AboutImageSlots /> */}
          <RgbParallaxImage
            src="/profile/alexandra_lukinicheva.jpg"
            alt="Alexandra Lukinicheva - Software Engineer"
            priority
          />
          <TrajectoryMap />
        </aside>
      </section>

      <div className="relative z-10">
        <AboutConnectSection />
        <Footer />
      </div>
    </main>
  );
}
