"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Stagger } from "@/components/animations/Stagger";
import { education } from "@/lib/data/education";
import { EducationTimeline } from "./EducationTimeline";
import { AcademicAchievements } from "./AcademicAchievements";

export function Education() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Educational <span className="text-gradient-milk">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My academic foundation and continuous learning path that shaped my
              expertise in technology and research.
            </p>
          </div>
        </FadeIn>

        {/* Academic Achievements Overview */}
        <FadeIn delay={0.2}>
          <AcademicAchievements />
        </FadeIn>

        {/* Education Timeline */}
        <div className="mt-20">
          <FadeIn delay={0.4}>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">
                Academic <span className="text-secondary">Background</span>
              </h3>
              <p className="text-muted-foreground">
                Formal education and key milestones
              </p>
            </div>
          </FadeIn>

          <Stagger staggerDelay={0.2}>
            <EducationTimeline items={education} />
          </Stagger>
        </div>

        {/* Learning Philosophy */}
        <FadeIn delay={0.8}>
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
              <h3 className="text-2xl font-bold mb-4">Learning Philosophy</h3>
              <blockquote className="text-lg text-muted-foreground italic">
                "Education is not just about acquiring knowledge, but about
                developing the ability to think critically, solve complex
                problems, and adapt to an ever-changing technological
                landscape."
              </blockquote>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
