module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/templates/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        'screen-menu': 'calc(100vh - 96px)',
      },
      minHeight: {
        '2/6': '33.333333%',
      },
      fontFamily: {
        sans: [
          'Nanum Gothic',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        serif: [
          'Nanum Gothic',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        mono: [
          'Nanum Gothic',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        display: ['Nanum Gothic', '-apple-system', 'BlinkMacSystemFont'],
        body: [
          'Nanum Gothic',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
