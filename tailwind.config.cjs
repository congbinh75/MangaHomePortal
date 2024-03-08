/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      height: {
        '144' : '32rem'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

