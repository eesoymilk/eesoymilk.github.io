"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Trophy,
  BookOpen,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Education } from "@/types";

interface EducationTimelineProps {
  items: Education[];
}

export function EducationTimeline({ items }: EducationTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full transform md:-translate-x-0.5"></div>

      <div className="space-y-16">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`relative flex items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.3,
              ease: "easeOut",
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline dot with icon */}
            <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-background border-2 border-primary/60 rounded-full transform -translate-x-6 md:-translate-x-6 z-20 flex items-center justify-center">
              <div className="w-6 h-6 bg-primary/70 rounded-full flex items-center justify-center">
                <GraduationCap className="w-3 h-3 text-primary-foreground" />
              </div>

              {/* Pulsing animation */}
              <motion.div
                className="absolute inset-0 border border-primary/50 rounded-full"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.7,
                }}
              />
            </div>

            {/* Education card */}
            <div
              className={`flex-1 ml-20 md:ml-0 overflow-hidden ${
                index % 2 === 0 ? "md:mr-16" : "md:ml-16"
              }`}
            >
                <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary bg-gradient-to-br from-background to-muted/20 relative">
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                <CardHeader className="relative">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                          {item.degree}
                        </CardTitle>
                        <p className="text-lg font-semibold text-secondary">
                          {item.field}
                        </p>
                      </div>
                    </div>

                    <Badge variant="secondary" className="text-sm font-medium">
                      {item.startDate} - {item.endDate}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{item.institution}</span>
                  </div>

                  {item.description && (
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </CardHeader>

                {item.achievements && item.achievements.length > 0 && (
                  <CardContent className="relative pt-0">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        Academic Achievements
                      </h4>

                      <motion.div
                        className="grid gap-3"
                        initial="hidden"
                        whileInView="visible"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: {
                              staggerChildren: 0.1,
                              delayChildren: 0.2,
                            },
                          },
                        }}
                        viewport={{ once: true }}
                      >
                        {item.achievements.map((achievement) => (
                          <motion.div
                            key={achievement}
                            className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group/achievement"
                            variants={{
                              hidden: { opacity: 0, x: -20 },
                              visible: { opacity: 1, x: 0 },
                            }}
                          >
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover/achievement:scale-125 transition-transform"></div>
                            <span className="text-sm text-muted-foreground group-hover/achievement:text-foreground transition-colors">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </CardContent>
                )}

                {/* Hover effect gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={false}
                />
              </Card>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}
