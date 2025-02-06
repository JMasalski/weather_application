/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black: '#0f0f0f',
        primary: '#1e1e1e',
        secondary: '#272727',
        navtext: '#5e5e5e'
      }
    },
  },
  
}