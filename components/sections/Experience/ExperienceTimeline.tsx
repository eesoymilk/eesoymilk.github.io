"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import type { Experience } from "@/types";
import { CompanyCard } from "./CompanyCard";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-secondary/40 to-accent/40 transform md:-translate-x-1/2"></div>

      <div className="space-y-16">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            className={`relative flex items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline dot */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-background border-2 border-primary/60 rounded-full transform -translate-x-2 md:-translate-x-1/2 z-20">
              <div className="absolute inset-0.5 bg-primary/70 rounded-full">
                <motion.div
                  className="absolute inset-0 bg-primary/50 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  style={{ opacity: 0.2 }}
                />
              </div>
            </div>

            {/* Company card */}
            <div
              className={`flex-1 ml-20 md:ml-0 ${
                index % 2 === 0 ? "md:mr-20" : "md:ml-20"
              }`}
            >
              <CompanyCard
                experience={experience}
                isExpanded={expandedCard === experience.id}
                onToggle={() => toggleCard(experience.id)}
                alignRight={index % 2 !== 0}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Timeline end marker */}
      <motion.div
        className="absolute left-8 md:left-1/2 bottom-0 w-4 h-4 bg-gradient-to-br from-accent to-secondary rounded-full transform -translate-x-2 md:-translate-x-1/2 shadow-lg"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: experiences.length * 0.2 + 0.5 }}
        viewport={{ once: true }}
      />
    </div>
  );
}
