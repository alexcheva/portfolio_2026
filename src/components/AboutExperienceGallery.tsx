import Image from "next/image";
import { assetPath } from "@/lib/assetPath";

const moments = [
  {
    src: "/experience/other/alexandra-lukinicheva-reactathon-stage.png",
    alt: "Alexandra Lukinicheva imagining herself speaking on the Reactathon stage",
    title: "Trying the Reactathon stage on for size",
    description:
      "Imagining what it might feel like to return to Reactathon as a speaker someday.",
    imageClassName: "object-cover object-center",
  },
  {
    src: "/experience/other/alexandra-lukinicheva-michael-chan-reactathon.png",
    alt: "Alexandra Lukinicheva with developer experience leader Michael Chan at Reactathon",
    title: "A Storybook fangirl moment",
    description:
      "Meeting Michael Chan from Chromatic after his Reactathon talk on Storybook and developer experience.",
    imageClassName: "object-cover object-center",
  },
  {
    src: "/experience/other/code-berkeley-nasa-space-apps-team.jpg",
    alt: "Alexandra Lukinicheva with the Code Berkeley team at Berkeley City College",
    title: "Building a coding community at BCC",
    description:
      "My Code Berkeley team at Berkeley City College. As club president, I helped organize Berkeley’s first NASA Space Apps Challenge in 2016—and again in 2017. Watching our teams reach the international finals, including one that placed third globally, remains one of my proudest community-building experiences.",
    imageClassName: "object-contain",
  },
];

export default function AboutExperienceGallery() {
  return (
    <section
      aria-labelledby="community-moments-title"
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-4"
    >
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-200">
        Beyond the work
      </p>
      <h2
        id="community-moments-title"
        className="mt-2 text-xl font-semibold text-white"
      >
        Community &amp; developer events
      </h2>

      <div className="mt-5 space-y-4">
        {moments.map((moment, index) => (
          <figure
            key={moment.src}
            className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]"
          >
            <div
              className={`relative overflow-hidden ${
                index === 2
                  ? "aspect-[1161/964] bg-black/20"
                  : "aspect-[4/5]"
              }`}
            >
              <Image
                src={assetPath(moment.src)}
                alt={moment.alt}
                fill
                sizes={
                  index === 2
                    ? "(min-width: 1024px) 1152px, 100vw"
                    : "(min-width: 768px) 50vw, 100vw"
                }
                className={`${moment.imageClassName} transition duration-500 group-hover:scale-[1.02]`}
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#02030a]/70 to-transparent"
              />
            </div>
            <figcaption className="p-4">
              <h3 className="text-base font-semibold text-white">
                {moment.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {moment.description}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
