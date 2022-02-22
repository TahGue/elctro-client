module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',

  theme: {
    colors: {
      grey: '#C4C4C4',
      lightgrey: '#A7A7A7',
      lightgreyx2: '#f0f0f0',
      primary: '#F46B5B',
      black: '#383838',
      lightprimary: '#F46B5B',
      white: '#ffffff',
      blue: '#03A9F4',
      violet: '#7E57C2',
    },
  },
  plugins: [],
};
