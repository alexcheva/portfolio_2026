export const projectRows = [
  {
    slug: "spiritual-peach",
    title: "Spiritual Peach",
    ctaLabel: "View Spiritual Peach",
    status: "In progress",
    description:
      "A wellness platform and CMS-style tool for automating consistent, branded social content.",
    tags: ["Content Automation", "CMS", "Next.js", "TypeScript"],
    overview:
      "Spiritual Peach is my ongoing passion project: a wellness platform paired with Peach Studio, a CMS-style content creation tool I built to organize ideas and automate consistent branded media for my social channels.",
    sections: [
      {
        title: "Overview",
        body:
          "The public product brings together oracle readings, meditations, affirmations, and reflective content. Behind it, Peach Studio turns reusable content sets into polished social assets so the same brand language can move consistently between the website, Instagram, Pinterest, and short-form video.",
      },
      {
        title: "Goals",
        body:
          "The goal was to reduce repetitive content-production work without losing creative control: write and organize content once, preview it inside reusable brand templates, and export channel-ready formats from one coherent workflow.",
      },
      {
        title: "Technical Focus",
        bullets: [
          "React and Next.js application architecture",
          "TypeScript-first development",
          "CMS-style content sets and reusable structured data",
          "Branded image, GIF, Pinterest, Story, and Reel generation",
          "Live previews and browser-based exports",
          "Responsive design and accessibility",
          "Component libraries and reusable visual templates",
        ],
      },
      {
        title: "Challenges",
        body:
          "The central challenge was separating content from presentation without making the creative workflow feel rigid. Each format has different proportions and composition needs, so the system had to preserve brand consistency while still producing readable Story, portrait, Pinterest, and video layouts.",
      },
      {
        title: "What I'm Learning",
        body:
          "This project has pushed me to think about content operations as a product problem. A useful automation tool does more than generate an image: it creates a repeatable workflow, makes the result previewable, and gives the creator enough control to trust the output.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why did you build Spiritual Peach?",
        answer:
          "I wanted a long-term project where I could combine frontend engineering, visual design, wellness content, and automation. Building both the audience-facing product and its internal content tools let me explore the complete workflow from idea to branded distribution.",
      },
      {
        question: "Why build a content tool instead of designing posts manually?",
        answer:
          "Manual design works for one post, but it becomes repetitive across a campaign and multiple aspect ratios. A CMS-style workflow lets me reuse structured content, keep the brand consistent, preview each format, and spend more time refining the message instead of rebuilding layouts.",
      },
    ],
  },
  {
    slug: "accessibility-ai-proof-of-concept",
    title: "Accessibility AI Proof of Concept",
    ctaLabel: "View Accessibility AI",
    status: "Prototype",
    description:
      "Exploring how AI can accelerate accessibility validation without replacing human judgment.",
    tags: ["Accessibility", "AI", "Automation", "Python"],
    overview:
      "This proof of concept explored how large language models could support accessibility workflows by helping engineers review results, identify patterns, and surface potential issues earlier in the development process.",
    sections: [
      {
        title: "Overview",
        body:
          "The objective was not to automate accessibility entirely, but to reduce repetitive review work and help teams focus on higher-value analysis.",
      },
      {
        title: "Goals",
        bullets: [
          "Review accessibility validation output",
          "Organize large volumes of test results",
          "Summarize findings",
          "Surface potential accessibility issues",
          "Reduce repetitive manual review",
        ],
      },
      {
        title: "Technical Focus",
        bullets: [
          "AI-assisted accessibility workflows",
          "Prompt engineering",
          "Python automation",
          "Screen reader transcript analysis",
          "Accessibility testing",
          "Workflow optimization",
        ],
      },
      {
        title: "Challenges",
        body:
          "Accessibility depends heavily on context, making it difficult for AI to determine whether an experience is genuinely usable. One of the biggest challenges was distinguishing between objective issues and situations that still required human evaluation.",
      },
      {
        title: "What I Learned",
        body:
          "AI performs best as an assistant rather than a replacement. The most valuable workflows combined automation with human expertise, allowing engineers to spend less time reviewing repetitive output and more time solving accessibility problems.",
      },
    ],
    interviewQuestions: [
      {
        question: "What problem were you solving?",
        answer:
          "Accessibility testing often generates large amounts of information. I explored whether AI could organize that information and help reviewers identify areas that deserved closer attention.",
      },
      {
        question: "Would you trust AI to replace accessibility testing?",
        answer:
          "No. Accessibility requires human judgment and real user understanding. AI is most effective as a productivity tool that helps engineers review information more efficiently.",
      },
    ],
  },
  {
    slug: "interactive-data-visualization",
    title: "Interactive Data Visualization",
    ctaLabel: "View Data Visualization",
    status: "Experiments",
    description:
      "Modern techniques for building fast, interactive, and scalable analytical interfaces.",
    tags: ["React", "D3.js", "Canvas", "Mapbox GL"],
    overview:
      "This collection of experiments focuses on building performant frontend visualizations for complex datasets, combining mapping, charting, streaming data, and interaction design.",
    sections: [
      {
        title: "Overview",
        body:
          "Many of the ideas grew from challenges I encountered while building production analytics applications. The project compares different visualization approaches and rendering technologies under realistic frontend constraints.",
      },
      {
        title: "Goals",
        bullets: [
          "Large datasets",
          "Streaming information",
          "Geospatial analytics",
          "Interactive dashboards",
          "Performance optimization",
          "Rendering efficiency",
        ],
      },
      {
        title: "Technical Focus",
        bullets: [
          "React",
          "D3.js",
          "Canvas API",
          "eCharts",
          "Mapbox GL",
          "SVG vs Canvas rendering",
          "Performance profiling",
          "Data visualization architecture",
        ],
      },
      {
        title: "Challenges",
        body:
          "Different visualization libraries excel at different workloads. One of the most interesting engineering questions has been understanding when SVG begins to struggle, when Canvas becomes a better fit, and how rendering choices affect the overall user experience.",
      },
      {
        title: "What I'm Learning",
        body:
          "Visualization is about much more than drawing charts. Good interfaces help people discover patterns, ask better questions, and understand information quickly. That requires balancing performance, usability, interaction design, and visual clarity.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why experiment with multiple visualization libraries?",
        answer:
          "Every library has different strengths. Building the same concepts with multiple technologies has helped me better understand their trade-offs and choose the right tool for different types of applications.",
      },
      {
        question: "What interests you about visualization?",
        answer:
          "I enjoy turning large amounts of technical information into interfaces that people can understand almost immediately. It's one of the places where engineering, design, and user experience come together.",
      },
    ],
  },
  {
    slug: "portfolio-2026",
    title: "Portfolio 2026",
    ctaLabel: "View Portfolio 2026",
    status: "Live iteration",
    description:
      "A personal portfolio built as a polished product surface, not just a static resume.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Interaction Design"],
    overview:
      "This portfolio is a living product that brings together my engineering experience, project storytelling, interactive visuals, and design sensibility in one cohesive web experience.",
    sections: [
      {
        title: "Overview",
        body:
          "The goal was to create a portfolio that feels personal and expressive while still being fast, accessible, and easy to scan. It uses reusable content sections, project detail pages, experience pages, animated image treatments, atmospheric backgrounds, and responsive layouts.",
      },
      {
        title: "Goals",
        bullets: [
          "Present experience and projects with stronger storytelling",
          "Build reusable page patterns for projects, experience, and contact sections",
          "Create a visual language that feels distinctive without hurting readability",
          "Keep the site responsive, accessible, and performant",
        ],
      },
      {
        title: "Technical Focus",
        bullets: [
          "Next.js App Router",
          "TypeScript components",
          "Tailwind CSS design system",
          "Reusable data-driven project pages",
          "Responsive navigation and footer links",
          "Subtle parallax backgrounds and RGB image effects",
        ],
      },
      {
        title: "Challenges",
        body:
          "The main challenge has been balancing personality with clarity. The site should feel memorable, but the work still needs to stay readable, recruiter-friendly, and easy to navigate.",
      },
      {
        title: "What I'm Learning",
        body:
          "Working on the portfolio as a product has been a useful reminder that presentation is part of UX. Strong content, visual hierarchy, performance, accessibility, and interaction design all shape how people understand the work.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why include the portfolio itself as a project?",
        answer:
          "Because it demonstrates product thinking, frontend architecture, visual design, responsive implementation, and iterative polish. It is also a live example of how I turn a vague creative direction into a usable interface.",
      },
      {
        question: "What did you focus on most?",
        answer:
          "I focused on making the site feel cohesive: reusable page patterns, atmospheric but readable visuals, strong content hierarchy, and a navigation flow that supports both quick scanning and deeper reading.",
      },
    ],
  },
];
