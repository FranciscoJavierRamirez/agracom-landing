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
          500: 'var(--color-primary)',
          600: '#1565c0',
          700: '#0d47a1'
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          500: 'var(--color-secondary)',
          600: '#2e7d32'
        },
        kosher: 'var(--color-kosher)',
        halal: 'var(--color-halal)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          500: 'var(--color-accent)'
        },
        neutral: {
          50: 'var(--color-neutral-50)',
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: 'var(--color-neutral-900)'
        },
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        warning: 'var(--color-warning)',
        info: 'var(--color-info)'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      fontSize: {
        'h1': 'clamp(2rem, 5vw, 3.5rem)',
        'h2': 'clamp(1.5rem, 4vw, 2.5rem)',
        'h3': 'clamp(1.25rem, 3vw, 2rem)'
      },
      spacing: {
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)'
      },
      borderRadius: {
        'sm': 'var(--border-radius-sm)',
        'DEFAULT': 'var(--border-radius)',
        'lg': 'var(--border-radius-lg)'
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'DEFAULT': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)'
      },
      animation: {
        'fade-in': 'fadeIn var(--duration-normal) var(--ease-out)',
        'slide-up': 'slideUp var(--duration-normal) var(--ease-out)',
        'scale-in': 'scaleIn var(--duration-fast) var(--ease-out)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};