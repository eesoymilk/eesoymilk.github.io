import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "shin-da-information",
    company: "Shin-Da Information Co., Ltd.",
    position: "Software Engineer (Contract)",
    location: "Taichung, Taiwan",
    startDate: "2025-04",
    endDate: "2025-09",
    description:
      "Built a Python serverless backend on AWS, optimizing transaction latency and engineered an automated ETL data validation pipeline.",
    achievements: [
      "Built a Python serverless backend on AWS (Lambda, API Gateway), optimizing transaction latency by 35% to support a 50+ client surge in Q1",
      "Engineered an automated ETL data validation pipeline, which accelerated processing throughput by 40% and eliminated manual entry errors",
      "Led a 6-week initiative to architect and deploy a fault-tolerant automation platform, currently driving daily operations for 50+ staff members",
    ],
    technologies: [
      "Python",
      "AWS Lambda",
      "AWS API Gateway",
      "ETL",
      "Automation",
    ],
    companyLogo: "/images/companies/direct-cpa.svg", // Keeping existing logo path if applicable or placeholder
  },
  {
    id: "marker-x-biomedical",
    company: "Marker X Biomedical Co., Ltd",
    position: "Software Engineer (Contract)",
    location: "Taipei, Taiwan",
    startDate: "2024-03",
    endDate: "2024-08",
    description:
      "Architected a centralized PostgreSQL data lake and developed high-throughput analysis pipelines for mass spectrometry data.",
    achievements: [
      "Architected a centralized PostgreSQL data lake unifying mass spectrometry and experimental datasets, replacing fragmented legacy storage",
      "Developed high-throughput analysis pipelines that reduced data processing latency by 90%, accelerating research iterations from days to minutes",
      "Scaled backend infrastructure to manage 10,000+ sensitive records with 100% data integrity, ensuring high availability for 30+ scientists",
    ],
    technologies: [
      "PostgreSQL",
      "Data Lake",
      "High-Throughput Analysis",
      "Backend Infrastructure",
    ],
    companyLogo: "/images/companies/marker-x.svg",
  },
  {
    id: "research-intern-itri",
    company: "Industrial Technology Research Institute (ITRI)",
    position: "Research Development and Software Engineer Intern",
    location: "Hsinchu, Taiwan",
    startDate: "2023-07",
    endDate: "2023-12",
    description:
      "Engineered a RAG-based memory system for elder-care robots and deployed a multi-modal AI agent platform.",
    achievements: [
      "Engineered a RAG-based memory system and fine-tuned PyTorch models for elder-care robots, achieving 90% intent recognition accuracy",
      "Deployed a multi-modal AI agent platform with LangChain and DALL·E 3, automating multimedia content generation workflows for 200+ staff",
      "Designed a high-concurrency Go backend for a national-scale distributed DB, securing record exchange for Taiwan’s National Health Insurance",
    ],
    technologies: [
      "RAG",
      "PyTorch",
      "LangChain",
      "DALL·E 3",
      "Go",
      "Distributed DB",
    ],
    companyLogo: "/images/companies/itri.svg",
  },
];
