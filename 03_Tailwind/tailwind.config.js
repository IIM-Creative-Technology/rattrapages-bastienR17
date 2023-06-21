/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/*.{html, js}',
  ],
  theme: {
    colors: {
      'Primary': '#B2D234',
      'White': '#FFFFFF',
    },

    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },

    extend: {
      backgroundImage : {
        'fond' : "url('/src/images/pattern2.jpg')",
      }
    },
  },
  plugins: [],
}

