/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#060A14',
          900: '#0A1020',
          800: '#10192E',
          700: '#18233D',
          600: '#24304D',
        },
        paper: '#F5F7FB',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,23,42,.04), 0 8px 24px -12px rgba(15,23,42,.12)',
        lift: '0 2px 4px rgba(15,23,42,.05), 0 20px 40px -20px rgba(15,23,42,.25)',
        glow: '0 0 0 1px rgba(129,140,248,.35), 0 12px 40px -12px rgba(99,102,241,.55)',
      },
      maxWidth: { '8xl': '88rem' },
      keyframes: {
        ping2: { '75%,100%': { transform: 'scale(2.2)', opacity: '0' } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
        sweep: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        dash: { to: { strokeDashoffset: '-24' } },
      },
      animation: {
        ping2: 'ping2 1.8s cubic-bezier(0,0,.2,1) infinite',
        floaty: 'floaty 5s ease-in-out infinite',
        sweep: 'sweep 6s linear infinite',
        dash: 'dash .8s linear infinite',
      },
    },
  },
  plugins: [],
};
