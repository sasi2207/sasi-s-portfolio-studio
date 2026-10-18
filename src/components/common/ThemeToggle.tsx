import React from "react";
import { Sun, Moon, Contrast } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/useTheme";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "", showLabel = false }) => {
  const { theme, setTheme, toggleTheme } = useTheme();

  return (
    <div className={`inline-flex items-center p-1 rounded-full border border-[var(--border-line)] bg-[var(--surface-fill)] shadow-sm backdrop-blur-sm ${className}`}>
      {/* Light Studio */}
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={`relative px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 ${
          theme === "light"
            ? "text-[var(--text-primary)] font-semibold shadow-xs"
            : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
        }`}
        title="Light Studio Theme"
        aria-label="Light Studio Theme"
      >
        {theme === "light" && (
          <motion.div
            layoutId="lumora-theme-active-indicator"
            className="absolute inset-0 rounded-full bg-[var(--card-bg)] border border-[var(--border-line)] shadow-xs"
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
          />
        )}
        <Sun className="w-3.5 h-3.5 relative z-10 text-[var(--accent)]" />
        {showLabel && <span className="relative z-10 text-[11px] tracking-wide">Studio</span>}
      </button>

      {/* Dark Ink */}
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={`relative px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 ${
          theme === "dark"
            ? "text-[var(--text-primary)] font-semibold shadow-xs"
            : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
        }`}
        title="Dark Ink Theme"
        aria-label="Dark Ink Theme"
      >
        {theme === "dark" && (
          <motion.div
            layoutId="lumora-theme-active-indicator"
            className="absolute inset-0 rounded-full bg-[var(--card-bg)] border border-[var(--border-line)] shadow-xs"
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
          />
        )}
        <Moon className="w-3.5 h-3.5 relative z-10 text-[var(--accent)]" />
        {showLabel && <span className="relative z-10 text-[11px] tracking-wide">Ink</span>}
      </button>

      {/* High Contrast */}
      <button
        type="button"
        onClick={() => setTheme("contrast")}
        className={`relative px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 ${
          theme === "contrast"
            ? "text-[var(--text-primary)] font-semibold shadow-xs"
            : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
        }`}
        title="High Contrast Theme"
        aria-label="High Contrast Theme"
      >
        {theme === "contrast" && (
          <motion.div
            layoutId="lumora-theme-active-indicator"
            className="absolute inset-0 rounded-full bg-[var(--card-bg)] border border-[var(--border-line)] shadow-xs"
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
          />
        )}
        <Contrast className="w-3.5 h-3.5 relative z-10 text-[var(--accent)]" />
        {showLabel && <span className="relative z-10 text-[11px] tracking-wide">Contrast</span>}
      </button>
    </div>
  );
};

export default ThemeToggle;
