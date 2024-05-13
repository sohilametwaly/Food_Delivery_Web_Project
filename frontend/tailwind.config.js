/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Outfit", "sans-serif"], // Use 'Outfit' as the font family name
      },
      backgroundImage: {
        "my-image": "url('./src/assets/frontAssets/header_img.png')",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in",
      },
    },
  },
  plugins: [],
};
