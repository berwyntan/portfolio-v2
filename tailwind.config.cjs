/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nanum Gothic'],
        'cursive': ['Poiret One']
      },
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["fantasy"],
  },
}
