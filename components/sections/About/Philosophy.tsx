"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { FadeIn } from "@/components/animations/FadeIn";

interface PhilosophyProps {
  quote: string;
}

export function Philosophy({ quote }: PhilosophyProps) {
  return (
    <FadeIn delay={0.4}>
      <div className="relative">
        {/* Background decoration */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl"
          animate={{
            background: [
              "linear-gradient(45deg, oklch(0.647 0.151 162.5 / 0.05), oklch(0.611 0.174 248.3 / 0.05), oklch(0.672 0.232 293.2 / 0.05))",
              "linear-gradient(45deg, oklch(0.672 0.232 293.2 / 0.05), oklch(0.647 0.151 162.5 / 0.05), oklch(0.611 0.174 248.3 / 0.05))",
              "linear-gradient(45deg, oklch(0.611 0.174 248.3 / 0.05), oklch(0.672 0.232 293.2 / 0.05), oklch(0.647 0.151 162.5 / 0.05))",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <div className="relative p-8 md:p-12 text-center">
          {/* Quote icon */}
          <motion.div
            className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Quote className="w-8 h-8 text-white" />
          </motion.div>

          {/* Philosophy text */}
          <motion.blockquote
            className="text-xl md:text-2xl leading-relaxed text-foreground font-medium max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            "{quote}"
          </motion.blockquote>

          {/* Decorative line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mt-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </FadeIn>
  );
}
