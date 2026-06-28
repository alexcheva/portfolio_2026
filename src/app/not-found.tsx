import { GalaxyScene } from "@/components/GalaxyScene";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white">
      <GalaxyScene />
      <div className="relative z-10 px-6 text-center">
        <p className="mb-3 text-4xl font-semibold uppercase tracking-[0.24em] text-orange-300">
          404
        </p>

        <h1 className="text-2xl font-semibold tracking-tight md:text-4xl">
          Lost in the signal.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
          This page does not exist yet, but the experiment space does.
        </p>
      </div>
    </main>
  );
}