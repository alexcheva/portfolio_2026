export default function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mb-10 max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
          {eyebrow}
        </p>
        <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}