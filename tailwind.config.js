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
    },
  },
  plugins: [],
}
