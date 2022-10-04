/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens:{
        sm:"480px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
      },
      colors: {
        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#93D36B',
        'nav': '#404053',
        'secondary': '#67B437',
        'badge': '#93D36B1',
        'input-border': '#565666',
        'input': '#D9D9D9',
        'pismo': '#717171',
        'ko': '#474747',
        'labe': '#FAFAFA',
        'inla': '#8C8C8C',
        'akcie': '#A8A8A8'
      },
      fontFamily:{
        'grotesk': 'Space Grotesk',
        'sofia': 'Sofia Pro',
      pop:['Poppins', 'sans-serif'],
      'sofia-pro': 'sofia-pro',
      'roc': 'roc-grotesk'
      }
    },
  },
  plugins: [],
}
