/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        azul: "#4E5BEE",
        vermelho: "#FF5757",
        cinza: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
