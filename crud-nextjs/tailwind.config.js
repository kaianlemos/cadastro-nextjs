/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    /^bg-/,
    /^to-/,
    /^from-/,
    {
      pattern: /(from|to)-(green|blue|gray)-(400|700)/
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}