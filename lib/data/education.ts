import type { Education } from "@/types";

export const education: Education[] = [
  {
    id: "masters-ece-ucla",
    institution: "University of California, Los Angeles",
    degree: "Master of Science",
    field: "Electrical and Computer Engineering",
    startDate: "2024-09",
    endDate: "2026-06",
    description: "Cumulative GPA: 3.88/4.0. Graduate Teaching Assistant.",
    achievements: [
      "GPA: 3.88/4.0",
      "Graduate Teaching Assistant, Neural Networks & Deep Learning (ECE C147/C247)",
      "Managing a 500-student course, delivering weekly technical mentorship",
      "Developing discussion modules, designing exams, and evaluating projects",
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
