import { createTheme } from "@vanilla-extract/css";
import { colorTokens } from "./colormode.css";

export const primaryColors = {
  black: { "1000": "#000000" },
  white: { "1000": "#ffffff" },
  // primary: {
  //     '50': '#a6addf',
  //     '100': '#949dd8',
  //     '200': '#828cd2',
  //     '300': '#717ccb',
  //     '400': '#5f6bc5',
  //     '500': '#4d5bbe', // Main Color
  //     '600': '#4552ab',
  //     '700': '#3e4998',
  //     '800': '#364085',
  //     '900': '#2e3772',
  //     '1000': '#272e5f',
  // }
};

export const secondaryColors = {
  text: primaryColors.white[1000],
  background: "black",
  font: {
    alpha10: "rgba(255,255,255, .1)",
    alpha20: "rgba(255,255,255, .2)",
    alpha30: "rgba(255,255,255, .3)",
    alpha40: "rgba(255,255,255, .4)",
    alpha50: "rgba(255,255,255, .5)",
    alpha60: "rgba(255,255,255, .6)",
    alpha70: "rgba(255,255,255, .7)",
    main: "rgba(255,255,255, 1)",
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

export const dark = createTheme(colorTokens, {
  colors,
});

// export const [darkTheme, darkVars] = createTheme(vars, {
//   color: {
//     brand: 'blue',
//   },
//   font: {
//     body: 'arial',
//   },
// });
