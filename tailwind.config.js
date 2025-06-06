/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // enable dark mode via class
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",   // blue-800 (change as needed)
        secondary: "#64748B", // slate-500
        accent: "#22C55E",    // green-500
        background: "#F8FAFC",
        surface: "#FFFFFF",
        muted: "#94A3B8",
        danger: "#EF4444",
        warning: "#F59E0B",
        success: "#10B981",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
}

