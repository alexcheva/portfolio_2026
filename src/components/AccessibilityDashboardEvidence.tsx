import { assetPath } from "@/lib/assetPath";
import Image from "next/image";

const workflow = [
  {
    step: "00",
    title: "Define the problem in the raw logs",
    description:
      "The automation output contained the necessary evidence, but it was buried in dense, interleaved logs. Engineers had to search across timestamps, screen-reader output, expected values, and boolean results to determine what passed, what failed, where it failed, and why.",
    src: "/projects/accessibility-dashboard/raw-screen-reader-automation-logs-before-dashboard.png",
    alt: "Dense raw screen-reader automation logs with test output, expected announcements, and pass or fail values mixed together",
    width: 1684,
    height: 595,
  },
  {
    step: "01",
    title: "Aggregate automated results",
    description:
      "The dashboard turns screen-reader automation output into a scannable test summary, with pass and failure totals plus direct links to each test’s evidence.",
    src: "/projects/accessibility-dashboard/accessibility-automation-dashboard-test-summary.png",
    alt: "Accessibility automation dashboard summarizing four screen-reader tests with passed and failed checks",
    width: 1506,
    height: 814,
  },
  {
    step: "02",
    title: "Investigate failures with evidence",
    description:
      "A per-test report connects expected announcements to pass/fail checks, recorded video, and the captured screen-reader transcript so engineers can reproduce a regression quickly.",
    src: "/projects/accessibility-dashboard/screen-reader-automation-failed-test-report.png",
    alt: "Failed screen-reader accessibility test report with expected announcements, recorded PlayStation video, and transcript output",
    width: 3446,
    height: 1986,
  },
  {
    step: "03",
    title: "Publish results through CI",
    description:
      "The generated dashboard is attached to the Jenkins build as an accessible artifact, keeping diagnostic output connected to the pull request and test run that produced it.",
    src: "/projects/accessibility-dashboard/jenkins-accessibility-dashboard-build-artifact.png",
    alt: "Jenkins build page exposing the generated Accessibility Dashboard as a build artifact",
    width: 1221,
    height: 646,
  },
  {
    step: "04",
    title: "Verify the fix",
    description:
      "The final report shows all six expected screen-reader announcements passing while retaining the video and transcript needed for human review.",
    src: "/projects/accessibility-dashboard/screen-reader-automation-passing-test-report.png",
    alt: "Passing screen-reader accessibility report showing six of six checks passed with video and transcript evidence",
    width: 3234,
    height: 1508,
  },
];

export default function AccessibilityDashboardEvidence() {
  return (
    <section aria-labelledby="accessibility-dashboard-title">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
        Prototype workflow
      </p>
      <h2
        id="accessibility-dashboard-title"
        className="mt-3 text-3xl font-semibold tracking-tight text-white"
      >
        Making screen-reader automation understandable
      </h2>
      <p className="mt-4 text-lg leading-8 text-slate-300">
        Raw automation logs made it difficult to distinguish passing and failing
        checks, locate the relevant interaction, or understand why a failure
        occurred. This proof of concept turned that output into a visually
        scannable dashboard, connecting each assertion to its recorded
        interaction, transcript, and structured test data for faster debugging
        and triangulation.
      </p>

      <div className="mt-9 space-y-8">
        {workflow.map((item) => (
          <article
            key={item.step}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]"
          >
            <div className="grid gap-4 p-5 sm:grid-cols-[2.75rem_1fr] md:p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-300/30 bg-orange-300/10 text-sm font-semibold text-orange-200">
                {item.step}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="border-t border-white/10 bg-white">
              <Image
                src={assetPath(item.src)}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1024px) 768px, 100vw"
                className="h-auto w-full"
              />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          ["Evidence", "Video, transcript, and structured JSON remain linked to each result."],
          ["Diagnosis", "Scannable pass/fail checks connect expected announcements to captured output so engineers can locate and triangulate issues faster."],
          ["CI visibility", "Reports travel with the Jenkins build instead of living in raw logs."],
        ].map(([title, detail]) => (
          <div
            key={title}
            className="rounded-xl border border-white/10 bg-white/[0.035] p-4"
          >
            <h3 className="text-sm font-semibold text-orange-200">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
