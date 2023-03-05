/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bleu-z": "#1e95d3",
        "orange-z": "#F29400",
        "gris-z":"#0E3083",
      },
    },
  },
  plugins: [],
};
