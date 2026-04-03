/** @type {import('tailwindcss').Config} */

export default {
  content: ['index.html', './src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: 'rgba(var(--color-body))',
        card: 'rgba(var(--color-card))',
      },
      textColor: {
        primary: 'rgba(var(--color-text-primary))',
        secondary: 'rgba(var(--color-text-secondary))',
      },
      borderColor: {
        default: 'rgba(var(--color-border-default))',
      },
      divideColor: {
        default: 'rgba(var(--color-border-default))',
      },
      animation: {
        blob: 'blob 12s infinite ease-in-out',
        pulseLeft: 'pulseLeft 4s ease-in-out infinite',
        pulseRight: 'pulseRight 4s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(100px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-80px, 80px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        pulseLeft: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '35%,75%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        pulseRight: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '35%,75%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [],
}
