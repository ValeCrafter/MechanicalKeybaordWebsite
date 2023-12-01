/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#7D35D4",
        secondary: "#1D0B32",
        accent: "#4A1C82",
        background: "#07030D",
        text: "#FFFFFF",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
