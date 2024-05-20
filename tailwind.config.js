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
      },
      width: {
        '350px':'21.875rem',
      }
    },
  },
  plugins: [],
}

