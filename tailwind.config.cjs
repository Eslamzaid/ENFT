/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    require("@tailwindcss/typography"),
  ],
  theme: {
    backgroundPosition: {
      bottom: "bottom",
      "bottom-4": "center bottom 1rem",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
      "top-4": "center top 1rem",
    },
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
        scrollingAnimPos: {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        scrollingAnimNeg: {
          "0%": {
            transform: "translateX(50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "waving-hand": "testt 0.7s ease-in ",
        scrollAnimPos: "scrollingAnimPos 3s ease-in-out",
        scrollAnimPNeg: "scrollingAnimNeg 3.5s ease-out",
      },
      screens: {
        phone: "50px",
        baseM: "200px",
        extsm: "367px",
        eexx: "425px",
        exsm: "468px",
        esm: "480px",
        eee: "500px",
        xlsm: "530px",
        lsxm: "580px",
        msm: "640px",
        sms: "701px",
        sss: "795px",
        ssm: "845px",
        imd: "900px",
        lsmd: "964px",
        mmd: "991px",
        slg: "1032px",
        sty: "1043px",
        llg: "1170px",
        dxl: "1346px",
        ddd: "1454px",
        ddxl: "1469px",
        remo: "1555px",
        llgg: "1700px",
        ...defaultTheme.screens,
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
