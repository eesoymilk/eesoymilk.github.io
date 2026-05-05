import type { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  name: string;
  nickname: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  website: string;
  resumeUrl: string;
  profileImage: string;
  profileImageDark: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  bullets?: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  bullets: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  shortTitle?: string;
  tagline: string;
  bullets: string[];
  technologies: string[];
  status: "completed" | "in-progress";
  startDate: string;
  endDate?: string;
  advisor?: string;
  lab?: string;
  institution?: string;
  links?: {
    github?: string;
    website?: string;
  };
}

export interface SkillGroup {
  name: string;
  label: string;
  skills: string[];
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: IconComponent;
  username?: string;
  description?: string;
  featured: boolean;
  category: "code" | "professional" | "social" | "content" | "contact";
}
