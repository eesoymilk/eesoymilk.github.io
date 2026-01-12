"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Stagger } from "@/components/animations/Stagger";
import { projects } from "@/lib/data/projects";
import { ProjectGrid } from "./ProjectGrid";

export function Research() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Research &{" "}
              <span className="text-gradient-secondary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Exploring the intersection of research and development through
              innovative projects and cutting-edge solutions.
            </p>
          </div>
        </FadeIn>

        <Stagger staggerDelay={0.1}>
          <ProjectGrid
            projects={projects.filter((project) => project.featured)}
            variant="featured"
          />
        </Stagger>

        {/* Empty State */}
        {projects.length === 0 && (
          <FadeIn delay={0.4}>
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted/20 flex items-center justify-center">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                No projects match the selected category. Try selecting a
                different filter.
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
