import { assetPath } from "@/lib/assetPath";
import Image from "next/image";

type ExperienceImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

type ExperienceImageColumnProps = {
  company: string;
  images: ExperienceImage[];
};

export default function ExperienceImageColumn({
  company,
  images,
}: ExperienceImageColumnProps) {
  return (
    <div
      role="group"
      aria-label={`${company} experience photos`}
      className="space-y-6"
    >
      {images.map((image) => (
        <figure
          key={image.src}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/25"
        >
          <Image
            src={assetPath(image.src)}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1024px) 36vw, 100vw"
            className="h-auto w-full"
          />
          <figcaption className="px-4 py-3 text-sm leading-6 text-slate-300">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
