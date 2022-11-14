import { createTheme } from "@vanilla-extract/css";
import { colorTokens } from "./colormode.css";
import { createShade, createTint } from "../utilities/utility-functions";

const TOKENS = {
  primary: "#004de4",
  secondary: "#f1d55c",
};

const DARK = {
  background_surface: "black",
  background_light: "black",
  background_medium: "black",
  background_contrast: "black",
  background_canvas: "black",
  text_contrast: "black",
  text_primary: "white",
  text_secondary: "white",
  text_hint: "white",
  text_disabled: "black",
  divider: "black",
  backdrop: "black",
  border_light: "black",
  border_dark: "black",
  border_disabled: "black",
  success: "black",
  error: "black",
  warning: "black",
  info: "black",
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
  ...DARK,
};

export const dark = createTheme(colorTokens, { colors });
