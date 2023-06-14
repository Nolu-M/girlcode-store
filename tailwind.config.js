/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'girlcode-pink': ["#e94154"],
      },
      fontFamily: {
        'primary': ['Manrope', 'sans-serif']
      }, 
    },
  },
  plugins: [],
}

