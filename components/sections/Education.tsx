import { SectionLabel } from "@/components/SectionLabel";
import { education } from "@/lib/data/education";

function fmt(date: string) {
  if (date.toLowerCase().startsWith("expected")) return date.toLowerCase();
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

export function Education() {
  return (
    <section
      id="education"
      className="relative px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="04" label="education" title="School." />

        <ol className="space-y-12 md:space-y-14">
          {education.map((ed) => (
            <li
              key={ed.id}
              className="grid gap-3 md:grid-cols-[14rem_1fr] md:gap-10"
            >
              <div className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground md:pt-2">
                <div className="text-foreground/80">
                  {fmt(ed.startDate)}{" "}
                  <span className="text-muted-foreground/60">→</span>{" "}
                  {fmt(ed.endDate)}
                </div>
                {ed.gpa ? (
                  <div className="mt-1">
                    <span className="text-muted-foreground/60">gpa</span>{" "}
                    <span className="text-accent">{ed.gpa}</span>
                  </div>
                ) : null}
              </div>

              <div className="min-w-0">
                <h3 className="text-base font-bold leading-tight md:text-lg">
                  {ed.degree} — {ed.field}
                  <span className="block text-sm font-normal text-muted-foreground">
                    {ed.institution}
                  </span>
                </h3>

                {ed.bullets ? (
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed md:text-[0.95rem]">
                    {ed.bullets.map((b) => (
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
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
