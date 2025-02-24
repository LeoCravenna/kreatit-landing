import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.jsx',
  ],
  theme: {
    extend: {
      height: {
        "250px": "250px",
        "400px": "400px",
      },
      width: {
        "350px": "350px",
        "400px": "400px",
      },
      colors: {
        primary: '#1E40AF',
        secondary: '#1E3A8A',
        dark: '#1A202C',
        accent: '#38BDF8',
        blue: {
          400: "#38BDF8",
          600: "#1E40AF",
          900: "#1E3A8A",
        },
      },
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '60%': { transform: 'scale(1.05)', opacity: 1 },
          '100%': { transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        riseUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        zoomInOut: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        moveTwinkle: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: 1 },
          '25%': { transform: 'translate(10px, -10px) scale(0.95)', opacity: 0.9 },
          '50%': { transform: 'translate(-10px, 20px) scale(1.05)', opacity: 0.8 },
          '75%': { transform: 'translate(20px, -20px) scale(0.9)', opacity: 0.9 },
        },
        move: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -10px)' },
          '50%': { transform: 'translate(-10px, 20px)' },
          '75%': { transform: 'translate(20px, -20px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        rocketMove: {
          '0%': { transform: 'translate(50vw, 0) rotate(-45deg)' },
          '35%': { transform: 'translate(10vw, -35vh) rotate(-35deg)' },
          '70%': { transform: 'translate(70vw, -55vh) rotate(-50deg)' },
          '100%': { transform: 'translate(50vw, -100vh) rotate(-45deg)' },
        },
        rocketLaunch: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-50vh) scale(1.5)' },
          '100%': { transform: 'translateY(-100vh) scale(2)' },
        },

       /*  rocketRandomFly: {
          '0%': {
              transform: 'translate(-10vw, 100vh) rotate(0deg)', /* Esquina inferior izquierda */
          /*},
          '25%': {
              transform: 'translate(110vw, -10vh) rotate(45deg)', /* Esquina superior derecha */
          /*},
          '50%': {
              transform: 'translate(-10vw, -10vh) rotate(-45deg)', /* Esquina superior izquierda */
          /*},
          '75%': {
              transform: 'translate(110vw, 110vh) rotate(90deg)', /* Esquina inferior derecha */
          /*},
          '100%': {
              transform: 'translate(-10vw, 100vh) rotate(0deg)', /* Regresa al inicio */
          /*},
        }, */
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
        fadeIn: 'fadeIn 2s ease-in-out',
        fadeInUp: "fadeInUp 5s ease-out forwards",
        bounceIn: 'bounceIn 1s ease-in-out',
        slideInLeft: 'slideInLeft 0.1s ease-out',
        slideInRight: 'slideInRight 0.1s ease-out',
        floating: 'floating 4s ease-in-out infinite',
        riseUp: 'riseUp 1.5s ease-out',
        rotate360: 'rotate360 10s linear infinite',
        zoomInOut: 'zoomInOut 6s ease-in-out infinite',
        moveTwinkle: 'moveTwinkle 10s infinite ease-in-out',
        move: 'move 12s infinite alternate ease-in-out',
        'rocket-launch': 'rocketLaunch 4s ease-in-out forwards',
        'rocket-move': 'rocketMove 20s linear infinite',
      },
    },
  },
  plugins: [],
};
