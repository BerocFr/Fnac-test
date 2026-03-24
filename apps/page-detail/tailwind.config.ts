import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    '../../packages/components/src/**/*.{ts,tsx}',
  ],
  presets: [require('../../packages/tokens/dist/tailwind-preset')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
