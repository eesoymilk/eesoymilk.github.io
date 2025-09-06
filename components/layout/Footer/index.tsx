"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data/personal";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-8 space-y-4 md:space-y-8">
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient-primary">
              eesoymilk
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Take the risk of optimism.
            </p>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              © {new Date().getFullYear()} {personalInfo.name}
            </span>
            <span>•</span>
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500" />
            </motion.span>
            <span>and lots of coffee</span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="flex items-center gap-2"
            >
              <ArrowUp className="w-4 h-4" />
              Back to top
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
