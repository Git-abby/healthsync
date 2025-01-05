/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#1F7C98',
        'secondary': '#FF6F5F',
        'primary-light': '#529aaf'
      },
      fontFamily:{
        'primary': 'sans-serif'
      }
    },
  },
  plugins: [],
}