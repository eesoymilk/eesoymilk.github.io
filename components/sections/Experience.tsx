import { SectionLabel } from "@/components/SectionLabel";
import { experiences } from "@/lib/data/experience";

function formatDate(date: string | null) {
  if (!date) return "present";
  const [y, m] = date.split("-");
  if (!m) return date;
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  return `${months[Number(m) - 1]} '${y.slice(2)}`;
}

export function Experience() {
  return (
    <section
      id="experience"
      className="relative px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="03" label="experience" title="Industry work." />

        <ol className="space-y-12 md:space-y-14">
          {experiences.map((e) => (
            <li
              key={e.id}
              className="group relative grid gap-3 md:grid-cols-[14rem_1fr] md:gap-10"
            >
              <div className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground md:pt-2">
                <div className="text-foreground/80">
                  {formatDate(e.startDate)}{" "}
                  <span className="text-muted-foreground/60">→</span>{" "}
                  {formatDate(e.endDate)}
                </div>
                <div className="mt-1 text-muted-foreground/60">
                  {e.location}
                </div>
              </div>

              <div className="min-w-0">
                <h3 className="text-base font-bold leading-tight md:text-lg">
                  {e.position}
                  <span className="block text-sm font-normal text-muted-foreground md:inline md:before:mx-2 md:before:text-muted-foreground/60 md:before:content-['/']">
                    {e.company}
                  </span>
                </h3>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed md:text-[0.95rem]">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.45em] h-[0.4em] w-[0.4em] flex-shrink-0 bg-accent/70"
                      />
                      <span className="min-w-0 break-words text-foreground/85">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                  {e.technologies.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
