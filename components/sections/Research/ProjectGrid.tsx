"use client";

import { motion } from "framer-motion";

import type { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  variant: "featured" | "standard";
}

export function ProjectGrid({
  projects,
  variant,
}: ProjectGridProps) {
  if (variant === "featured") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr min-h-0">
        {projects.map((project, index) => {
          // Create bento grid layout for featured projects
          const getBentoClass = (index: number) => {
            switch (index % 6) {
              case 0:
                return "md:col-span-2 min-h-0"; // Large card
              case 1:
                return "min-h-0"; // Tall card
              case 2:
                return "md:col-span-2 min-h-0"; // Wide card
              default:
                return "min-h-0"; // Standard card
            }
          };

          return (
            <motion.div
              key={project.id}
              className={getBentoClass(index)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <ProjectCard
                project={project}
                variant={index % 6 === 0 ? "large" : "standard"}
              />
            </motion.div>
          );
        })}
      </div>
    );
  }

  // Standard grid for non-featured projects
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr min-h-0">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className="min-h-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <ProjectCard
            project={project}
            variant="standard"
          />
        </motion.div>
      ))}
    </div>
  );
}
