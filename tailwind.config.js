module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        'primary-light': '#FAF7FC',
        'secondary-light': '#FFFFFF',
        'ternary-light': '#F7F6F8',

        'primary-dark': '#250D38',
        'secondary-dark': '#361044',
        'ternary-dark': '#501E51',
      },
      "fontFamily": {
        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
      },
    },

  },
  plugins: [],
}
