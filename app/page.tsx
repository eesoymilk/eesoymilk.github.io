import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Now } from "@/components/sections/Now";
import { Research } from "@/components/sections/Research";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Now />
      <Research />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
