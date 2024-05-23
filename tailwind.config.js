/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      height: {    
        '658px':'41.125rem',
        '496px':'31rem',
      },
      width: {
        '350px':'21.875rem',
        '700px':'43.75rem',
      }
    },
  },
  plugins: [],
}

