module.exports = {
  plugins: {
    tailwindcss: {
      content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/templates/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
      ],
    },
    autoprefixer: {},
  },
};
