/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',    // This includes all HTML files in your public folder
    './src/**/*.js',         // This includes all JS files in your src folder (if applicable)
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730291358/megamendung_xov04r.svg')",
        'subtract': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730291362/Subtract_n6gr9l.jpg')",
        'subtract-modified': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730291383/Subtract-modified_mjxvzz.png')",
        'subtract-modified-horizontal': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730358806/Subtract-modified-horizontal_jjlhmq.png')",
        'subtract-green': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730362545/subtractgreen_jplf7p.png')",
        'polaroid': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730291360/polaroid_qpn2p2.png')",
        'jogja': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730291347/jogjabackground_jx9dgh.png')",
        'amplopdigital': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730362802/amplopdigitalframe_g9zgrr.png')",
        'durioval': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730291343/durioval_kiulei.png')",
        'jogjaoval': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730291348/jogjaoval_kw2r76.png')",
        'konfirmasioval': "url('https://res.cloudinary.com/dz0ndwdvf/image/upload/q_100,f_auto,w_auto/v1730291348/konfirmasioval_mvfhdc.png')"
      },
      width: {
        '9/10': '90%',
      },
      height: {
        '9/10': '90%',
        '7/10': '70%'
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
      letterSpacing: {
        'intro': '0.26325rem' 
      }
    },
  },
  plugins: [],
}
