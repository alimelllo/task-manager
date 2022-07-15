/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': ' 9px 9px 18px #bebebe , -9px -9px 18px #ffffff',
      }
    },
    spacing: {
      '1': '1rem',
      '2': '2rem',
      '3': '3rem',
      '4': '4rem',
      '5': '5rem',
      '6': '6rem',
      '7': '7rem',
      '8': '8rem',
      '9': '9rem',
      '10': '10rem',
      '15':'15rem',
 },
 screens: {
  '2xl': {'max': '1535px'},
  // => @media (max-width: 1535px) { ... }

  'xl': {'max': '1279px'},
  // => @media (max-width: 1279px) { ... }

  'lg': {'max': '1023px'},
  // => @media (max-width: 1023px) { ... }

  'md': {'max': '767px'},
  // => @media (max-width: 767px) { ... }

  'sm': {'max': '639px'},
  // => @media (max-width: 639px) { ... }
  
  'xsm': {'max': '330px'}
},
    
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      '1rem':'rem',
     '2rem':'2rem',
     '1.5rem':'1.5rem',
     '1.25rem':'1.25rem'
    }
  },
  plugins: [],
}
