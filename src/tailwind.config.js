/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.{html,js,ejs}"],
  theme: {
    extend: {
      colors: {
        darkRed: "hsl(4, 48%, 48%)",
        brightRed: "hsl(12, 88%, 59%)",
        darkBlue: "hsl(228, 39%, 23%)",
        liliac: "	hsl(220, 56%, 95%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        veryDarkBlue: "hsl(227, 25%, 22%)",
        orange: "hsl(4, 76%, 66%)",
        littleText: "hsl(8, 37%, 84%)",
      },
    },
  },
  plugins: [],
};
