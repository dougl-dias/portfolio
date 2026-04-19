/** @type {import('tailwindcss').Config} */

export default {
  content: ['index.html', './src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: 'rgba(var(--color-base), <alpha-value>)',

        card: 'rgba(var(--color-card), <alpha-value>)',
        'card-soft': 'rgba(var(--color-card-soft), <alpha-value>)',
        'card-hover': 'rgba(var(--color-card-hover), <alpha-value>)',

        elevated: 'rgba(var(--color-elevated), <alpha-value>)',
        'elevated-strong': 'rgba(var(--color-elevated-strong), <alpha-value>)',

        interactive: 'rgba(var(--color-interactive), <alpha-value>)',
        'interactive-hover': 'rgba(var(--color-interactive-hover), <alpha-value>)',

        overlay: 'rgba(var(--color-overlay), <alpha-value>)',
        focus: 'rgba(var(--color-focus), <alpha-value>)',

        ring: 'rgba(var(--color-ring), <alpha-value>)'
      },

      textColor: {
        primary: 'rgba(var(--color-text-primary), <alpha-value>)',
        secondary: 'rgba(var(--color-text-secondary), <alpha-value>)',
        muted: 'rgba(var(--color-text-muted), <alpha-value>)'
      },

      borderColor: {
        DEFAULT: 'rgba(var(--color-border), <alpha-value>)',
        hover: 'rgba(var(--color-border-hover), <alpha-value>)'
      },

      divideColor: {
        DEFAULT: 'rgba(var(--color-border), <alpha-value>)'
      },

      backgroundColor: {
        base: 'rgba(var(--color-base), <alpha-value>)',
        card: 'rgba(var(--color-card), <alpha-value>)',
        elevated: 'rgba(var(--color-elevated), <alpha-value>)'
      },

      ringColor: {
        DEFAULT: 'rgba(var(--color-ring), <alpha-value>)',
        focus: 'rgba(var(--color-focus), <alpha-value>)'
      },

      animation: {
        blob: 'blob 12s infinite ease-in-out',
        pulseLeft: 'pulseLeft 4s ease-in-out infinite',
        pulseRight: 'pulseRight 4s ease-in-out infinite'
      },

      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(100px, -50px) scale(1.1)'
          },
          '66%': {
            transform: 'translate(-80px, 80px) scale(0.9)'
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)'
          }
        },
        pulseLeft: {
          '0%': {
            transform: 'translateX(100%)'
          },
          '35%,75%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        },
        pulseRight: {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '35%,75%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(100%)'
          }
        }
      }
    }
  },
  plugins: []
}
