/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': {'min':'0px', 'max':'768px'},
        'xl': {'min':'1500px', 'max':''}
      }
    },
  },
  plugins: [],
}
