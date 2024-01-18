import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'
import ariaPlugin from 'tailwindcss-react-aria-components'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
    },
    extend: {},
  },
  plugins: [animatePlugin, ariaPlugin],
}
export default config
