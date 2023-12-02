/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFE",
        brand: "#00286B",
        accent: "#2F88FF"
      }
    },
  },
  plugins: [],
}

