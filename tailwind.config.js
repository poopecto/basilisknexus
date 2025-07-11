/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryCyan: '#00EAFE',
        secondaryMagenta: '#FF2D7D',
        tertiaryPurple: '#8C6BFF',
        backgroundBlack: '#010101',
        primary: '#010101',
        cyan: '#00EAFE',
        magenta: '#FF2D7D',
        emerald: '#00b35c',
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'monospace'],
        source: ['var(--font-source)', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 8px #00EAFE, 0 0 12px #00EAFE55',
        'neon-magenta': '0 0 6px #FF2D7D66',
      },
      letterSpacing: {
        extra: '0.12em',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-neon': {
          'text-shadow': '0 0 8px #00EAFE, 0 0 12px #00EAFE55',
        },
        '.btn-primary': {
          '@apply border border-primaryCyan bg-backgroundBlack text-primaryCyan hover:shadow-neon focus:shadow-neon transition-all duration-300': {},
        },
      })
    },
  ],
}