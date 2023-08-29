/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        tictactoe:{
          bg_dark:"#080202",
          bg_light:"#2B2730",
          text_light:"#FAF3F0",
          text_dark:"#2B2730",
          x_light:"#F31559",
          x_dark:"#900C3F",
          o_light:"#22A699",
          o_dark:"#1D5B79"
        }
        
      }
    },
  },
  plugins: [],
}