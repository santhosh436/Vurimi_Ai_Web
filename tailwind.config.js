/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      boxShadow: {
        'dual': '-1px -1px 14px rgba(0, 0, 0, 1), 1px 1px 14px rgba(0, 0, 0, 1)', // Combined shadow
      },
    },
  },
  plugins: [],
}