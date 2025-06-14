import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768; // px, match Tailwind md breakpoint

export function useIsMobile(breakpoint = MOBILE_BREAKPOINT): boolean {
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth < breakpoint
  );

  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth < breakpoint);
    }

    window.addEventListener("resize", onResize);
    // Initial check in case of SSR or hydration mismatch
    onResize();

    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}
