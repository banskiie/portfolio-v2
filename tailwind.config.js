/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B2447",
        secondary: "#19376D",
        tertiary: "#576CBC",
        accent: "#A5D7E8",
      },
    },
  },
  plugins: [],
};
