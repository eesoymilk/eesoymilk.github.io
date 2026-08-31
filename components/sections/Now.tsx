import { SectionLabel } from "@/components/SectionLabel";

const focusItems = [
  {
    tag: "work",
    title: "SWE, MLOps @ FieldAI",
    detail:
      "Kubernetes training and eval workloads, Airflow data pipelines - the plumbing that turns robot data into deployed foundation-model policies.",
    advisor: "Irvine, CA",
  },
];

export function Now() {
  return (
    <section
      id="now"
      className="relative px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="01" label="now" />

        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight md:text-3xl">
              I make robot learning{" "}
              <span className="text-accent">reproducible</span> - from data
              pipelines to deployed policies.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              At FieldAI I work on the MLOps side of robot foundation models:
              the infrastructure that{" "}
              <em className="not-italic text-foreground">
                trains, evaluates, and ships
              </em>{" "}
              policies to real hardware, so research ideas turn into robots that
              behave the same way every time.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Before that: an MS at UCLA on VLA personalization and
              user-adaptive robot policies, and backends for biomedical labs,
              gov't healthcare exchange, and elder-care robotics. I like systems
              that survive contact with the real world.
            </p>
          </div>

          <ul className="space-y-6 md:pt-1">
            {focusItems.map((item) => (
              <li
                key={item.title}
                className="border-l-2 border-border pl-5 transition-colors hover:border-accent"
              >
                <div className="flex items-baseline gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="text-accent">▸</span>
                  <span>{item.tag}</span>
                </div>
                <h3 className="mt-1 text-base font-semibold tracking-tight md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
                <p className="mt-1 text-xs text-muted-foreground/70">
                  {item.advisor}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
