/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme"

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "room-gray": "#a1a1a1",
        "room-darkgray": "#454545",
      },
      fontFamily: {
        primary: ["League Spartan", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
