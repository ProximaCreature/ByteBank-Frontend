/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#02273A",
        accent: "#34a1de",
        background: "#F0F4F8",
        border: "#7c8fac",
      },
    },
  },
  plugins: [],
}

