"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink, Github, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  variant: "standard" | "large";
}

const statusColors = {
  completed: "bg-green-500/10 text-green-600 border-green-500/20",
  "in-progress": "bg-blue-500/10 text-blue-600 border-blue-500/20",
  planned: "bg-orange-500/10 text-orange-600 border-orange-500/20",
};

const categoryColors = {
  research: "bg-purple-500/10 text-purple-600",
  web: "bg-blue-500/10 text-blue-600",
  mobile: "bg-green-500/10 text-green-600",
  ai: "bg-red-500/10 text-red-600",
  tool: "bg-yellow-500/10 text-yellow-600",
  school: "bg-indigo-500/10 text-indigo-600",
};

export function ProjectCard({ project, variant }: ProjectCardProps) {
  const isLarge = variant === "large";

  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="relative group h-full overflow-hidden border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-xl transition-all duration-300 cursor-pointer">
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

        <CardHeader className={cn("relative", isLarge ? "p-6" : "p-4")}>
          {/* Status and Category badges */}
          <div className="flex items-center justify-between mb-3">
            <Badge
              variant="outline"
              className={cn("border text-xs", statusColors[project.status])}
            >
              {project.status.replace("-", " ")}
            </Badge>

            <Badge
              variant="secondary"
              className={cn("text-xs", categoryColors[project.category])}
            >
              {project.category.toUpperCase()}
            </Badge>
          </div>

          {/* Title and Description */}
          <CardTitle
            className={cn(
              "group-hover:text-primary transition-colors break-words",
              isLarge ? "text-xl md:text-2xl mb-2" : "text-lg mb-2",
            )}
          >
            {project.title}
          </CardTitle>

          <p
            className={cn(
              "text-muted-foreground leading-relaxed break-words",
              isLarge ? "text-sm" : "text-xs",
            )}
          >
            {isLarge ? project.longDescription : project.description}
          </p>

          {/* Project metadata */}
          <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-muted-foreground">
            {/* Date range */}
            <div className="flex items-center gap-1 min-w-0">
              <Calendar className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">
                {project.startDate}
                {project.endDate && ` - ${project.endDate}`}
                {project.status === "in-progress" && " - Present"}
              </span>
            </div>

            {/* Team size */}
            {project.team && (
              <div className="flex items-center gap-1 flex-shrink-0">
                <Users className="w-3 h-3" />
                <span>
                  {project.team.length} member
                  {project.team.length > 1 ? "s" : ""}
                </span>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent
          className={cn("relative", isLarge ? "p-6 pt-0" : "p-4 pt-0")}
        >
          {/* Technology stack */}
          <div className="mb-4 min-h-0">
            <motion.div
              className="flex flex-wrap gap-1.5"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.03,
                    delayChildren: 0.1,
                  },
                },
              }}
              viewport={{ once: true }}
            >
              {project.technologies.slice(0, isLarge ? 6 : 4).map((tech) => (
                <motion.div
                  key={tech}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >
                  <Badge
                    variant="outline"
                    className="text-xs px-2 py-0.5 bg-background/50 hover:bg-primary/10 transition-colors max-w-full"
                  >
                    <span className="truncate">{tech}</span>
                  </Badge>
                </motion.div>
              ))}

              {project.technologies.length > (isLarge ? 6 : 4) && (
                <Badge
                  variant="outline"
                  className="text-xs px-2 py-0.5 bg-muted flex-shrink-0"
                >
                  +{project.technologies.length - (isLarge ? 6 : 4)}
                </Badge>
              )}
            </motion.div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            {project.links.github && (
              <Button
                size="sm"
                variant="outline"
                className="group/btn text-xs px-3 py-1.5 h-auto flex-shrink-0"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.links.github, "_blank");
                }}
              >
                <Github className="w-3 h-3 mr-1.5 group-hover/btn:rotate-12 transition-transform" />
                Code
              </Button>
            )}

            {project.links.demo && (
              <Button
                size="sm"
                variant="outline"
                className="group/btn text-xs px-3 py-1.5 h-auto flex-shrink-0"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.links.demo, "_blank");
                }}
              >
                <ExternalLink className="w-3 h-3 mr-1.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                Demo
              </Button>
            )}
          </div>
        </CardContent>

        {/* Hover effect gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          initial={false}
        />
      </Card>
    </motion.div>
  );
}
