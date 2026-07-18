export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f172a', /* slate-900 */
          card: '#1e293b', /* slate-800 */
          text: '#f8fafc', /* slate-50 */
          muted: '#94a3b8', /* slate-400 */
          accent: '#8b5cf6', /* violet-500 */
          accentHover: '#7c3aed', /* violet-600 */
        },
        light: {
          bg: '#f8fafc',
          card: '#ffffff',
          text: '#0f172a',
          muted: '#64748b',
          accent: '#8b5cf6',
          accentHover: '#7c3aed',
        },
        brand: {
          pink: '#ec4899',
          purple: '#a855f7',
          cyan: '#06b6d4',
          blue: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'],
}
