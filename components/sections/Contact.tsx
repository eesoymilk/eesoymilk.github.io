"use client";

import { Mail } from "lucide-react";
import { useState } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand";
import { SectionLabel } from "@/components/SectionLabel";
import { personalInfo } from "@/lib/data/personal";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <section
      id="contact"
      className="relative px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="06" label="contact" title="Say hi." />

        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          I'm wrapping up my MS in mid-2026 and looking for{" "}
          <span className="text-foreground">robotics SWE</span> /{" "}
          <span className="text-foreground">MLE</span> /{" "}
          <span className="text-foreground">SWE</span> roles. Best way to reach
          me is email.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:max-w-2xl md:grid-cols-3">
          <button
            type="button"
            onClick={copyEmail}
            className="group flex min-h-[60px] items-center justify-between border border-border px-4 py-3 text-left transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="flex items-center gap-3">
              <Mail
                className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent"
                aria-hidden="true"
              />
              <span className="text-sm">
                <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  email
                </span>
                <span className="block break-all text-foreground/90">
                  {personalInfo.email}
                </span>
              </span>
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-accent">
              {copied ? "copied" : "copy"}
            </span>
          </button>

          <a
            href="https://github.com/eesoymilk"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[60px] items-center justify-between border border-border px-4 py-3 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="flex items-center gap-3">
              <GithubIcon
                className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent"
                aria-hidden="true"
              />
              <span className="text-sm">
                <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  github
                </span>
                <span className="block text-foreground/90">@eesoymilk</span>
              </span>
            </span>
            <span className="text-muted-foreground transition-colors group-hover:text-accent">
              ↗
            </span>
          </a>

          <a
            href="https://linkedin.com/in/eesoymilk"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[60px] items-center justify-between border border-border px-4 py-3 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="flex items-center gap-3">
              <LinkedinIcon
                className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent"
                aria-hidden="true"
              />
              <span className="text-sm">
                <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  linkedin
                </span>
                <span className="block text-foreground/90">in/eesoymilk</span>
              </span>
            </span>
            <span className="text-muted-foreground transition-colors group-hover:text-accent">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
