import { fontFamily } from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/wrap-page.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        ps: ["var(--font-ps)"],
        fa: ["var(--font-fa)"],
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        "primary-black": "#010231",
        "primary-blue": "#2222FF",
        "secondary-black": "#222222",
        "stone-black": "#2c2c2c",
        "web-black": "#121212",
        "web-gray": "#383738",
        "web-paper": "#F6F6F2",
        "web-tile": "#EBECF0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        button: "0px 0.956511px 3.82604px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-medium": "spin 2s linear infinite",
      },
      maxWidth: {
        half: "50%",
      },
      fontSize: {
        mobile: "2rem",
      },
    },
  },
  plugins: [],
}
