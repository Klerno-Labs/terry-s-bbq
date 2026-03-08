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
          hover: "#BF360C",
        },
        secondary: "#3E2723", // Deep Leather Brown
        accent: "#FFB74D", // Golden Ember
        bg: "#F5F1E8", // Aged Parchment
        darkSurface: "#212121", // Charcoal
        textMain: "#2D241E", // Dark Coffee
        textMuted: "#6D5D56", // Wood Ash
      },
      fontFamily: {
        heading: ["var(--font-rye)", "serif"],
        body: ["var(--font-roboto)", "sans-serif"],
        accent: ["var(--font-permanent-marker)", "cursive"],
      },
      backgroundImage: {
        'texture-paper': "url('https://www.transparenttextures.com/patterns/aged-paper.png')",
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'scroll': 'scroll 30s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;