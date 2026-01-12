"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { SocialLinkCard } from "@/components/ui/social-link-card";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { personalInfo } from "@/lib/data/personal";
import { getFeaturedSocials, getAllSocials } from "@/lib/data/socials";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useThemeClient } from "@/hooks/useThemeClient";

export default function LinkPage() {
  const { isDark, isClient } = useThemeClient();
  const featuredLinks = getFeaturedSocials();
  const allLinks = getAllSocials();
  const regularLinks = allLinks.filter((link) => !link.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        {/* Profile Header */}
        <FadeIn delay={0.1} threshold={0}>
          <div className="text-center mb-12 space-y-6">
            {/* Profile Image */}
            <motion.div
              className="relative w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
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
                      alt={personalInfo.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </motion.div>
                </AnimatePresence>
              ) : (
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              )}
            </motion.div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient-primary">
                  {personalInfo.nickname}
                </span>{" "}
              </h1>
              <p className="text-base text-muted-foreground max-w-md mx-auto">
                {personalInfo.title}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Bento Grid Layout */}
        <div className="space-y-6">
          {/* Featured Links (3 columns on desktop) */}
          <FadeIn delay={0.3} threshold={0}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {featuredLinks.map((social, index) => (
                <SocialLinkCard
                  key={social.id}
                  social={social}
                  variant="featured"
                  index={index}
                />
              ))}
            </div>
          </FadeIn>

          {/* Regular Links (4 columns on desktop) */}
          <FadeIn delay={0.5} threshold={0}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {regularLinks.map((social, index) => (
                <SocialLinkCard
                  key={social.id}
                  social={social}
                  variant="standard"
                  index={index + featuredLinks.length}
                />
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Footer CTA */}
        <FadeIn delay={0.8} threshold={0}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Want to learn more?{" "}
              <a
                href="/"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Visit my portfolio →
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
