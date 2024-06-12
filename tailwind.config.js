
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{html,js}',
    "./node_modules/tw-elements/dist/js/**/*.js" // Include this line
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#181818',
        'orange': '#ff4a17',
      }
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs") // Include this line
  ],
  darkMode: "class"
};

