/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          base: '#0a0a0f',
          surface: '#10101a',
          raised: '#161622',
          border: '#23232f',
          edge: '#34344a',
        },
        text: {
          bright: '#e8e8f0',
          body: '#a0a0b0',
          dim: '#5c5c70',
        },
        accent: {
          DEFAULT: '#00e0a4',
          dim: 'rgba(0, 224, 164, 0.12)',
          faint: 'rgba(0, 224, 164, 0.05)',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk Variable"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px -6px rgba(0, 224, 164, 0.35)',
        'glow-sm': '0 0 12px -4px rgba(0, 224, 164, 0.4)',
      },
      backgroundImage: {
        'grid-dots': 'radial-gradient(circle, #2e2e3d 1px, transparent 1px)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.85)' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
