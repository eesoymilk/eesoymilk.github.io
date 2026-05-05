import { Avatar } from "@/components/Avatar";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { personalInfo } from "@/lib/data/personal";
import { getAllSocials } from "@/lib/data/socials";

export default function LinkPage() {
  const links = getAllSocials();

  return (
    <main className="min-h-[100svh] bg-background text-foreground">
      <header className="flex items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="text-accent">~$</span>
          <span>eesoymilk</span>
        </a>
        <div className="flex items-center gap-2">
          <a
            href="/"
            className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
          >
            ← portfolio
          </a>
          <ThemeToggle />
        </div>
      </header>

      <div className="mx-auto w-full max-w-2xl px-5 pb-20 pt-12 sm:px-8 sm:pt-20">
        <div className="mb-3 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="text-accent">▸</span>
          <span>links</span>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>
        <div className="flex items-start gap-5 sm:gap-6">
          <Avatar size={88} priority className="sm:hidden" />
          <Avatar size={120} priority className="hidden sm:block" />
          <div className="min-w-0 flex-1">
            <h1 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              {personalInfo.name}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              {personalInfo.title}
            </p>
            <p className="mt-1 text-xs text-muted-foreground/70 sm:text-sm">
              {personalInfo.location}
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {personalInfo.bio}
        </p>

        <ul className="mt-12 space-y-2">
          {links.map(
            ({
              id,
              label,
              href,
              username,
              description,
              icon: Icon,
              featured,
            }) => (
              <li key={id}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className={`group flex min-h-[64px] items-center gap-4 border border-border px-4 py-3 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    featured ? "bg-muted/40" : ""
                  }`}
                >
                  <Icon
                    className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
                    aria-hidden="true"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {label}
                    </span>
                    <span className="block truncate text-sm text-foreground/90 sm:text-base">
                      {username}
                    </span>
                    {description ? (
                      <span className="mt-0.5 block truncate text-xs text-muted-foreground/70">
                        {description}
                      </span>
                    ) : null}
                  </span>
                  <span className="text-muted-foreground transition-colors group-hover:text-accent">
                    ↗
                  </span>
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    </main>
  );
}
