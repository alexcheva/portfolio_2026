import AboutBackground from "@/components/AboutBackground";
import AboutConnectSection from "@/components/AboutConnectSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { assetPath } from "@/lib/assetPath";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const articlePath = "/insights/self-hypnosis-audio-studio-spiritual-peach";
const canonicalUrl = `https://www.alexcheva.com${articlePath}`;
const previewImageUrl =
  "https://www.alexcheva.com/projects/spiritual-peach/self-hypnosis-session-library-dashboard.png";

export const metadata: Metadata = {
  title: "Designing a Self-Hypnosis Audio Studio | Spiritual Peach",
  description:
    "A product and engineering case study about building a private self-hypnosis script library, browser audio recorder, session organizer, and composable audio export workflow for Spiritual Peach.",
  keywords: [
    "self-hypnosis app experiment",
    "browser audio recorder",
    "MediaRecorder API",
    "Next.js audio application",
    "audio workflow design",
    "Spiritual Peach",
    "Alexandra Lukinicheva",
  ],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "article",
    url: canonicalUrl,
    title: "Designing a Self-Hypnosis Audio Studio",
    description:
      "How a personal recording experiment became a script library, browser recorder, session organizer, and composable audio workflow.",
    publishedTime: "2026-09-17",
    authors: ["Alexandra Lukinicheva"],
    images: [
      {
        url: previewImageUrl,
        width: 1290,
        height: 576,
        alt: "Spiritual Peach self-hypnosis session library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Designing a Self-Hypnosis Audio Studio",
    description:
      "How a personal recording experiment became a script library, browser recorder, session organizer, and composable audio workflow.",
    images: [previewImageUrl],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Designing a Self-Hypnosis Audio Studio for Spiritual Peach",
  description:
    "A product and engineering case study about creating a browser-based script, recording, organization, and audio export workflow.",
  datePublished: "2026-09-17",
  dateModified: "2026-09-17",
  mainEntityOfPage: canonicalUrl,
  author: {
    "@type": "Person",
    name: "Alexandra Lukinicheva",
    url: "https://www.alexcheva.com/about",
  },
  about: [
    "Product design",
    "Browser audio recording",
    "Next.js",
    "TypeScript",
    "MediaRecorder API",
  ],
};

const workflow = [
  ["Write", "Create a titled script and organize it into a meaningful group."],
  ["Record", "Capture narration in the browser with clear microphone and recording states."],
  ["Review", "Listen before committing, then save or discard and record again."],
  ["Compose", "Choose recorded segments, arrange their order, and export one sequence."],
];

export default function SelfHypnosisAudioStudioArticlePage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#02030a] text-slate-100">
      <AboutBackground />
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article className="relative z-10 mx-auto w-full max-w-4xl px-6 py-16 lg:py-24">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-orange-300/60 hover:bg-orange-300/10 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to insights
        </Link>

        <header className="mt-10 border-b border-white/10 pb-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
            Product experiment · Spiritual Peach
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.08]">
            Designing a self-hypnosis audio studio
          </h1>
          <p className="mt-7 text-xl leading-9 text-slate-300">
            What began as a way to record a personal script grew into a small
            audio-production system: a searchable session library, an in-browser
            recorder, reusable groups, ordered sequences, and portable audio
            exports.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
            <span>By Alexandra Lukinicheva</span>
            <time dateTime="2026-09-17">September 17, 2026</time>
            <span>8 minute read</span>
          </div>
        </header>

        <aside className="mt-10 rounded-2xl border border-orange-300/20 bg-orange-300/[0.06] p-5 text-sm leading-7 text-slate-300">
          <strong className="text-orange-200">A note on scope:</strong> this was
          a personal product and engineering experiment, not a clinical tool or
          a substitute for professional mental-health care. The feature makes no
          promises about treatment or outcomes; it gives the creator control
          over writing, recording, organizing, and replaying their own material.
        </aside>

        <div className="mt-12 space-y-14 text-lg leading-8 text-slate-300">
          <section>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              The experiment started with authorship
            </h2>
            <p className="mt-5">
              Spiritual Peach already explored reflective content, oracle
              readings, and media generation. Self-hypnosis introduced a
              different product question: what would it feel like to write a
              session in my own words, record it in my own voice, and return to
              it without depending on a generic audio catalog?
            </p>
            <p className="mt-5">
              The first useful version did not need an elaborate playback
              experience. It needed a dependable loop around authorship:
              preserve the script, capture the recording, review it, and make
              it easy to find again. That constraint kept the experiment
              grounded in a real workflow instead of turning it into a vague
              “wellness app” concept.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              One recording became a reusable system
            </h2>
            <p className="mt-5">
              As the number of scripts grew, the problem changed. A single
              recorder was no longer enough; the product needed a library.
              Sessions gained titles, editable scripts, recording status,
              timestamps, and optional groups. Search spans both titles and
              script text, while filters make related sessions easier to revisit.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {workflow.map(([title, detail], index) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-5">
              I deliberately kept scripts and recordings as separate states. A
              session can remain “script only,” which means an unfinished idea
              is still valuable and does not have to become audio immediately.
            </p>
            <figure className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
              <Image
                src={assetPath("/projects/spiritual-peach/self-hypnosis-session-library-dashboard.png")}
                alt="Self-Hypnosis Sessions dashboard with group filters, script search, recording controls, and session-management actions"
                width={1290}
                height={576}
                sizes="(min-width: 1024px) 896px, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-slate-400">
                The library treats scripts as durable content: sessions can be
                searched, grouped, recorded, moved, combined, or deleted from
                one workspace.
              </figcaption>
            </figure>
            <figure className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
              <Image
                src={assetPath("/projects/spiritual-peach/self-hypnosis-recorded-session-library.png")}
                alt="Grid of saved self-hypnosis recordings with titles, timestamps, durations, and native audio players"
                width={1274}
                height={784}
                sizes="(min-width: 1024px) 896px, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-slate-400">
                Saved recordings stay attached to their scripts and remain
                immediately playable through familiar native audio controls.
              </figcaption>
            </figure>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Recording in the browser made iteration immediate
            </h2>
            <p className="mt-5">
              The recording flow uses the browser’s microphone APIs and
              <code className="mx-1 text-orange-200">MediaRecorder</code> rather
              than sending the user to a separate audio application. The UI
              exposes the important states directly: ready, microphone active,
              recording ready to review, saving, saved, or unavailable.
            </p>
            <p className="mt-5">
              A newly captured recording stays temporary until it is reviewed.
              The user can listen, discard it, or re-record before saving. That
              small distinction matters: capture is reversible, and an
              accidental take does not overwrite the saved version. Microphone
              tracks and temporary object URLs are also cleaned up when they are
              no longer needed.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Browser formats created the real engineering work
            </h2>
            <p className="mt-5">
              Browsers naturally record into formats such as WebM or MP4,
              depending on support. Those are practical capture formats, but
              MP3 and WAV are more convenient when a recording needs to move to
              another device or audio tool. I kept the original recording and
              added server-side conversion only when an export is requested.
            </p>
            <p className="mt-5">
              The data model stores the relationship between a session and its
              audio metadata, while the file itself remains on disk. Replacing
              or deleting a recording removes the old file as well as updating
              the database. Download responses are marked as non-cacheable, and
              exported filenames are derived safely from the session title.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Composition was more interesting than a playlist
            </h2>
            <p className="mt-5">
              The most useful extension was the ability to combine recordings.
              A longer session can be assembled from smaller, independently
              editable segments. Recorded sessions are selected in order,
              rearranged with drag and drop, and exported as one MP3 or WAV file.
            </p>
            <p className="mt-5">
              This changed the underlying mental model. Instead of treating a
              recording as one permanent monolith, the system treats it as a
              composable unit. An introduction, relaxation segment, focused
              script, and closing can evolve independently and be reused in
              different sequences.
            </p>
            <figure className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
              <Image
                src={assetPath("/projects/spiritual-peach/self-hypnosis-combined-audio-sequence-export.png")}
                alt="Ordered self-hypnosis recording sequence with draggable segments and MP3 export controls"
                width={1381}
                height={527}
                sizes="(min-width: 1024px) 896px, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-slate-400">
                Smaller recordings can be arranged into a deliberate sequence
                and exported as one portable MP3 or WAV file.
              </figcaption>
            </figure>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Designing for calm still requires explicit feedback
            </h2>
            <p className="mt-5">
              A soft visual language should not make system state ambiguous.
              Recording controls have accessible names, unavailable actions are
              disabled, selection modes use both labels and visual indicators,
              and status messages explain whether the microphone is active or a
              save succeeded. Native audio controls provide a familiar playback
              baseline instead of a decorative custom player.
            </p>
            <p className="mt-5">
              The library also separates destructive, grouping, and sequencing
              modes. That keeps a click on a session predictable and makes bulk
              operations explicit rather than hiding several behaviors inside
              the same card.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              What I would explore next
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Add optional pauses and transitions between combined segments instead of joining every recording directly.",
                "Normalize loudness across recordings so a sequence feels continuous even when segments were captured on different days.",
                "Test microphone permissions, interruption recovery, and capture formats more deeply across mobile browsers.",
                "Introduce a storage abstraction and backup flow before treating the studio as anything beyond a private experiment.",
                "Explore script templates and timing cues while keeping authorship and final wording under the user’s control.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4"
                >
                  <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-orange-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <blockquote className="border-l-2 border-orange-300 pl-6 text-2xl font-medium leading-10 text-white">
            The most interesting part of the experiment was not recording
            audio. It was turning a private, fragile creative process into a
            workflow that remained editable, reversible, and reusable.
          </blockquote>

          <Link
            href="/projects/spiritual-peach"
            className="group block rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-orange-300/50 hover:bg-orange-300/[0.06] focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            <span className="flex items-center justify-between gap-3 text-xl font-semibold text-white">
              Explore the Spiritual Peach case study
              <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </span>
            <span className="mt-2 block text-sm leading-7 text-slate-400">
              See the broader wellness platform, Peach Studio CMS, and branded
              content-generation workflow.
            </span>
          </Link>
        </div>
      </article>

      <div className="relative z-10">
        <AboutConnectSection />
        <Footer />
      </div>
    </main>
  );
}
