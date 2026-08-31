import type { Education } from "@/types";

export const education: Education[] = [
  {
    id: "ucla-ms-ece",
    institution: "University of California, Los Angeles",
    degree: "M.S.",
    field: "Electrical and Computer Engineering",
    startDate: "2024-09",
    endDate: "2026-06",
    gpa: "3.88 / 4.0",
    bullets: [
      "Graduate Teaching Assistant — Neural Networks & Deep Learning (ECE C147/C247).",
      "Managed a 500-student course: weekly technical mentorship, discussion modules, exam design, project evaluation.",
    ],
  },
  {
    id: "nthu-bs-ee",
    institution: "National Tsing Hua University",
    degree: "B.S.",
    field: "Electrical Engineering",
    startDate: "2020-09",
    endDate: "2024-06",
    gpa: "4.04 / 4.3",
  },
];
