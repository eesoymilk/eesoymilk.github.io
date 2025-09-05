import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Hero } from "@/components/sections/Hero";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with theme toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gradient-primary">eesoymilk</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero section */}
      <Hero />

      {/* About section placeholder */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6 space-y-12">
          {/* Color palette showcase */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Brand Colors</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Primary card */}
              <Card className="hover-lift">
                <CardHeader>
                  <div className="w-full h-20 rounded-md bg-primary mb-4"></div>
                  <CardTitle className="text-primary">Primary Green</CardTitle>
                  <CardDescription>Growth & Innovation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">Brand Color</Badge>
                </CardContent>
              </Card>

              {/* Secondary card */}
              <Card className="hover-lift">
                <CardHeader>
                  <div className="w-full h-20 rounded-md bg-secondary mb-4"></div>
                  <CardTitle className="text-secondary">
                    Secondary Blue
                  </CardTitle>
                  <CardDescription>Technology & Reliability</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">Brand Color</Badge>
                </CardContent>
              </Card>

              {/* Accent card */}
              <Card className="hover-lift">
                <CardHeader>
                  <div className="w-full h-20 rounded-md bg-accent mb-4"></div>
                  <CardTitle className="text-accent">Accent Purple</CardTitle>
                  <CardDescription>Creativity & Uniqueness</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">Brand Color</Badge>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Gradient showcase */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Gradient Effects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-8 rounded-lg gradient-primary text-white text-center font-semibold">
                Primary Gradient
              </div>
              <div className="p-8 rounded-lg gradient-secondary text-white text-center font-semibold">
                Secondary Gradient
              </div>
              <div className="p-8 rounded-lg gradient-accent text-white text-center font-semibold">
                Accent Gradient
              </div>
              <div className="p-8 rounded-lg gradient-milk text-white text-center font-semibold">
                Milk Theme
              </div>
            </div>
          </section>

          {/* Glassmorphism card */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Glass Effect</h2>

            <div className="relative">
              <div className="gradient-primary p-1 rounded-xl">
                <div className="p-8 rounded-lg glass backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4">
                    Glassmorphism Card
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    This card demonstrates the glassmorphism effect with
                    backdrop blur and subtle transparency. It adapts beautifully
                    to both light and dark themes.
                  </p>
                  <div className="flex gap-4">
                    <div className="px-4 py-2 rounded-full bg-primary/20 text-primary font-medium">
                      Tag 1
                    </div>
                    <div className="px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium">
                      Tag 2
                    </div>
                    <div className="px-4 py-2 rounded-full bg-accent/20 text-accent font-medium">
                      Tag 3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Animation showcase */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Animations</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border bg-card text-card-foreground animate-fade-in hover-lift">
                <h3 className="text-lg font-semibold mb-2">Fade In</h3>
                <p className="text-sm text-muted-foreground">
                  Smooth fade in animation
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card text-card-foreground animate-slide-up hover-lift">
                <h3 className="text-lg font-semibold mb-2">Slide Up</h3>
                <p className="text-sm text-muted-foreground">
                  Slide up with fade effect
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card text-card-foreground animate-scale-in hover-lift">
                <h3 className="text-lg font-semibold mb-2">Scale In</h3>
                <p className="text-sm text-muted-foreground">
                  Scale from small to full size
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
