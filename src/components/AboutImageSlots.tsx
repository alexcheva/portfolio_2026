"use client";

import { useState } from "react";

const imageSlots = [
  {
    label: "Creative systems",
    detail: "Interactive web, graphics, and product experiments",
    gradient: "from-orange-300/40 via-fuchsia-400/30 to-sky-400/30",
  },
  {
    label: "Engineering craft",
    detail: "Accessibility, performance, automation, and tooling",
    gradient: "from-violet-400/35 via-blue-400/25 to-emerald-300/25",
  },
  {
    label: "Physical making",
    detail: "Digital art, 3D printing, and custom fabrication",
    gradient: "from-pink-400/30 via-orange-300/25 to-cyan-300/25",
  },
];

export function AboutImageSlots() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  return (
    <div
      className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        setPointer({
          x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
        });
      }}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
    >
      {imageSlots.map((slot, index) => {
        const depth = index + 1;
        const translateX = pointer.x * depth * 6;
        const translateY = pointer.y * depth * 4;

        return (
          <figure
            key={slot.label}
            className="group relative min-h-44 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${slot.gradient} opacity-75 transition-transform duration-300 group-hover:scale-105`}
              style={{
                transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(1.08)`,
              }}
            />
            <div
              className="absolute inset-0 mix-blend-screen opacity-50"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 0, 80, 0.3), transparent 38%, rgba(0, 240, 255, 0.24))",
                transform: `translate3d(${-translateX * 0.7}px, ${
                  -translateY * 0.7
                }px, 0)`,
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_28%),linear-gradient(to_bottom,transparent,rgba(2,3,10,0.72))]" />
            <figcaption className="relative z-10 flex h-full min-h-36 flex-col justify-end">
              <p className="text-sm font-medium text-white">{slot.label}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {slot.detail}
              </p>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
