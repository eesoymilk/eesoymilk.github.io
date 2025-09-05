import type { Education } from "@/types";

export const education: Education[] = [
  {
    id: "masters-cs",
    institution: "National Taiwan University",
    degree: "Master of Science",
    field: "Computer Science",
    startDate: "2021-09",
    endDate: "2023-06",
    description:
      "Specialized in Machine Learning and Computer Vision with focus on deep learning applications and research methodology.",
    achievements: [
      "GPA: 4.0/4.0",
      "Research Excellence Award",
      "Published 2 papers in top-tier conferences",
      "Teaching Assistant for Machine Learning course",
    ],
  },
  {
    id: "bachelors-ee",
    institution: "National Taiwan University",
    degree: "Bachelor of Science",
    field: "Electrical Engineering",
    startDate: "2017-09",
    endDate: "2021-06",
    description:
      "Strong foundation in mathematics, signal processing, and programming with focus on digital systems and algorithms.",
    achievements: [
      "Magna Cum Laude",
      "Dean's List for 6 semesters",
      "Outstanding Student Award",
      "President of Computer Science Club",
    ],
  },
];
