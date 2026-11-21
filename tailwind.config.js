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
        'nandi-burgundy': '#4B020D',       // Royal Burgundy
        'nandi-deep-maroon': '#330105',    // Deep Maroon
        'nandi-deep-burgundy': '#330105',  // Deep Maroon / Burgundy
        'nandi-maroon': '#330105',         // Deep Maroon
        'nandi-gold': '#D7A170',           // Antique Gold
        'nandi-gold-light': '#E8BE96',     // Lighter Antique Gold
        'nandi-gold-dark': '#B87F4D',      // Deeper Antique Gold
        'nandi-ivory': '#FCE9CB',          // Warm Ivory (Section Background)
        'nandi-ivory-light': '#FFF9F0',    // Card Ivory (Cards on Warm Ivory)
        'nandi-cream': '#F5DDB9',          // Warm Ivory Tint
        'nandi-taupe': '#6E4A3F',          // Editorial Warm Taupe
        'nandi-charcoal': '#330105',       // Deep Maroon / High Contrast
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Playfair Display', 'serif'],
        sans: ['var(--font-inter)', 'Manrope', 'DM Sans', 'sans-serif'],
      },
      maxWidth: {
        'nandi': '1200px',
      },
      boxShadow: {
        'nandi-subtle': '0 4px 12px rgba(51, 1, 5, 0.06)',
        'nandi-card': '0 16px 48px rgba(75, 2, 13, 0.08)',
        'nandi-burgundy': '0 8px 24px rgba(75, 2, 13, 0.28)',
        'nandi-burgundy-lg': '0 12px 32px rgba(75, 2, 13, 0.35)',
        'nandi-gold': '0 6px 20px rgba(215, 161, 112, 0.35)',
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
