/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        teamList: 'calc(100vh - 420px)',
        pledgeList: 'calc(100vh - 400px)',
      },
    },
  },
  plugins: [],
}
