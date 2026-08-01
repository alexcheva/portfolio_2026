import { assetPath } from "@/lib/assetPath";
import Image from "next/image";

const views = [
  {
    eyebrow: "Baseline",
    title: "Start by defining the useful signal",
    body:
      "This first data iteration helped frame the product question: how much data should reach the user, and which parts are most valuable for interpreting the signal? I worked with backend engineers to shape that contract before optimizing how the frontend rendered it.",
    src: "/projects/sdr-waterfall/raw-high-density-spectrum-data-before-optimization.png",
    alt: "Dense unfiltered SDR spectrum and waterfall visualization before data reduction",
    width: 807,
    height: 477,
  },
  {
    eyebrow: "Rendering architecture",
    title: "D3 for meaning, Canvas for density",
    body:
      "D3 manages scales, axes, and the readable spectrum line. Canvas renders the pixel-dense waterfall as a bitmap, avoiding a DOM or SVG element for every sample and historical cell.",
    src: "/projects/sdr-waterfall/d3-spectrum-chart-canvas-waterfall-visualization.png",
    alt: "Streaming SDR dashboard combining a D3 spectrum line chart with a Canvas waterfall heatmap",
    width: 1195,
    height: 776,
  },
  {
    eyebrow: "Data optimization",
    title: "Remove complexity before rendering",
    body:
      "The visualization reduces samples to the screen’s useful resolution, normalizes the display range, and keeps a bounded rolling history. The result preserves signal shape without pushing redundant data through React or the renderer.",
    src: "/projects/sdr-waterfall/optimized-sdr-signal-waterfall-dashboard.png",
    alt: "Optimized SDR spectrum and waterfall with a clear signal envelope and simplified visual density",
    width: 953,
    height: 598,
  },
  {
    eyebrow: "Product experience",
    title: "Keep streaming controls understandable",
    body:
      "Frequency, bandwidth, presets, connection state, and limits remain visible around the chart so performance work supports the task instead of turning the visualization into an isolated demo.",
    src: "/projects/sdr-waterfall/sdr-waterfall-dashboard-streaming-controls.png",
    alt: "LocalView SDR waterfall dashboard with frequency, bandwidth, presets, and streaming controls",
    width: 1205,
    height: 620,
  },
];

export default function SdrWaterfallEvidence() {
  return (
    <section aria-labelledby="sdr-waterfall-title">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
        Visualization case study
      </p>
      <h2
        id="sdr-waterfall-title"
        className="mt-3 text-3xl font-semibold tracking-tight text-white"
      >
        Designing a performant real-time SDR waterfall
      </h2>
      <p className="mt-4 text-lg leading-8 text-slate-300">
        The work began by collaborating with backend engineers to understand
        what users needed from the incoming radio-frequency data, how much of
        it should be delivered, and where it could be reduced without losing
        the most valuable signal. That shared data contract then informed the
        D3 and Canvas rendering architecture on the frontend.
      </p>

      <div className="mt-9 space-y-8">
        {views.map((view) => (
          <article
            key={view.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]"
          >
            <div className="p-5 md:p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-orange-200">
                {view.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {view.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {view.body}
              </p>
            </div>
            <div className="border-t border-white/10 bg-white">
              <Image
                src={assetPath(view.src)}
                alt={view.alt}
                width={view.width}
                height={view.height}
                sizes="(min-width: 1024px) 768px, 100vw"
                className="h-auto w-full"
              />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
        <h3 className="text-xl font-semibold text-white">
          Performance model
        </h3>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {[
            ["Prioritize", "Agree with backend engineers on which data is most valuable to users before deciding what the interface needs to render."],
            ["Bound", "Keep a fixed rolling history instead of allowing the waterfall dataset to grow indefinitely."],
            ["Separate", "Let React manage controls and state while imperative drawing handles the high-frequency render loop."],
            ["Render", "Use D3 where semantic scales and interaction matter; use Canvas where pixel throughput matters."],
          ].map(([title, detail]) => (
            <li
              key={title}
              className="rounded-xl border border-white/10 bg-black/20 p-4"
            >
              <strong className="text-sm text-orange-200">{title}</strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
