"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  label: string;
  count: number;
}

interface FilterBarProps {
  categories: readonly Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <Button
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "relative group transition-all duration-300",
              selectedCategory === category.id
                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                : "hover:bg-primary/5 hover:border-primary/20 hover:scale-105",
            )}
          >
            <span className="font-medium">{category.label}</span>

            {/* Count badge */}
            <Badge
              variant="secondary"
              className={cn(
                "ml-2 text-xs transition-colors",
                selectedCategory === category.id
                  ? "bg-primary-foreground/20 text-primary-foreground"
                  : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary",
              )}
            >
              {category.count}
            </Badge>

            {/* Animated underline for active state */}
            {selectedCategory === category.id && (
              <motion.div
                className="absolute -bottom-1 left-3 right-3 h-0.5 bg-primary rounded-full"
                layoutId="activeCategory"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
