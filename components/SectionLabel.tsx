interface SectionLabelProps {
  index: string;
  label: string;
  title?: string;
  className?: string;
}

export function SectionLabel({
  index,
  label,
  title,
  className,
}: SectionLabelProps) {
  return (
    <div className={`mb-10 md:mb-14 ${className ?? ""}`}>
      <div className="flex items-baseline gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span className="text-accent">{index}</span>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
        <span>{label}</span>
      </div>
      {title ? (
        <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-balance">
          {title}
        </h2>
      ) : null}
    </div>
  );
}
