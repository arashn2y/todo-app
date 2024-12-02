/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Enable dark mode using class
  theme: {
    extend: {
      colors: {
        "dark-green": "#45aac2"
      }
    }
  },
  plugins: []
};
