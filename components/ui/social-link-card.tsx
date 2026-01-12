"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types";

interface SocialLinkCardProps {
  social: SocialLink;
  variant?: "standard" | "featured";
  index?: number;
}

export function SocialLinkCard({
  social,
  variant = "standard",
  index = 0
}: SocialLinkCardProps) {
  const Icon = social.icon;
  const isFeatured = variant === "featured";

  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -4 }}
    >
      <Card
        className={cn(
          "group relative overflow-hidden border-0 transition-all duration-300 h-full",
          "hover:shadow-xl cursor-pointer",
          social.color,
          social.hoverColor,
          "text-white"
        )}
      >
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

        <CardContent
          className={cn(
            "relative flex flex-col justify-between p-6",
            isFeatured ? "min-h-[200px]" : "min-h-[140px]"
          )}
        >
          {/* Top: Icon & External Link */}
          <div className="flex items-start justify-between mb-3">
            <Icon className={cn(
              "text-white/90 group-hover:text-white transition-all group-hover:scale-110",
              isFeatured ? "w-10 h-10" : "w-8 h-8"
            )} />
            <ExternalLink className="w-4 h-4 text-white/60 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Content */}
          <div className="space-y-1">
            <h3 className={cn(
              "font-bold text-white",
              isFeatured ? "text-2xl" : "text-xl"
            )}>
              {social.label}
            </h3>

            {social.username && (
              <p className="text-white/80 text-sm font-medium">
                {social.username}
              </p>
            )}

            {social.description && isFeatured && (
              <p className="text-white/70 text-sm mt-2">
                {social.description}
              </p>
            )}
          </div>

          {/* Hover shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
            initial={false}
            transition={{ duration: 0.5 }}
          />
        </CardContent>
      </Card>
    </motion.a>
  );
}
