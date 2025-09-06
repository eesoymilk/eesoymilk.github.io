"use client";

import { motion, type Variants, useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: threshold,
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

  // For static export, show content immediately if not mounted
  if (!isMounted) {
    return (
      <div className={className}>
        {Array.isArray(children)
          ? children.map((child, index) => (
              <div key={`stagger-static-${index}`}>
                {child}
              </div>
            ))
          : children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div 
              key={`stagger-motion-${index}`} 
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
