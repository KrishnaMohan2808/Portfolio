/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add our custom colors
      colors: {
        'dark-bg': '#0D1117',      // GitHub-like dark background
        'light-text': '#C9D1D9',   // Light gray text
        'accent': '#4ADE80',      // Our 'hacker' green (green-400)
        'accent-hover': '#86EFAC', // A lighter green for hover (green-300)
      },
      // Add our custom font families
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Our new default
        mono: ['Menlo', 'Consolas', 'monospace'],   // Our terminal font
      },
    },
  },
  plugins: [],
}