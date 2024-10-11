/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',    // This includes all HTML files in your public folder
    './src/**/*.js',         // This includes all JS files in your src folder (if applicable)
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/public/assets/megamendung.png')",
        'subtract': "url('/public/assets/Subtract.jpeg')"
      },
      width: {
        '9/10': '90%',
      },
      colors: {
        customGray: '#5E5A5A',
        customGreen: '#304A4C',
        customBlack: '#282828',
        customPrimaryGreen: '#304A4C'
      },
      fontFamily: {
        garamond: ['EB Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
