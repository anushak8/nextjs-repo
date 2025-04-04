/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Path for pages
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Path for components
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Path for app folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
