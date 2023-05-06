/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#645CAA",
        secondary: "#A084CA",
        neutral: "#BFACE0",
        accent: "#EBC7E8",
      },
    },
  },
  plugins: [],
};
