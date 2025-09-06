"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useIsMounted } from "@/hooks/useIsMounted";

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
}

export function Stagger({
  children,
  className = "",
  staggerDelay = 0.1,
  threshold = 0.1,
}: StaggerProps) {
  const isMounted = useIsMounted();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial={isMounted ? "hidden" : "visible"}
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div 
              key={`stagger-item-${index}`} 
              variants={itemVariants}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
