/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('/assets/img/cp-bg.png')",
        'bg2': "url('/assets/img/cp-bg-2.png')"
      },
      colors: {
        'warna1': '#31A0FE',
        'warna2': '#23856D', 
        'warna3': '#EC5C2E',
        'warna4': '#E1F4FF',
      }
    },
  },
  plugins: [],
}

