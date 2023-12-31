import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sajjad Salaria",
  initials: "x",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "I'm a software engineer and freelancer, focusing on top-tier backend solutions. I excel in server-side logic, API integration, and ensuring both performance and security. My skills span low-level to high-level design, enabling me to create impactful software architecture. ",
  avatarUrl: "https://avatars.githubusercontent.com/u/24396613?v=4",
  personalWebsiteUrl: "https://xoraus.github.io",
  contact: {
    email: "xoraus@skiff.com",
    tel: "+9196297800XX",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/xoraus",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sajjadsalaria/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/xoraus",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "PSG College of Technology, Coimbatore",
      degree: "Bachelor's Degree in Computer Science & Engineering",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Freelance/OpenSource",
      link: "#",
      badges: ["Remnote"],
      title: "Software Developer",
      logo: ParabolLogo,
      start: "2020",
      end: "present",
      description:
        "I deliver tailored, efficient applications meeting client needs, committed to on-time, budget-friendly project delivery.",
    },
    {
      company: "Leena AI",
      link: "https://leena.ai/",
      badges: ["Onsite"],
      title: "Software Developer - Intern",
      logo: ParabolLogo,
      start: "2019",
      end: "2020",
      description:
        "Developed an AI-powered FAQ chatbot that reduced common query workload by 70%, cutting response times by 45% and increasing employee satisfaction by 20%. Achieved 24/7 availability by integrating the AI-powered FAQ solution, reducing employee dependency on HR or IT teams by 30%. Optimized the system for a 60% increase in query-handling capacity, streamlining HR teams and improving employee service efficiency.",
    },
    {
      company: "PSG AI Labs",
      link: "#",
      badges: ["Onsite"],
      title: "Machine Learning Engineer - Intern",
      logo: ClevertechLogo,
      start: "2018",
      end: "2019",
      description:
        "Engineered a self-driving car simulation using CNNs to predict steering angles, processing and standardizing 45,405 input images.Developed and coded a CNN model, achieving a low RMSE of 0.0558 with 30 epochs. Rigorously validated the model's reliability. Deployed the model, enabling it to navigate various driving conditions effectively and make accurate real-time steering decisions.",
    },
  ],
  skills: [
    "Java",
    "Spring Boot",
    "JavaScript",
    "React/Next.js",
    "Node.js",
    "GraphQL",
    "Data Strucutre & Algorithms",
    "Design Patterns",
    "Object Oriented Design",
  ],
  projects: [
    {
      title: "Low2High",
      techStack: ["Deep Learning", "Computer Vision", "Python", "keras"],
      description: "SRCNN for surveillance and historical photo restoration",
      logo: ConsultlyLogo,
      link: {
        label: "Low2High",
        href: "https://github.com/xoraus/Super-Resolution-CNN-for-Image-Restoration",
      },
    },
    {
      title: "Auto Wheel",
      techStack: ["Computer Vision", "Deep Learning", "Tensorflow", "python"],
      description:
        "a self-driving car simulation using CNNs to predict steering angles",
      logo: MonitoLogo,
      link: {
        label: "Auto Wheel",
        href: "https://github.com/xoraus/Auto-Wheel-Steering-for-Self-Driving-Vehicles",
      },
    },
    {
      title: "FashionNet",
      techStack: ["Deep Learning", "Pandas", "Numpy"],
      description: "a fashion classifier for image processing",
      logo: JarockiMeLogo,
      link: {
        label: "FashionNet",
        href: "https://github.com/xoraus/FashionNet",
      },
    },
  ],
} as const;
