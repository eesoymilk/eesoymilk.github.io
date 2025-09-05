"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface FloatingBubblesProps {
  skills: string[];
  className?: string;
}

export function FloatingBubbles({
  skills,
  className = "",
}: FloatingBubblesProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          className="absolute pointer-events-auto"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
            ],
            y: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
            ],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "loop",
            delay: index * 0.5,
            ease: "linear",
          }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          style={{
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
          }}
        >
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border-primary/20 backdrop-blur-sm hover:bg-primary/20 transition-colors cursor-pointer"
          >
            {skill}
          </Badge>
        </motion.div>
      ))}
    </div>
  );
}
