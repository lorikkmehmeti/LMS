import { createThemeContract } from "@vanilla-extract/css";

const colors = {
  black: { "1000": "#000000" },
  white: { "1000": "#ffffff" },

  text: null,
  background: null,
  // primary: {
  //   '50': '#80ccff',
  //   '100': '#66c2ff',
  //   '200': '#4db8ff',
  //   '300': '#33adff',
  //   '400': '#1aa3ff',
  //   '500': '#0099ff', // Main Color
  //   '600': '#008ae6',
  //   '700': '#007acc',
  //   '800': '#006bb3',
  //   '900': '#005c99',
  //   '1000': '#004d80',
  // },
  primary: {
    "50": null,
    "100": null,
    "200": null,
    "300": null,
    "400": null,
    "500": null, // Main Color
    "600": null,
    "700": null,
    "800": null,
    "900": null,
    "1000": null,
  },
  secondary: {
    "50": null,
    "100": null,
    "200": null,
    "300": null,
    "400": null,
    "500": null, // Main Color
    "600": null,
    "700": null,
    "800": null,
    "900": null,
    "1000": null,
  },
  font: {
    alpha10: null,
    alpha20: null,
    alpha30: null,
    alpha40: null,
    alpha50: null,
    alpha60: null,
    alpha70: null,
    main: null,
  },
  muted: null,
  highlight: null,

  success: null,
  message: null,
  warning: null,
  danger: null,
};

export const colorTokens = createThemeContract({
  colors,
});
