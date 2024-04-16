import React, { useCallback } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { RxMoon as RxMoonIcon, RxSun as RxSunIcon } from "react-icons/rx";
import useHasMounted from "@/lib/hooks/useHasMounted";

function useThemeTransition() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const toggleTheme = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const md = window.matchMedia("(max-width: 768px)").matches;

      if (
        !document.startViewTransition ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        setTheme(isDark ? "light" : "dark");
        return;
      }

      const x = e.clientX;
      const y = e.clientY;
      const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
      );

      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setTheme(isDark ? "light" : "dark");
        });
      });

      transition.ready.then(() => {
        const duration = md ? 400 : 600;

        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
            filter: [`blur(5px)`, `blur(0)`],
          },
          {
            duration,
            easing: "cubic-bezier(.76,.32,.29,.99)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    },
    [setTheme, isDark]
  );

  return {
    resolvedTheme,
    toggleTheme,
  };
}
export default function ToggleThemeIcon() {
  const mounted = useHasMounted();
  const { toggleTheme, resolvedTheme } = useThemeTransition();

  if (!mounted) return null;

  return (
    <motion.button
      id="toggle-theme-icon"
      aria-label="Toggle Theme Icon"
      onClick={toggleTheme}
      className="rounded-xl bg-foreground-200 p-2"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {resolvedTheme === "light" ? <RxSunIcon /> : <RxMoonIcon />}
    </motion.button>
  );
}
