import { createTheme } from "@vanilla-extract/css";
import { colorTokens } from "./colormode.css";

export const primaryColors = {
  black: { "1000": "#000000" },
  white: { "1000": "#ffffff" },
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
  // }
};

export const secondaryColors = {
  text: primaryColors.black[1000],
  background: primaryColors.white[1000],
  font: {
    alpha10: "rgba(0,0,0, .1)",
    alpha20: "rgba(0,0,0, .2)",
    alpha30: "rgba(0,0,0, .3)",
    alpha40: "rgba(0,0,0, .4)",
    alpha50: "rgba(0,0,0, .5)",
    alpha60: "rgba(0,0,0, .6)",
    alpha70: "rgba(0,0,0, .7)",
    main: "rgba(0,0,0, 1)",
  },
  primary: {
    "50": "#80a6f2",
    "100": "#6694ef",
    "200": "#4d82ec",
    "300": "#3371e9",
    "400": "#1a5fe7",
    "500": "#004de4", // Main Color
    "600": "#0045cd",
    "700": "#003eb6",
    "800": "#0036a0",
    "900": "#002e89",
    "1000": "#002772",
  },
  secondary: {
    "50": "#f8eaae",
    "100": "#f7e69d",
    "200": "#f5e28d",
    "300": "#f4dd7d",
    "400": "#f2d96c",
    "500": "#f1d55c", // Main Color
    "600": "#d9c053",
    "700": "#c1aa4a",
    "800": "#a99540",
    "900": "#918037",
    "1000": "#796b2e",
  },
  muted: "#f6f6f9",
  highlight: "hsla(205, 100%, 40%, 0.125)",

  success: "green",
  message: "blue",
  warning: "yellow",
  danger: "red",
};

export const colors = {
  ...primaryColors,
  ...secondaryColors,
};

export const light = createTheme(colorTokens, {
  colors,
});
