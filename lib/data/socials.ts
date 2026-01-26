import {
  Github,
  Linkedin,
  Mail,
  Youtube,
  Music, // TikTok placeholder
  Twitter, // X.com
  AtSign, // Threads placeholder
  Instagram,
  MessageCircle, // Discord
} from "lucide-react";
import type { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  // Featured links (displayed prominently) - in order: YouTube, Instagram, X, LinkedIn
  {
    id: "youtube",
    label: "YouTube",
    href: "https://youtube.com/@eesoyamilk",
    icon: Youtube,
    username: "@eesoyamilk",
    description: "Tech tutorials & demos",
    color: "bg-red-600",
    hoverColor: "hover:bg-red-700",
    featured: true,
    category: "content",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/eesoymilk.dev",
    icon: Instagram,
    username: "@eesoymilk.dev",
    description: "Life & work snapshots",
    color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500",
    hoverColor: "hover:opacity-90",
    featured: true,
    category: "social",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/eesoymilk",
    icon: Twitter,
    username: "@eesoymilk",
    description: "Tech insights & updates",
    color: "bg-black dark:bg-slate-900",
    hoverColor: "hover:bg-slate-900 dark:hover:bg-slate-800",
    featured: true,
    category: "social",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/eesoymilk",
    icon: Linkedin,
    username: "@eesoymilk",
    description: "Professional network",
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    featured: true,
    category: "professional",
  },

  // Regular links
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/eesoymilk",
    icon: Github,
    username: "@eesoymilk",
    description: "Open source projects & contributions",
    color: "bg-slate-900 dark:bg-slate-800",
    hoverColor: "hover:bg-slate-800 dark:hover:bg-slate-700",
    featured: false,
    category: "code",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:eesoymilk@gmail.com",
    icon: Mail,
    username: "eesoymilk@gmail.com",
    description: "Get in touch",
    color: "bg-primary",
    hoverColor: "hover:bg-primary/90",
    featured: false,
    category: "contact",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://tiktok.com/@eesoymilk",
    icon: Music,
    username: "@eesoymilk",
    description: "Quick tech tips",
    color: "bg-black dark:bg-slate-900",
    hoverColor: "hover:bg-slate-900 dark:hover:bg-slate-800",
    featured: false,
    category: "content",
  },
  {
    id: "threads",
    label: "Threads",
    href: "https://threads.net/@eesoymilk.dev",
    icon: AtSign,
    username: "@eesoymilk.dev",
    description: "Conversations",
    color: "bg-gradient-to-br from-purple-600 to-pink-600",
    hoverColor: "hover:opacity-90",
    featured: false,
    category: "social",
  },
  {
    id: "discord",
    label: "Discord",
    href: "https://discord.gg/5rR9ZssMwM",
    icon: MessageCircle,
    username: "Join my Discord",
    description: "Community & discussions",
    color: "bg-indigo-600",
    hoverColor: "hover:bg-indigo-700",
    featured: false,
    category: "social",
  },
];

// Helper functions
export const getFeaturedSocials = () => socialLinks.filter((s) => s.featured);
export const getAllSocials = () => socialLinks;
export const getSocialsByCategory = (category: SocialLink["category"]) =>
  socialLinks.filter((s) => s.category === category);

// Top professional links for Hero section (first impression)
export const getHeroSocials = () =>
  socialLinks.filter((s) => ["github", "linkedin", "email"].includes(s.id));

// Professional + content mix for Contact section
export const getContactSocials = () =>
  socialLinks.filter((s) =>
    ["github", "linkedin", "email", "youtube", "x"].includes(s.id)
  );
