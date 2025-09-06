import { useEffect, useState } from "react";

/**
 * Custom hook to prevent hydration mismatches by ensuring code only runs on the client side.
 * Returns true only after the component has mounted on the client.
 *
 * @returns boolean - true when running on client, false during SSR
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isClient = useClientOnly();
 *
 *   if (!isClient) {
 *     return <div>Loading...</div>; // or skeleton
 *   }
 *
 *   return <div>Client-only content</div>;
 * }
 * ```
 */
export function useClientOnly(): boolean {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
