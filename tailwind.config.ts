// tailwind.config.js

import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif']
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
} satisfies Config;
