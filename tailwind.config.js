/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#ff6464',
        dark: '#0f172a',
        click_hover: '#F73019',
        secondary: '#64748b',
      },
      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}
