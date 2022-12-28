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
      },
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["fantasy"],
  },
}
