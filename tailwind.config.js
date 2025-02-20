import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'open-sans': ["Open Sans", 'sans-serif'],
        'play': ["Playfair Display", 'sans-serif'],
        'narrow': ["Archivo Narrow", 'serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'kanit': ['Kanit', 'sans-serif'],
        'dm': ['DM Serif Display', 'sans-serif']
      },
      colors: {
        'blueBanner': '#110fec',
        'azul': '#003566'
      },
      animation: {
        "loop-scroll": 'loop-scroll 60s linear infinite',
      },
      backgroundImage:{
        "serviciosBg":"url(/img/Background de Servicios de Letalis Store.svg)",
        "logoBg":"url(/img/Logo Letalis Store Blanco.webp)"
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)"},
          to: { transform: "translateX(-100%)"}
        }
      },
      screens: {
        xxxl: { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
  
        xxl: { max: "1300px" },
        // => @media (max-width: 1300px) { ... }
  
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
  
        lg: { max: "1025px" },
        // => @media (max-width: 1023px) { ... }
  
        md: { max: "820px" },
        // => @media (max-width: 767px) { ... }
  
        mds: { max: "768px" },
        // => @media (max-width: 767px) { ... }
  
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
  
        xs: { max: "431px" },
        // => @media (max-width: 479px) { ... }
      },
    },
  },
  plugins: [scrollbarHide],
}