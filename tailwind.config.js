// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['inter', 'sans-serif'],
      },
      fontWeight: {
        bold: '700',
        semibold: '600',
        medium: '500',
        normal: '400',
      },
    },
  },
  plugins: [],
}