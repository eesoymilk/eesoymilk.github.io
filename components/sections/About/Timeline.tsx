"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Education } from "@/types";

interface TimelineProps {
  items: Education[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-0.5"></div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`relative flex items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transform -translate-x-2 md:-translate-x-2 z-10">
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-25"></div>
            </div>

            {/* Content card */}
            <div
              className={`flex-1 ml-12 md:ml-0 ${
                index % 2 === 0 ? "md:mr-8" : "md:ml-8"
              }`}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <CardTitle className="text-xl">{item.degree}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {item.endDate === item.startDate
                        ? item.endDate
                        : `${item.startDate} - ${item.endDate}`}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-secondary">
                      {item.field}
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{item.institution}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {item.description && (
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {item.achievements && item.achievements.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <motion.li
                            key={achievement}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
