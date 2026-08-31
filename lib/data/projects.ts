import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ucvla",
    title: "UCVLA: User-Conditioned Vision-Language-Action Models",
    shortTitle: "UCVLA",
    tagline:
      "O(1) personalization for robot foundation models via per-user bias vectors.",
    bullets: [
      "Validated per-user embedding divergence, measured by cosine similarity, by finetuning RDT-2 FM with frozen-backbone per-user bias vectors $b_u$.",
      "Architecting $\\mathcal{O}(1)$ personalization across $\\pi_0$, RDT-2, and Diffusion Policy by injecting $b_u$ at conditioning points, outperforming $\\mathcal{O}(N)$ LoRA.",
      "Developing zarr-to-LeRobot/WebDataset pipelines and collecting 200-trial/user data via handheld UMI hardware to scale across 8–10 participants.",
    ],
    technologies: [
      "VLA",
      "RDT-2",
      "π₀",
      "Diffusion Policy",
      "PyTorch",
      "UMI",
      "LeRobot",
      "WebDataset",
    ],
    status: "completed",
    startDate: "2025-11",
    endDate: "2026-06",
    advisor: "Prof. Jonathan Kao",
    lab: "UCLA Neural Engineering and Computation Lab",
  },
  {
    id: "easyreach",
    title: "EasyReach: Adaptive Robotic Arm Assistance for Wheelchair Users",
    shortTitle: "EasyReach",
    tagline:
      "Prompt-driven preference extraction for accessible robot behavior without retraining.",
    bullets: [
      "Developing a prompt engineering framework that analyzes user videos to extract preferences for accessible robot behavior without retraining.",
      "Deployed a Vicon motion-capture pipeline with <5 mm tracking precision, achieving real-world object retrieval on the physical robotic arm.",
      "Prototyped kinematic feasibility in VR (Unity, Meta Quest 2), running 500+ reachability scenarios and reducing physical testing time by ~80%.",
    ],
    technologies: [
      "Vicon",
      "Unity",
      "Meta Quest 2",
      "ROS 2",
      "MoveIt",
      "UR5e",
      "VLM",
    ],
    status: "completed",
    startDate: "2024-09",
    endDate: "2026-06",
    advisor: "Prof. Yang Zhang",
    lab: "UCLA HiLab",
  },
  {
    id: "viscoder",
    title: "VisCoder Bench: Do Coders Need Eyes?",
    shortTitle: "VisCoder Bench",
    tagline:
      "Benchmarking visual grounding for multimodal coding agents on 50 executable CV tasks.",
    bullets: [
      "Developed VisCoder Bench, a standardized suite of 50 executable CV tasks (Geometric, Generative, Classical) to evaluate multimodal agents.",
      "Dockerized evaluation infrastructure on A100 GPUs, integrating 10+ CV pipelines with PSNR/mAP and VLM-Judge (87% human alignment).",
      "Analyzed 900+ trajectories, showing visual grounding improves geometric task success by 4.3× — exposing critical gaps in LLM reasoning.",
    ],
    technologies: [
      "VLM",
      "Docker",
      "A100",
      "OpenCV",
      "PyTorch",
      "Multimodal Agents",
    ],
    status: "completed",
    startDate: "2025-09",
    endDate: "2025-11",
    advisor: "Prof. Achuta Kadambi",
    lab: "UCLA Visual Machines Group",
  },
  {
    id: "usb-hid-programmer",
    title: "Open Source USB HID Programmer for 8051 & AVR",
    shortTitle: "USB HID Programmer",
    tagline:
      "Driverless cross-platform flashing toolchain shipped to 200+ embedded students.",
    bullets: [
      "Engineered a driverless USB HID firmware and custom packet protocol, optimizing flash write throughput to reduce programming time by 80%.",
      "Deployed a cross-platform toolchain (C++/C#) adopted as production tooling for 3 undergraduate embedded systems courses (200+ students).",
    ],
    technologies: ["C++", "C#", "USB HID", "8051", "AVR", "Embedded"],
    status: "completed",
    startDate: "2022-09",
    endDate: "2023-06",
    institution: "National Tsing Hua University",
  },
];
