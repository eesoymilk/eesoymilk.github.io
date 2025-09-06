"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface AchievementBadgeProps {
  text: string;
  delay?: number;
}

export function AchievementBadge({ text, delay = 0 }: AchievementBadgeProps) {
  return (
    <motion.div
      className="flex items-start gap-3 group"
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ delay }}
    >
      <motion.div
        className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Star className="w-3 h-3 text-primary" />
      </motion.div>

      <motion.p
        className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors"
        initial={{ opacity: 0.8 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.1 }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
}
