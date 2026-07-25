import Image from "next/image";
import Section from "./sections/Section";
import { assetPath } from "@/lib/assetPath";

const educationRows = [
  {
    school: "Techtonica",
    program: "Full Stack Software Engineering Apprenticeship",
    period: "2020 - 2021",
    image: "/education/techtonica.jpeg",
    detail:
      "Intensive full-stack engineering program focused on production web development, collaboration, and practical software engineering foundations.",
  },
  {
    school: "Berkeley City College",
    program: "Associate of Arts in Mobile and Web Design",
    period: "2014 - 2018",
    image: "/education/berkeley-city-college.jpeg",

    detail:
      "Studied mobile and web design with a focus on visual communication, interactive experiences, and practical digital production.",
  },
  {
    school: "Saint Petersburg State University of Cinema and Television",
    program: "Bachelor of Arts in Interactive Multimedia",
    period: "2008 - 2010",
    image: "/education/stpete-university.png",
    detail:
      "Studied interactive multimedia, combining design, media, technology, and creative production foundations.",
  },
];

export default function EducationSection() {
  return (
    <Section eyebrow="Education" background="making">
      <div className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/25 md:p-6">
        <ol className="relative space-y-3 before:absolute before:bottom-8 before:left-[3.25rem] before:top-8 before:w-px before:bg-gradient-to-b before:from-orange-300 before:via-sky-300 before:to-fuchsia-300 sm:before:left-10">
          {educationRows.map((education, index) => (
            <li
              key={`${education.school}-${index}`}
              tabIndex={0}
              className="group relative flex items-start gap-4 rounded-xl p-3 transition hover:bg-white/[0.06] focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-orange-300/60"
            >
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white p-2 shadow-xl shadow-black/20 sm:h-20 sm:w-20">
                <Image
                  src={assetPath(education.image)}
                  alt={`${education.school} logo`}
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="text-sm font-medium text-orange-200">
                    {education.period}
                  </p>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                  <p className="text-sm font-medium text-slate-300">
                    0{index + 1}
                  </p>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {education.school}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-200">
                  {education.program}
                </p>
                <p className="mt-0 max-h-0 overflow-hidden text-sm leading-6 text-slate-300 opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:max-h-56 group-hover:opacity-100 group-focus:mt-4 group-focus:max-h-56 group-focus:opacity-100 sm:group-hover:max-h-40 sm:group-focus:max-h-40">
                  {education.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
