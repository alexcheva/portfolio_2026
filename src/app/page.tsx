import { FileText, Mail } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import AboutMeSection from "@/components/AboutMeSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import { GalaxyScene } from "@/components/effects/GalaxyScene";
import { MerkabaScene } from "@/components/effects/MerkabaScene";
import { assetPath } from "@/lib/assetPath";
// import TechnologiesSection from "@/components/TechnologiesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#02030a] text-slate-100">
      <section className="relative bg-[#02030a]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-b from-transparent to-[#02030a]" />

        <div className="relative z-10">
          <Header />
          <div className="relative overflow-hidden">
            <GalaxyScene />

            <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 px-6 pb-16 pt-8 md:min-h-[calc(100svh-88px)] md:grid-cols-[1.05fr_0.95fr] md:py-10">
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
                  Senior Frontend Software Engineer
                </p>

                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-5xl lg:text-7xl">
                  I build performant, accessible, and intuitive web experiences.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  San Francisco Bay Area frontend engineer with 6+ years of experience building modern web applications with React, TypeScript, and Next.js, with strengths in accessibility, performance, and data visualization.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {/* <Link
                    href="https://www.linkedin.com/in/alexandra-lukinicheva"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white transition hover:border-orange-300/50 hover:bg-orange-300/10 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    LinkedIn
                  </Link> */}
                  {/* <Link
                    href="https://github.com/alexcheva"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white transition hover:border-orange-300/50 hover:bg-orange-300/10 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </Link> */}
                  {/* <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-orange-300/40 bg-orange-300/10 px-4 py-2 text-sm text-white transition hover:bg-orange-300/20 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  >
                    About me
                  </Link> */}
                  <a
                    href={assetPath("/profile/alexandra_lukinicheva_resume.pdf")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-orange-300/40 bg-orange-300/10 px-4 py-2 text-sm text-white transition hover:bg-orange-300/20 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    View resume
                  </a>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white transition hover:border-orange-300/50 hover:bg-orange-300/10 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Contact me
                  </Link>
                </div>
              </div>

              <div
                aria-label="Interactive glass merkaba WebGL visual"
                className="relative h-[18rem] w-full overflow-hidden sm:h-[22rem] md:h-[24rem] lg:h-[clamp(24rem,42vw,36rem)] [contain:layout_paint_size]"
              >
                <MerkabaScene />
                <span className="sr-only">Interactive glass merkaba visual</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutMeSection />
      {/* <TechnologiesSection /> */}
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
