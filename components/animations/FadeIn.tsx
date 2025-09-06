"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useIsMounted } from "@/hooks/useIsMounted";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  threshold?: number;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className = "",
  threshold = 0.1,
}: FadeInProps) {
  const isMounted = useIsMounted();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  const { x, y } = directionOffset[direction];

  // For threshold 0, always animate immediately
  const shouldAnimate = threshold === 0 ? true : inView;

  return (
    <motion.div
      ref={ref}
      initial={isMounted ? { opacity: 0, x, y } : { opacity: 1, x: 0, y: 0 }}
      animate={
        shouldAnimate
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : {
              opacity: 0,
              x,
              y,
            }
      }
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
