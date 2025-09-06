"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

import { Badge } from "@/components/ui/badge";
import { useClientOnly } from "@/hooks/useClientOnly";

interface FloatingBubblesProps {
  skills: string[];
  className?: string;
}

// Generate random positions and movements for each bubble
function generateBubbleConfig(index: number, total: number) {
  // Use index as seed for consistent positioning across renders
  const seed = index * 123.456;

  // Generate random but bounded positions
  const startX = 10 + (Math.sin(seed) * 0.5 + 0.5) * 80; // 10-90%
  const startY = 10 + (Math.cos(seed * 1.3) * 0.5 + 0.5) * 80; // 10-90%

  // Create organic movement patterns
  const duration = 15 + (Math.sin(seed * 2.1) * 0.5 + 0.5) * 15; // 15-30s
  const delay = (index / total) * 5; // Staggered start times

  // Generate multiple waypoints for organic movement
  const waypoints = 4 + Math.floor(Math.sin(seed * 3.7) * 0.5 + 0.5) * 2; // 4-6 waypoints
  const animateX = [];
  const animateY = [];

  for (let i = 0; i < waypoints; i++) {
    const angle = (i / waypoints) * Math.PI * 2 + seed;
    const radius = 20 + Math.sin(seed * 4.2 + i) * 15; // Varying radius

    animateX.push(startX + Math.cos(angle) * radius);
    animateY.push(startY + Math.sin(angle) * radius);
  }

  // Add some randomness to opacity and scale
  const baseOpacity = 0.4 + Math.sin(seed * 5.1) * 0.2; // 0.2-0.6
  const baseScale = 0.7 + Math.cos(seed * 6.3) * 0.2; // 0.5-0.9

  return {
    startX,
    startY,
    animateX,
    animateY,
    duration,
    delay,
    baseOpacity,
    baseScale,
    waypoints,
  };
}

export function FloatingBubbles({
  skills,
  className = "",
}: FloatingBubblesProps) {
  const shouldReduceMotion = useReducedMotion();
  const isClient = useClientOnly();

  // Generate configurations for each bubble
  const bubbleConfigs = useMemo(() => {
    if (!isClient) return [];
    return skills
      .slice(0, 12)
      .map((_, index) =>
        generateBubbleConfig(index, Math.min(skills.length, 12)),
      );
  }, [skills, isClient]);

  // Don't render anything until we're on the client to prevent hydration mismatch
  if (!isClient) {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      />
    );
  }

  if (shouldReduceMotion) {
    // Simplified version for reduced motion
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      >
        {skills.slice(0, 12).map((skill, index) => {
          const config = bubbleConfigs[index];
          return (
            <div
              key={skill}
              className="absolute pointer-events-auto"
              style={{
                left: `${config.startX}%`,
                top: `${config.startY}%`,
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
        const config = bubbleConfigs[index];

        return (
          <motion.div
            key={skill}
            className="absolute pointer-events-auto"
            initial={{
              x: 0,
              y: 0,
              opacity: config.baseOpacity,
              scale: config.baseScale,
            }}
            animate={{
              x: config.animateX.map((x) => `${x - config.startX}%`),
              y: config.animateY.map((y) => `${y - config.startY}%`),
              opacity: [
                config.baseOpacity,
                config.baseOpacity + 0.3,
                config.baseOpacity + 0.1,
                config.baseOpacity - 0.1,
                config.baseOpacity,
              ],
              scale: [
                config.baseScale,
                config.baseScale + 0.2,
                config.baseScale + 0.1,
                config.baseScale - 0.1,
                config.baseScale,
              ],
            }}
            transition={{
              duration: config.duration,
              repeat: Infinity,
              repeatType: "loop",
              delay: config.delay,
              ease: "easeInOut",
              times: config.animateX.map(
                (_, i) => i / (config.animateX.length - 1),
              ),
            }}
            whileHover={{
              scale: config.baseScale + 0.3,
              opacity: 1,
              transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: config.baseScale - 0.1,
              transition: { duration: 0.1 },
            }}
            style={{
              left: `${config.startX}%`,
              top: `${config.startY}%`,
            }}
          >
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 backdrop-blur-sm hover:bg-primary/20 transition-colors cursor-pointer text-xs shadow-lg hover:shadow-xl"
            >
              {skill}
            </Badge>
          </motion.div>
        );
      })}
    </div>
  );
}
