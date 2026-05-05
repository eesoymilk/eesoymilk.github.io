import { RichBullet } from "@/components/Math";
import { SectionLabel } from "@/components/SectionLabel";
import { projects } from "@/lib/data/projects";

function formatDate(date: string) {
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

function dateRange(p: { startDate: string; endDate?: string; status: string }) {
  const start = formatDate(p.startDate);
  if (p.status === "in-progress") return `${start} → present`;
  if (!p.endDate) return start;
  return `${start} → ${formatDate(p.endDate)}`;
}

export function Research() {
  return (
    <section
      id="research"
      className="relative px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="02" label="research" title="Selected projects." />

        <ol className="space-y-16 md:space-y-20">
          {projects.map((p, i) => (
            <li key={p.id} className="group relative">
              <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
                <div className="flex items-start gap-3 md:flex-col md:gap-4 md:pt-1">
                  <span className="font-bold text-3xl leading-none text-muted-foreground/40 md:text-5xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-[0.7rem] uppercase tracking-[0.2em] text-accent md:mt-2">
                    {p.status === "in-progress" ? "● active" : "○ completed"}
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="text-balance text-xl font-bold leading-tight tracking-tight md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground md:text-base">
                    {p.tagline}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                    {p.advisor ? (
                      <span>
                        <span className="text-muted-foreground/60">
                          advisor
                        </span>{" "}
                        <span className="text-foreground/80">{p.advisor}</span>
                      </span>
                    ) : null}
                    {p.lab ? (
                      <span>
                        <span className="text-muted-foreground/60">lab</span>{" "}
                        <span className="text-foreground/80">{p.lab}</span>
                      </span>
                    ) : null}
                    {p.institution ? (
                      <span>
                        <span className="text-muted-foreground/60">at</span>{" "}
                        <span className="text-foreground/80">
                          {p.institution}
                        </span>
                      </span>
                    ) : null}
                    <span>
                      <span className="text-muted-foreground/60">when</span>{" "}
                      <span className="text-foreground/80">{dateRange(p)}</span>
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm leading-relaxed md:text-[0.95rem]">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[0.45em] h-[0.4em] w-[0.4em] flex-shrink-0 bg-accent"
                        />
                        <span className="min-w-0 break-words text-foreground/90">
                          <RichBullet text={b} />
                        </span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                    {p.technologies.map((t) => (
                      <li
                        key={t}
                        className="hover:text-foreground transition-colors"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
