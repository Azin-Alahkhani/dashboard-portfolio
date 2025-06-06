/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Custom blue
        secondary: '#10B981', // Custom green
      },
    },
  },
  plugins: [],
}

