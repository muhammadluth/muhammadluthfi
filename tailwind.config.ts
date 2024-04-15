import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'roboto-condensed': ['var(--robotoCondensed-fon)']
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        fluttering: {
          '0%': { transform: 'translateY(0) rotate(-5deg)' },
          '25%': { transform: 'translateY(-2px) rotate(0deg)' },
          '50%': { transform: 'translateY(0) rotate(5deg)' },
          '75%': { transform: 'translateY(2px) rotate(0deg)' },
          '100%': { transform: 'translateY(0) rotate(-5deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'flag-fluttering': 'fluttering 2s linear infinite;',
      }
    },
  },
  plugins: [nextui()],
};
export default config;
