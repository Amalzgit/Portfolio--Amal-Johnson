/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class', // We can toggle 'dark' class, or let it default to media. We'll use 'class' for explicit control.
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // slate-900
        surface: 'rgba(30, 41, 59, 0.7)', // glassmorphism surface
        surfaceBorder: 'rgba(255, 255, 255, 0.1)',
        primary: '#38bdf8', // sky-400
        secondary: '#818cf8', // indigo-400
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
