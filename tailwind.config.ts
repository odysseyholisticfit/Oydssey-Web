import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0b0d10',
          800: '#10141a',
          700: '#151b24'
        },
        parchment: {
          50: '#fbf6ea',
          100: '#f6edd6',
          200: '#ebdbb3',
          300: '#dfc78d',
          400: '#d3b06a'
        },
        bone: {
          50: '#f7f3ea',
          100: '#eee5d3',
          200: '#deceb0'
        },
        ember: {
          500: '#c28a2e'
        }
      },
      fontFamily: {
        serif: ['ui-serif', 'Georgia', 'Times New Roman', 'Times', 'serif'],
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Noto Sans', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.10)',
        ink: '0 18px 50px rgba(10,12,16,0.35)'
      },
      backgroundImage: {
        parchment: 'radial-gradient(1200px 700px at 20% 0%, rgba(211,176,106,0.25), transparent 55%), radial-gradient(900px 500px at 80% 20%, rgba(223,199,141,0.25), transparent 55%), linear-gradient(180deg, rgba(251,246,234,1) 0%, rgba(246,237,214,1) 55%, rgba(251,246,234,1) 100%)'
      }
    }
  },
  plugins: []
}

export default config
