import type { Education } from "@/types";

export const education: Education[] = [
  {
    id: "masters-ece-ucla",
    institution: "University of California, Los Angeles",
    degree: "Master of Science",
    field: "Electrical and Computer Engineering",
    startDate: "2024-09",
    endDate: "2026-06",
    description:
      "Cumulative GPA: 3.86/4.0. Coursework: Neural Networks and Deep Learning, Neural Signal Processing, Linear Optimal Control.",
    achievements: [
      "GPA: 3.86/4.0",
      "Coursework: Neural Networks and Deep Learning",
      "Coursework: Neural Signal Processing",
      "Coursework: Linear Optimal Control",
    ],
  },
  {
    id: "bachelors-ee-nthu",
    institution: "National Tsing Hua University",
    degree: "Bachelor of Science",
    field: "Electrical Engineering",
    startDate: "2020-09",
    endDate: "2024-06",
    description:
      "Cumulative GPA: 4.04/4.3. Coursework: Computer Vision, Machine Learning, Deep Reinforcement Learning, Algorithms, Control Systems, Computer Architecture.",
    achievements: [
      "GPA: 4.04/4.3",
      "Coursework: Computer Vision, Machine Learning",
      "Coursework: Deep Reinforcement Learning",
      "Coursework: Algorithms, Control Systems",
    ],
  },
];
