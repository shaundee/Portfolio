// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'NASA-APOD': "url('/public/APOD.png')",
      },
    },
  },

  plugins: [require('tailwind-scrollbar-hide'), require('tailwind-scrollbar')],
}
