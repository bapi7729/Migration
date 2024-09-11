module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a365d',
        secondary: '#2c7a7b',
        accent: '#ed8936',
      },
      fontFamily: {
        sans: ['Open Sans', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}