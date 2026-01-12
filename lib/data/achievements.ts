import { GraduationCap, type LucideIcon, School, Users } from "lucide-react";

export interface Achievement {
  icon: LucideIcon; // LucideIcon from lucide-react
  title: string;
  description: string;
  details: string;
  gradient: string;
}

export const achievements: Achievement[] = [
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
