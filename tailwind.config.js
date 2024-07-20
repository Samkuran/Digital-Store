const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: "#C92071",
      secondary: "#B5B6F2",
      tertiary: "#991956",
      error: "#EE4266",
      success: "#52CA76",
      warning: "#F6AA1C",
      darkgray: "#1F1F1F",
      darkgray2: "#474747",
      darkgray3: "#666666",
      lightgray: "#8F8F8F",
      lightgray2: "#CCCCCC",
      lightgray3: "#F5F5F5",
      white: "#FFFFFF",
    }
  },
  plugins: [],
}

