module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    textColor: {
      article: '#111827',
      main: '#e96900',
      sub: '#EF9348',
      white: '#fff',
    },
    fontSize: {
      small: '0.875rem',
      large: '1.5rem',
      logo: '1.25rem',
      title: '2.25rem',
      description: '1rem',
    },
    boxShadow: {
      DEFAULT: '0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06)',
      lg: '0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);',
    },
    borderRadius: {
      small: '0.05rem',
      large: '1.25rem',
      half: '50%',
    },
    borderWidth: {
      DEFAULT: '1px',
    },
    zIndex: {
      25: 25,
      50: 50,
      75: 75,
      100: 100,
    },
    extend: {
      spacing: {
        minus16: '-1rem',
        minus32: '-2rem',
        minus48: '-3rem',
        20: '1.25rem',
        106: '6.625rem',
      },
      gridTemplateColumns: {
        fill: 'repeat(auto-fill, minmax(92px, 2fr))',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
              code: { color: theme('colors.blue.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },

            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code:before': {
              content: 'none',
            },
            'code:after': {
              content: 'none',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
