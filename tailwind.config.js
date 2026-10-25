/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#060709',
        surface: '#0C0E12',
        surfaceLight: '#12151C',
        copper: {
          DEFAULT: '#F97316',
          bright: '#FF5E1A',
          warm: '#E06D3B',
          muted: '#9A3412',
          glow: 'rgba(249, 115, 22, 0.16)',
        },
        gridLine: 'rgba(255, 255, 255, 0.08)',
        gridLineBright: 'rgba(249, 115, 22, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'arrakis-radial': 'radial-gradient(circle at 50% 0%, rgba(249, 115, 22, 0.14) 0%, rgba(224, 109, 59, 0.04) 45%, transparent 75%)',
        'copper-gradient': 'linear-gradient(135deg, #FF5E1A 0%, #E06D3B 50%, #F59E0B 100%)',
      }
    },
  },
  plugins: [],
}
