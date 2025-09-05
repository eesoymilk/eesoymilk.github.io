"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown, Building2, Calendar } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Experience } from "@/types";
import { AchievementBadge } from "./AchievementBadge";

interface CompanyCardProps {
  experience: Experience;
  isExpanded: boolean;
  onToggle: () => void;
  alignRight?: boolean;
}

export function CompanyCard({ 
  experience, 
  isExpanded, 
  onToggle, 
  alignRight = false 
}: CompanyCardProps) {
  const isCurrentRole = !experience.endDate;

  return (
    <motion.div
      className="w-full max-w-2xl"
      layout
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Card className={cn(
        "group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden",
        "border-l-4 border-l-primary bg-gradient-to-br from-background to-muted/20",
        alignRight && "md:ml-auto"
      )}>
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        
        <CardHeader 
          className="relative pb-4"
          onClick={onToggle}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {/* Company info */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {experience.position}
                  </CardTitle>
                  <p className="text-lg font-semibold text-secondary">
                    {experience.company}
                  </p>
                </div>
                {isCurrentRole && (
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                    Current
                  </Badge>
                )}
              </div>

              {/* Location and date */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {experience.startDate} - {experience.endDate || "Present"}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mt-3 leading-relaxed">
                {experience.description}
              </p>
            </div>

            {/* Expand button */}
            <Button
              variant="ghost"
              size="sm"
              className="ml-4 flex-shrink-0"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </Button>
          </div>
        </CardHeader>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <CardContent className="relative pt-0">
                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Key Achievements
                  </h4>
                  <motion.div 
                    className="space-y-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.1,
                        },
                      },
                    }}
                  >
                    {experience.achievements.map((achievement, index) => (
                      <AchievementBadge
                        key={index}
                        text={achievement}
                        delay={index * 0.1}
                      />
                    ))}
                  </motion.div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Technologies Used
                  </h4>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.2,
                        },
                      },
                    }}
                  >
                    {experience.technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8, y: 10 },
                          visible: { opacity: 1, scale: 1, y: 0 },
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
                  </motion.div>
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover effect gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          initial={false}
        />
      </Card>
    </motion.div>
  );
}
