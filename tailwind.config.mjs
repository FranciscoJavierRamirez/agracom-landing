/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: 'var(--color-primary)',
          600: '#1565c0',
          700: '#0d47a1',
          800: '#0d47a1',
          900: '#0d47a1'
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          50: '#e8f5e8',
          100: '#c8e6c8',
          200: '#a5d6a5',
          300: '#81c784',
          400: '#66bb6a',
          500: 'var(--color-secondary)',
          600: '#2e7d32',
          700: '#1b5e20',
          800: '#1b5e20',
          900: '#1b5e20'
        },
        kosher: 'var(--color-kosher)',
        halal: 'var(--color-halal)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: 'var(--color-accent)',
          600: '#ffb300',
          700: '#ff8f00',
          800: '#ff8f00',
          900: '#ff6f00'
        },
        neutral: {
          50: '#fafafa',
          100: 'var(--color-neutral-100)',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: 'var(--color-neutral-900)',
          950: '#0a0a0a'
        },
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        warning: 'var(--color-warning)',
        info: 'var(--color-info)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        'h1': 'clamp(2rem, 5vw, 3.5rem)',
        'h2': 'clamp(1.5rem, 4vw, 2.5rem)',
        'h3': 'clamp(1.25rem, 3vw, 2rem)',
      },
      lineHeight: {
        'body': 'var(--lh-body)',
      },
      spacing: {
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
      },
      animation: {
        'fade-in': 'fadeIn var(--duration-normal) var(--ease-out)',
        'slide-up': 'slideUp var(--duration-normal) var(--ease-out)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    }
  },
  plugins: []
}