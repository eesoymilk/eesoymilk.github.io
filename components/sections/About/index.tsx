"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { FadeIn } from "@/components/animations/FadeIn";
import { useThemeClient } from "@/hooks/useThemeClient";
import { personalInfo } from "@/lib/data/personal";
import { stats } from "@/lib/data/stats";
import { Philosophy } from "./Philosophy";
import { StatsCards } from "./StatsCards";

export function About() {
  const { isDark, isClient } = useThemeClient();

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about creating innovative solutions through
              cutting-edge technology and research.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Profile Image */}
          <FadeIn delay={0.2}>
            <div className="relative w-full max-w-md mx-auto">
              {/* Profile image with flip animation */}
              <div className="relative z-10 aspect-square rounded-xl overflow-hidden m-3">
                {isClient ? (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isDark ? "dark" : "light"}
                      initial={{ rotateY: 90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: -90, opacity: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="w-full h-full relative"
                    >
                      <Image
                        src={
                          isDark
                            ? personalInfo.profileImageDark
                            : personalInfo.profileImage
                        }
                        alt={`${personalInfo.name} profile photo`}
                        fill
                        priority
                        className="scale-120 object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  // Fallback during SSR - show default light theme image
                  <div className="w-full h-full relative">
                    <Image
                      src={personalInfo.profileImage}
                      alt={`${personalInfo.name} profile photo`}
                      fill
                      priority
                      className="scale-120 object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Floating decorations - much more prominent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/40 rounded-full blur-xl animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-500/40 rounded-full blur-xl animate-pulse shadow-lg"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-pink-500/30 rounded-full blur-lg animate-bounce"></div>
            </div>
          </FadeIn>

          {/* Bio Content */}
          <FadeIn delay={0.4}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Hello! I'm{" "}
                  <span className="text-gradient-primary">
                    {personalInfo.name}
                  </span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">
                    Based in {personalInfo.location}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-muted-foreground">
                    {stats.yearsOfExperience}+ years of experience
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">
                    {stats.projectsCompleted}+ projects completed
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Stats Cards */}
        <FadeIn delay={0.6}>
          <StatsCards />
        </FadeIn>

        {/* Philosophy */}
        <div className="mt-24">
          <Philosophy quote={personalInfo.philosophy.quote} />
        </div>
      </div>
    </section>
  );
}
