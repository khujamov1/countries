/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: "#fafafa",
        cardDarkColor: "#2b3844"
      },
      maxWidth: {
        containerCountry: "1280px"
      },
        boxShadow: {
          headerShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
          itemShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.03)",
          inputShadow: "0px 2px 9px 0px rgba(0, 0, 0, 0.05)"
        },

        fontFamily: {
          nunito: ['"Nunito Sans", "Arial", sans-serif']
        }
    },
  },
  plugins: [],
}

