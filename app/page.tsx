import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Research } from "@/components/sections/Research";
import { Experience } from "@/components/sections/Experience";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Portfolio sections */}
      <div className="space-y-32">
        {/* About section */}
        <section id="about">
          <About />
        </section>

        {/* Education section */}
        <section id="education">
          <Education />
        </section>

        {/* Research section */}
        <section id="research">
          <Research />
        </section>

        {/* Experience section */}
        <section id="experience">
          <Experience />
        </section>

        {/* Skills section placeholder */}
        <section id="skills" className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Skills</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </section>

        {/* Contact section placeholder */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Contact</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </section>
      </div>
    </div>
  );
}
