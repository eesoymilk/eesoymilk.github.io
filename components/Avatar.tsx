"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data/personal";

interface AvatarProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

export function Avatar({
  size = 72,
  className,
  priority = false,
}: AvatarProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const src =
    mounted && resolvedTheme === "dark"
      ? personalInfo.profileImageDark
      : personalInfo.profileImage;

  return (
    <div
      className={`relative flex-shrink-0 overflow-hidden border border-border bg-muted ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={personalInfo.name}
        width={size}
        height={size}
        priority={priority}
        unoptimized
        className="h-full w-full object-cover"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/5"
      />
    </div>
  );
}
