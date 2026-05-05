import { ArrowDown } from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand";
import { personalInfo } from "@/lib/data/personal";

const links = [
  {
    label: "resume.pdf",
    href: "/resume.pdf",
    external: false,
  },
  {
    label: "github",
    href: "https://github.com/eesoymilk",
    icon: GithubIcon,
    external: true,
  },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/eesoymilk",
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "email",
    href: `mailto:${personalInfo.email}`,
    external: true,
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-between px-5 pt-28 pb-12 sm:px-8 md:px-12 lg:px-16"
    >
      {/* corner registration marks — engineering-blueprint feel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 hidden md:block"
      >
        <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-foreground/40" />
        <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-foreground/40" />
        <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-foreground/40" />
        <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-foreground/40" />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-8 flex items-center gap-3 text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="text-accent">~/</span>
          <span>{personalInfo.nickname}</span>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
          <span className="hidden sm:inline">v.{new Date().getFullYear()}</span>
        </div>

        <div className="mb-6 flex items-center gap-4 sm:gap-5">
          <Avatar size={64} priority className="sm:hidden" />
          <Avatar size={88} priority className="hidden sm:block" />
          <div className="min-w-0 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
            <div>
              <span className="text-accent">@</span>
              <span className="text-foreground">{personalInfo.nickname}</span>
            </div>
            <div className="mt-1 text-muted-foreground/70">
              {personalInfo.location}
            </div>
          </div>
        </div>

        <h1 className="text-balance font-bold leading-[0.9] tracking-tight text-[clamp(2.5rem,11vw,7.5rem)]">
          <span className="block">Yu-Wei</span>
          <span className="block text-muted-foreground">
            Chang
            <span
              className="ml-2 inline-block h-[0.8em] w-[0.45em] translate-y-[-0.05em] bg-accent align-middle motion-safe:animate-pulse"
              aria-hidden="true"
            />
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          <span className="text-accent">&gt;</span>{" "}
          <span className="text-foreground">{personalInfo.title}</span>{" "}
          <span aria-hidden="true">·</span> {personalInfo.location}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {personalInfo.bio}
        </p>

        <ul className="mt-10 flex flex-wrap gap-x-2 gap-y-3 text-sm sm:text-base">
          {links.map(({ label, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group inline-flex min-h-[44px] items-center gap-2 border border-border px-4 py-2 transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="text-muted-foreground transition-colors group-hover:text-accent">
                  [
                </span>
                {Icon ? (
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                ) : null}
                <span>{label}</span>
                <span className="text-muted-foreground transition-colors group-hover:text-accent">
                  ]
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-16 flex w-full max-w-5xl flex-col gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-end sm:justify-between sm:text-xs">
        <span>
          <span className="text-accent">●</span> open to{" "}
          <span className="text-foreground">robotics swe</span> ·{" "}
          <span className="text-foreground">mle</span> ·{" "}
          <span className="text-foreground">swe</span> roles
        </span>
        <a
          href="#now"
          className="group inline-flex items-center gap-2 hover:text-foreground"
        >
          <span>scroll</span>
          <ArrowDown
            className="h-3 w-3 transition-transform motion-safe:group-hover:translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}
