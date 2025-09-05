"use client";

import { useState } from "react";

import { FadeIn } from "@/components/animations/FadeIn";
import { Stagger } from "@/components/animations/Stagger";
import { projects, projectCategories } from "@/lib/data/projects";
import type { Project } from "@/types";
import { FilterBar } from "./FilterBar";
import { ProjectGrid } from "./ProjectGrid";

export function Research() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Research & <span className="text-gradient-secondary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Exploring the intersection of research and development through
              innovative projects and cutting-edge solutions.
            </p>
          </div>
        </FadeIn>

        {/* Filter Bar */}
        <FadeIn delay={0.2}>
          <FilterBar
            categories={projectCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </FadeIn>

        {/* Featured Projects Grid */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <FadeIn delay={0.4}>
              <h3 className="text-2xl font-bold mb-8 text-center">
                Featured Projects
              </h3>
            </FadeIn>
            
            <Stagger staggerDelay={0.1}>
              <ProjectGrid 
                projects={featuredProjects} 
                variant="featured"
                onProjectSelect={setSelectedProject}
              />
            </Stagger>
          </div>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div>
            <FadeIn delay={0.6}>
              <h3 className="text-2xl font-bold mb-8 text-center">
                Other Projects
              </h3>
            </FadeIn>
            
            <Stagger staggerDelay={0.1}>
              <ProjectGrid 
                projects={otherProjects} 
                variant="standard"
                onProjectSelect={setSelectedProject}
              />
            </Stagger>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <FadeIn delay={0.4}>
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted/20 flex items-center justify-center">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                No projects match the selected category. Try selecting a different filter.
              </p>
            </div>
          </FadeIn>
        )}

        {/* Project Modal would go here */}
        {/* TODO: Implement ProjectModal component */}
      </div>
    </section>
  );
}
