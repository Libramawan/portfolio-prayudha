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
        "navy-custom": "#344758",
        "black-custom": "#20272D",
      },

      fontFamily: {
        playfair: ["var(--font-playfair-display)"],
        montserrat: ["var(--font-montserrat)"],
        slab: ["var(--font-roboto-slab)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;