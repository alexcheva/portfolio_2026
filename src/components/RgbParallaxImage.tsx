"use client";

import Image from "next/image";
import { CSSProperties, PointerEvent, useRef, useState } from "react";

type RgbParallaxImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

type PointerPosition = {
  x: number;
  y: number;
};

type ImageEffectStyle = CSSProperties & {
  "--mouse-x": string;
  "--mouse-y": string;
};

export default function RgbParallaxImage({
  src,
  alt,
  priority = false,
}: RgbParallaxImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<PointerPosition>({ x: 0, y: 0 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !imageRef.current
    ) {
      return;
    }

    const bounds = imageRef.current.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

    setPosition({ x, y });
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };

  const parallaxStyle: ImageEffectStyle = {
    "--mouse-x": `${(position.x + 1) * 50}%`,
    "--mouse-y": `${(position.y + 1) * 50}%`,
    transform: `perspective(900px) rotateX(${position.y * -4}deg) rotateY(${
      position.x * 5
    }deg) translate3d(${position.x * 8}px, ${position.y * 8}px, 0)`,
  };

  const channelStyle = (xMultiplier: number, yMultiplier: number) =>
    ({
      transform: `translate3d(${position.x * xMultiplier}px, ${
        position.y * yMultiplier
      }px, 0)`,
    }) satisfies CSSProperties;

  return (
    <div
      ref={imageRef}
      className="group relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/40"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      style={parallaxStyle}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 420px, 100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        priority={priority}
      />

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <Image
          src={src}
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 1024px) 420px, 100vw"
          className="object-cover opacity-[0.24] [filter:sepia(1)_saturate(9)_hue-rotate(310deg)_contrast(1.15)]"
          style={channelStyle(18, 4)}
        />
        <Image
          src={src}
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 1024px) 420px, 100vw"
          className="object-cover opacity-20 [filter:sepia(1)_saturate(10)_hue-rotate(90deg)_contrast(1.18)]"
          style={channelStyle(-14, 5)}
        />
        <Image
          src={src}
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 1024px) 420px, 100vw"
          className="object-cover opacity-[0.18] [filter:sepia(1)_saturate(9)_hue-rotate(175deg)_contrast(1.12)]"
          style={channelStyle(-20, -4)}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(255,255,255,0.06),transparent_26%)] opacity-0 mix-blend-overlay transition-opacity duration-200 group-hover:opacity-100" />
    </div>
  );
}
