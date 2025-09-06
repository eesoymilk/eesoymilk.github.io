import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Research } from "@/components/sections/Research";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

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

        {/* Experience section */}
        <section id="experience">
          <Experience />
        </section>

        {/* Education section */}
        <section id="education">
          <Education />
        </section>

        {/* Research section */}
        <section id="research">
          <Research />
        </section>

        {/* Contact section */}
        <section id="contact">
          <Contact />
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
