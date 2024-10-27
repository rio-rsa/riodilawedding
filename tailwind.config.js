/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',    // This includes all HTML files in your public folder
    './src/**/*.js',         // This includes all JS files in your src folder (if applicable)
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/assets/megamendung.png')",
        'subtract': "url('/assets/Subtract.jpeg')",
        'subtract-green': "url('/assets/substractgreen.jpg')",
        'polaroid': "url('/assets/polaroid.png')",
        'jogja': "url('/assets/jogjabackground.png')",
        'amplopdigital': "url('/assets/amplopdigitalframe.svg')",
        'durioval': "url('/assets/durioval.png')",
        'jogjaoval': "url('/assets/jogjaoval.png')",
        'konfirmasioval': "url('/assets/konfirmasioval.png')"
      },
      width: {
        '9/10': '90%',
      },
      height: {
        '9/10': '90%',
      },
      colors: {
        customGray: '#5E5A5A',
        customGreen: '#304A4C',
        customBlack: '#282828',
        customPrimaryGreen: '#304A4C',
        customDarkGreen: '#2F3F36',
        customLightGreen: '#748C7D'
      },
      fontFamily: {
        garamond: ['EB Garamond'],
        fasthand: ['Fasthand'],
      },
    },
  },
  plugins: [],
}
