/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["./src/**/*.{ts,tsx,js,jsx}"],
    safelist: [
      "text-accent",
      "hover:text-accent-light",
      "bg-accent",
      "bg-accent-light",
    ],
  },
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#5f00b8",
          dark:    "#2a004d",
          light:   "#9b4eff",
        },
        accent: {
          DEFAULT: "#f4c542",
          light:   "#ffdd6b",
        },
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
}
