// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind works with all JS/JSX/TS/TSX files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',   // Dark blue theme
        secondary: '#3b82f6', // Lighter blue
        accent: '#60a5fa',    // Accent blue
      },
    },
  },
  plugins: [],
};

