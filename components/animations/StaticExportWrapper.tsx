"use client";

import { type ReactNode } from "react";
import { motion, type MotionProps } from "framer-motion";

import { useIsMounted } from "@/hooks/useIsMounted";

interface StaticExportWrapperProps extends Omit<MotionProps, "children"> {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
}

/**
 * Wrapper component that handles static export compatibility for Framer Motion
 * Shows fallback content during SSR and static export, then animates on client
 */
export function StaticExportWrapper({
  children,
  fallback,
  className,
  ...motionProps
}: StaticExportWrapperProps) {
  const isMounted = useIsMounted();

  // During SSR/static export, show fallback or children without animation
  if (!isMounted) {
    return (
      <div className={className}>
        {fallback || children}
      </div>
    );
  }

  // On client, show with full animation
  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
}
