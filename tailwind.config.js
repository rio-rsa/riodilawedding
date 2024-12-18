/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',    // This includes all HTML files in your public folder
    './src/**/*.js',         // This includes all JS files in your src folder (if applicable)
  ],
  theme: {
    extend: {
      backgroundImage: {
        'checkbox': "url('/assets/checkbox.png')",
        'hero-image': "url('/assets/megamendung.webp')",
        'subtract': "url('/assets/subtract.webp')",
        'subtract-modified': "url('/assets/subtract-modified.webp')",
        'subtract-modified-horizontal': "url('/assets/subtract-modified-horizontal.webp')",
        'subtract-green': "url('/assets/subtractgreen.webp')",
        'polaroid': "url('/assets/polaroid.webp')",
        'jogja': "url('/assets/jogjabackground.webp')",
        'amplopdigital': "url('/assets/amplopdigitalframe.png')",
        'durioval': "url('/assets/durioval.png')",
        'jogjaoval': "url('/assets/jogjaoval.png')",
        'konfirmasioval': "url('/assets/konfirmasioval.png')",
        'linearfontgold': 'linear-gradient(0deg, #FFF0DA 1.04%, #94641E 4.17%, #FFF2DB 82.81%, #EAC885 93.75%, #FBF5D1 97.92%, #BD9A4B 99.99%, #ECD8A3 100%)',
        'hero-gradient-overlay': "linear-gradient(to top, rgba(47, 63, 54, 1), rgba(47, 63, 54, 0)), url('/assets/megamendung.webp')",
        'jogja-gradient-overlay': "linear-gradient(to top, rgba(47, 63, 54, 1), rgba(47, 63, 54, 0)), url('/assets/jogjabackground.webp')"
      },
      width: {
        '9/10': '90%',
        '7/10': '70%',
        '1/10': '10%',
        '3/10': '30%'
      },
      height: {
        '9/10': '90%',
        '7/10': '70%'
      },
      colors: {
        customGray: '#5E5A5A',
        customGreen: '#304A4C',
        customBlack: '#282828',
        customBlackKonfirmasi: '#252A31',
        customPrimaryGreen: '#304A4C',
        customDarkGreen: '#2F3F36',
        customLightGreen: '#748C7D',
        customIntroGreen: '#4D706B',
        customPolaroidGreen: '#2F3F36'
      },
      fontFamily: {
        garamond: ['EB Garamond'],
        fasthand: ['Fasthand'],
        handsome: ['Handsome Pro']
      },
      letterSpacing: {
        'intro': '0.26325rem' 
      }
    },
  },
  plugins: [],
}

