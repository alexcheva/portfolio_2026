import { MonitorCheck } from "lucide-react";
import Section from "./sections/Section";

const educationRows = [
  {
    school: "Techtonica",
    program: "Full Stack Software Engineering Apprenticeship",
    period: "Software Engineering",
    gpa: null,
    detail:
      "Intensive full-stack engineering program focused on production web development, collaboration, and practical software engineering foundations.",
  },
  {
    school: "Berkeley City College",
    program: "Associate of Arts in Mobile and Web Design",
    period: "September 2014 - April 2018",
    gpa: "4.0",
    detail:
      "Studied mobile and web design with a focus on visual communication, interactive experiences, and practical digital production.",
  },
  {
    school: "Saint Petersburg State University of Cinema and Television",
    program: "Bachelor of Arts in Interactive Multimedia",
    period: "September 2008 - April 2010",
    gpa: "3.92",
    detail:
      "Studied interactive multimedia, combining design, media, technology, and creative production foundations.",
  },
];

export default function EducationSection() {
  return (
    <Section eyebrow="Education" title="Education and continued learning.">
      <div className="grid gap-4 md:grid-cols-3">
        {educationRows.map((education, index) => (
          <article
            key={`${education.school}-${index}`}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-300/10 text-orange-300">
              <MonitorCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">
              {education.school}
            </h3>
            <p className="mt-2 text-sm font-medium text-orange-200">
              {education.program}
            </p>
            <p className="mt-3 text-sm text-slate-400">
              {education.period}
            </p>
            {education.gpa ? (
              <p className="mt-2 text-sm text-slate-300">
                GPA: {education.gpa}
              </p>
            ) : null}
            <p className="mt-4 text-sm leading-6 text-slate-300">
              {education.detail}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}