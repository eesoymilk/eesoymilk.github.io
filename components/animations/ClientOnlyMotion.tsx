"use client";

import { type ReactNode, Suspense } from "react";
import dynamic from "next/dynamic";

import { useIsMounted } from "@/hooks/useIsMounted";

// Dynamically import motion components only on client
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.div })),
  { ssr: false }
);

interface ClientOnlyMotionProps {
  children: ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
  variants?: any;
  whileHover?: any;
  whileTap?: any;
  layout?: boolean;
  [key: string]: any;
}

/**
 * Client-only motion component that prevents SSR hydration issues
 * Shows fallback content during static export, then animates on client
 */
export function ClientOnlyMotion({
  children,
  className,
  ...motionProps
}: ClientOnlyMotionProps) {
  const isMounted = useIsMounted();

  // During SSR/static export, show content without animation
  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  // On client, show with full animation
  return (
    <Suspense fallback={<div className={className}>{children}</div>}>
      <MotionDiv className={className} {...motionProps}>
        {children}
      </MotionDiv>
    </Suspense>
  );
}
