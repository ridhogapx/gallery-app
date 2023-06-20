/** @type {import('tailwindcss').Config} */
// Using google font "Montserrat"
export default {
  content: [
   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    	fontFamily: {
          "main": ["Montserrat", "sans-serif"]
        }
    },
  },
  plugins: [],
}

