/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'hsl(var(--ink))',
        paper: 'hsl(var(--paper))',
        muted: 'hsl(var(--muted))',
        wine: 'hsl(var(--wine))',
        gold: 'hsl(var(--gold))',
        line: 'hsl(var(--line))',
      },
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        gold: '14px 14px 0 hsl(var(--gold))',
      },
    },
  },
  plugins: [],
}
