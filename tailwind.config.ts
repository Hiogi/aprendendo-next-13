import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        'inputWidth' : '20px',
        '200px' : '200px'
      },
      colors: {
        'home'  : '#011f4b',
        'menu'  : '#313338',
        'texto' : '#7f878e',
        'pgPrincipal' : '#18416d'
      }
    },
  },
  plugins: [],
}
export default config
