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
        extsm: "367px",
        exsm: "468px",
        esm: "480px",
        xlsm: "530px",
        msm: "640px",
        sm: "680px",
        sms: "701px",
        
        ssm: "845px",
        md: "900px",
        llg: "1170px",
        llgg: "1700px",
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
