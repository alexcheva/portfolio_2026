"use client";

import { CSSProperties, ReactNode, useEffect, useRef } from "react";

type SectionStyle = CSSProperties & {
  "--section-light": string;
  "--section-parallax-y": string;
};

export default function Section({
  eyebrow,
  title,
  children,
  id,
  background,
}: {
  eyebrow: string;
  title?: string;
  children: ReactNode;
  id?: string;
  background?: "engineering" | "creative" | "making";
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundClasses = {
    engineering:
      "bg-[radial-gradient(circle_at_12%_18%,rgba(139,92,246,0.42),transparent_34%),radial-gradient(circle_at_88%_20%,rgba(56,189,248,0.34),transparent_32%),radial-gradient(circle_at_52%_92%,rgba(16,185,129,0.26),transparent_40%)]",
    creative:
      "bg-[radial-gradient(circle_at_14%_22%,rgba(251,146,60,0.46),transparent_34%),linear-gradient(135deg,rgba(14,165,233,0.2),rgba(2,3,10,0.92)_48%,rgba(0,0,0,0.98))]",
    making:
      "bg-[radial-gradient(circle_at_16%_20%,rgba(244,114,182,0.4),transparent_34%),radial-gradient(circle_at_82%_24%,rgba(217,70,239,0.32),transparent_34%),radial-gradient(circle_at_50%_92%,rgba(15,23,42,0.42),transparent_42%)]",
  };

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || !background) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;

    const updateBackground = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);
      const maxDistance = viewportHeight * 0.95;
      const centeredAmount = Math.max(
        0,
        1 - distanceFromCenter / maxDistance,
      );
      const light = 0.5 + centeredAmount * 0.5;
      const parallax = mediaQuery.matches
        ? 0
        : ((viewportCenter - sectionCenter) / viewportHeight) * 90;

      section.style.setProperty("--section-light", light.toFixed(3));
      section.style.setProperty("--section-parallax-y", `${parallax.toFixed(1)}px`);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateBackground);
    };

    updateBackground();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    mediaQuery.addEventListener("change", requestUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      mediaQuery.removeEventListener("change", requestUpdate);
    };
  }, [background]);

  const sectionStyle = {
    "--section-light": "0.62",
    "--section-parallax-y": "0px",
  } satisfies SectionStyle;

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative scroll-mt-24 overflow-hidden bg-[#02030a]"
      style={sectionStyle as CSSProperties}
    >
      {background ? (
        <>
          <div
            className={`pointer-events-none absolute -inset-x-16 -inset-y-24 bg-fixed opacity-[var(--section-light)] transition-opacity duration-300 ${backgroundClasses[background]}`}
            style={{
              transform:
                "translate3d(0, var(--section-parallax-y), 0) scale(1.16)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,3,10,0.98),rgba(2,3,10,0.66)_18%,rgba(2,3,10,0.42)_48%,rgba(2,3,10,0.7)_82%,rgba(2,3,10,0.98))]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#02030a] via-[#02030a]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#02030a] via-[#02030a]/80 to-transparent" />
        </>
      ) : null}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
            {eyebrow}
          </h3>
          {title ? (
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {title}
            </h2>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
