/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Orange: "#FF7B00",
        Pink: "#ECE0D0",
        HoverOrange: "#ea580c" 
      },
      height: {
        'slide': '90vh',
        '80vh': '80vh',
        '70vh': '70vh',
        '50vh': '50vh',
        '45vh': '45vh',
        '40vh': '40vh',
      },
      width: {
        '40vh': '40vh',
        '45vh': '45vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '100vh': '100vh',
        '80vh':'80vh',
        '90vh':'90vh'

      },
      padding: {
        '50vh': '10vh',
      },
      margin: {
        '50vh': '10vh',
      }
    },
  },
  plugins: [],
}

