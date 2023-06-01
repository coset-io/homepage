/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ps: ['var(--font-ps)'],
        fa: ['var(--font-fa)']
      },
      colors: {
        'primary-black': '#010231',
        'secondary-black': '#222222',
        'stone-black': '#2c2c2c'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'button': '0px 0.956511px 3.82604px rgba(0, 0, 0, 0.25)'
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-medium': 'spin 2s linear infinite',
      },
      maxWidth: {
        'half': '50%',
      }
    },
  },
  plugins: [],
}
