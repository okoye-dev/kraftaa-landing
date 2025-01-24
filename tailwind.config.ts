import type { Config } from "tailwindcss";
import tailwindCssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
      },
      colors: {
        purple: "#6828B0",
        darkblue: "#1D1A3A",
        green: { light: "#B1FA63", dark: "#1EAC23" },
        border: { green: "#1EAC23", gray: "#888888" },
      },
    },
  },
  plugins: [tailwindCssAnimate],
} satisfies Config;
