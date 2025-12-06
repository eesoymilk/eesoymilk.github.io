import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "viscoder-bench",
    title: "VisCoder Bench: Do Coders Need Eyes?",
    description:
      "A standardized suite of 50 executable CV tasks to evaluate multimodal agents, showing visual grounding improves geometric task success by 4.3x.",
    longDescription:
      "Developed VisCoder Bench, a standardized suite of 50 executable CV tasks (Geometric, Generative, Classical) to evaluate multimodal agents. Dockerized evaluation infrastructure on A100 GPUs, integrating 10+ CV pipelines with PSNR/mAP and VLM-Judge (87% human alignment). Analyzed 900+ trajectories, showing visual grounding improves geometric task success by 4.3x, exposing critical gaps in LLM reasoning. (Under Review, CVPR 2026)",
    technologies: [
      "Multimodal Agents",
      "Computer Vision",
      "Docker",
      "A100 GPUs",
      "VLM-Judge",
      "LLM Reasoning",
    ],
    category: "research",
    status: "in-progress",
    startDate: "2025-09", // Assuming start date based on current status
    links: {},
    images: [],
    featured: true,
    team: ["Yu-Wei Chang"],
  },
  {
    id: "easyreach",
    title: "EasyReach: Adaptive Robotic Arm Assistance",
    description:
      "Personalized VLA learning user-specific preferences for adaptive assistance, utilizing Isaac Sim for Sim-to-Real training.",
    longDescription:
      "Developing a personalized VLA that learns user-specific preferences to enable adaptive assistance, utilizing Isaac Sim for Sim-to-Real training. Deployed a Vicon motion-capture pipeline with <5 mm tracking precision, achieving real-world object retrieval on the physical robotic arm. Prototyped kinematic feasibility in VR (Unity, Meta Quest 2), running 500+ reachability scenarios and reducing physical testing time by ~80%.",
    technologies: [
      "VLA",
      "Isaac Sim",
      "Sim-to-Real",
      "Vicon",
      "Unity",
      "Meta Quest 2",
      "Robotics",
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
    id: "usb-hid-programmer",
    title: "Open Source High-Throughput USB HID Programmer",
    description:
      "Driverless USB HID firmware and custom packet protocol, optimizing flash write throughput to reduce programming time by 80%.",
    longDescription:
      "Engineered a driverless USB HID firmware and custom packet protocol, optimizing flash write throughput to reduce programming time by 80%. Deployed a cross-platform toolchain (C++/C#) adopted as the lab utility for 3 undergraduate embedded systems courses (200+ students).",
    technologies: [
      "USB HID",
      "Firmware",
      "C++",
      "C#",
      "Embedded Systems",
      "Driverless",
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
