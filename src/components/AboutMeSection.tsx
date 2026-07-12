import Image from "next/image";
export default function AboutPage() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.78fr_1.22fr]">
      <aside className="space-y-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4">
          <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-dashed border-orange-300/30 bg-[radial-gradient(circle_at_40%_20%,rgba(251,146,60,0.22),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] text-center">
            <div className="px-8">
              <Image
                src="/profile/alexandra_lukinicheva.png"
                alt="Alexandra Lukinicheva - Software Engineer"
                width={300}
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
  )
}