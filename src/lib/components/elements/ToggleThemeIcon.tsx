import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { RxMoon as RxMoonIcon, RxSun as RxSunIcon } from "react-icons/rx";
import useHasMounted from "@/lib/hooks/useHasMounted";

export default function ToggleThemeIcon() {
  const mounted = useHasMounted();
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

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
