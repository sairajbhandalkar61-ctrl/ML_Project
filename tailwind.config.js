/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#EDE9DF',
          50: '#FAF8F5',
          100: '#F4F1E9',
          200: '#EDE9DF',
          300: '#E2DDCF',
          400: '#D5CFBD',
          muted: '#77736B',
        },
        noir: {
          DEFAULT: '#111111',
          pure: '#000000',
          rich: '#111111',
          surface: '#1A1A18',
          card: '#222220',
        },
        accent: {
          orange: '#E85D36',
          warm: '#D9532F',
        },
        editorial: {
          border: 'rgba(17, 17, 17, 0.22)',
          'border-light': 'rgba(17, 17, 17, 0.12)',
          'border-dark': 'rgba(237, 233, 223, 0.18)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Grotesk"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.05em',
        wider: '0.12em',
        widest: '0.22em',
        mega: '0.35em',
      },
      lineHeight: {
        tightest: '0.88',
        snugger: '0.96',
      }
    },
  },
  plugins: [],
};
