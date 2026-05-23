import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        ash: "#0a0a0a",
        surface: "#111111",
        border: "#1a1a1a",
        muted: "#2a2a2a",
        dim: "#666666",
        ghost: "#999999",
        bright: "#e8e8e8",
        white: "#f5f5f5",
        accent: "#c8ff00",
        "accent-dim": "#8ab500",
        red: "#ff3c3c",
        cyan: "#00d4ff",
      },
      fontFamily: {
        mono: ["'Geist Mono'", "monospace"],
        sans: ["'Geist'", "sans-serif"],
      },
      animation: {
        "grain": "grain 8s steps(10) infinite",
        "flicker": "flicker 0.15s infinite linear",
        "scan": "scan 8s linear infinite",
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
        flicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: "1" },
          "20%, 24%, 55%": { opacity: "0.4" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
