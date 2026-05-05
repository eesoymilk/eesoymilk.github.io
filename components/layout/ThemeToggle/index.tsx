"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const next = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      className={`group inline-flex h-11 items-center gap-2 px-2 py-1 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors ${className ?? ""}`}
    >
      <span aria-hidden="true" className="text-accent">
        {mounted ? (isDark ? "◐" : "◑") : "◐"}
      </span>
      <span className="hidden sm:inline">
        {mounted ? (isDark ? "dark" : "light") : "—"}
      </span>
    </button>
  );
}
