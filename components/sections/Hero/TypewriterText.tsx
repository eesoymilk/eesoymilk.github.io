"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useIsMounted } from "@/hooks/useIsMounted";

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  speed?: number;
  pauseDuration?: number;
}

export function TypewriterText({
  texts,
  className = "",
  speed = 100,
  pauseDuration = 2000,
}: TypewriterTextProps) {
  const isMounted = useIsMounted();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isMounted) return;
    
    const currentText = texts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentText) {
      // Pause when text is complete
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && displayText === "") {
      // Move to next text when deletion is complete
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      // Type or delete characters
      const nextChar = isDeleting
        ? currentText.slice(0, displayText.length - 1)
        : currentText.slice(0, displayText.length + 1);

      timeout = setTimeout(
        () => {
          setDisplayText(nextChar);
        },
        isDeleting ? speed / 2 : speed,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, texts, speed, pauseDuration, isMounted]);

  return (
    <span className={className}>
      {isMounted ? displayText : texts[0]}
      {isMounted ? (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="inline-block w-0.5 h-[1em] bg-current ml-1"
        />
      ) : (
        <span className="inline-block w-0.5 h-[1em] bg-current ml-1 opacity-100" />
      )}
    </span>
  );
}
