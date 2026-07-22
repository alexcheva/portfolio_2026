"use client";

import { CSSProperties, useEffect, useRef } from "react";

type AboutBackgroundStyle = CSSProperties & {
  "--about-light": string;
  "--about-parallax-y": string;
};

export default function AboutBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;

    if (!background) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;

    const updateBackground = () => {
      const scrollRange = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const progress = window.scrollY / scrollRange;
      const centeredAmount = Math.sin(Math.min(1, Math.max(0, progress)) * Math.PI);
      const light = 0.82 + centeredAmount * 0.28;
      const parallax = mediaQuery.matches ? 0 : (progress - 0.5) * -135;

      background.style.setProperty("--about-light", light.toFixed(3));
      background.style.setProperty("--about-parallax-y", `${parallax.toFixed(1)}px`);
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
  }, []);

  const backgroundStyle = {
    "--about-light": "0.82",
    "--about-parallax-y": "0px",
  } satisfies AboutBackgroundStyle;

  return (
    <div
      ref={backgroundRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={backgroundStyle as CSSProperties}
    >
      <div
        className="absolute -inset-x-32 top-10 bottom-0 opacity-[var(--about-light)] blur-xl transition-opacity duration-300"
        style={{
          transform:
            "translate3d(0, var(--about-parallax-y), 0) scale(1.08)",
          background:
            "radial-gradient(ellipse at left 44%, rgba(251, 146, 60, 0.44), transparent 34%), radial-gradient(ellipse at right 50%, rgba(14, 165, 233, 0.38), transparent 36%), radial-gradient(ellipse at 76% 58%, rgba(217, 70, 239, 0.3), transparent 32%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#02030a_0%,rgba(2,3,10,0.9)_6%,rgba(2,3,10,0.38)_36%,rgba(2,3,10,0.44)_68%,rgba(2,3,10,0.9)_94%,#02030a_100%)]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#02030a] via-[#02030a]/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#02030a] via-[#02030a]/90 to-transparent" />
    </div>
  );
}
