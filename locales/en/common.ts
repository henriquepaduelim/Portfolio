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
    subtitle:
      "Bilingual, results-first developer who ships scalable, user-centered products—mixing React/TypeScript and Python to deliver clean UI, solid APIs, and reliable deploys.",
    primaryCta: "View projects",
    secondaryCta: "Get in touch"
  },
  about: {
    title: "About me",
    subtitle: "Builder-minded developer bridging design and engineering to deliver complete products.",
    paragraphs: [
      "I’m a Brazilian web developer with a strong connection to sports, data and problem-solving. My background combines a degree in Information Technology with professional experience in intelligence and investigations, which taught me to pay attention to detail, patterns and risk from the start of any project. After studying Business Communication in Canada and working in multicultural environments, I learned how to translate ideas into clear, intuitive interfaces that feel natural for users. Today, I enjoy designing and building web experiences end-to-end, always thinking about performance, usability and scalability, and focusing on digital products that solve real problems for real people."
    ],
    highlights: ["Bilingual (EN/PT)", "End-to-end delivery", "Clean UI/API delivery"]
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
