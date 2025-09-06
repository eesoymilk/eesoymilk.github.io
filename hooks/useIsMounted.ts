import { useEffect, useState } from "react";

/**
 * Hook to check if component is mounted on client side
 * Useful for preventing hydration mismatches in SSR/static export
 */
export function useIsMounted(): boolean {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure proper hydration
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return isMounted;
}
