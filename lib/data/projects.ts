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
    images: [
      "/images/projects/robotic-arm-1.jpg",
      "/images/projects/robotic-arm-2.jpg",
    ],
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
    category: "tool",
    status: "completed",
    startDate: "2022-09",
    endDate: "2023-06",
    links: {},
    images: [
      "/images/projects/8051-programmer-1.jpg",
      "/images/projects/8051-programmer-2.jpg",
    ],
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
      github: "https://github.com/eesoymilk/portfolio",
      demo: "https://eesoymilk.dev",
    },
    images: [
      "/images/projects/portfolio-1.jpg",
      "/images/projects/portfolio-2.jpg",
    ],
    featured: true,
    team: ["Yu-Wei Chang"],
  },
  {
    id: "ml-research-platform",
    title: "ML Research Platform",
    description:
      "Collaborative platform for machine learning research with experiment tracking",
    longDescription:
      "A comprehensive platform designed for machine learning researchers to collaborate, track experiments, and share findings. Features real-time collaboration, experiment versioning, and interactive data visualization.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "TensorFlow",
      "Docker",
    ],
    category: "research",
    status: "completed",
    startDate: "2023-03",
    endDate: "2023-12",
    links: {
      github: "https://github.com/eesoymilk/ml-platform",
      paper: "https://arxiv.org/paper/ml-platform",
    },
    images: ["/images/projects/ml-platform-1.jpg"],
    featured: true,
    team: ["Yu-Wei Chang", "Research Team"],
    awards: ["Best Research Tool Award 2023"],
  },
  {
    id: "computer-vision-toolkit",
    title: "Computer Vision Toolkit",
    description:
      "Open-source toolkit for computer vision tasks with pre-trained models",
    longDescription:
      "A comprehensive toolkit providing state-of-the-art computer vision models and utilities. Includes object detection, image segmentation, and facial recognition capabilities with easy-to-use APIs.",
    technologies: ["Python", "PyTorch", "OpenCV", "CUDA", "Docker"],
    category: "ai",
    status: "completed",
    startDate: "2022-09",
    endDate: "2023-06",
    links: {
      github: "https://github.com/eesoymilk/cv-toolkit",
      paper: "https://proceedings.cv-conference.org/toolkit",
    },
    images: ["/images/projects/cv-toolkit-1.jpg"],
    featured: true,
    team: ["Yu-Wei Chang"],
  },
  {
    id: "realtime-chat-app",
    title: "Real-time Chat Application",
    description:
      "Scalable chat application with real-time messaging and video calls",
    longDescription:
      "A modern chat application supporting real-time messaging, file sharing, and video calls. Built with scalability in mind, supporting thousands of concurrent users with low latency.",
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "WebRTC",
      "MongoDB",
      "Redis",
    ],
    category: "web",
    status: "completed",
    startDate: "2022-01",
    endDate: "2022-08",
    links: {
      github: "https://github.com/eesoymilk/chat-app",
      demo: "https://chat-demo.eesoymilk.dev",
    },
    images: ["/images/projects/chat-app-1.jpg"],
    featured: false,
    team: ["Yu-Wei Chang", "Backend Team"],
  },
  {
    id: "ai-code-assistant",
    title: "AI Code Assistant",
    description:
      "VS Code extension powered by machine learning for intelligent code completion",
    longDescription:
      "An intelligent code assistant that provides context-aware code completions, bug detection, and refactoring suggestions. Uses transformer models trained on large codebases.",
    technologies: [
      "TypeScript",
      "Python",
      "Transformers",
      "VS Code API",
      "TensorFlow",
    ],
    category: "ai",
    status: "completed",
    startDate: "2023-06",
    endDate: "2024-01",
    links: {
      github: "https://github.com/eesoymilk/ai-assistant",
    },
    images: ["/images/projects/ai-assistant-1.jpg"],
    featured: false,
    team: ["Yu-Wei Chang"],
  },
  {
    id: "mobile-fitness-tracker",
    title: "Mobile Fitness Tracker",
    description:
      "Cross-platform mobile app for fitness tracking with AI-powered insights",
    longDescription:
      "A comprehensive fitness tracking application that monitors workouts, nutrition, and health metrics. Features AI-powered workout recommendations and progress analysis.",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "TensorFlow Lite",
      "Expo",
    ],
    category: "mobile",
    status: "completed",
    startDate: "2021-09",
    endDate: "2022-03",
    links: {
      github: "https://github.com/eesoymilk/fitness-tracker",
    },
    images: ["/images/projects/fitness-app-1.jpg"],
    featured: false,
    team: ["Yu-Wei Chang", "Design Team"],
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
    id: "mobile",
    label: "Mobile",
    count: projects.filter((p) => p.category === "mobile").length,
  },
  {
    id: "tool",
    label: "Tools",
    count: projects.filter((p) => p.category === "tool").length,
  },
] as const;
