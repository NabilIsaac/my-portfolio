/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['"Raleway"', 'sans-serif'],
      },
      colors: {
        'elephant': {  
          DEFAULT: '#102A43',  
          50: '#3B87D0',  
          100: '#2F7DC7',  
          200: '#2868A6',  
          300: '#205385',  
          400: '#183F64',  
          500: '#102A43',  
          600: '#050E16',  
          700: '#000000',  
          800: '#000000',  
          900: '#000000',  
          950: '#000000'
        },
        'cod-gray': {  
          DEFAULT: '#1E1E1E',  
          50: '#7A7A7A',  
          100: '#707070',  
          200: '#5B5B5B',  
          300: '#474747',  
          400: '#323232',  
          500: '#1E1E1E',  
          600: '#020202',  
          700: '#000000',  
          800: '#000000',  
          900: '#000000',  
          950: '#000000'
        },
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.30em',
      },
    },
    
  },
  plugins: [],
}