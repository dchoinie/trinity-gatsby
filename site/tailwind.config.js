/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005595",
        "primary-lighter": "#4576ae",
        "primary-lightest": "#7392c1",
        secondary: "#7B73C1",
        "custom-teal": "#73B9C1",
        "custom-red": "#C17392",
        "custom-green": "#92C173",
      },
    },
  },
  plugins: [],
};
