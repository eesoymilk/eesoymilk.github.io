import { useEffect, useState } from "react";

/**
 * Hook to check if component is mounted on client side
 * Useful for preventing hydration mismatches
 */
export function useIsMounted(): boolean {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}
