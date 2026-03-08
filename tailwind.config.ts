import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BF360C", // Deep Burnt Orange
        "primary-dark": "#8B2500",
        secondary: "#3E2723", // Dark Coffee Bean / Leather
        accent: "#FFAB00", // Golden Amber
        background: "#121212", // Rich Charcoal
        surface: "#1E1E1E", // Lighter Charcoal
        text: "#F5F5F5", // Off-White
        muted: "#9E9E9E", // Cool Grey
      },
      fontFamily: {
        rye: ["var(--font-rye)", "serif"],
        oswald: ["var(--font-oswald)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        marker: ["var(--font-marker)", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-overlay": "linear-gradient(to bottom, rgba(18,18,18,0.3), rgba(18,18,18,1))",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "slow-zoom": "slowZoom 20s ease-in-out infinite alternate",
        "smoke": "smoke 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        smoke: {
          "0%": { transform: "translateY(0) scale(1)", opacity: 0.1 },
          "50%": { transform: "translateY(-20px) scale(1.1)", opacity: 0.3 },
          "100%": { transform: "translateY(0) scale(1)", opacity: 0.1 },
        },
      },
    },
  },
  plugins: [],
};

export default config;