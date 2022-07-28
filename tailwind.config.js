/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  important: '#root',
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#65DAFF',
          orange: '#F77E23',
          purple: '#D8587E',
          'blue-200': '#2F327D',
          'blue-300': '#525596',
          'blue-400': '#252641'
        },
        secondary: {
          100: '#595959',
          200: '#696984'
        }
      },
      backgroundImage: {
        'hero-pattern': "url('/src/asset/backgroundImg.png')",
      },
      fontFamily:{
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'xsm': ["clamp(0.50rem, calc(0.70rem + 0.25vw), 0.88rem)", "1.4"],
        sm: ["clamp(0.90rem, calc(0.92rem + 0.39vw), 1.07rem)", "1.4"],
        base: ["clamp(1.13rem, calc(0.98rem + 0.73vw), 1.60rem)", "1.5"],
        lg: ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)", "1.4"],
        xl: ["clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)", "1.4"],
        "2xl": ["clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)", "1.2"],
        "3xl": ["clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)", "1.1"],
        "4xl": ["clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)", "1"],
        "5xl": ["clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)", "1"],
        "6xl": ["clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)", "1"],
      },
    },
  },
  plugins: [],
}
