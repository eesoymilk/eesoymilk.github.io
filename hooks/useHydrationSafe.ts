import { useEffect, useState } from "react";

/**
 * Comprehensive hook for preventing hydration mismatches in Next.js applications.
 * Provides utilities for safely handling client-side only operations.
 *
 * @returns object with hydration safety utilities
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { isClient, renderClientOnly, withFallback } = useHydrationSafe();
 *
 *   // Method 1: Conditional rendering
 *   if (!isClient) return <div>Loading...</div>;
 *
 *   // Method 2: Render client-only content
 *   return (
 *     <div>
 *       {renderClientOnly(() => <DynamicContent />)}
 *       {withFallback(
 *         () => <ThemeAwareComponent />,
 *         <DefaultComponent />
 *       )}
 *     </div>
 *   );
 * }
 * ```
 */
export function useHydrationSafe() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  /**
   * Renders content only on the client side
   */
  const renderClientOnly = <T>(renderFn: () => T): T | null => {
    return isClient ? renderFn() : null;
  };

  /**
   * Renders different content based on client/server state
   */
  const withFallback = <T>(clientRender: () => T, fallback: T): T => {
    return isClient ? clientRender() : fallback;
  };

  /**
   * Safely executes a function only on the client
   */
  const executeClientOnly = <T>(fn: () => T, defaultValue: T): T => {
    return isClient ? fn() : defaultValue;
  };

  return {
    isClient,
    renderClientOnly,
    withFallback,
    executeClientOnly,
  };
}
