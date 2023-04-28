/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/aspect-ratio"),
  ],
  theme: {
    extend: {
      colors: {
        backColor: "#2F80ED",
      },
      keyframes: {
        testt: {
          "0%": {
            opacity: `0`,
          },
          "100%": {
            opacity: `1`,
          },
        },
      },
      animation: {
        "waving-hand": "testt 0.7s ease-in ",
      },
      screens: {
        extsm: "342px",
        exsm: "468px",
        ssm: "845px",
        md: "900px",
        llg:"1170px"
      },
    },
    fontFamily: {
      headerFont: [
        "ClashDisplay",
        "ClashDisplay-Variable",
        "ClashDisplay-Extralight",
        "ClashDisplay-Light",
        "ClashDisplay-Regular",
        "ClashDisplay-Medium",
        "ClashDisplay-Semibold",
        "ClashDisplay-Bold",
      ],
      inter: ["Inter", "sans-serif"],
      poppi: ["Poppins", "sans-serif"],
    },

  },
};
