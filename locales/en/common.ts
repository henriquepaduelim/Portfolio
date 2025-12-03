export const en = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    brandTag: "Portfolio"
  },
  hero: {
    greeting: "Hello, I'm",
    name: "Henrique Padueli",
    title: "Full-stack Developer",
    subtitle: "I build responsive, human-friendly digital products with thoughtful UX and reliable engineering.",
    primaryCta: "View projects",
    secondaryCta: "Get in touch"
  },
  about: {
    title: "About me",
    subtitle: "Builder-minded developer who loves the overlap between design and engineering.",
    paragraphs: [
      "I focus on delivering polished, resilient web experiences using modern tooling like Next.js, TypeScript, and Tailwind CSS.",
      "From ideation to deployment, I enjoy shaping UI, refining UX details, and making sure performance and accessibility stay top of mind."
    ],
    highlights: ["Product-minded", "Systems thinker", "Team collaborator"]
  },
  projects: {
    title: "Featured projects",
    subtitle: "Selected work that blends thoughtful UI, strong engineering, and measurable outcomes.",
    viewAll: "See all projects",
    detailTitle: "Project overview",
    stackLabel: "Tech stack",
    linksLabel: "Links",
    backToProjects: "Back to projects",
    featuredLabel: "Featured",
    caseStudyLabel: "Case study",
    linksType: {
      github: "GitHub",
      demo: "Live demo",
      caseStudy: "Case study"
    }
  },
  contact: {
    title: "Let's build something",
    subtitle: "Have a project, role, or collaboration in mind? Send a note and I'll respond shortly.",
    form: {
      nameLabel: "Name",
      emailLabel: "Email",
      subjectLabel: "Subject",
      companyLabel: "Company",
      phoneLabel: "Phone",
      messageLabel: "Message",
      submitLabel: "Send message",
      sendingLabel: "Sending..."
    },
    placeholders: {
      name: "Marvin",
      email: "you@example.com",
      subject: "Project opportunity",
      company: "Company or team",
      phone: "+1 (555) 123-4567",
      message: "Tell me about your idea..."
    },
    details: {
      emailLabel: "Email",
      emailValue: "henriquepaduelim@icloud.com",
      linkedinLabel: "LinkedIn",
      linkedinValue: "linkedin.com/in/henriquepadueli"
    },
    submitted: "Message sent. Thank you!",
    failed: "Something went wrong. Please try again."
  },
  footer: {
    note: "Built with Next.js, Tailwind CSS, and Framer Motion.",
    rights: "All rights reserved."
  },
  language: {
    label: "Language",
    en: "EN",
    pt: "PT-BR"
  },
  theme: {
    light: "Light",
    dark: "Dark",
    toggle: "Toggle theme"
  },
  buttons: {
    readMore: "Read more",
    liveDemo: "Live demo",
    viewCode: "View code",
    viewProject: "View project"
  },
  form: {
    errors: {
      name: "Please add your name.",
      email: "Enter a valid email address.",
      subject: "Subject is too long.",
      company: "Company is too long.",
      phone: "Phone is too long.",
      message: "Write a short message."
    }
  },
  social: {
    github: "GitHub",
    linkedin: "LinkedIn"
  }
} as const;
