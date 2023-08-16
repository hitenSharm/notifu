/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkGrad: "#2D2537",
        darkLogo: "#2A2136",
        liveLogo:"#1B3C37",
        greenVar:"#019C57"
      }
    },
  },
  plugins: [],
}

