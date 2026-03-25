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
          400: '#34d399', /* emerald-400 */
          500: '#10b981', /* emerald-500 */
          600: '#059669', /* emerald-600 */
        },
        accent: {
          cyan: '#22d3ee',
          amber: '#fbbf24',
          magenta: '#e879f9',
        },
        background: {
          900: '#13151a', /* IDE strict gray-blue */
          950: '#090b10', /* Deepest IDE black */
        },
        editor: {
          bg: '#1a1b26',
          header: '#292e42',
          border: '#3b4261',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        type: 'type 2s steps(40, end)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        type: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      boxShadow: {
        'neon-green': '0 0 10px rgba(52, 211, 153, 0.4), 0 0 20px rgba(16, 185, 129, 0.2)',
        'neon-cyan': '0 0 10px rgba(34, 211, 238, 0.4)',
      },
    },
  },
  plugins: [],
}