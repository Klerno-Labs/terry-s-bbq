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
        primary: "#BF360C",      // Deep Burnt Orange
        "primary-hover": "#E64A19",
        secondary: "#3E2723",    // Dark Coffee Bean / Leather
        accent: "#FFAB00",       // Golden Amber
        background: "#121212",   // Rich Charcoal
        surface: "#1E1E1E",      // Lighter Charcoal
        text: "#F5F5F5",         // Off-White
        muted: "#9E9E9E",        // Cool Grey
      },
      fontFamily: {
        heading: ["var(--font-rye)", "serif"],
        subheading: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-roboto)", "sans-serif"],
        accent: ["var(--font-marker)", "cursive"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'slow-zoom': 'zoom 20s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;