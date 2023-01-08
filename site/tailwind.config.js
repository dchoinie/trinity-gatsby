/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005DA6",
        "primary-lighter": "#4576ae",
        "primary-lightest": "#7392c1",
        // secondary: "#950055",
        secondary: "#954000",
        accent: "559500",
      },
    },
  },
  plugins: [],
};
