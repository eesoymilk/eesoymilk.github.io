"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Stagger } from "@/components/animations/Stagger";
import { experiences } from "@/lib/data/experience";
import { ExperienceTimeline } from "./ExperienceTimeline";

export function Experience() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional{" "}
              <span className="text-gradient-accent">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey through diverse roles and challenging projects that have
              shaped my expertise in software development and research.
            </p>
          </div>
        </FadeIn>

        {/* Experience Timeline */}
        <Stagger staggerDelay={0.2}>
          <ExperienceTimeline experiences={experiences} />
        </Stagger>

        {/* Summary Stats */}
        <FadeIn delay={0.8}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">
                {experiences.length}+
              </div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">
                {new Date().getFullYear() - 2021}+
              </div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-muted-foreground">
                Projects Delivered
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-500">15+</div>
              <div className="text-sm text-muted-foreground">
                Technologies Mastered
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
