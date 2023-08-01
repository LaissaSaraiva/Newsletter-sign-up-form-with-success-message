/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      tablet: "960px",
      desktop: "1024px"
    },
    fontSize: {
      sm: '16px',
    },
    fontFamily: {
      roboto: 'Roboto, sans-serif',
    },
    extend: {
      colors: {
        tomato: 'hsl(4, 100%, 67%)',
        'dark-grey': 'hsl(234, 29%, 20%)',
        'charcoal-grey': 'hsl(235, 18%, 26%)',
        grey:'hsl(231, 7%, 60%)',
        white: 'hsl(0, 0%, 100%)'
      },
    },
  },
  plugins: [],
}

