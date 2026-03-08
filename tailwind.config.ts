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
        primary: {
          DEFAULT: "#D84315", // Burnt Orange
          dark: "#BF360C",
          light: "#FF6F40",
        },
        secondary: {
          DEFAULT: "#3E2723", // Deep Leather Brown
          light: "#5D4037",
        },
        accent: {
          DEFAULT: "#FFB74D", // Golden Ember
          dark: "#FFCA28",
        },
        background: {
          DEFAULT: "#F5F1E8", // Aged Parchment
          dark: "#212121",    // Charcoal Black
        },
        surface: "#FFFFFF",
        text: {
          main: "#2D241E",    // Dark Coffee
          muted: "#6D5D56",   // Wood Ash
        },
      },
      fontFamily: {
        heading: ["var(--font-rye)", "serif"],
        body: ["var(--font-roboto)", "sans-serif"],
        accent: ["var(--font-marker)", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        "header": "0 4px 20px rgba(0,0,0,0.4)",
        "card": "0 4px 6px -1px rgba(62, 39, 35, 0.1), 0 2px 4px -1px rgba(62, 39, 35, 0.06)",
        "hover": "0 20px 25px -5px rgba(62, 39, 35, 0.1), 0 10px 10px -5px rgba(62, 39, 35, 0.04)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;