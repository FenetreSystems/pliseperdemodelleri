/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#83bd81',
        'primary-dark': '#6aaa68',
        'primary-light': '#c5e0c4',
        'primary-bg': '#f2f9f2',
        dark: '#404e5e',
        'dark-mid': '#5a6a7e',
        'dark-light': '#8a9aaa',
        cream: '#fafaf8',
        'warm-gray': '#f4f4f2',
      },
      fontFamily: {
        heading: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'pleat-pattern': "repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(131,189,129,0.06) 28px, rgba(131,189,129,0.06) 30px)",
      },
    },
  },
  plugins: [],
}
