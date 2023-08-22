import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--font-lato)'],
        josefinSans: ['var(--font-josefin-sans)'],
      },
      colors: {
        black: {
          100: '#3A3134',
          75: '#6B6567',
          50: '#9D989A',
          25: '#CECBCC',
          10: '#EBEAEA',
          5: '#F5F4F5',
        },
        primary: '#FF4C80',
        secondary: '#FF6840',
        error: '#E81C0E',
        yellow: '#FEC108'
      },
    },
    fontSize: {
      xs: '0.5rem',
      sm: '0.707rem',
      base: '1rem',
      lg: '1.414rem',
      xl: '1.999rem',
      '2xl': '2.827rem',
      '3xl': '3.998rem',
      '4xl': '5.653rem',
    },
  },
  plugins: [],
}
export default config
