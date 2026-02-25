/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          400: '#93c5fd',
          500: '#60a5fa',
          600: '#3b82f6',
          700: '#2563eb',
        },
        background: {
          900: '#0f172a',
          950: '#0b1220',
        },
        card: {
          500: 'rgba(30, 41, 59, 0.6)',
        },
        'gradient-start': '#93c5fd',
        'gradient-end': '#bfdbfe',
        'glow-blue': '#93c5fd',
        'glow-cyan': '#a5f3fc',
        'glow-purple': '#c084fc',
        'glow-pink': '#f472b6',
        'glow-green': '#86efac',
        'glow-orange': '#fdba74',
        'glow-yellow': '#fde047',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out',
        slideUp: 'slideUp 0.6s ease-out',
        slideLeft: 'slideLeft 0.6s ease-out',
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.05)', opacity: '0.6' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.1)' },
          '50%': { boxShadow: '0 0 15px rgba(59, 130, 246, 0.2)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 0 10px rgba(59, 130, 246, 0.1)',
        'glow-lg': '0 0 20px rgba(59, 130, 246, 0.2)',
        'glow-xl': '0 0 30px rgba(59, 130, 246, 0.3)',
      },
    },
  },
  plugins: [],
}