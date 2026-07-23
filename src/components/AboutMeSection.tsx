import Image from "next/image";
import { assetPath } from "@/lib/assetPath";
// import Link from "next/link";
import { BriefcaseBusiness, Code2, MapPin, Sparkles, Timer } from "lucide-react";

export default function AboutPage() {
  return (
    <section id="about" className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.78fr_1.22fr]">
      <aside className="grid gap-6 md:grid-cols-2 lg:block lg:space-y-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-dashed border-orange-300/30 bg-[radial-gradient(circle_at_40%_20%,rgba(251,146,60,0.22),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
            <Image
              src={assetPath("/profile/alexandra_lukinicheva.png")}
              alt="Alexandra Lukinicheva - Software Engineer"
              fill
              sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="grid content-center gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-orange-300">
              <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
              OPEN TO
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              On-site • Hybrid • Remote
            </p>
          </div>
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-orange-300">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Based in
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              San Francisco Bay Area
            </p>
          </div>
        </div>
      </aside>

      <div>
        <p className="mb-4 text-sm font-medium tracking-[0.24em] text-orange-300">
          Hi, I&apos;m Alex
        </p>
        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
          I care about building software people actually enjoy using.
        </h2>
        <p className="mt-10 max-w-3xl text-lg leading-8 text-slate-300">
          Over the past six years, I&apos;ve built software across fintech, gaming,
          accessibility, and data visualization. My work includes building
          modern frontend applications, interactive dashboards, geospatial interfaces,
          and data visualization tools used in production.
        </p>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I enjoy turning complex systems into intuitive, responsive experiences that feel effortless to use.
          I&apos;m equally passionate about solving challenging engineering problems while paying close attention to performance,
          accessibility, maintainability, and thoughtful design.
        </p>
        {/* <Link
          href={`/about`}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-orange-300/40 bg-orange-300/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-300/20 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          More about me
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link> */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-orange-300">
              <Timer className="h-4 w-4" aria-hidden="true" />
              6+ Years
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Professional exerience
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-orange-300">
              <Code2 className="h-4 w-4" aria-hidden="true" />
              Frontend
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              React • Next.js • TypeScript
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-orange-300">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Focus
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Accessibility • Performance
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
