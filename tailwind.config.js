/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0px 4px 18px rgba(0, 0, 0, 0.30)',
        '4xl': '0px 2px 25px rgba(0, 0, 0, 0.60)'
      }
    },
  },
  plugins: [],
}

