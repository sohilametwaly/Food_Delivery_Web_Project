import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Outfit', 'sans-serif'], // Use 'Outfit' as the font family name
      },
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('current', '&.active');
  })
  ],
}

