import type { Config } from "tailwindcss";

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
        green: { light: "#B1FA63", dark: "#49CD73" },
        border: { green: "#1EAC23", gray: "#888888" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
