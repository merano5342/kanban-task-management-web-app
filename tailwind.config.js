/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],

  theme: {
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 600,
    },
    colors: {
      black: '#090C02',
      white: '#ffffff',

      green: '#AFF5D1',
      softRed: '#F07167',
      blue: '#0081A7',

      darkBlue: '#1C1F33',
      veryPaleOrange: 'hsl(33, 100%, 98%)',
    },
    screens: {
      mobile: { max: '375px' },
      // => @media (min-width: 375px) { ... }
      desktop: { max: '1440px' },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, theme }) {
      addBase({
        h1: {
          fontSize: '36px',
          fontWeight: theme('fontWeight.middle'),
          color: theme('colors.darkBlue'),
          lineHeight: '2.6rem',
        },
        h2: {
          fontSize: '28px',
          lineHeight: '2.6rem',
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.darkBlue'),
        },
        h3: {
          fontSize: '14px',
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.darkBlue'),
          textAlign: 'center',
        },
        p: {
          fontSize: '14px',
          color: theme('colors.gray'),
          fontWeight: theme('fontWeight.regular'),
        },
      }),
        addComponents({
          '.btn': {
            backgroundColor: theme('colors.red'),
            fontSize: '14px',
            color: theme('colors.white'),
            padding: '10px 30px',
            borderRadius: '100px',
            filter: 'drop-shadow(0.1rem 0.4rem 0.6rem hsl(12, 88%, 59%,59%))',
          },
          '.redRound': {
            backgroundColor: theme('colors.red'),
            fontSize: '14px',
            color: theme('colors.white'),
            padding: '8px 24px',
            borderRadius: '100px',
          },
        });
    }),
  ],
};
