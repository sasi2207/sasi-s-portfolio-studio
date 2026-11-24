import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Onest", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Onest", "Outfit", "sans-serif"],
        heading: ["Onest", "Outfit", "sans-serif"],
        body: ["Onest", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        brand: {
          primary: "#0061FF",      /* Primary Blue */
          deep: "#0033CC",         /* Deep Blue */
          navy: "#001B66",         /* Navy Blue */
          cyan: "#00E5FF",         /* Neon Cyan */
          lightblue: "#66CCFF",    /* Light Blue */
          softblue: "#EAF5FF",     /* Soft Blue */
          bg: "#F5F8FF",           /* Light Background */
          dark: "#111827",         /* Dark Text */
          black: "#000000",
          muted: "#64748B",        /* Muted Text */
          white: "#FFFFFF",
        },
        lumora: {
          bg: "var(--bg-primary)",
          text: "var(--text-primary)",
          ink: "var(--surface-ink)",
          fill: "var(--surface-fill)",
          "fill-subtle": "var(--surface-fill-subtle)",
          border: "var(--border-line)",
          muted: "var(--text-muted)",
          subtle: "var(--text-subtle)",
          accent: "var(--accent)",
          "accent-from": "var(--accent-from)",
          "accent-to": "var(--accent-to)",
          hero: "var(--hero-bg)",
          card: "var(--card-bg)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        shimmer: "shimmer 2s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      backgroundImage: {
        "hero-pattern": "radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, hsl(var(--accent) / 0.1) 0%, transparent 50%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "primary-gradient": "linear-gradient(135deg, #00E5FF 0%, #0061FF 100%)",
        "dark-gradient": "linear-gradient(135deg, #0033CC 0%, #001B66 100%)",
        "soft-gradient": "linear-gradient(135deg, #FFFFFF 0%, #EAF5FF 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
