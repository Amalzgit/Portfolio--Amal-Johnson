/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0b0612',
        surface: '#130c21',
        surfaceBorder: '#271942',
        primary: '#a3e635', // Electric Lime
        secondary: '#f43f5e', // Hot Pink / Magenta
        cyanAccent: '#06b6d4', // Electric Cyan
        yellowAccent: '#fbbf24', // Electric Yellow
        purpleAccent: '#a855f7', // Vivid Purple
        orangeAccent: '#f97316', // Neon Orange
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '5px 5px 0px #000000',
        'brutal-lg': '8px 8px 0px #000000',
        'brutal-lime': '6px 6px 0px #a3e635',
        'brutal-pink': '6px 6px 0px #f43f5e',
        'brutal-cyan': '6px 6px 0px #06b6d4',
        'brutal-yellow': '6px 6px 0px #fbbf24',
        'brutal-white': '6px 6px 0px #ffffff',
        'neon-lime': '0 0 25px rgba(163, 230, 53, 0.5)',
        'neon-pink': '0 0 25px rgba(244, 63, 94, 0.5)',
        'neon-cyan': '0 0 25px rgba(6, 182, 212, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-3d': 'float3d 5s ease-in-out infinite',
        'wobble': 'wobble 4s ease-in-out infinite',
        'marquee': 'marquee 22s linear infinite',
        'marquee-reverse': 'marqueeReverse 22s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        float3d: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1.5deg)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(-1.5deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}

