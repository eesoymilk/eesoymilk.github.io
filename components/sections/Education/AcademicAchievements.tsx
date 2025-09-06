"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Users, School } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    icon: School,
    title: "Master's Student",
    description: "Electrical and Computer Engineering",
    details: "University of California, Los Angeles",
    gradient: "from-primary to-primary/60",
  },
  {
    icon: GraduationCap,
    title: "Bachelor's Degree",
    description: "Electrical and Computer Engineering",
    details: "National Tsing Hua University",
    gradient: "from-primary to-primary/60",
  },
  {
    icon: Users,
    title: "Teaching Experience",
    description: "Academic Reader",
    details: "Student Mentoring",
    gradient: "from-accent to-accent/60",
  },
];

export function AcademicAchievements() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.title}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            ease: "easeOut",
          }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <Card className="group h-full text-center hover:shadow-lg transition-all duration-300 border-0 p-0 bg-gradient-to-br from-background to-muted/20">
            {/* Glass effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg pointer-events-none" />

            <CardContent className="p-6 relative">
              {/* Icon with gradient background */}
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${achievement.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
              >
                <achievement.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm font-medium text-secondary">
                  {achievement.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  {achievement.details}
                </p>
              </div>

              {/* Hover glow effect */}
              <motion.div
                className={`absolute inset-0 rounded-lg h-full bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                initial={false}
              />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
