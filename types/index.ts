export interface PersonalInfo {
  name: string;
  nickname: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  website: string;
  github: string;
  linkedin: string;
  philosophy: string;
}

export interface Skill {
  name: string;
  category: "language" | "framework" | "tool" | "database";
  proficiency: number; // 1-5 scale
  yearsOfExperience: number;
  projects?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  technologies: string[];
  companyLogo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "research" | "web" | "ai" | "tool" | "school";
  status: "completed" | "in-progress" | "planned";
  startDate: string;
  endDate?: string;
  links: {
    github?: string;
    demo?: string;
    paper?: string;
    website?: string;
  };
  images: string[];
  featured: boolean;
  team?: string[];
  awards?: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "conference" | "journal" | "workshop" | "preprint";
  abstract: string;
  links: {
    pdf?: string;
    doi?: string;
    arxiv?: string;
    code?: string;
  };
  citations?: number;
  tags: string[];
}

export interface Stats {
  projectsCompleted: number;
  yearsOfExperience: number;
  technologiesUsed: number;
  publicationsCount: number;
  githubStars: number;
  githubContributions: number;
}
