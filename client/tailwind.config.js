/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  // allow arbitrary values (bracket notation) without IDE warnings
  // some editors/extensions still flag them; a safelist can help
  safelist: [
    {
      pattern: /max-w-\[.*\]/,
    },
  ],
}
