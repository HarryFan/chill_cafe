/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        chillBg: '#f8f6f2',
        chillBrown: '#a6896f',
        chillAccent: '#b2c9ab',
        chillText: '#453c35'
      },
      fontFamily: {
        chill: ['Nunito', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
