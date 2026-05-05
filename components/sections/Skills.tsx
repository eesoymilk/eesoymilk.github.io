import { SectionLabel } from "@/components/SectionLabel";
import { skillGroups } from "@/lib/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="05" label="stack" title="What I work with." />

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {skillGroups.map((group) => (
            <div key={group.name}>
              <div className="mb-4 text-[0.7rem] uppercase tracking-[0.2em] text-accent">
                {group.label}
              </div>
              <ul className="flex flex-wrap gap-x-2 gap-y-2 text-xs sm:text-sm">
                {group.skills.map((s) => (
                  <li
                    key={s}
                    className="border border-border px-2 py-1 text-foreground/85 transition-colors hover:border-accent hover:text-accent"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
