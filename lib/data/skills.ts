export interface Skill {
  name: string;
  category: "language" | "framework" | "tool" | "database" | "cloud" | "other";
  proficiency: 1 | 2 | 3 | 4 | 5; // 1-5 scale
  yearsOfExperience: number;
  projectsUsed: string[]; // Project IDs where this skill was used
  icon?: string; // Lucide icon name or custom icon path
  color?: string; // For visualization
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  description: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    description: "Programming languages I work with",
    skills: [
      {
        name: "Python",
        category: "language",
        proficiency: 5,
        yearsOfExperience: 4,
        projectsUsed: ["viscoder-bench", "easyreach", "ai-workshop-platform"],
        icon: "python",
        color: "#3776AB",
      },
      {
        name: "C++",
        category: "language",
        proficiency: 5,
        yearsOfExperience: 4,
        projectsUsed: ["usb-hid-programmer", "top-down-shooter-game"],
        icon: "cpp",
        color: "#00599C",
      },
      {
        name: "Go",
        category: "language",
        proficiency: 4,
        yearsOfExperience: 2,
        projectsUsed: ["web3-blockchain-api", "research-intern-itri"],
        icon: "go",
        color: "#00ADD8",
      },
      {
        name: "Rust",
        category: "language",
        proficiency: 3,
        yearsOfExperience: 1,
        projectsUsed: [],
        icon: "rust",
        color: "#000000",
      },
      {
        name: "SQL",
        category: "language",
        proficiency: 4,
        yearsOfExperience: 3,
        projectsUsed: ["marker-x-biomedical", "shin-da-information"],
        icon: "database",
        color: "#336791",
      },
      {
        name: "CUDA",
        category: "language",
        proficiency: 3,
        yearsOfExperience: 1,
        projectsUsed: ["viscoder-bench"],
        icon: "nvidia",
        color: "#76B900",
      },
      {
        name: "Bash/Shell",
        category: "language",
        proficiency: 4,
        yearsOfExperience: 4,
        projectsUsed: ["all-projects"],
        icon: "terminal",
        color: "#4EAA25",
      },
    ],
  },
  {
    name: "Machine Learning",
    description: "AI, ML, and Deep Learning frameworks",
    skills: [
      {
        name: "PyTorch",
        category: "other",
        proficiency: 5,
        yearsOfExperience: 3,
        projectsUsed: ["viscoder-bench", "research-intern-itri"],
        icon: "pytorch",
        color: "#EE4C2C",
      },
      {
        name: "TensorFlow",
        category: "other",
        proficiency: 4,
        yearsOfExperience: 2,
        projectsUsed: ["research-intern-itri"],
        icon: "tensorflow",
        color: "#FF6F00",
      },
      {
        name: "OpenCV",
        category: "other",
        proficiency: 5,
        yearsOfExperience: 3,
        projectsUsed: ["viscoder-bench", "easyreach"],
        icon: "opencv",
        color: "#5C3EE8",
      },
      {
        name: "LangChain",
        category: "other",
        proficiency: 4,
        yearsOfExperience: 1,
        projectsUsed: ["research-intern-itri", "ai-workshop-platform"],
        icon: "langchain",
        color: "#1C3C3C",
      },
      {
        name: "RAG",
        category: "other",
        proficiency: 4,
        yearsOfExperience: 1,
        projectsUsed: ["research-intern-itri"],
        icon: "ai",
        color: "#FF9900",
      },
    ],
  },
  {
    name: "Robotics & Simulation",
    description: "Robotics frameworks and simulation tools",
    skills: [
      {
        name: "ROS 2",
        category: "other",
        proficiency: 4,
        yearsOfExperience: 2,
        projectsUsed: ["easyreach"],
        icon: "ros",
        color: "#22314E",
      },
      {
        name: "Isaac Sim",
        category: "other",
        proficiency: 4,
        yearsOfExperience: 1,
        projectsUsed: ["easyreach"],
        icon: "nvidia",
        color: "#76B900",
      },
      {
        name: "MuJoCo",
        category: "other",
        proficiency: 3,
        yearsOfExperience: 1,
        projectsUsed: ["easyreach"],
        icon: "simulation",
        color: "#F05032",
      },
      {
        name: "Unity",
        category: "framework",
        proficiency: 4,
        yearsOfExperience: 2,
        projectsUsed: ["easyreach"],
        icon: "unity",
        color: "#000000",
      },
      {
        name: "MoveIt",
        category: "other",
        proficiency: 3,
        yearsOfExperience: 1,
        projectsUsed: ["easyreach"],
        icon: "robot",
        color: "#22314E",
      },
    ],
  },
  {
    name: "Systems & Cloud",
    description: "Cloud infrastructure and system tools",
    skills: [
      {
        name: "AWS",
        category: "cloud",
        proficiency: 4,
        yearsOfExperience: 2,
        projectsUsed: ["shin-da-information"],
        icon: "aws",
        color: "#FF9900",
      },
      {
        name: "Docker",
        category: "tool",
        proficiency: 5,
        yearsOfExperience: 3,
        projectsUsed: ["viscoder-bench", "marker-x-biomedical"],
        icon: "docker",
        color: "#2496ED",
      },
      {
        name: "Kubernetes",
        category: "tool",
        proficiency: 3,
        yearsOfExperience: 1,
        projectsUsed: ["shin-da-information"],
        icon: "kubernetes",
        color: "#326CE5",
      },
      {
        name: "Redis",
        category: "database",
        proficiency: 4,
        yearsOfExperience: 2,
        projectsUsed: ["shin-da-information"],
        icon: "redis",
        color: "#DC382D",
      },
      {
        name: "PostgreSQL",
        category: "database",
        proficiency: 5,
        yearsOfExperience: 3,
        projectsUsed: ["marker-x-biomedical", "shin-da-information"],
        icon: "postgresql",
        color: "#336791",
      },
      {
        name: "Vector Databases",
        category: "database",
        proficiency: 4,
        yearsOfExperience: 1,
        projectsUsed: ["research-intern-itri", "ai-robot-deecye"],
        icon: "database",
        color: "#336791",
      },
    ],
  },
];
