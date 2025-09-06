"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import { useIsMounted } from "@/hooks/useIsMounted";

interface ScrollIndicatorProps {
  className?: string;
}

export function ScrollIndicator({ className = "" }: ScrollIndicatorProps) {
  const isMounted = useIsMounted();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isMounted) return;
    
    const handleScroll = () => {
      // Hide the indicator when user scrolls down more than 100px
      const scrolled = window.scrollY;
      setIsVisible(scrolled < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  const handleScrollDown = () => {
    const nextSection = document.querySelector("#about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // For static export, show static version if not mounted
  if (!isMounted) {
    return (
      <button
        type="button"
        onClick={handleScrollDown}
        className={`group flex flex-col items-center justify-center cursor-pointer ${className}`}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center relative overflow-hidden group-hover:border-primary transition-colors">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 group-hover:bg-primary transition-colors" />
        </div>

        <div className="mt-2">
          <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>

        <p className="text-xs text-muted-foreground mt-1 group-hover:text-primary transition-colors">
          Scroll down
        </p>
      </button>
    );
  }

  return (
    <motion.button
      onClick={handleScrollDown}
      className={`group flex flex-col items-center justify-center cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      transition={{
        delay: 2,
        duration: 0.8,
        opacity: { duration: 0.4 },
        y: { duration: 0.4 },
      }}
      whileHover={{ scale: isVisible ? 1.1 : 1 }}
      whileTap={{ scale: isVisible ? 0.95 : 1 }}
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <motion.div
        className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center relative overflow-hidden group-hover:border-primary transition-colors"
        whileHover={{ borderColor: "var(--primary)" }}
      >
        <motion.div
          className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 group-hover:bg-primary transition-colors"
          animate={{
            y: [0, 12, 0],
            opacity: [1, 1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div
        className="mt-2"
        animate={{
          y: [0, 4, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </motion.div>

      <p className="text-xs text-muted-foreground mt-1 group-hover:text-primary transition-colors">
        Scroll down
      </p>
    </motion.button>
  );
}
