/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': "#FFF",
      'bg-primary': '#0D4D35',
      'bg-secondary': '#116949',
      'text-green': '#0FFCB8',
      'text-secondary': '#1BD68F'
    },
    extend: {},
  },
  plugins: [],
}

