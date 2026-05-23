import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        paper: "#efefef",
        "paper-dim": "#aaaaaa",
        "paper-muted": "#666666",
        rule: "#2a2a2a",
        "rule-bright": "#3a3a3a",
        "ink-soft": "#1a1a1a",
      },
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
        sans: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
