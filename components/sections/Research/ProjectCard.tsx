"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Users, Award } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  variant: "standard" | "large";
  onSelect: () => void;
}

const statusColors = {
  "completed": "bg-green-500/10 text-green-600 border-green-500/20",
  "in-progress": "bg-blue-500/10 text-blue-600 border-blue-500/20",
  "planned": "bg-orange-500/10 text-orange-600 border-orange-500/20",
};

const categoryColors = {
  "research": "bg-purple-500/10 text-purple-600",
  "web": "bg-blue-500/10 text-blue-600", 
  "mobile": "bg-green-500/10 text-green-600",
  "ai": "bg-red-500/10 text-red-600",
  "tool": "bg-yellow-500/10 text-yellow-600",
};

export function ProjectCard({ project, variant, onSelect }: ProjectCardProps) {
  const isLarge = variant === "large";
  
  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="group h-full overflow-hidden border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-xl transition-all duration-300 cursor-pointer">
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        
        <CardHeader className={cn("relative", isLarge ? "p-8" : "p-6")}>
          {/* Status and Category badges */}
          <div className="flex items-center justify-between mb-4">
            <Badge 
              variant="outline" 
              className={cn("border", statusColors[project.status])}
            >
              {project.status.replace("-", " ")}
            </Badge>
            
            <Badge 
              variant="secondary"
              className={categoryColors[project.category]}
            >
              {project.category.toUpperCase()}
            </Badge>
          </div>

          {/* Title and Description */}
          <CardTitle className={cn(
            "group-hover:text-primary transition-colors",
            isLarge ? "text-2xl md:text-3xl mb-4" : "text-xl mb-3"
          )}>
            {project.title}
          </CardTitle>
          
          <p className={cn(
            "text-muted-foreground leading-relaxed",
            isLarge ? "text-lg" : "text-sm"
          )}>
            {isLarge ? project.longDescription : project.description}
          </p>

          {/* Project metadata */}
          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
            {/* Date range */}
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>
                {project.startDate}
                {project.endDate && ` - ${project.endDate}`}
                {project.status === "in-progress" && " - Present"}
              </span>
            </div>

            {/* Team size */}
            {project.team && (
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{project.team.length} member{project.team.length > 1 ? "s" : ""}</span>
              </div>
            )}

            {/* Awards */}
            {project.awards && project.awards.length > 0 && (
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-yellow-500" />
                <span>{project.awards.length} award{project.awards.length > 1 ? "s" : ""}</span>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className={cn("relative", isLarge ? "p-8 pt-0" : "p-6 pt-0")}>
          {/* Technology stack */}
          <div className="mb-6">
            <motion.div 
              className="flex flex-wrap gap-2"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.1,
                  },
                },
              }}
              viewport={{ once: true }}
            >
              {project.technologies.slice(0, isLarge ? 8 : 5).map((tech, index) => (
                <motion.div
                  key={tech}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >
                  <Badge 
                    variant="outline" 
                    className="text-xs bg-background/50 hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
              
              {project.technologies.length > (isLarge ? 8 : 5) && (
                <Badge variant="outline" className="text-xs bg-muted">
                  +{project.technologies.length - (isLarge ? 8 : 5)} more
                </Badge>
              )}
            </motion.div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            {project.links.github && (
              <Button
                size="sm"
                variant="outline"
                className="group/btn"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.links.github, "_blank");
                }}
              >
                <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                Code
              </Button>
            )}

            {project.links.demo && (
              <Button
                size="sm"
                variant="outline"
                className="group/btn"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.links.demo, "_blank");
                }}
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                Demo
              </Button>
            )}

            <Button
              size="sm"
              className="ml-auto bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground"
              onClick={onSelect}
            >
              Learn More
            </Button>
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
