"use client";

import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

const MATH_RE = /\$([^$]+)\$/g;

export function RichBullet({ text }: { text: string }) {
  const parts: Array<{ kind: "text" | "math"; value: string }> = [];
  let lastIndex = 0;
  for (const match of text.matchAll(MATH_RE)) {
    const [full, expr] = match;
    const idx = match.index ?? 0;
    if (idx > lastIndex) {
      parts.push({ kind: "text", value: text.slice(lastIndex, idx) });
    }
    parts.push({ kind: "math", value: expr });
    lastIndex = idx + full.length;
  }
  if (lastIndex < text.length) {
    parts.push({ kind: "text", value: text.slice(lastIndex) });
  }
  return (
    <>
      {parts.map((part, i) => {
        const key = `${part.kind}:${i}:${part.value.slice(0, 16)}`;
        return part.kind === "math" ? (
          <InlineMath key={key} math={part.value} />
        ) : (
          <span key={key}>{part.value}</span>
        );
      })}
    </>
  );
}
