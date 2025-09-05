"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Stagger } from "@/components/animations/Stagger";
import { personalInfo } from "@/lib/data/personal";
import { education } from "@/lib/data/education";
import { stats } from "@/lib/data/stats";
import { Philosophy } from "./Philosophy";
import { StatsCards } from "./StatsCards";
import { Timeline } from "./Timeline";

export function About() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about creating innovative solutions through cutting-edge
              technology and research.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Profile Image */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-1">
                  <div className="w-full h-full bg-background rounded-xl"></div>
                </div>
                
                {/* Placeholder for profile image */}
                <div className="relative z-10 aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        {personalInfo.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <p className="text-muted-foreground">Profile photo coming soon</p>
                  </div>
                </div>
              </div>

              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full blur-xl"></div>
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

        {/* Education Timeline */}
        <div className="mt-24">
          <FadeIn delay={0.8}>
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4">
                Education <span className="text-gradient-secondary">Journey</span>
              </h3>
              <p className="text-lg text-muted-foreground">
                My academic background and learning path
              </p>
            </div>
          </FadeIn>

          <Stagger staggerDelay={0.2}>
            <Timeline items={education} />
          </Stagger>
        </div>

        {/* Philosophy */}
        <div className="mt-24">
          <Philosophy quote={personalInfo.philosophy} />
        </div>
      </div>
    </section>
  );
}
