import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Programming Languages
  {
    name: "TypeScript",
    category: "language",
    proficiency: 5,
    yearsOfExperience: 4,
    projects: ["Portfolio Website", "Research Dashboard", "AI Tool"],
  },
  {
    name: "Python",
    category: "language",
    proficiency: 5,
    yearsOfExperience: 6,
    projects: ["Machine Learning Models", "Data Analysis", "API Backend"],
  },
  {
    name: "JavaScript",
    category: "language",
    proficiency: 5,
    yearsOfExperience: 5,
    projects: ["Web Applications", "React Apps", "Node.js Backend"],
  },
  {
    name: "C++",
    category: "language",
    proficiency: 4,
    yearsOfExperience: 3,
    projects: ["Computer Vision", "Performance Critical Apps"],
  },
  {
    name: "Rust",
    category: "language",
    proficiency: 3,
    yearsOfExperience: 1,
    projects: ["CLI Tools", "Web Assembly"],
  },

  // Frameworks & Libraries
  {
    name: "React",
    category: "framework",
    proficiency: 5,
    yearsOfExperience: 4,
    projects: ["Portfolio", "Dashboard", "E-commerce"],
  },
  {
    name: "Next.js",
    category: "framework",
    proficiency: 5,
    yearsOfExperience: 3,
    projects: ["Portfolio Website", "Blog Platform"],
  },
  {
    name: "TensorFlow",
    category: "framework",
    proficiency: 4,
    yearsOfExperience: 3,
    projects: ["Image Classification", "NLP Models"],
  },
  {
    name: "PyTorch",
    category: "framework",
    proficiency: 4,
    yearsOfExperience: 3,
    projects: ["Computer Vision", "Deep Learning Research"],
  },
  {
    name: "FastAPI",
    category: "framework",
    proficiency: 4,
    yearsOfExperience: 2,
    projects: ["ML API", "Backend Services"],
  },
  {
    name: "Express.js",
    category: "framework",
    proficiency: 4,
    yearsOfExperience: 3,
    projects: ["REST API", "Real-time Apps"],
  },

  // Tools & Technologies
  {
    name: "Docker",
    category: "tool",
    proficiency: 4,
    yearsOfExperience: 3,
    projects: ["Containerized Apps", "CI/CD Pipeline"],
  },
  {
    name: "AWS",
    category: "tool",
    proficiency: 4,
    yearsOfExperience: 2,
    projects: ["Cloud Deployment", "Serverless Functions"],
  },
  {
    name: "Git",
    category: "tool",
    proficiency: 5,
    yearsOfExperience: 6,
    projects: ["All Projects"],
  },
  {
    name: "Figma",
    category: "tool",
    proficiency: 4,
    yearsOfExperience: 3,
    projects: ["UI/UX Design", "Prototyping"],
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "database",
    proficiency: 4,
    yearsOfExperience: 3,
    projects: ["Web Applications", "Data Analysis"],
  },
  {
    name: "MongoDB",
    category: "database",
    proficiency: 3,
    yearsOfExperience: 2,
    projects: ["Document Storage", "Real-time Apps"],
  },
];

export const skillCategories = [
  { id: "language", label: "Languages", icon: "code" },
  { id: "framework", label: "Frameworks", icon: "layers" },
  { id: "tool", label: "Tools", icon: "wrench" },
  { id: "database", label: "Databases", icon: "database" },
] as const;
