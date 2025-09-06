"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { stats } from "@/lib/data/stats";

interface StatCard {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
  gradient: string;
}

const statCards: StatCard[] = [
  {
    label: "Projects Completed",
    value: stats.projectsCompleted,
    suffix: "+",
    icon: "🚀",
    gradient: "from-primary to-primary/60",
  },
  {
    label: "Years Experience",
    value: stats.yearsOfExperience,
    suffix: "+",
    icon: "⏱️",
    gradient: "from-secondary to-secondary/60",
  },
  {
    label: "Technologies Used",
    value: stats.technologiesMastered,
    suffix: "+",
    icon: "⚡",
    gradient: "from-accent to-accent/60",
  },
  {
    label: "Years Old",
    value: 25,
    suffix: "+",
    icon: "🎂",
    gradient: "from-green-500 to-green-400",
  },
];

function AnimatedNumber({
  value,
  suffix = "",
  duration = 2000,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px",
    amount: 0.3 
  });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setDisplayValue(Math.floor(value * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animate();
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function StatsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              {/* Icon with gradient background */}
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.gradient} flex items-center justify-center text-2xl shadow-lg`}
              >
                {stat.icon}
              </div>

              {/* Animated number */}
              <div className="mb-2">
                <span className="text-3xl md:text-4xl font-bold text-foreground">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </span>
              </div>

              {/* Label */}
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
