// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif']
      },
      colors: {
        primaryBlue: '#013274'
      },
      animation: {
        'fade-slide-down': 'fadeSlideDown 300ms ease-out'
      },
      keyframes: {
        fadeSlideDown: {
          '0%': { opacity: 0, transform: 'translateY(-0.5rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }
    }
  }
};
