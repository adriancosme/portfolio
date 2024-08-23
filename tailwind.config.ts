import type { Config } from "tailwindcss";
import plugin from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "5vw": "5vw",
        "8xl": "96rem",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
      },
      screens: {
        xs: "360px",
        ...defaultTheme.screens,
        "3xl": "1650px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      plugins: [
        plugin(function ({ addVariant }) {
          addVariant("any-hover", "@media (any-hover: hover) { &:hover }")
          addVariant("mobile", "@media (any-hover: none) { & }")
        })
      ],
    },
  },
  plugins: [],
};

export default config;
