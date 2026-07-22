export const sections = [
  {
    body: "During my apprenticeship at Sony Interactive Entertainment, I worked on accessibility validation, automation, and regression confidence for PlayStation experiences as they migrated to a new platform architecture. My work focused on helping teams ship accessible, reliable user experiences while collaborating closely with developers, designers, and product teams."
  },
  {
    title: "Overview",
    body:
      "I contributed to accessibility quality across multiple PlayStation user experiences during a large-scale migration from legacy components to a new platform architecture. My work combined accessibility analysis, automation, exploratory testing, and cross-functional collaboration to identify issues before release and improve confidence in customer-facing experiences.",
  },
  {
    title: "My Role",
    summary:
      "Improved accessibility and automation during a large-scale PlayStation platform migration.",
    highlights: [
      "Improved accessibility across 12+ PlayStation user experiences.",
      "Identified 8 customer-facing issues, including 3 high-priority accessibility defects with ADA implications.",
      "Designed Python and Selenium automation integrated with Jenkins.",
      "Developed an AI proof of concept for accessibility validation workflows.",
    ],
    body:
      "My responsibilities included:",
    bulletpoints: [
      "Validating accessibility across migrated PlayStation experiences",
      "Building Python and Selenium automation to reduce repetitive regression testing",
      "Investigating accessibility regressions using screen readers and assistive technologies",
      "Collaborating with developers to reproduce, prioritize, and verify fixes",
      "Integrating automated validation into Jenkins pipelines",
      "Exploring AI - assisted workflows for accessibility review and documentation",
    ],
  },
  {
    title: "Technical Highlights",
    body:
      "I improved validation coverage across 12+ PlayStation user experiences, identified 8 customer-facing issues, and surfaced 3 high-priority accessibility defects with ADA implications. I designed automation that helped teams catch regressions earlier and explored an AI proof of concept for accelerating accessibility checks.",
    bulletpoints: [
      "Improved accessibility validation across 12+ PlayStation experiences",
      "Identified 8 customer-facing accessibility defects",
      "Reported 3 high-priority issues with European Accessibility Act (EAA) implications",
      "Built Python/Selenium automation that reduced repetitive manual validation",
      "Created automated screen-reader validation workflows using transcript analysis",
      "Explored an AI proof of concept for accelerating accessibility review"
    ]
  }, {
    title: "Technologies",
    bulletpoints: [
      "Python",
      "Selenium",
      "Pytest",
      "Jenkins",
      "Screen readers",
      "Accessibility testing tools",
      "AI-assisted workflows"
    ]
  },
  {
    title: "Challenges",
    body:
      "Platform migration meant that interfaces, components, and behaviors were continuously evolving. Accessibility defects often involved interactions between application code, assistive technologies, and platform behavior, requiring careful investigation and clear communication with multiple engineering teams.",
  },
  {
    title: "What I've Learned",
    body:
      "This experience reinforced how much I enjoy improving user experiences through engineering. I found the most rewarding work involved understanding how real users interact with interfaces, collaborating across disciplines, and solving problems that directly improve usability and accessibility. It also clarified where I want to continue growing. While automation was an important part of my role, I'm most energized by building interactive frontend experiences where performance, accessibility, and thoughtful design come together.",
  },
];

export const interviewQuestions = [
  {
    question: "Tell me about the accessibility work.",
    answer:
      "I validated accessibility across PlayStation experiences during a platform migration, focusing on screen reader behavior, focus management, navigation, and usability. I partnered with developers to reproduce issues, prioritize fixes, and verify improvements before release.I helped validate accessibility across PlayStation user experiences during a platform migration, identifying issues that affected keyboard navigation, screen reader behavior, and customer-facing usability. The work required both technical testing and clear prioritization because some defects had meaningful ADA implications.",
  },
  {
    question: "Tell me about the AI proof of concept.",
    answer:
      "I explored how AI could assist accessibility validation by organizing test results, analyzing screen reader transcripts, and helping reviewers identify potential accessibility issues more efficiently. The goal wasn't to replace manual testing, but to reduce repetitive work and improve review speed.",
  },
  {
    question: "What was technically challenging?",
    answer:
      "During migration, both legacy and new implementations existed simultaneously, making regression validation more complex. Automation had to remain reliable even as interfaces evolved, requiring a balance between stability, flexibility, and meaningful accessibility coverage.",
  },
  {
    question: "What would you improve today?",
    answer:
      "I would push accessibility further upstream by providing reusable accessibility patterns, automated checks, and developer guidance before implementation begins. Catching accessibility issues during development is significantly faster—and less expensive—than finding them during validation.",
  },
];