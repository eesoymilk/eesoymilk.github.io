import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "shin-da",
    company: "Shin-Da Information Co., Ltd.",
    position: "Software Engineer (Contract)",
    location: "Taichung, Taiwan",
    startDate: "2025-04",
    endDate: "2025-09",
    bullets: [
      "Built a Python serverless backend on AWS (Lambda, API Gateway), optimizing transaction latency by 35% to support 50+ enterprise clients in Q1.",
      "Engineered an automated ETL data validation pipeline, which accelerated processing throughput by 40% and eliminated manual entry errors.",
      "Led a 6-week initiative to architect and deploy a fault-tolerant automation platform, driving daily operations for 50+ staff members.",
    ],
    technologies: ["Python", "AWS Lambda", "API Gateway", "ETL", "PostgreSQL"],
  },
  {
    id: "marker-x",
    company: "Marker X Biomedical Co., Ltd.",
    position: "Software Engineer (Contract)",
    location: "Taipei, Taiwan",
    startDate: "2024-03",
    endDate: "2024-08",
    bullets: [
      "Architected a centralized PostgreSQL data lake unifying mass spectrometry and experimental datasets, replacing fragmented legacy storage.",
      "Developed high-throughput analysis pipelines that reduced data processing latency by 90%, accelerating research iterations from days to minutes.",
      "Scaled backend infrastructure to manage 10,000+ sensitive records with 100% data integrity, ensuring high availability for 30+ scientists.",
    ],
    technologies: ["PostgreSQL", "Python", "Mass Spectrometry", "Backend"],
  },
  {
    id: "itri",
    company: "Industrial Technology Research Institute (ITRI)",
    position: "Research Development & Software Engineer Intern",
    location: "Hsinchu, Taiwan",
    startDate: "2023-07",
    endDate: "2023-12",
    bullets: [
      "Engineered a RAG-based memory system and fine-tuned PyTorch NLP models for elder-care robots, achieving 90% intent recognition.",
      "Deployed a multi-modal AI agent platform with LangChain and DALL·E 3, automating generative AI workflows for 200+ staff.",
      "Designed a high-concurrency Go backend for a national-scale distributed DB, securing record exchange for Taiwan's National Health Insurance.",
    ],
    technologies: ["Go", "PyTorch", "LangChain", "RAG", "Distributed Systems"],
  },
];
