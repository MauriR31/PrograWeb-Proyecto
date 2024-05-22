/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '560px':'35rem',
        '430px':'26.875rem',
      },
      width: {
        '350px':'21.875rem',
        '700px':'43.75rem',
      }
    },
  },
  plugins: [],
}

