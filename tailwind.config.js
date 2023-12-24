/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        active: '#3B6AC8', 
        subtle:"#E8EFFF",
        courseColour:"#F5F5F5F2",
        aboutBg: "#F4F8FF"


  
      },
    },
  },
  plugins: [],
}

