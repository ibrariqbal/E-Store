/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // React ke liye must
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff5252', // your custom color
      },
      backgroundColor:{
        primary:'#ff5252'
      }
    },
  },
  plugins: [],
}
