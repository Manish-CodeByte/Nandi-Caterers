/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nandi-ivory': '#FAF7F0',
        'nandi-cream': '#F3EDE2',
        'nandi-burgundy': '#641C2D',
        'nandi-deep-burgundy': '#42121E',
        'nandi-gold': '#B89A5A',
        'nandi-gold-light': '#C9A961',
        'nandi-taupe': '#8D8176',
        'nandi-charcoal': '#24201E',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Playfair Display', 'serif'],
        sans: ['var(--font-inter)', 'Manrope', 'DM Sans', 'sans-serif'],
      },
      maxWidth: {
        'nandi': '1200px',
      },
      boxShadow: {
        'nandi-subtle': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'nandi-card': '0 16px 48px rgba(0, 0, 0, 0.08)',
        'nandi-burgundy': '0 8px 24px rgba(100, 28, 45, 0.2)',
        'nandi-burgundy-lg': '0 12px 32px rgba(100, 28, 45, 0.25)',
      },
      letterSpacing: {
        'eyebrow': '2px',
        'luxury': '1px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};
