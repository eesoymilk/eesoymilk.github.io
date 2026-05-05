import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons/brand";
import { personalInfo } from "@/lib/data/personal";

const links = [
  {
    label: "github",
    href: "https://github.com/eesoymilk",
    icon: GithubIcon,
  },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/eesoymilk",
    icon: LinkedinIcon,
  },
  {
    label: "x",
    href: "https://x.com/eesoymilk",
    icon: XIcon,
  },
  {
    label: "email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
          <span>
            <span className="text-accent">&lt;/</span>
            {personalInfo.nickname}
            <span className="text-accent">&gt;</span>
          </span>
          <span className="text-muted-foreground/60 normal-case tracking-normal">
            built with next, tailwind, jetbrains mono. ©{" "}
            {new Date().getFullYear()}.
          </span>
        </div>

        <ul className="flex items-center gap-4">
          {links.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center text-muted-foreground transition-colors hover:text-accent"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
