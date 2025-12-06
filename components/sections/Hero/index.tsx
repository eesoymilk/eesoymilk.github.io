"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Stagger } from "@/components/animations/Stagger";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data/personal";
import { techs } from "@/lib/data/techs";
import { HeroDescription } from "./Description";
import { FloatingBubbles } from "./FloatingBubbles";
import { ScrollIndicator } from "./ScrollIndicator";
import { TypewriterText } from "./TypewriterText";

const socialLinks = [
  { href: "https://github.com/eesoymilk", icon: Github, label: "GitHub" },
  {
    href: "https://linkedin.com/in/eesoymilk",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "mailto:eesoymilk@gmail.com", icon: Mail, label: "Email" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="top-1/2 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating tech stack bubbles */}
      <FloatingBubbles skills={techs} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeIn delay={0.2} threshold={0}>
            <p className="text-lg text-muted-foreground font-medium tracking-wide">
              Hello, I'm
            </p>
          </FadeIn>
          {/* Name with gradient */}
          <FadeIn delay={0.4} threshold={0}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="text-gradient-primary">
                {personalInfo.firstName}
              </span>{" "}
              <span className="text-gradient-accent">
                {personalInfo.lastName}
              </span>
            </h1>
          </FadeIn>
          {/* Subtitle with milk theme */}
          <FadeIn delay={0.6} threshold={0}>
            <p className="text-xl md:text-2xl text-muted-foreground">
              also known as{" "}
              <span className="text-gradient-milk font-semibold">
                {personalInfo.nickname}
              </span>
            </p>
          </FadeIn>
          {/* Dynamic role with typewriter effect */}
          <FadeIn delay={0.8} threshold={0}>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-foreground">
                <TypewriterText texts={personalInfo.roles} />
              </h2>
            </div>
          </FadeIn>
          {/* Description */}
          <FadeIn delay={1.0} threshold={0}>
            <HeroDescription />
          </FadeIn>
          {/* Action buttons */}
          <Stagger staggerDelay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3"
                onClick={() => {
                  window.location.href = "#research";
                }}
              >
                View My Work
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 hover:bg-primary/5 px-8 py-3"
                onClick={() => {
                  window.location.href = "#contact";
                }}
              >
                Contact Me
              </Button>

              {/* <Button
                variant="ghost"
                size="lg"
                className="hover:bg-secondary/10 px-8 py-3"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button> */}
            </div>
          </Stagger>
          {/* Social links */}
          <FadeIn delay={1.4} threshold={0}>
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
