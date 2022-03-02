module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],

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

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: 'var(--font-family)',
      mono: 'var(--font-family-mono)',
    },

    fontWeight: {
      light: 'var(--font-weight-light)',
      medium: 'var(--font-weight-medium)',
      bold: 'var(--font-weight-bold)',
      black: 'var(--font-weight-black)',
    },

    fontSize: {
      tiny: '0.625rem',
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },

    boxShadow: {
      DEFAULT:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      xs: 'var(--shadow-xs)',
      sm: 'var(--shadow-sm)',
      md: 'var(--shadow-md)',
      lg: 'var(--shadow-lg)',
      xl: 'var(--shadow-xl)',
      hover: 'var(--shadow-hover)',
      aside:
        'rgb(0 0 0 / 22%) 0px 25.6px 57.6px 0px, rgb(0 0 0 / 18%) 0px 4.8px 14.4px 0px',
      primary: '0 4px 11px var(--color-primary-500)',
      success: '0 4px 11px var(--color-success-500)',
      info: '0 4px 11px var(--color-info-500)',
      caution: '0 4px 11px var(--color-caution-500)',
      warning: '0 4px 11px var(--color-warning-500)',
      danger: '0 4px 11px var(--color-warning-500)',
      center:
        '-8px 27px 18px 0px rgba(102,102,102,0.1), 10px 27px 18px 0px rgba(102,102,102,0.1)',
      none: 'none',
    },
    extend: {
      maxHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      zIndex: {
        '-1': '-1',
      },
      padding: {
        full: '100%',
        '1/2': '50%',
        '1/4': '25%',
      },
      margin: {
        full: '100%',
        '1/2': '50%',
        '1/4': '25%',
      },
      borderRadius: {
        5: '5px',
        8: '8px',
        20: '20px',
        40: '40px',
      },
      outline: {
        'no-chrome': 'none',
      },
      transformOrigin: {
        0: '0%',
      },
      transitionTimingFunction: {
        'in-out-hard': 'cubic-bezier(.77, 0, .175, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-down': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.35s ease-in-out',
        'fade-in-big': 'fade-in 0.65s ease-in-out',
        'fade-in-down': 'fade-in-down 0.3s',
        'fade-out-down': 'fade-out-down 0.3s',
        'fade-in-up': 'fade-in-up 0.3s',
        'fade-out-up': 'fade-out-up 0.3s',
      },
    },
  },
  variants: {
    scrollbar: ['rounded'],
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {
      backgroundColor: [
        'responsive',
        'hover',
        'focus',
        'active',
        'checked',
        'disabled',
      ],
      borderColor: [
        'responsive',
        'hover',
        'focus',
        'active',
        'focus-within',
        'checked',
        'disabled',
      ],
      boxShadow: ['responsive', 'hover', 'focus', 'active', 'disabled'],
      textColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
      textDecoration: ['responsive', 'hover', 'focus', 'active', 'disabled'],
      scale: ['group-hover'],
      cursor: ['disabled'],
    },
  },
  plugins: [],

  extend: {},
};
