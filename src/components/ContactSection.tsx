import Link from "next/link";

export default function ContactSection() {
  return (
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
  )
}