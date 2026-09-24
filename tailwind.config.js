/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './anexo.html', './src/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        // Un solo acento (azul del logo) y una familia de grises fríos.
        brand: { 50: '#eef2fb', 100: '#dde5f6', 200: '#b9c8ec', 500: '#2446a6', 600: '#1f3c92', 700: '#1a327a' },
        ink: {
          50: '#f6f7f9', 100: '#eef1f5', 200: '#dde2e9', 300: '#b9c1cd', 400: '#8793a5',
          500: '#5d6b80', 600: '#46546a', 700: '#2c3a4f', 800: '#1d2a3d', 900: '#0f1a2b',
        },
        alert: '#d92d20',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        label: ['"Barlow Condensed"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,26,43,.05), 0 10px 30px -18px rgba(15,26,43,.22)',
      },
    },
  },
  plugins: [],
};
