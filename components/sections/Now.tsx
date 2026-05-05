import { SectionLabel } from "@/components/SectionLabel";

const focusItems = [
  {
    tag: "research",
    title: "UCVLA @ NECL",
    detail:
      "$\\mathcal{O}(1)$ personalization for VLA foundation models — RDT-2, π₀, Diffusion Policy.",
    advisor: "Prof. Jonathan Kao",
  },
  {
    tag: "research",
    title: "EasyReach @ HiLab",
    detail:
      "Adaptive robotic-arm assistance for wheelchair users. Vicon + UR5e + VLM-driven preference inference.",
    advisor: "Prof. Yang Zhang",
  },
  {
    tag: "teaching",
    title: "TA — ECE C147 / C247",
    detail:
      "Neural Networks & Deep Learning. 500-student course: discussions, exams, projects.",
    advisor: "UCLA",
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
              I build robots that learn{" "}
              <span className="text-accent">from people</span>, not just
              demonstrations.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              MS ECE at UCLA, working at the intersection of foundation models
              and physical hardware. The thread across my projects: making robot
              policies{" "}
              <em className="not-italic text-foreground">
                adapt to a specific user
              </em>{" "}
              — their handedness, their pace, their accessibility needs —
              without retraining the whole model.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Before grad school I shipped backends for biomedical labs, gov't
              healthcare exchange, and elder-care robotics. I like systems that
              survive contact with the real world.
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
