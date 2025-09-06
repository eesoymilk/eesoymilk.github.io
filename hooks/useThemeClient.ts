import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/**
 * Custom hook that safely uses next-themes without causing hydration mismatches.
 * Returns the theme only after client-side hydration is complete.
 *
 * @returns object with theme information that's safe for SSR
 *
 * @example
 * ```tsx
 * function ThemeAwareComponent() {
 *   const { theme, isDark, isClient } = useThemeClient();
 *
 *   if (!isClient) {
 *     return <div>Loading...</div>; // or default state
 *   }
 *
 *   return <div>Theme: {theme}</div>;
 * }
 * ```
 */
export function useThemeClient() {
  const { theme, systemTheme, resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // During SSR, return safe defaults
  if (!isClient) {
    return {
      theme: undefined,
      systemTheme: undefined,
      resolvedTheme: undefined,
      isDark: false,
      isClient: false,
    };
  }

  // On client, return actual theme values
  const currentTheme = resolvedTheme || theme || systemTheme;
  const isDark = currentTheme === "dark";

  return {
    theme: currentTheme,
    systemTheme,
    resolvedTheme,
    isDark,
    isClient: true,
  };
}
