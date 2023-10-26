/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#F99A1A',
        'footer-bg':'#17161B'
      }
    },
  },
  plugins: [],
}

