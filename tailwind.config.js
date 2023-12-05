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
        '128': '500px',
      },
    },
  },
  plugins: [],
}

