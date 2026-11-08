import React, { createContext, useEffect } from "react";

export type Theme = "light";
export type BrandColor = "cyan" | "amber" | "emerald" | "violet" | "rose" | "gold";

export interface BrandColorConfig {
  id: BrandColor;
  name: string;
  gradientText: string;
  lightGradientText: string;
  accent: string;
  accentFrom: string;
  accentTo: string;
  dotColor: string;
  badgeBg: string;
  borderAccent: string;
}

export const BRAND_COLORS: Record<BrandColor, BrandColorConfig> = {
  cyan: {
    id: "cyan",
    name: "TechSasi Blue & Cyan",
    gradientText: "from-[#00E5FF] to-[#0061FF]",
    lightGradientText: "from-[#00E5FF] to-[#0061FF]",
    accent: "#00E5FF",
    accentFrom: "#00E5FF",
    accentTo: "#0061FF",
    dotColor: "bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]",
    badgeBg: "bg-[#EAF5FF] text-[#0061FF] border-[#66CCFF]/40",
    borderAccent: "border-[#0061FF]/40",
  },
  amber: {
    id: "amber",
    name: "Solar Amber",
    gradientText: "from-amber-400 via-amber-300 to-orange-400",
    lightGradientText: "from-amber-500 via-amber-400 to-orange-500",
    accent: "#f59e0b",
    accentFrom: "#f97316",
    accentTo: "#fbbf24",
    dotColor: "bg-amber-500",
    badgeBg: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    borderAccent: "border-amber-500/40",
  },
  emerald: {
    id: "emerald",
    name: "Neon Emerald",
    gradientText: "from-emerald-400 via-teal-300 to-green-400",
    lightGradientText: "from-emerald-600 via-teal-500 to-green-600",
    accent: "#10b981",
    accentFrom: "#059669",
    accentTo: "#34d399",
    dotColor: "bg-emerald-500",
    badgeBg: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    borderAccent: "border-emerald-500/40",
  },
  violet: {
    id: "violet",
    name: "Electric Violet",
    gradientText: "from-violet-400 via-purple-300 to-indigo-400",
    lightGradientText: "from-violet-600 via-purple-500 to-indigo-600",
    accent: "#8b5cf6",
    accentFrom: "#6d28d9",
    accentTo: "#a78bfa",
    dotColor: "bg-violet-500",
    badgeBg: "bg-violet-500/10 text-violet-500 border-violet-500/20",
    borderAccent: "border-violet-500/40",
  },
  rose: {
    id: "rose",
    name: "Crimson Rose",
    gradientText: "from-rose-400 via-pink-300 to-red-400",
    lightGradientText: "from-rose-600 via-pink-500 to-red-600",
    accent: "#f43f5e",
    accentFrom: "#e11d48",
    accentTo: "#fb7185",
    dotColor: "bg-rose-500",
    badgeBg: "bg-rose-500/10 text-rose-500 border-rose-500/20",
    borderAccent: "border-rose-500/40",
  },
  gold: {
    id: "gold",
    name: "Imperial Gold",
    gradientText: "from-yellow-300 via-amber-200 to-yellow-500",
    lightGradientText: "from-yellow-600 via-amber-500 to-yellow-700",
    accent: "#eab308",
    accentFrom: "#ca8a04",
    accentTo: "#facc15",
    dotColor: "bg-yellow-500",
    badgeBg: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    borderAccent: "border-yellow-500/40",
  },
};

export interface ThemeContextType {
  theme: "light";
  toggleTheme: () => void;
  setTheme: (theme: string) => void;
  brandColor: BrandColor;
  setBrandColor: (color: BrandColor) => void;
  brandConfig: BrandColorConfig;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
  setTheme: () => {},
  brandColor: "cyan",
  setBrandColor: () => {},
  brandConfig: BRAND_COLORS.cyan,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const currentBrandConfig = BRAND_COLORS.cyan;

  useEffect(() => {
    // Clear any previously persisted theme so user session stays locked to clean default
    try {
      localStorage.removeItem("techsasi_theme");
    } catch {
      // ignore
    }

    const root = document.documentElement;
    root.setAttribute("data-theme", "light");
    root.classList.remove("dark", "contrast");
    root.classList.add("light");
    root.style.colorScheme = "light";

    root.style.setProperty("--accent", currentBrandConfig.accent);
    root.style.setProperty("--accent-from", currentBrandConfig.accentFrom);
    root.style.setProperty("--accent-to", currentBrandConfig.accentTo);
    root.setAttribute("data-brand-color", "cyan");
  }, [currentBrandConfig]);

  return (
    <ThemeContext.Provider
      value={{
        theme: "light",
        toggleTheme: () => {},
        setTheme: () => {},
        brandColor: "cyan",
        setBrandColor: () => {},
        brandConfig: currentBrandConfig,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
