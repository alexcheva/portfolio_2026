import { GalaxyScene } from "@/components/GalaxyScene";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white">
      <GalaxyScene />
      <div className="relative z-10 px-6 text-center">
        <p className="mb-3 text-4xl font-semibold uppercase tracking-[0.24em] text-orange-300">
          404
        </p>

        <h1 className="text-2xl font-semibold tracking-tight md:text-4xl">
          The signal is lost.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
          This page does not exist yet, but the experiment space does.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-orange-300/60 hover:bg-orange-300/10 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back home
        </Link>
      </div>
    </main>
  );
}