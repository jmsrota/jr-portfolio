import graduationPhoto from "../assets/GradPhoto.webp";
import heroBackground from "../assets/jr-bg.jpg";

const portfolioData = {
  personal: {
    name: "James Rota",
    title: "Computer Science Graduate",
    tagline:
      "Building software with curiosity, precision, and a drive to grow.",
    location: "Edmonton, Alberta",
    email: "jmsrota@gmail.com",
    phone: "780-777-7311",
    photo: graduationPhoto,
    heroBackground: heroBackground,
    resumeUrl: "/resume.pdf",
    summary:
      "I am a recent Computer Science graduate eager to begin my career in the industry. I have been actively working on side projects to enhance my skills and build a strong portfolio. My goal is to join a company where I can apply my knowledge while learning and growing under the guidance of experienced peers and supervisors. I bring a fresh perspective, a strong willingness to learn, and the adaptability to thrive in a role while aligning with a company's specifications and values.",
  },

  socials: [
    { label: "GitHub", url: "https://github.com/jmsrota", icon: "github" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/james-rota-034a57149",
      icon: "linkedin",
    },
    {
      label: "Portfolio",
      url: "https://jmsrota.github.io/GitHub-portfolio",
      icon: "globe",
    },
    { label: "Email", url: "mailto:jmsrota@gmail.com", icon: "mail" },
  ],

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  skills: [
    "Excel",
    "Word",
    "SQL",
    "JavaScript",
    "C#",
    "C",
    "Python",
    "Java",
    "HTML",
    "XML",
    "CSS",
    "Scheme",
    "Prolog",
  ],

  projects: [
    {
      id: "nine-mens-morris",
      title: "Nine Men's Morris",
      tags: ["Python", "Android Studio", "Front-End Development"],
      bullets: [
        "Collaborated with a team of three to develop the game Nine Men's Morris using Android Studio.",
        "Designed the front-end interface and implemented game logic, including the removal of pieces.",
      ],
      links: { repo: null, demo: null },
    },
    {
      id: "food-pantry-application",
      title: "Food Pantry Application",
      tags: ["Java", "Back-End Development", "Database Management", "SQL"],
      bullets: [
        "Worked with a team of four to build a food pantry app for a community partner, using Android Studio.",
        "Focused on back-end development, implementing features such as saving the app state using JSON, page navigation, and pantry inventory management.",
      ],
      links: { repo: null, demo: null },
    },
    {
      id: "hockey-database",
      title: "Hockey Database",
      tags: ["MySQL", "Flask", "Virtual Environments", "HTML", "CSS"],
      bullets: [
        "Wanted to practice creating and maintaining my own database from scratch.",
        "Created schema, structure, and relationships for the database.",
        "Implemented the database, and used Visual Studio Code to connect the database to a website I created.",
      ],
      links: { repo: null, demo: null },
    },
  ],

  education: [
    {
      institution: "University of Alberta",
      credential: "Bachelor of Science in Computer Science",
      startDate: "Sept 2020",
      endDate: "June 2025",
    },
  ],

  certifications: [
    {
      name: "CC — Certified in Cybersecurity",
      issuer: "ISC2.org",
      bullets: [
        "Introduction to relevant cybersecurity terminology and business structures.",
        "Detecting threats, business models to mitigate threats, and IT solutions for scalable data.",
      ],
    },
  ],
};

export default portfolioData;
