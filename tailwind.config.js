/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        ldwss: {        
          "primary": "#22d3ee",
          "secondary": "#2dd4bf",
          "accent": "#f9a8d4",
          "neutral": "#374151",
          "base-100": "#1f2937",
          "success": "#35D477",
          "warning": "#F0BA33",
          "error": "#E35F75",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
