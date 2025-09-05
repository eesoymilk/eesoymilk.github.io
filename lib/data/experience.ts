import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "software-engineer-direct-cpa",
    company: "Direct CPA Firm",
    position: "Software Engineer",
    location: "Taichung, Taiwan",
    startDate: "2025-04",
    endDate: "2025-10",
    description:
      "Built client-facing portal for company registration and business modifications using modern web frameworks, and developed internal audit tools for CPA staff.",
    achievements: [
      "Built a client-facing portal for company registration and business modifications using Nuxt.js",
      "Developed internal audit tools for CPA staff to review financial documents and log findings",
      "Improved client service efficiency through automated business process workflows",
      "Enhanced audit workflow with digital document management system",
    ],
    technologies: [
      "Nuxt.js",
      "Vue.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Git",
    ],
    companyLogo: "/images/companies/direct-cpa.svg",
  },
  {
    id: "software-engineer-marker-x",
    company: "Marker X Biomedical Company",
    position: "Software Engineer",
    location: "Taipei, Taiwan",
    startDate: "2024-03",
    endDate: "2025-03",
    description:
      "Developed a comprehensive internal management system to manage clients, patient sample data, experiment data, and mass spectrometry analyses, streamlining the lab's workflows.",
    achievements: [
      "Developed an internal management system to manage clients, patient sample data, experiment data, and mass spectrometry analyses",
      "Streamlined lab workflows through automated data management processes",
      "Improved data accuracy and accessibility for biomedical research teams",
      "Implemented secure patient data handling with HIPAA compliance considerations",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "Git",
    ],
    companyLogo: "/images/companies/marker-x.svg",
  },
  {
    id: "research-intern-itri",
    company: "Industrial Technology Research Institute (ITRI)",
    position: "Research Development Intern",
    location: "Hsinchu, Taiwan",
    startDate: "2023-07",
    endDate: "2023-12",
    description:
      "Developed AI-powered solutions including an online workshop platform, Web3.0 blockchain analytics backend, and elderly-care AI robot memory system.",
    achievements: [
      "Developed an online AI‑powered workshop platform using ChatGPT and DALL‑E 3, optimizing traditional workflows at twice the speed",
      "Built a backend API in Go for Web3.0 blockchain analytics, achieving 300x speed improvement over the legacy Python system",
      "Implemented a memory system for an elderly‑care AI robot using embeddings and a vector database, increasing response accuracy to 90%",
      "Collaborated with cross-functional teams on cutting-edge AI research projects",
    ],
    technologies: [
      "Python",
      "Go",
      "ChatGPT API",
      "DALL‑E 3",
      "Vector Database",
      "Embeddings",
      "Blockchain Analytics",
      "Docker",
      "Git",
    ],
    companyLogo: "/images/companies/itri.svg",
  },
];
