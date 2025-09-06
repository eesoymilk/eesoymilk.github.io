"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { useIsMounted } from "@/hooks/useIsMounted";

interface FloatingBubblesProps {
  skills: string[];
  className?: string;
}

// Predefined positions to avoid hydration mismatch
const predefinedPositions = [
  {
    initialX: 20,
    initialY: 15,
    animateX: [40, 60, 20],
    animateY: [25, 35, 15],
    startX: 10,
    startY: 20,
    duration: 18,
  },
  {
    initialX: 80,
    initialY: 25,
    animateX: [60, 40, 80],
    animateY: [35, 45, 25],
    startX: 70,
    startY: 10,
    duration: 22,
  },
  {
    initialX: 15,
    initialY: 60,
    animateX: [35, 55, 15],
    animateY: [70, 80, 60],
    startX: 5,
    startY: 50,
    duration: 20,
  },
  {
    initialX: 75,
    initialY: 70,
    animateX: [55, 35, 75],
    animateY: [80, 90, 70],
    startX: 65,
    startY: 60,
    duration: 16,
  },
  {
    initialX: 40,
    initialY: 35,
    animateX: [60, 20, 40],
    animateY: [45, 55, 35],
    startX: 30,
    startY: 30,
    duration: 24,
  },
  {
    initialX: 90,
    initialY: 50,
    animateX: [70, 50, 90],
    animateY: [60, 70, 50],
    startX: 80,
    startY: 40,
    duration: 19,
  },
  {
    initialX: 10,
    initialY: 80,
    animateX: [30, 50, 10],
    animateY: [90, 100, 80],
    startX: 0,
    startY: 70,
    duration: 21,
  },
  {
    initialX: 60,
    initialY: 10,
    animateX: [80, 40, 60],
    animateY: [20, 30, 10],
    startX: 50,
    startY: 5,
    duration: 17,
  },
  {
    initialX: 30,
    initialY: 85,
    animateX: [50, 70, 30],
    animateY: [95, 100, 85],
    startX: 20,
    startY: 75,
    duration: 23,
  },
  {
    initialX: 85,
    initialY: 90,
    animateX: [65, 45, 85],
    animateY: [100, 100, 90],
    startX: 75,
    startY: 80,
    duration: 15,
  },
  {
    initialX: 50,
    initialY: 45,
    animateX: [70, 30, 50],
    animateY: [55, 65, 45],
    startX: 40,
    startY: 35,
    duration: 25,
  },
  {
    initialX: 25,
    initialY: 30,
    animateX: [45, 65, 25],
    animateY: [40, 50, 30],
    startX: 15,
    startY: 25,
    duration: 18,
  },
];

export function FloatingBubbles({
  skills,
  className = "",
}: FloatingBubblesProps) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    // Return static version for SSR to prevent hydration mismatch
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      >
        {skills.slice(0, 12).map((skill, index) => {
          const position =
            predefinedPositions[index % predefinedPositions.length];

          return (
            <div
              key={skill}
              className="absolute pointer-events-auto"
              style={{
                left: `${position.startX}%`,
                top: `${position.startY}%`,
                transform: `translateX(${position.initialX}%) translateY(${position.initialY}%) scale(0.8)`,
                opacity: 0.6,
              }}
            >
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 backdrop-blur-sm hover:bg-primary/20 transition-colors cursor-pointer text-xs"
              >
                {skill}
              </Badge>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {skills.slice(0, 12).map((skill, index) => {
        const position =
          predefinedPositions[index % predefinedPositions.length];

        return (
          <motion.div
            key={skill}
            className="absolute pointer-events-auto"
            initial={{
              x: `${position.initialX}%`,
              y: `${position.initialY}%`,
              opacity: 0.6,
              scale: 0.8,
            }}
            animate={{
              x: position.animateX.map((x) => `${x}%`),
              y: position.animateY.map((y) => `${y}%`),
              opacity: [0.6, 0.8, 0.6, 0.4],
              scale: [0.8, 1, 0.8, 0.6],
            }}
            transition={{
              duration: position.duration,
              repeat: Infinity,
              repeatType: "loop",
              delay: index * 0.3,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.2,
              opacity: 1,
              transition: { duration: 0.2 },
            }}
            style={{
              left: `${position.startX}%`,
              top: `${position.startY}%`,
            }}
          >
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 backdrop-blur-sm hover:bg-primary/20 transition-colors cursor-pointer text-xs"
            >
              {skill}
            </Badge>
          </motion.div>
        );
      })}
    </div>
  );
}
