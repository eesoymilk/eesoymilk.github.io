import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "adaptive-robotic-arm-assistance",
    title:
      "Adaptive Robotic Arm Assistance for Wheelchair Users via User Modeling",
    description:
      "Research project developing context-aware robotic assistance for wheelchair users through user modeling and VR simulation",
    longDescription:
      "A comprehensive research project integrating motion tracking, user modeling, and VR simulation to develop adaptive robotic arm assistance for wheelchair users. The system captures precise object and arm positions using Vicon motion tracking, analyzes user preferences through annotated video data processed by LLMs, and simulates robotic arm reachability in a Unity-based VR environment.",
    technologies: [
      "Vicon Motion Tracking",
      "Unity",
      "Meta Quest 2",
      "LLM",
      "Computer Vision",
      "VR Development",
      "User Modeling",
      "Python",
    ],
    category: "research",
    status: "in-progress",
    startDate: "2024-09",
    links: {},
    images: [],
    featured: true,
    team: ["Yu-Wei Chang"],
  },
  {
    id: "8051-programming-renaissance",
    title:
      "8051 Programming Renaissance: A USB HID Programmer Based on AVR Microcontroller",
    description:
      "Multi-platform 8051 programmer using C and frontend application, boosting programming process efficiency by 80%",
    longDescription:
      "A comprehensive 8051 microcontroller programming solution that revolutionizes the traditional programming workflow. The project includes a custom USB HID programmer based on AVR microcontroller hardware and a user-friendly frontend application, achieving significant improvements in programming speed and reliability.",
    technologies: [
      "C",
      "AVR Microcontroller",
      "USB HID",
      "8051 Programming",
      "Embedded Systems",
      "Hardware Design",
      "Frontend Development",
      "Cross-platform",
    ],
    category: "research",
    status: "completed",
    startDate: "2022-09",
    endDate: "2023-06",
    links: {},
    images: [],
    featured: true,
    team: ["Yu-Wei Chang"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Modern portfolio built with Next.js 15, Framer Motion, and Tailwind CSS",
    longDescription:
      "A cutting-edge portfolio website showcasing advanced animations, responsive design, and modern web technologies. Built with performance and accessibility in mind, featuring smooth scroll animations, theme switching, and mobile-first design.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Shadcn/ui",
    ],
    category: "web",
    status: "in-progress",
    startDate: "2024-01",
    links: {
      github: "https://github.com/eesoymilk/eesoymilk.github.io",
      demo: "https://eesoymilk.github.io",
    },
    images: [],
    featured: true,
    team: ["Yu-Wei Chang"],
  },
  {
    id: "ai-workshop-platform",
    title: "AI-Powered Workshop Platform",
    description:
      "Developed an online platform with DALL-E 3 and ChatGPT, automating tedious tasks in traditional workshops",
    longDescription:
      "An innovative online platform that leverages DALL-E 3 and ChatGPT to automate tedious tasks in traditional workshops. The platform successfully streamlined workshop processes, achieving 2x faster completion times as reported by the client.",
    technologies: [
      "DALL-E 3",
      "ChatGPT API",
      "Web Development",
      "AI Integration",
      "Workshop Automation",
    ],
    category: "ai",
    status: "completed",
    startDate: "2023-07",
    endDate: "2023-12",
    links: {},
    images: [],
    featured: true,
    team: ["Yu-Wei Chang"],
  },
  {
    id: "web3-blockchain-api",
    title: "Back-end Database API for Web3.0 Blockchain",
    description:
      "A robust backend database API written in Golang with 300x speed improvement compared to Python solution",
    longDescription:
      "A high-performance backend database API designed for Web3.0 blockchain applications. Written in Golang, this solution achieved a remarkable 300x speed improvement compared to the previous Python implementation, providing robust and efficient data handling for blockchain operations.",
    technologies: [
      "Golang",
      "Web3.0",
      "Blockchain",
      "Database API",
      "Backend Development",
      "Performance Optimization",
    ],
    category: "web",
    status: "completed",
    startDate: "2023-07",
    endDate: "2023-12",
    links: {},
    images: [],
    featured: true,
    team: ["Yu-Wei Chang"],
  },
  {
    id: "ai-robot-deecye",
    title: "AI Robot: DeeCye",
    description:
      "A chat robot designed for lonely seniors with memory system using embeddings and vector database",
    longDescription:
      "An innovative AI chat robot specifically designed to provide companionship for lonely seniors. The robot features an advanced memory system implemented using embeddings and vector database technology, achieving 60% faster processing and nearly 90% success rate in meaningful interactions.",
    technologies: [
      "AI/ML",
      "Vector Database",
      "Embeddings",
      "Chatbot Development",
      "Natural Language Processing",
      "Senior Care Technology",
    ],
    category: "ai",
    status: "completed",
    startDate: "2023-07",
    endDate: "2023-12",
    links: {},
    images: [],
    featured: true,
    team: ["Yu-Wei Chang"],
  },
  {
    id: "top-down-shooter-game",
    title: "Top-down Shooter Game",
    description:
      "A clone of the trending game 'Hotline Miami' made with C++ using the Allegro library",
    longDescription:
      "A top-down shooter game inspired by the popular 'Hotline Miami', built from scratch using C++ and the Allegro library. This project demonstrates advanced game development skills and achieved 1st place in class (1/65 students).",
    technologies: [
      "C++",
      "Allegro Library",
      "Game Development",
      "2D Graphics",
      "Game Design",
    ],
    category: "school",
    status: "completed",
    startDate: "2021-09",
    endDate: "2022-01",
    links: {
      github: "https://github.com/eesoymilk/I2P2final",
    },
    images: [],
    featured: false,
    team: ["Yu-Wei Chang"],
  },
  {
    id: "game-of-balance",
    title: "Game of Balance",
    description:
      "A mimic version of real-life balance board game using an 8052 microprocessor",
    longDescription:
      "An innovative balance board game that mimics real-life balance mechanics using an 8052 microprocessor. This project combines hardware programming with game design, achieving 1st place in class (1/25 students).",
    technologies: [
      "8052 Microprocessor",
      "Embedded Systems",
      "Game Development",
      "Hardware Programming",
      "Balance Mechanics",
    ],
    category: "school",
    status: "completed",
    startDate: "2021-09",
    endDate: "2022-01",
    links: {
      github: "https://github.com/eesoymilk/8051final",
    },
    images: [],
    featured: false,
    team: ["Yu-Wei Chang"],
  },
  {
    id: "flappy-bird-fpga",
    title: "Flappy Bird in FPGA",
    description:
      "A Flappy Bird clone made with FPGA using Verilog connecting to a VGA screen and speaker",
    longDescription:
      "A complete Flappy Bird game implementation using FPGA and Verilog hardware description language. The game connects to a VGA screen and speaker, demonstrating advanced hardware programming skills and achieving 1st place in class (1/84 students).",
    technologies: [
      "FPGA",
      "Verilog",
      "VGA Display",
      "Hardware Programming",
      "Game Development",
      "Digital Design",
    ],
    category: "school",
    status: "completed",
    startDate: "2021-09",
    endDate: "2022-01",
    links: {},
    images: [],
    featured: false,
    team: ["Yu-Wei Chang"],
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects", count: projects.length },
  {
    id: "research",
    label: "Research",
    count: projects.filter((p) => p.category === "research").length,
  },
  {
    id: "web",
    label: "Web",
    count: projects.filter((p) => p.category === "web").length,
  },
  {
    id: "ai",
    label: "AI/ML",
    count: projects.filter((p) => p.category === "ai").length,
  },
  {
    id: "school",
    label: "School",
    count: projects.filter((p) => p.category === "school").length,
  },
] as const;
