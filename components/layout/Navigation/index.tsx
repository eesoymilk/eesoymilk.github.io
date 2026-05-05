"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const sections = [
  { id: "now", label: "now" },
  { id: "research", label: "research" },
  { id: "experience", label: "experience" },
  { id: "education", label: "education" },
  { id: "skills", label: "stack" },
  { id: "contact", label: "contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    }
    return () => {
      for (const o of observers) o.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 md:px-12 lg:px-16"
        aria-label="Primary"
      >
        <a
          href="#hero"
          className="group inline-flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="text-accent transition-transform group-hover:translate-x-0.5">
            ~$
          </span>
          <span className="text-foreground">eesoymilk</span>
          <span
            className="ml-1 inline-block h-[0.9em] w-[0.4em] bg-accent motion-safe:animate-pulse"
            aria-hidden="true"
          />
        </a>

        <ul className="hidden items-center gap-1 text-xs uppercase tracking-[0.18em] md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`group inline-flex items-center gap-1.5 px-3 py-2 transition-colors ${
                  active === s.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 transition-colors ${
                    active === s.id ? "bg-accent" : "bg-border"
                  }`}
                />
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 md:gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-11 w-11 items-center justify-center text-muted-foreground hover:text-foreground md:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-background transition-opacity md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <span className="text-sm font-semibold tracking-tight">
            <span className="text-accent">~$</span> eesoymilk
          </span>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <nav className="px-5 pt-6">
          <ul className="space-y-1 text-base">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[56px] items-center justify-between border-b border-border py-4 uppercase tracking-[0.15em] text-foreground hover:text-accent"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground">
                      0{i + 1}
                    </span>
                    {s.label}
                  </span>
                  <span className="text-muted-foreground">→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
