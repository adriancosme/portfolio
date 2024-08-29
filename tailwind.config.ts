import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "hero-text-reveal": "hero-text-reveal var(--hero-text-reveal-duration)",
        "hero-image-reveal": "hero-image-reveal .75s"
      },
      keyframes: {
        "hero-text-reveal": {
          "0%": {
            opacity: "0",
            transform: "translateY(25px)"
          },
          "25%": {
            opacity: "var(--hero-text-reveal-opacity-step-0)",
            transform: "translate(var(--hero-text-reveal-x-step-0), var(--hero-text-reveal-y-step-0))"
          },
          "50%": {
            opacity: "var(--hero-text-reveal-opacity-step-1)",
            transform: "translate(var(--hero-text-reveal-x-step-1), var(--hero-text-reveal-y-step-1))"
          },
          "75%": {
            opacity: "var(--hero-text-reveal-opacity-step-2)",
            transform: "translate(var(--hero-text-reveal-x-step-2), var(--hero-text-reveal-y-step-2))"
          },
          "to": {
            opacity: "var(--hero-text-reveal-opacity-step-3)",
            transform: "translate(var(--hero-text-reveal-x-step-3), var(--hero-text-reveal-y-step-3))"
          }
        },
        "hero-image-reveal": {
          "0%": {
            opacity: "0",
            transform: "scale(1.5)"
          },
          "to": {
            opacity: "1",
            transform: "scale(1)"
          }
        }
      },
      spacing: {
        "5vw": "5vw",
        "8xl": "96rem",
        "10vw": "10vw",
        "50vh": "50vh",
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
    },
  },
  plugins: [],
};

export default config;
