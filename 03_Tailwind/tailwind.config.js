/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/*.{html, js}',
  ],
  theme: {

    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },

    extend: {
      colors: {
        'Primary': '#B2D234',
        'Secondary': '#60A0D8',
        'White': '#FFFFFF',
        'Text': '#606060',
      },
      
      backgroundImage : {
        'fond' : "url('/src/images/pattern2.png')",
        'salade' : " url('/src/images/salade.png')",

      }
    },
  },
  plugins: [],
}

