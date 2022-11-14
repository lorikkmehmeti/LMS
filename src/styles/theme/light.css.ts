import { createTheme } from "@vanilla-extract/css";
import { colorTokens } from "./colormode.css";
import { createShade, createTint } from "../utilities/utility-functions";

const TOKENS = {
  primary: "#004de4",
  secondary: "#f1d55c",
};

const LIGHT = {
  background_surface: "white",
  background_light: "white",
  background_medium: "white",
  background_contrast: "white",
  background_canvas: "white",
  text_contrast: "white",
  text_primary: "black",
  text_secondary: "black",
  text_hint: "black",
  text_disabled: "white",
  divider: "white",
  backdrop: "white",
  border_light: "white",
  border_dark: "white",
  border_disabled: "white",
  success: "white",
  error: "white",
  warning: "white",
  info: "white",
  primary: {
    "100": createTint(0.5, TOKENS.primary),
    "200": createTint(0.4, TOKENS.primary),
    "300": createTint(0.3, TOKENS.primary),
    "400": createTint(0.2, TOKENS.primary),
    "500": TOKENS.primary, // Main Color
    "600": createShade(0.2, TOKENS.primary),
    "700": createShade(0.3, TOKENS.primary),
    "800": createShade(0.4, TOKENS.primary),
  },
  secondary: {
    "100": createTint(0.5, TOKENS.secondary),
    "200": createTint(0.4, TOKENS.secondary),
    "300": createTint(0.3, TOKENS.secondary),
    "400": createTint(0.2, TOKENS.secondary),
    "500": TOKENS.secondary, // Main Color
    "600": createShade(0.2, TOKENS.secondary),
    "700": createShade(0.3, TOKENS.secondary),
    "800": createShade(0.4, TOKENS.secondary),
  },
};

export const colors = {
  ...LIGHT,
};

export const light = createTheme(colorTokens, {
  colors,
});
