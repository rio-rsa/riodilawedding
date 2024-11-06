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
        'hero-image': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730291358/megamendung_xov04r.svg')",
        'subtract': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730382489/subtract_tvrj1p.png')",
        'subtract-modified': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730383290/subtract-modified_k0wiil.png')",
        'subtract-modified-horizontal': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730383078/subtract-modified-horizontal_bfjjxm.png')",
        'subtract-green': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730362545/subtractgreen_jplf7p.png')",
        'polaroid': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730291360/polaroid_qpn2p2.png')",
        'jogja': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730291347/jogjabackground_jx9dgh.png')",
        'amplopdigital': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730362802/amplopdigitalframe_g9zgrr.png')",
        'durioval': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730291343/durioval_fbevhe.png')",
        'jogjaoval': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730291348/jogjaoval_uezv4h.png')",
        'konfirmasioval': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730291348/konfirmasioval_mvfhdc.png')",
        'linearfontgold': 'linear-gradient(0deg, #FFF0DA 1.04%, #94641E 4.17%, #FFF2DB 82.81%, #EAC885 93.75%, #FBF5D1 97.92%, #BD9A4B 99.99%, #ECD8A3 100%)',
        'hero-gradient-overlay': "linear-gradient(to top, rgba(47, 63, 54, 1), rgba(47, 63, 54, 0)), url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730291358/megamendung_xov04r.svg')",
        'jogja-gradient-overlay': "linear-gradient(to top, rgba(47, 63, 54, 1), rgba(47, 63, 54, 0)), url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730291347/jogjabackground_jx9dgh.png')"
      },
      width: {
        '9/10': '90%',
        '7/10': '70%',
        '1/10': '10%'
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
