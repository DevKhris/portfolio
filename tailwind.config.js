/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
import flattenColorPalette from 'tailwindcss/src/util/flattenColorPalette'
import toColorValue from 'tailwindcss/src/util/toColorValue'

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        amber: {
          100: '#FFDFA5',
          200: '#FFCD73',
          300: '#E8AE46',
          400: '#CA8C1D',
          500: '#9A6608',
        },
        dark_purple: {
          100: '#A892D6',
          200: '#796CB6',
          300: '#5C3B9E',
          400: '#43208A',
          500: '#2D0F69',
        },
        lime_light: {
          100: '#E8FAA1',
          200: 'DAF66F',
          300: 'BFDE43',
          400: 'A0C21B',
          500: '779407',
        }
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, e, config, theme }) {
      const textBorderSize = `--tw${config('prefix')}-text-border-size`

      matchUtilities(
        {
          'text-border': (value) => ({
            'text-shadow': `0 0 var(${textBorderSize},1px) ${toColorValue(value)}`,
          }),
        },
        {
          values: (({ DEFAULT: _, ...colors }) => colors)(flattenColorPalette(theme('borderColor'))),
          type: 'color',
        }
      )

      matchUtilities(
        {
          'text-border-size': (value) => ({
            [textBorderSize]: value
          }),
        },
        { values: theme('borderWidth') }
      )
    }),
  ],
  darkMode: 'class',
};
