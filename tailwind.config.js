module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.css", "./**/*.html"],
  theme: {
    screens: {
      '3xl': '1920px',
    },
    extend: {
      colors: {
        lightYellow: "#F5D166",
        darkYellow: "#E0AA0B",
        lightBeige: "#F4F1ED",
        darkBeige: "#D1CCC5",
        brown: "#9F7042",
        darkGrey: "#646464",
      },
      backgroundImage: {
        gradientYellow: 'transparent radial-gradient(closest-side at 26% 6%, #F5D166 0%, #E0AA0B 100%) 0% 0% no-repeat padding-box',
      },
    },
  },
  plugins: [],
}
