"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Stagger } from "@/components/animations/Stagger";
import { Button } from "@/components/ui/button";
import { FloatingBubbles } from "./FloatingBubbles";
import { ScrollIndicator } from "./ScrollIndicator";
import { TypewriterText } from "./TypewriterText";

const roles = [
  "Researcher & Developer",
  "Software Engineer",
  "Innovation Enthusiast",
  "Tech Explorer",
  "Problem Solver",
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "Node.js",
  "TailwindCSS",
  "Framer Motion",
  "PostgreSQL",
  "Docker",
  "AWS",
  "GraphQL",
  "Machine Learning",
  "Computer Vision",
];

const socialLinks = [
  { href: "https://github.com/eesoymilk", icon: Github, label: "GitHub" },
  {
    href: "https://linkedin.com/in/eesoymilk",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "mailto:contact@eesoymilk.dev", icon: Mail, label: "Email" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, oklch(0.647 0.151 162.5 / 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, oklch(0.611 0.174 248.3 / 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 50%, oklch(0.672 0.232 293.2 / 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Floating tech stack bubbles */}
      <FloatingBubbles skills={techStack} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Greeting */}
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground font-medium tracking-wide">
              Hello, I'm
            </p>
          </FadeIn>

          {/* Name with gradient */}
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="text-gradient-primary">Yu-Wei</span>{" "}
              <span className="text-gradient-accent">Chang</span>
            </h1>
          </FadeIn>

          {/* Subtitle with milk theme */}
          <FadeIn delay={0.6}>
            <p className="text-xl md:text-2xl text-muted-foreground">
              also known as{" "}
              <span className="text-gradient-milk font-semibold">
                eesoymilk
              </span>
            </p>
          </FadeIn>

          {/* Dynamic role with typewriter effect */}
          <FadeIn delay={0.8}>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-foreground">
                <TypewriterText texts={roles} />
              </h2>
            </div>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={1.0}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions through{" "}
              <span className="text-primary font-medium">
                cutting-edge technology
              </span>{" "}
              and <span className="text-secondary font-medium">research</span>.
              I transform ideas into reality with clean code and thoughtful
              design.
            </p>
          </FadeIn>

          {/* Action buttons */}
          <Stagger staggerDelay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3"
              >
                View My Work
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 hover:bg-primary/5 px-8 py-3"
              >
                Contact Me
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="hover:bg-secondary/10 px-8 py-3"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </Stagger>

          {/* Social links */}
          <FadeIn delay={1.4}>
            <div className="flex items-center justify-center gap-6 pt-8">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-6 h-6" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <ScrollIndicator className="absolute -bottom-24 left-1/2 transform -translate-x-1/2" />
      </div>
    </section>
  );
}
