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
    status: "completed",
    startDate: "2025-09",
    endDate: "2025-11",
    links: {},
    images: [],
    featured: true,
    team: ["Yu-Wei Chang"],
  },
  {
    id: "ucvla",
    title: "UCVLA: User-Conditioned Vision-Language-Action Models",
    description:
      "Componentized architecture for personalized robot control using adapter conditioning on user embeddings for O(1) personalization.",
    longDescription:
      "Proposed a componentized architecture validated in Isaac Sim and UR5e robot for Sim-to-Real training, addressing generalization limitations. Designing adapter conditioning frozen VLA on user embeddings (z_u) for O(1) personalization (handedness, speed), outperforming O(N) ICL. Retargeting 2,500+ human-human handover sequences into robot joint space and deploying handheld UMI hardware for in-the-wild data collection.",
    technologies: [
      "Vision-Language-Action",
      "Isaac Sim",
      "UR5e",
      "Sim-to-Real",
      "Adapter Conditioning",
      "UMI Hardware",
      "Human-Robot Interaction",
    ],
    category: "research",
    status: "in-progress",
    startDate: "2025-11",
    links: {},
    images: [],
    featured: true,
    team: ["Yu-Wei Chang"],
  },
  {
    id: "easyreach",
    title: "EasyReach: Adaptive Robotic Arm Assistance for Wheelchair Users",
    description:
      "Prompt engineering framework that analyzes user interaction videos to extract preferences, adapting robot behavior without retraining.",
    longDescription:
      "Developing a prompt engineering framework that analyzes user interaction videos to extract preferences, adapting robot behavior without retraining. Deployed a Vicon motion-capture pipeline with <5 mm tracking precision, achieving real-world object retrieval on the physical robotic arm. Prototyped kinematic feasibility in VR (Unity, Meta Quest 2), running 500+ reachability scenarios and reducing physical testing time by ~80%.",
    technologies: [
      "Prompt Engineering",
      "Video Analysis",
      "Vicon",
      "Unity",
      "Meta Quest 2",
      "Robotics",
      "Motion Capture",
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
