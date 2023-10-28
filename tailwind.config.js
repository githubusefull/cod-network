/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#EC5A31 ',
        'footer-bg':'#17161B'
      }
    },
  },
  plugins: [],
}

