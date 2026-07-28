/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050711',
        surface: 'rgba(15, 23, 42, 0.45)',
        surfaceBorder: 'rgba(255, 255, 255, 0.12)',
        primary: '#38bdf8', // Cyan Sky
        secondary: '#818cf8', // Indigo / Violet
        pinkAccent: '#f43f5e',
        amberAccent: '#fbbf24',
        emeraldAccent: '#34d399',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'spatial': '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
        'spatial-lg': '0 30px 80px rgba(0, 0, 0, 0.7), inset 0 1px 2px rgba(255, 255, 255, 0.25)',
        'glow-cyan': '0 0 35px rgba(56, 189, 248, 0.35)',
        'glow-violet': '0 0 35px rgba(129, 140, 248, 0.35)',
        'glow-pink': '0 0 35px rgba(244, 63, 94, 0.35)',
      },
      animation: {
        'spatial-float': 'spatialFloat 6s ease-in-out infinite',
        'spatial-pulse': 'spatialPulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        spatialFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(0.8deg)' },
        },
        spatialPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.3)' },
        }
      }
    },
  },
  plugins: [],
}


