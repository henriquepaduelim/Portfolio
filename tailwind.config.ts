import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.25rem"
    },
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--color-card) / <alpha-value>)",
          foreground: "rgb(var(--color-card-foreground) / <alpha-value>)"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"]
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 6px)"
      },
      boxShadow: {
        soft: "0 10px 40px -18px rgba(0, 0, 0, 0.4)",
        glow: "0 0 0 1px rgb(var(--color-accent) / 0.25), 0 20px 60px -30px rgb(var(--color-primary) / 0.65)"
      },
      transitionDuration: {
        "250": "250ms"
      }
    }
  },
  plugins: []
};

export default config;
