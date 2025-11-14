import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0C',
        surface: '#111114',
        line: '#232326',
        ink: { DEFAULT: '#E7E7EA', muted: '#A1A1AA' },
        brand: { DEFAULT: '#60A5FA', soft: '#93C5FD', fade: '#1E3A8A' },
        // brand: { DEFAULT: '#22D3EE', soft: '#67E8F9', fade: '#164E63' }, // cyan alternative
        success: '#22C55E',
        warn: '#F59E0B',
        danger: '#EF4444',
      },
      boxShadow: {
        card: '0 1px 0 rgba(255,255,255,0.04), 0 8px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [typography],
}
export default config
